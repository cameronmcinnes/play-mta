class TrainCar {
  constructor(path) {
    this.parentPath = path;
    this.speed = this.parentPath.getSpeed();
    this.color = this.parentPath.color;

    this.currSegment = this.parentPath.segments[0];
    this.currSegmentAngle = this.currSegment.angle;
    this.currSegmentLength = this.currSegment.totalLength;
    this.pos = this.currSegment.startPos;
    // this.radius = options.radius;
    // this.map = options.map;
  }

  draw(ctx) {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.xp1, this.radius, 5, 0, Math.PI*2, false);
    this.ctx.closePath();
    this.ctx.fill();
  }

  move(timeDelta) {
    const speedScale = timeDelta / NORMAL_FRAME_TIME_DELTA
    const speed = this.speed * speedScale;

    this.pos = this.pos.addVectorDiffs(speed, this.currSegmentAngle);
    this.currSegment.trainAdvanced(this);
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default TrainCar;
