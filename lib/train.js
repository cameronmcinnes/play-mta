class TrainCar {
  constructor(path) {
    this.parentPath = path;
    this.speed = this.parentPath.getSpeed();
    this.color = this.parentPath.color;

    this.currSegment = this.parentPath.segments[0];
    this.pos = this.currSegment.startPos;
    this.isMoving = true;
  }

  draw(ctx) {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.xp1, this.radius, 5, 0, Math.PI*2, false);
    this.ctx.closePath();
    this.ctx.fill();
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
