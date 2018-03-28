import { shadeHexColor } from './color_helper';

class TrainCar {
  constructor(path, dir, initialTrainPos, originSegment) {
    this.parentPath = path;
    this.speed = this.parentPath.getSpeed();

    this.dir = dir;

    this.origin = (dir > 0) ? originSegment.startPos : originSegment.endPos;
    this.destination = (dir < 0) ? originSegment.startPos : originSegment.endPos;

    this.currSegment = originSegment;

    this.pos = initialTrainPos

    this.isMoving = true;

    this.pulsing = false;
    // to start pulsing fast then slow
    this.pulseDampen = .5
    this.pulseAngle = 0;
  }

  draw(ctx) {
    const color = (this.parentPath.muted) ? '#fff' : this.parentPath.color;
    // BUG
    const lighter = shadeHexColor(color, 20);

    let rad = 4
    let baseRad = 3
    if (this.parentPath.selected) { rad = 7; baseRad = 6 }
    if (this.pulsing) {
      rad = baseRad + 2 * Math.abs(Math.cos(this.pulseAngle));
      this.pulseAngle += (Math.PI / 12 * this.pulseDampen);

      ctx.beginPath();
      ctx.fillStyle = '#fff';
      ctx.arc(this.pos.x, this.pos.y, rad + 1, 0, Math.PI*2, false);
      ctx.closePath();
      ctx.fill();
      // once train has shrunk down to size it was stop pulsing and
      // reset pulse angle to 0 so it will grow next time again
      if (rad < baseRad + 1) {this.pulsing = false; this.pulseAngle = 0};
    }
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(this.pos.x, this.pos.y, rad, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
  }

  move(timeDelta) {
    // TODO refactor into helper methods, move forward move back
    const { trainOrigin, angle, backwardsAngle, totalLength, ord } = this.currSegment;
    const speedScale = timeDelta / NORMAL_FRAME_TIME_DELTA
    const speed = this.speed * speedScale;

    const trainAngle = (this.dir > 0) ? angle : backwardsAngle;
    // console.log(`mine: ${trainAngle}`)
    // console.log(`Bwrd: ${angle}, Fwrd: ${backwardsAngle}`)
    // console.log(`ord: ${ord}`)
    // console.log(`dir: ${this.dir}`)
    // console.log(`trainOrigin: [ ${trainOrigin.x},  ${trainOrigin.y} ]`)
    // console.log(`endpos curr seg: [ ${this.currSegment.endPos.x},  ${this.currSegment.endPos.y}]`)
    // console.log(`startpos curr seg: [ ${this.currSegment.startPos.x}, ${this.currSegment.startPos.y}]`)
    //
    // debugger;

    this.pos = this.pos.addVectorDiffs(speed, trainAngle);

    const trainTravelDist = this.origin.distBetween(this.pos);
    if ( trainTravelDist > totalLength ) {
      this.currSegment.releaseTrain();
      // reset the trains current seg to next seg
      // add train to next seg
      const nextOrd = (this.dir > 0) ? ord + 1 : ord - 1
      const nextSegment = this.parentPath.segments[nextOrd]

      if (nextSegment) {
        this.currSegment = nextSegment;

        // REFACTOR TO HELPER
        this.origin = (this.dir > 0) ? nextSegment.startPos : nextSegment.endPos;
        this.destination = (this.dir < 0) ? nextSegment.startPos : nextSegment.endPos;

        nextSegment.receiveTrain(this);
        this.pulsing = true;
      } else {
        this.removeSelf();
      }
    }
  }

  removeSelf() {
    if (this.dir > 0) {
      this.parentPath.fwdTrainsQueue.pop();
    } else if (this.dir < 0) {
      this.parentPath.bwdTrainsQueue.pop();
    }
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default TrainCar;
