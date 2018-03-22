import OscillatorSound from './sound_util';

class PathSegment {
  constructor(path, startPos, endPos, j, frequency, audioCtx) {
    this.parentPath = path;
    // the start and end of the segment on the fully drawn map
    this.startPos = startPos;
    this.endPos = endPos;
    // angle of the thread from x axis toward y
    this.angle = startPos.angleBetween(endPos);
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
    this.frequency = frequency
    this.audioCtx = audioCtx
  }

  receiveTrain(train) {
    this.train = train;
    this.shouldBeDrawn = true;
    this.pos = train.pos;
    // set timeout?
  }

  playSound() {
    let oscSound = new OscillatorSound(this.audioCtx);
    oscSound.play(this.frequency);
    oscSound.stop();
  }

  trainAdvanced(train) {
    this.pos = train.pos;
  }

  releaseTrain() {
    this.train = null;
  	// finished traveling segment, set position to the original end point
  	this.pos = this.endPos;
    if (this.ord === this.parentPath.segments.length - 1) {
      this.parentPath.restartPath();
    }
    this.playSound();
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.startPos.x, this.startPos.y);
    ctx.lineTo(this.pos.x, this.pos.y);
    ctx.strokeStyle = this.parentPath.color;
    ctx.lineWidth = 3;
    ctx.stroke();
  }
}

export default PathSegment;
