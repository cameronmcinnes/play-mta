import OscillatorSound from './oscillator_sound';

class PathSegment {
  constructor(path, startPos, endPos, j, frequency, audioCtx) {
    this.parentPath = path;
    this.startPos = startPos;
    this.endPos = endPos;

    // this.trainOrigin
    // this.trainDestination
    // angle of the thread from x axis toward y
    this.angle = startPos.angleBetween(endPos);
    this.backwardsAngle = endPos.angleBetween(startPos);

    // TODO DO WE EVEN NEED THIS.POS ?? WHY NOT GRAB THE POSITION FROM
    // THE TRAIN WHEN WE DRAW
    this.pos
    // for debugging; index in its parent paths array of segments
    this.ord = j;
    // length from start to end pos
    this.totalLength = startPos.distBetween(endPos);
    // add segment length to parent path total length
    this.parentPath.totalLength += this.totalLength;
    // initialize threads w length 0, as train moves will increase length
    this.length = 1;
    // initialize without a train
    this.trains = [];

    // segments start out traced
    this.shouldBeDrawn = false;
    this.frequency = frequency;
    this.audioCtx = audioCtx;
  }

  receiveTrain(train) {
    this.trains.push(train);
    this.shouldBeDrawn = true;

    // TODO
    this.trainOrigin = (train.dir > 0) ?
     this.startPos : this.endPos;

    this.trainDestination = (train.dir > 0) ?
     this.endPos : this.startPos;

    // this.trainOrigin = (this.trains.dir > 0) ?
    //   this.startPos : this.endPos;
    //
    // this.trainDestination = (this.trains.dir > 0) ?
    //   this.endPos : this.startPos;

    this.pos = train.pos;
  }

  playSound() {
    if (this.parentPath.muted) { return null }
    let oscSound = new OscillatorSound(this.audioCtx);
    oscSound.play(this.frequency);
    oscSound.stop();
  }

  // need debouncing to make this work ???
  // checkHovered(mousePos) {
  //   // get the line point nearest to the mouse position with helper method;
  //   const linePoint = mousePos.linePointNearest(this.startPos, this.pos);
  //   if (linePoint.distBetween(mousePos) < this.parentPath.lineWidth * 2) {
  //     debugger;
  //     this.parentPath.selected = true;
  //     this.parentPath.lineWidth = 10;
  //   } else {
  //     this.parentPath.selected = false;
  //     // this.lineWidth = 3;
  //   }
  // }

  checkClicked(mousePos) {
    // get the line point nearest to the mouse position with helper method;
    const linePoint = mousePos.linePointNearest(this.startPos, this.endPos);
    // hacky to see if line point is on line
    if (((this.startPos.x > linePoint.x && linePoint.x > this.endPos.x) || (this.startPos.x < linePoint.x && linePoint.x < this.endPos.x)) &&
        ((this.startPos.y > linePoint.y && linePoint.y > this.endPos.y) || (this.startPos.y < linePoint.y && linePoint.y < this.endPos.y))) {
      if (linePoint.distBetween(mousePos) < 5) {
        this.toggleSelected();
        this.parentPath.muted = false;
        this.parentPath.map.togglePathsMute();
      }
    }
  }

  toggleSelected() {
    this.parentPath.selected = !(this.parentPath.selected);
  }

  trainAdvanced(train) {
    this.pos = train.pos;
  }

  releaseTrain() {
    this.trains.shift();
    this.playSound();
  }

  draw(ctx, color, traceColor, traceWidth) {
    // draw from prev station to active train
    // WHEN THERE ARE MULTIPLE TRAINS ON A SEGMENT;
    let trainOrigin;
    let trainDestination;
    let midPoint;

    const train = this.trains[0];
    if (train) {
      trainOrigin = train.origin
      trainDestination = train.destination
      midPoint = train.pos
    } else {
      trainOrigin = this.startPos
      trainDestination = this.endPos
      midPoint = this.endPos
    }

    ctx.beginPath();
    ctx.moveTo(trainOrigin.x, trainOrigin.y);
    ctx.lineTo(midPoint.x, midPoint.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = this.parentPath.lineWidth;
    ctx.stroke();

    // draw trace from train to next station
    ctx.beginPath();
    ctx.moveTo(midPoint.x, midPoint.y);
    ctx.lineTo(trainDestination.x, trainDestination.y);
    ctx.strokeStyle = traceColor;
    ctx.lineWidth = traceWidth;
    ctx.stroke();

    this.drawStation(ctx);

    // draw the last station of the train
    if (this.train == [] && this.shouldBeDrawn) {
      this.drawStation(ctx, true);
    }
  }

  drawStation(ctx, end) {
    let station = this.trainOrigin
    if (end) station = this.trainDestination;

    ctx.beginPath();
    ctx.fillStyle = '#ffffff';
    ctx.arc(station.x, station.y, 2, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
  }

  drawTrace(ctx, color, width) {
    ctx.beginPath();
    ctx.moveTo(this.startPos.x, this.startPos.y);
    ctx.lineTo(this.endPos.x, this.endPos.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
  }
}

export default PathSegment;
