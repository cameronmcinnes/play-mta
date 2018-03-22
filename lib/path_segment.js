class PathSegment {
  constructor(path, startPos, endPos, j) {
    this.parentPath = path;
    // the start and end of the segment on the fully shown map
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
    this.shown = false;
  }

  receiveTrain(train) {
    this.train = train;
    this.pos = train.pos;
  }

  trainAdvanced(train) {
    this.pos = train.pos;
  }

  release(train) {
    this.train = null;
  	// finished doign segment, set position to the original end point
  	this.pos = this.endPos;
  }

  draw(ctx) {
    ctx.moveTo(this.startPos.x, this.startPos.y);
    ctx.lineTo(this.pos.x, this.pos.y);
    ctx.strokeStyle = this.parentPath.color;
    ctx.stroke();
  }
}

export default PathSegment;
