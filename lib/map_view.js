class MapView {
  constructor(map, ctx, audioCtx) {
    this.map = map;
    this.ctx = ctx;
    this.audioCtx = audioCtx;
  }

  toggleCtxMute() {
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume()
    } else if (this.audioCtx.state === 'running') {
      this.audioCtx.suspend()
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
