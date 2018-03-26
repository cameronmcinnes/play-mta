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
  }

  handleKey(e, subwayBulletEls) {
    const key = e.key.toUpperCase()

    if (!lineNames.includes(key)) { return null }
    this.map.handleKey(e);

    // TODO
    const leftBullet = subwayBulletEls[0];
    const rightBullet = subwayBulletEls[1];

    if (e.ctrlKey) {
      rightBullet.src = `/Users/cameronmcinnes/Documents/aA/projects/js_project/assets/subway_bullets/${key}.svg`;

      if (rightBullet.classList.contains('subway-bullet')) {
        // BUG QUESTION waits for a second before going
        rightBullet.classList.remove('subway-bullet');
        setTimeout( () => rightBullet.classList.toggle('subway-bullet'), 10)
      } else {
        rightBullet.classList.toggle('subway-bullet', true);
      }
    } else {
      leftBullet.src = `/Users/cameronmcinnes/Documents/aA/projects/js_project/assets/subway_bullets/${key}.svg`;

      if (leftBullet.classList.contains('subway-bullet')) {
        // BUG QUESTION waits for a second before going
        leftBullet.classList.remove('subway-bullet');
        setTimeout( () => leftBullet.classList.toggle('subway-bullet'), 10)
      } else {
        leftBullet.classList.toggle('subway-bullet', true);
      }
    }
  }

  handleScroll(e){
    const delta = e.wheelDelta ? e.wheelDelta/40 : e.detail ? -e.detail : 0;
    const transY = e.offsetY;
    const transX = e.offsetX;

    if (delta) this.map.zoom(delta, transX, transY, this.ctx);
    e.preventDefault()
  }

  handleMouseMove(e) {
    const deltaX = e.movementX;
    const deltaY = e.movementY;

    this.map.pan(deltaX, deltaY, this.ctx);
  }

  handleDragStart(e, canvasEl) {
    canvasEl.addEventListener('mousemove', this.handleMouseMove);
    canvasEl.addEventListener('mouseup', e => {
      canvasEl.removeEventListener('mousemove', this.handleMouseMove);
    }, { once: true });
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
