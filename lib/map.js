import Coord from './coord';
import Train from './train.js';
import TrainPath from './path';
import TrainPathSegment from './path_segment';


const TRAINS_DATA = [
  {
    color: "#6CBE45",
    name: "A G train",
    durationMins: 49,
		vertices: [
      [631.405,930.845],
      [608.571,908.01],
      [469.25,908.01],
      [469.25,831.51],
      [528.929,831.51],
      [572.427,788.012],
      [572.427,680.928],
      [516.5,625],
      [516.5,307.01],
      [842,307.01]]
	},
  {
    color: "#FCCC0A",
    name: "A Q train",
    durationMins: 60,
		vertices: [
      [678.684,1043.693],
      [734.118,988.259],
      [369.369,623.51],
      [250.5,623.51],
      [250.5,463.764],
      [162,463.764],
      [162,371.502]
    ]
	},
  {
    color: "#B933AD",
    name: "A 7 train",
    durationMins: 38,
		vertices: [
      [167,435.5],
      [441,435.5],
      [441,347.01],
      [656,347.01],
      [852.5,150.51]
    ]
	},
];

const BG_COLOR = '#000000';

class Map {

  constructor(width, height) {
    this.paths = [];
    this.trains = [];
    this.cnvWidth = width;
    this.cnvHeight = height;
    this.setupMap();
    this.startPaths();
  }

  startPaths() {
    this.paths.forEach( path => path.startPath());
  }

  setupMap() {
    for (let i = 0; i < TRAINS_DATA.length; i++) {
      const path = new TrainPath(TRAINS_DATA[i], this);
      this.paths.push(path);
      this.addSegments(path, TRAINS_DATA[i].vertices);
    }
  }

  addSegments(path, vertices) {
    for (let j = 0; j < vertices.length - 1; j++) {
      const startPoint = new Coord(vertices[j][0], vertices[j][1]);
      const endPoint = new Coord(vertices[j + 1][0], vertices[j + 1][1]);

      const segment = new TrainPathSegment(path, startPoint, endPoint, j);
      path.segments.push(segment);
    }
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.cnvWidth, this.cnvHeight);
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, this.cnvWidth, this.cnvHeight);

    this.paths.forEach((path) => {
      path.draw(ctx);
    });
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
