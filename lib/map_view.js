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
    this.panX = 0;
    this.panY = 0;

    // will be a value from 0 - 1 indicating how zoomed in
    this.prevZoomCenter = null;
    this.zoomCenter = null;

    this.cnvHeight = ctx.canvas.height;
    this.cnvWidth = ctx.canvas.width;

    // VIEWPORT
    // where the view is located relative to orginal canvas coords
    this.xleftView = 0
    this.ytopView = 0
    this.viewHeightOriginal = 1.0;
    this.viewWidthOriginal = 1.0;
    this.viewHeight = this.viewHeightOriginal;
    this.viewWidth = this.viewWidthOriginal;
    this.scaleFactor = 1;
    this.prevScaleFactor = 1;
    this.zdX = 0
    this.zdY = 0
  }

  handleKey(e, subwayBulletEls) {
    const key = e.key.toUpperCase()

    if (!lineNames.includes(key)) { return null }
    this.map.handleKey(e);

    // TODO
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
    // if (prevWidth > prevHeight !== width > height) {
    // }
    this.map.biggerDimension = (width > height) ? width : height;

    this.ctx.canvas.width = width;
    this.ctx.canvas.height = height;
    this.map.cnvHeight = height;
    this.map.cnvWidth = width;
    // BUG if its desirable behavior? dont clear map when you scale screen
    // just write different method => scale paths
    this.map.resetMap();
  }

  // handleScroll(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   const delta = e.deltaY ? e.deltaY/40 : e.detail ? -e.detail : 0;
  //   const scaleDiff = Math.pow(1.1, delta);
  //
  //   let transY =  this.transY || e.offsetY
  //   let transX =  this.transX || e.offsetX
  //
  //   // assign prevZoomCenter for the first time using short circuit
  //   this.prevZoomCenter = this.prevZoomCenter || new Coord(transX, transY)
  //   this.zoomCenter = new Coord(e.offsetX, e.offsetY)
  //
  //   const zdX = (this.zoomCenter.x - this.prevZoomCenter.x)
  //   const zdY = (this.zoomCenter.y - this.prevZoomCenter.y)
  //
  //   let zoomCenterSwitch = false;
  //   if (zdX > 0 || zdY > 0) {
  //     this.transX = this.prevZoomCenter.x + (zdX) / this.scaleFactor
  //     this.transY = this.prevZoomCenter.y + (zdY) / this.scaleFactor
  //     this.prevZoomCenter = this.zoomCenter;
  //     this.prevScaleFactor = this.scaleFactor
  //     console.log('zoom c switch')
  //     zoomCenterSwitch = true;
  //   }
  //
  //   this.scaleFactor *= scaleDiff;
  //
  //   this.map.zoom(this.scaleFactor, scaleDiff, transX, transY, this.ctx, zdX/scaleDiff, zdY/scaleDiff);
  // }

  handleScroll(e){
    e.preventDefault();
    e.stopPropagation();
    const delta = e.deltaY ? e.deltaY/40 : e.detail ? -e.detail : 0;
    const scaleDiff = Math.pow(1.1, delta);

    let transY = e.offsetY
    let transX = e.offsetX

    // assign prevZoomCenter for the first time using short circuit
    this.prevZoomCenter = this.prevZoomCenter || new Coord(transX, transY)
    this.zoomCenter = new Coord(e.offsetX, e.offsetY)

    const zdX = (this.zoomCenter.x - this.prevZoomCenter.x)
    const zdY = (this.zoomCenter.y - this.prevZoomCenter.y)

    // let zoomCenterSwitch = false;
    if (zdX > 0 || zdY > 0) {
      this.zdX = zdX
      this.zdY = zdY

      this.prevScaleFactor = this.scaleFactor
      this.zoomInit = this.prevZoomCenter
      this.prevZoomCenter = this.zoomCenter;
      console.log('z c switch')
    }

    console.log(this.zoomInit)
    console.log(this.zoomCenter)
    console.log(this.prevScaleFactor)

    if (this.zoomInit) {
      transX = this.zoomInit.x + (this.zdX / this.prevScaleFactor)
      transY = this.zoomInit.y + (this.zdY / this.prevScaleFactor)
    } else {
      transX = this.prevZoomCenter.x + (this.zdX / this.prevScaleFactor)
      transY = this.prevZoomCenter.y + (this.zdY / this.prevScaleFactor)
    }
    this.scaleFactor *= scaleDiff;


    this.map.zoom(scaleDiff, transX, transY, this.ctx);
  }

  handleMouseMove(e) {
    let deltaX = e.movementX;
    let deltaY = e.movementY;

    // limit pan
    // if (this.panX - deltaX > .5 * this.ctx.canvas.width || this.panX - deltaX < 0 ) {
    //   return;
    // }
    // if (this.panY - deltaY > this.ctx.canvas.width || this.panY - deltaY < 0 ) {
    //   return;
    // }
    // this.panX -= deltaX;
    // this.panY -= deltaY;

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

  handleClick(e, muteBtnEl) {
    e.stopPropagation();
    e.preventDefault();

    if (e.composedPath()[2].classList[0] === 'mute') {
      this.toggleCtxMute(muteBtnEl);
      return null;
    }

    switch(e.target.classList[0]) {
      case 'reset':
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.translate(0.5, 0.5);
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
        this.map.recenter(this.ctx);
        break;
    }
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

    // start the animation
    // TEST
    // this.map.draw(this.ctx);
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
