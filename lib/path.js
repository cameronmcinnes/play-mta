import Train from './train';

class Path {
  constructor(options, map) {
    this.startPos = options.startPos;
    this.endPos = options.endPos;
    this.vertices = options.vertices;
    this.vel = options.vel;
    this.color = options.color;
    this.map = map;
    this.segments = [];
    this.drawnSegments = [];
    this.durationMins = options.durationMins;
    this.totalLength = 0;
  }

  getSpeed() {
    return this.totalLength / (this.durationMins * 60)
  }

  addTrain() {
    const train = new Train(this);
    this.map.trains.push(train);
    this.segments[0].receiveTrain(train);
  }

  startPath() {
    this.addTrain();
  }

  draw(ctx) {
    this.segments.forEach(segment => segment.draw(ctx));
  }

  remove() {
    this.map.remove(this);
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default Path;
