import Train from './train';

class Path {
  constructor(options, map) {
    this.startPos = options.startPos;
    this.lineName = options.lineName;
    this.vertices = options.vertices;
    this.color = options.color;
    this.map = map;
    this.segments = [];
    this.durationMins = options.duration;
    this.totalLength = 0;
    this.muted = false;
    this.selected = false;
    this.lineWidth = 3;
    this.fwdTrainsQueue = [];
    this.bwdTrainsQueue = [];
  }

  getSpeed() {
    return this.totalLength / (this.durationMins * 60)
  }

  // checkHovered(mousePos) {
  //   this.segments.forEach( segment => segment.checkHovered(mousePos));
  // }

  checkClicked(mousePos) {
    this.segments.forEach( segment => segment.checkClicked(mousePos));
  }

  addTrain(dir) {
    let originSegment;
    const train = new Train(this, dir);

    if (dir > 0) {
      this.fwdTrainsQueue.unshift(train);
      originSegment = this.segments[0];
    } else if (dir < 0) {
      this.bwdTrainsQueue.unshift(train);
      originSegment = this.segments[this.segments.length - 1];
    }

    originSegment.shouldBeDrawn = true;
    originSegment.receiveTrain(train);
  }

  startPath(dir) {
    // TEST
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
    this.lineWidth = (this.selected) ? 10 : 3;
    this.segments.forEach(segment => {
      if (this.muted) {
        (segment.shouldBeDrawn) ?
          segment.draw(ctx, '#ffffff') :
          segment.drawTrace(ctx, '#282d34', 3);
      }
      else if (segment.shouldBeDrawn) {
        segment.draw(ctx, this.color);
      } else {
        segment.drawTrace(ctx, '#282d34', 3);
      };
    });
  }

  remove() {
    this.map.remove(this);
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default Path;
