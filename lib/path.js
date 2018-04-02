import Train from './train';

class Path {
  constructor(options, map) {
    this.lineName = options.lineName;
    this.vertices = options.vertices;
    this.color = options.color;
    this.map = map;
    this.segments = [];
    this.durationMins = options.duration;
    this.totalLength = 0;
    this.muted = false;
    this.selected = false;
    this.fwdTrainsQueue = [];
    this.bwdTrainsQueue = [];
    this.lineWidth = 3;
  }

  getSpeed() {
    return this.totalLength / (this.durationMins * 60)
  }

  // checkHovered(mousePos) {
  //   this.segments.forEach( segment => segment.checkHovered(mousePos));
  // }

  checkClicked(mousePos, ctx) {
    this.segments.forEach( segment => segment.checkClicked(mousePos, ctx));
  }

  addTrain(dir) {
    let originSegment;
    let initialTrainPos;
    let storageQueue;

    if (dir > 0) {
      storageQueue = this.fwdTrainsQueue;
      originSegment = this.segments[0];
      initialTrainPos = originSegment.startPos;
    } else if (dir < 0) {
      storageQueue = this.bwdTrainsQueue;
      originSegment = this.segments[this.segments.length - 1];
      initialTrainPos = originSegment.endPos;
    }

    const train = new Train(this, dir, initialTrainPos, originSegment);
    storageQueue.unshift(train);
    originSegment.shouldBeDrawn = true;
    originSegment.receiveTrain(train);
  }

  startPath(dir) {
    this.addTrain(dir);
  }

  moveTrains(delta) {
    this.bwdTrainsQueue.forEach(train => train.move(delta));
    this.fwdTrainsQueue.forEach(train => train.move(delta));
  }

  restartPath() {
    this.segments.forEach(segment => segment.shouldBeDrawn = false);
    this.addTrain();
  }

  draw(ctx) {
    // const traceColor = '#52565c';
    // const traceWidth = 3;
    // const selectedWidth = 10;
    //
    // this.lineWidth = (this.selected) ? selectedWidth : traceWidth;
    // this.segments.forEach(segment => {
    //   if (this.muted) {
    //     (segment.shouldBeDrawn) ?
    //       segment.draw(ctx, '#ffffff', traceColor, traceWidth) :
    //       segment.drawTrace(ctx, traceColor, traceWidth);
    //   }
    //   else if (segment.shouldBeDrawn) {
    //     segment.draw(ctx, this.color, traceColor, traceWidth);
    //   } else {
    //     segment.drawTrace(ctx, traceColor, traceWidth);
    //   };
    // });

    this.drawTrains(ctx)
  }

  drawTrains(ctx) {
    this.bwdTrainsQueue.forEach(train => train.draw(ctx));
    this.fwdTrainsQueue.forEach(train => train.draw(ctx));
  }

  remove() {
    this.map.remove(this);
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default Path;
