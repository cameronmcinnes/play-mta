const lineNames = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  'A',
  'C',
  'E',
  'N',
  'Q',
  'R',
  'W',
  'S',
  'L',
  'G',
  'J',
  'Z',
  'B',
  'D',
  'F',
  'M'
]

class MapView {
  constructor(map, ctx, audioCtx) {
    this.map = map;
    this.ctx = ctx;
    this.audioCtx = audioCtx;
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.panX = 0;
    this.panY = 0;
    // will be a value from 0 - 1 indicating how zoomed in
    this.zoomLevel = 1;
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

  handleScroll(e){
    e.preventDefault();
    const delta = e.wheelDelta ? e.wheelDelta/40 : e.detail ? -e.detail : 0;

    if (this.zoomLevel + delta < 0 || this.zoomLevel + delta > 10) {
      return;
    }
    this.zoomLevel += delta / 4
    console.log(this.zoomLevel);

    // to fix zoom relate offset to zoom level somehow
    const transY = e.offsetY;
    const transX = e.offsetX;

    if (delta) this.map.zoom(delta, transX, transY, this.ctx);
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
