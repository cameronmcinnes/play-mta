import OscillatorSound from './oscillator_sound';

class PathSegment {
  constructor(path, startPos, endPos, j, frequency, audioCtx) {
    this.parentPath = path;
    this.startPos = startPos;
    this.endPos = endPos;

    this.trainOrigin
    this.trainDestination
    // angle of the thread from x axis toward y
    this.angle = startPos.angleBetween(endPos);
    this.backwardsAngle = endPos.angleBetween(startPos);

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
    this.train = null;

    // segments start out traced
    this.shouldBeDrawn = false;
    this.frequency = frequency;
    this.audioCtx = audioCtx;
  }

  receiveTrain(train) {
    this.train = train;
    this.shouldBeDrawn = true;

    this.trainOrigin = (this.train.dir > 0) ?
      this.startPos : this.endPos;

    this.trainDestination = (this.train.dir > 0) ?
      this.endPos : this.startPos;

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
    this.train = null;
    // TODO
    // trains
    // this.shouldBeDrawn = false;
    // to fade out from back
    // this.fading = true;
    // then in draw decrement the length of the fade pos at the same speed
    // once it his a stoop

  	this.pos = this.trainDestination;
    // TEST
    // if (this.ord === this.parentPath.segments.length - 1) {
    //   this.parentPath.restartPath();
    // }
    this.playSound();
  }

  draw(ctx, color, traceColor, traceWidth) {
    // draw from prev station to active train

    // WHEN THERE ARE MULTIPLE TRAINS ON A SEGMENT;
    ctx.beginPath();
    ctx.moveTo(this.trainOrigin.x, this.trainOrigin.y);
    ctx.lineTo(this.pos.x, this.pos.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = this.parentPath.lineWidth;
    ctx.stroke();

    // draw trace from train to next station
    ctx.beginPath();
    ctx.moveTo(this.pos.x, this.pos.y);
    ctx.lineTo(this.trainDestination.x, this.trainDestination.y);
    ctx.strokeStyle = traceColor;
    ctx.lineWidth = traceWidth;
    ctx.stroke();


    this.drawStation(ctx);
  }

  drawStation(ctx) {
    ctx.beginPath();
    ctx.fillStyle = '#ffffff';
    ctx.arc(this.trainOrigin.x, this.trainOrigin.y, 2, 0, Math.PI*2, false);
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
