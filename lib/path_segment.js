import OscillatorSound from './oscillator_sound';

class PathSegment {
  constructor(path, startPos, endPos, j, frequency, audioCtx) {
    this.parentPath = path;
    // the start and end of the segment on the fully drawn map
    this.startPos = startPos;
    this.endPos = endPos;
    // trains default to forwrd
    this.trainOrigin = startPos;
    this.trainDestination = endPos;
    // angle of the thread from x axis toward y
    this.angle = startPos.angleBetween(endPos);
    this.backwardsAngle = endPos.angleBetween(startPos);
    // will
    this.pos = startPos;
    // index in its parent paths array of segments
    this.ord = j;
    // length from start to end pos
    this.totalLength = startPos.distBetween(endPos);
    // add segment length to parent path total length
    this.parentPath.totalLength += this.totalLength;
    // initialize threads w length 0, as train moves will increase length
    this.length = 1;
    // initialize without a train
    this.train = null;
    // segments start out invisible
    this.shouldBeDrawn = false;
    this.frequency = frequency;
    this.audioCtx = audioCtx;

    //TESTO
    // this.lineWidth = this.parentPath.lineWidth;
  }

  receiveTrain(train) {
    this.train = train;
    this.shouldBeDrawn = true;

    this.trainOrigin = (this.train.dir > 0) ?
      this.startPos : this.endPos;

    this.trainDestination = (this.train.dir > 0) ?
      this.endPos : this.startPos;
    // debugger;

    // this.trainOrigin = this.startPos
    this.pos = train.pos;
    // set timeout?
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
    // debugger;
    if (!this.shouldBeDrawn) { return null }
    // get the line point nearest to the mouse position with helper method;
    const linePoint = mousePos.linePointNearest(this.startPos, this.pos);
    // debugger;
    // hacky to see if line point is on line
    if (((this.startPos.x > linePoint.x && linePoint.x > this.endPos.x) || (this.startPos.x < linePoint.x && linePoint.x < this.endPos.x)) &&
        ((this.startPos.y > linePoint.y && linePoint.y > this.endPos.y) || (this.startPos.y < linePoint.y && linePoint.y < this.endPos.y))) {
      if (linePoint.distBetween(mousePos) < 5) {
        // this.parentPath.selected = true;
        this.toggleSelected();
        this.parentPath.muted = false;

        this.parentPath.map.togglePathsMute();
        // better to do this or return true back up the chain so map can call this?
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
  	// finished traveling segment, set position to the train destination
    // TODO

  	this.pos = this.trainDestination;
    // TEST
    // if (this.ord === this.parentPath.segments.length - 1) {
    //   this.parentPath.restartPath();
    // }
    this.playSound();
  }

  draw(ctx) {
    const color = (this.parentPath.muted) ? '#fff' : this.parentPath.color;

    ctx.beginPath();
    ctx.moveTo(this.trainOrigin.x, this.trainOrigin.y);
    ctx.lineTo(this.pos.x, this.pos.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = this.parentPath.lineWidth;
    ctx.stroke();

    // draw subway station
    ctx.beginPath();
    ctx.fillStyle = '#ffffff';
    ctx.arc(this.trainOrigin.x, this.trainOrigin.y, 2, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
  }
}

export default PathSegment;
