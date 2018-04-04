import Coord from './coord';

const lineNames = [
  '1','2','3',
  '4','5','6',
  '7',
  'A','C','E',
  'N','Q','R','W',
  'S',
  'L',
  'G',
  'J','Z',
  'B','D','F','M'
]

class MapView {
  constructor(map, ctx, audioCtx) {
    this.map = map;
    this.ctx = ctx;
    this.ctx.save()
    this.audioCtx = audioCtx;
    this.handleMouseMove = this.handleMouseMove.bind(this);

    this.cnvHeight = ctx.canvas.height;
    this.cnvWidth = ctx.canvas.width;

    // VIEWPORT
    // where the view is located relative to orginal canvas coords
    // need this to limit pan

    // this.xleftView = 0;
    // this.ytopView = 0;
    // this.viewHeightOriginal = 1.0;
    // this.viewWidthOriginal = 1.0;
    // this.viewHeight = this.viewHeightOriginal;
    // this.viewWidth = this.viewWidthOriginal;

    // ZOOM ivars
    this.prevZoomCenter = new Coord(0,0);
    this.zoomCenter = null;
    this.scaleFactor = 1;
    this.prevScaleFactor = 1;
    this.zoomDeltaX = 0;
    this.zoomDeltaY = 0;
    this.transX = 0;
    this.transY = 0;
  }

  handleKey(e, subwayBulletEls, modalContent, modalScreen) {
    const key = e.key.toUpperCase()

    if (e.key === ' ') {
      modalContent.classList.toggle('hidden');
      // modalScreen.classList.toggle('hidden');
      return null;
    }

    if (!lineNames.includes(key)) { return null }
    this.map.handleKey(e);

    const leftBullet = subwayBulletEls[0];
    const rightBullet = subwayBulletEls[1];

    if (e.ctrlKey) {
      rightBullet.src = `assets/subway_bullets/${key}.svg`;

      if (rightBullet.classList.contains('subway-bullet')) {
        // BUG QUESTION waits for a second before going
        rightBullet.classList.remove('subway-bullet');
        setTimeout( () => rightBullet.classList.toggle('subway-bullet'), 10)
      } else {
        rightBullet.classList.toggle('subway-bullet', true);
      }
    } else {
      leftBullet.src = `assets/subway_bullets/${key}.svg`;

      if (leftBullet.classList.contains('subway-bullet')) {
        // BUG QUESTION waits for a second before going
        leftBullet.classList.remove('subway-bullet');
        setTimeout( () => leftBullet.classList.toggle('subway-bullet'), 10)
      } else {
        leftBullet.classList.toggle('subway-bullet', true);
      }
    }
  }

  handleResize(e, canvasContainerEl) {
    this.resizeCanvas(e, canvasContainerEl)
  }

  resizeCanvas(e, canvasContainerEl) {
    const width = canvasContainerEl.clientWidth;
    const height = canvasContainerEl.clientHeight;
    const prevWidth = this.ctx.canvas.width;
    const prevHeight = this.ctx.canvas.height;

    // check if the bigger dimension has changed, if it has, reset map
    // to rescale paths with bigger dim

    this.map.biggerDimension = (width > height) ? width : height;

    this.ctx.canvas.width = width;
    this.ctx.canvas.height = height;
    this.map.cnvHeight = height;
    this.map.cnvWidth = width;
    // BUG if its desirable behavior? dont clear map when you scale screen
    // just write different method => scale paths

    // const trains = this.map.saveTrains()
    this.map.resetMap();
    // this.map.restoreTrains(trains, width, height, prevWidth, prevHeight);
    // this.map.rescaleCanvasToScreen(width, height, prevWidth, prevHeight)
  }

  handleScroll(e){
    e.preventDefault();
    e.stopPropagation();
    const delta = e.deltaY ? e.deltaY/40 : e.detail ? -e.detail : 0;
    if (this.scaleFactor < .5 && delta < 0) {
      return null;
    }
    const scaleDiff = Math.pow(1.1, delta);

    this.zoomCenter = new Coord(e.offsetX, e.offsetY)

    this.zoomDeltaX = (this.zoomCenter.x - this.prevZoomCenter.x)
    this.zoomDeltaY = (this.zoomCenter.y - this.prevZoomCenter.y)

    if (this.zoomDeltaX !== 0 || this.zoomDeltaY !== 0) {
      this.prevZoomCenter = this.zoomCenter;
      this.prevScaleFactor = this.scaleFactor;
      this.prevZoomCenter = this.zoomCenter;
    }

    this.transX += (this.zoomDeltaX / this.prevScaleFactor)
    this.transY += (this.zoomDeltaY / this.prevScaleFactor)

    this.scaleFactor *= scaleDiff;

    this.map.zoom(scaleDiff, this.transX, this.transY, this.ctx);
  }

  handleMouseMove(e) {
    let deltaX = e.movementX/this.scaleFactor;
    let deltaY = e.movementY/this.scaleFactor;

    this.panX += deltaX;
    this.panY += deltaY;

    this.prevZoomCenter.x += (deltaX * this.scaleFactor)
    this.prevZoomCenter.y += (deltaY * this.scaleFactor)

    this.map.pan(deltaX, deltaY, this.ctx);
  }

  handleDragStart(e, canvasEl) {
    canvasEl.addEventListener('mousemove', this.handleMouseMove);
    canvasEl.addEventListener('mouseup', e => {
      canvasEl.style.cssText = 'cursor:inherit;';
      canvasEl.removeEventListener('mousemove', this.handleMouseMove);
    }, { once: true });
    canvasEl.style.cssText = 'cursor:move;';
  }

  handleClick(e, muteBtnEl, modalScreen) {
    e.preventDefault();
    if (e.composedPath()[2].classList[0] === 'mute') {
      this.toggleCtxMute(muteBtnEl);
      return null;
    }

    switch(e.target.classList[0]) {
      case 'about-trigger':
        modalScreen.classList.toggle('hidden');
      case 'reset':
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.translate(0.5, 0.5);
        this.resetZoom();
        this.scaleFactor = 1;
        this.map.resetMap();
        break;
      case 'deselect':
        this.map.deselectAllPaths();
        break;
      case 'train-controls':
        const dir = parseInt(e.target.dataset.dir);
        this.map.startPaths(dir);
        break;
      case 're-center':
        this.resetZoom();
        this.map.recenter(this.ctx);
        break;
    }
  }

  resetZoom() {
    this.prevZoomCenter = new Coord(0,0);
    this.zoomCenter = null;
    this.scaleFactor = 1;
    this.prevScaleFactor = 1;
    this.zoomDeltaX = 0;
    this.zoomDeltaY = 0;
    this.transX = 0;
    this.transY = 0;
  }

  toggleCtxMute(muteBtnEl) {
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().then( () => {
        muteBtnEl.children[0].classList.toggle("fa-volume-up");
      });
    } else if (this.audioCtx.state === 'running') {
      this.audioCtx.suspend().then( () => {
        muteBtnEl.children[0].classList.toggle("fa-volume-off");
      })
    }
  }

  start() {
    this.lastTime = 0;

    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.map.step(timeDelta);
    this.map.draw(this.ctx);
    this.lastTime = time;

    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
  }
}

export default MapView;
