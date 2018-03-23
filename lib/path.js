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
    const train = new Train(this, dir);
    this.map.trains.push(train);

    // add in dir of train as argument
    // BACKWARD conditional logic here to see whether to add train to
    // end or beginning
    const originSegment = (dir > 0) ?
      this.segments[0] : this.segments[this.segments.length - 1];
    // debugger;
    originSegment.shouldBeDrawn = true;
    originSegment.receiveTrain(train);
  }

  startPath() {
    // TEST
    this.addTrain(-1);
  }

  restartPath() {
    this.segments.forEach(segment => segment.shouldBeDrawn = false);
    this.addTrain();
  }

  draw(ctx) {
    this.lineWidth = (this.selected) ? 10 : 3;
    this.segments.forEach(segment => {
      if (segment.shouldBeDrawn) segment.draw(ctx);
    });
  }

  remove() {
    this.map.remove(this);
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default Path;
