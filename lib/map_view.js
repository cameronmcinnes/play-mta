class MapView {
  constructor(map, ctx, audioCtx) {
    this.map = map;
    this.ctx = ctx;
    this.audioCtx = audioCtx;
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

  handleKey(e, subwayBulletEl) {
    this.map.handleKey(e);
    const key = e.key.toUpperCase()
    subwayBulletEl.src = `/Users/cameronmcinnes/Documents/aA/projects/js_project/assets/subway_bullets/${key}.svg`;
    if (subwayBulletEl.classList.contains('subway-bullet')) {
      // BUG QUESTION waits for a second before going
      subwayBulletEl.classList.remove('subway-bullet');
      setTimeout( () => subwayBulletEl.classList.toggle('subway-bullet'), 10)
    } else {
      subwayBulletEl.classList.toggle('subway-bullet', true);
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
