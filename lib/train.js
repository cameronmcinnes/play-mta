class TrainCar {
  constructor(path) {
    this.parentPath = path;
    this.speed = this.parentPath.getSpeed();
    this.color = this.parentPath.color;

    this.currSegment = this.parentPath.segments[0];
    this.pos = this.currSegment.startPos;
    this.isMoving = true;

    this.pulsing = false;
    this.pulseDampen = .95;
    this.pulseAngle = 0;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    let rad = 4
    if (this.pulsing) {
      rad = 3 + 2 * Math.abs(Math.cos(this.pulseAngle));
      this.pulseAngle += Math.PI / 128;
      // once train has shrunk down to size it was stop pulsing and
      // reset pulse angle to 0 so it will grow next time again
      if (rad < 4) {this.pulsing = false; this.pulseAngle = 0};
    }
    ctx.arc(this.pos.x, this.pos.y, rad, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
  }

  move(timeDelta) {
    const { startPos, endPos, angle, totalLength, ord } = this.currSegment;
    const speedScale = timeDelta / NORMAL_FRAME_TIME_DELTA
    const speed = this.speed * speedScale;

    this.pos = this.pos.addVectorDiffs(speed, angle);
    const trainTravelDist = startPos.distBetween(this.pos);
    if ( trainTravelDist > totalLength ) {
      this.currSegment.releaseTrain();
      // reset the trains current seg to next seg
      // add train to next seg
      const nextSegment = this.parentPath.segments[ord + 1]
      if (nextSegment) {
        this.currSegment = nextSegment;
        nextSegment.receiveTrain(this);
        this.pulsing = true;
      } else {
        // or would it be better to remove it from trains array to
        // save on iterating?
        this.isMoving = false;
        return null;
      }
    } else {
      this.currSegment.trainAdvanced(this);
    }
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default TrainCar;
