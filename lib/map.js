import Coord from './coord';
import Train from './train.js';
import TrainPath from './path';
import TrainPathSegment from './path_segment';
import TRAIN_DATA from '../subway_data.json';

const BG_COLOR = '#000000';
let MAP_DATA = Object.values(TRAIN_DATA)
MAP_DATA = MAP_DATA.filter( line => {
    return !(line.lineName === 'E' ||
    line.lineName === '9' ||
    line.lineName === 'S' ||
    line.lineName === '3')
  }
);

const sounds = [
  // 130.81,
  // 146.83,
  // 164.81,
  // 196.00,
  // 220.00,
  261.63,
  293.66,
  329.63,
  392.00,
  440.00,
  523.25,
  587.33,
  659.25,
  783.99,
  880.00,
  1046.50,
  1174.66,
  1318.51,
  1567.98,
  1760.00,
  2093.00,
  2349.32,
  2637.02
]
//  C   D   E   G    A

class Map {
  constructor(width, height, audioCtx) {
    this.paths = [];
    this.trains = [];
    this.cnvWidth = width;
    this.cnvHeight = height;
    this.audioCtx = audioCtx;
    this.setupMap();
    this.startPaths();
  }

  startPaths() {
    this.paths.forEach( path => path.startPath());
  }

  setupMap() {
    // debugger;
    for (let i = 0; i < MAP_DATA.length; i++) {
      // e only has one point, so no segments
      // '9' train is grand central shuttle
      // 3 only has one stop listed
      // if (MAP_DATA[i].lineName === 'E' ||
      //   MAP_DATA[i].lineName === '9' ||
      //   MAP_DATA[i].lineName === 'S' ||
      //   MAP_DATA[i].lineName === '3') { continue };

      const path = new TrainPath(MAP_DATA[i], this);
      this.paths.push(path);
      this.addSegments(path, MAP_DATA[i].vertices, i);
    }
  }

  // handleMouseMove(e) {
  //   e.stopPropagation();
  //   const mousePos = new Coord(parseInt(e.offsetX), parseInt(e.offsetY));
  //   this.paths.forEach(path => path.checkHovered(mousePos));
  // }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const mousePos = new Coord(parseInt(e.offsetX), parseInt(e.offsetY));
    this.paths.forEach(path => path.checkClicked(mousePos));
  }

  togglePathsMute() {
    this.muteDeselectedPaths();
  }

  // anySelected() {
  //   for (let i = 0; i < this.paths.length; i++) {
  //     if (this.paths[i].selected) { return true }
  //   }
  //   return false;
  // }

  muteDeselectedPaths() {
    for(let i = 0; i < this.paths.length; i++) {
      if (this.paths[i].selected) { continue }
      this.paths[i].muted = true;
    }
  }

  // unMutePaths() {
  //   this.paths.forEach(path => path.muted = false);
  // }

  addSegments(path, vertices, i) {
    for (let j = 0; j < vertices.length - 1; j++) {
      const startPoint = new Coord(vertices[j][0], vertices[j][1]);
      const endPoint = new Coord(vertices[j + 1][0], vertices[j + 1][1]);

      const segment = new TrainPathSegment(path, startPoint, endPoint, j, sounds[i], this.audioCtx);
      path.segments.push(segment);
    }
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.cnvWidth, this.cnvHeight);
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, this.cnvWidth, this.cnvHeight);

    // forEach or for loop?
    this.paths.forEach((path) => {
      path.draw(ctx);
    });

    this.trains.forEach(train => {
      if (train.isMoving) {train.draw(ctx)};
    })
  }

  moveTrains(delta) {
    this.trains.forEach((train) => {
      if (train.isMoving) train.move(delta);
    });
  }

  step(delta) {
    this.moveTrains(delta);
    // this.checkIntersections();
  }
}


export default Map;
