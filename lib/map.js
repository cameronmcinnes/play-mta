import Coord from './coord';
import Train from './train.js';
import bgMap from '../background_map/mapV2.json';
import TrainPath from './path';
import TrainPathSegment from './path_segment';
import TRAIN_DATA from '../subway_data.json';

const BG_COLOR = '#282828';
let MAP_DATA = Object.values(TRAIN_DATA)

// e only has one point, so no segments
// '9' train is grand central shuttle
// 3 only has one stop listed
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
    this.segments = [];
    this.cnvWidth = width;
    this.cnvHeight = height;
    this.audioCtx = audioCtx;
    this.setupMap();
  }

  startPaths(dir) {
    this.paths.forEach( path => path.startPath(dir));
  }

  setupMap() {
    for (let i = 0; i < MAP_DATA.length; i++) {
      const path = new TrainPath(MAP_DATA[i], this);
      this.paths.push(path);
      this.addSegments(path, MAP_DATA[i].vertices, i);
    }
  }

  resetMap() {
    this.paths = [];
    this.segments = [];
    this.setupMap();
  }

  handleKey(e) {
    e.preventDefault();

    for (let i = 0; i < this.paths.length; i++) {
      const key = e.key.toUpperCase();
      if (this.paths[i].lineName === key && e.shiftKey) {
        this.paths[i].startPath(-1)
      } else if (this.paths[i].lineName === key) {
        this.paths[i].startPath(1)
      }
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

  muteDeselectedPaths() {
    for(let i = 0; i < this.paths.length; i++) {
      if (this.paths[i].selected) { continue }
      this.paths[i].muted = true;
    }
  }

  addSegments(path, vertices, i) {
    for (let j = 0; j < vertices.length - 1; j++) {
      const startPoint = new Coord(vertices[j][0], vertices[j][1]);
      const endPoint = new Coord(vertices[j + 1][0], vertices[j + 1][1]);

      startPoint.scaleToScreen(this.cnvHeight);
      endPoint.scaleToScreen(this.cnvHeight);

      const segment = new TrainPathSegment(path, startPoint, endPoint, j, sounds[i], this.audioCtx);
      this.segments.push(segment);
      path.segments.push(segment);
    }
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.cnvWidth, this.cnvHeight);
    // ctx.fillStyle = BG_COLOR;
    // ctx.fillRect(0, 0, this.cnvWidth, this.cnvHeight);
    // this.drawBgMap(ctx);
    const traceColor = '#52565c';
    const traceWidth = 3;
    const selectedWidth = 10;


    this.segments.forEach(segment => {
      const path = segment.parentPath;
      path.lineWidth = (path.selected) ?
        selectedWidth : traceWidth;

      if (!segment.shouldBeDrawn) {
        segment.drawTrace(ctx, traceColor, traceWidth);
      } else {
        return null;
      }
    });

    this.segments.forEach(segment => {
      const path = segment.parentPath;
      path.lineWidth = (path.selected) ?
        selectedWidth : traceWidth;

      if (segment.shouldBeDrawn) {
        (path.muted) ?
          segment.draw(ctx, '#ffffff', traceColor, traceWidth) :
          segment.draw(ctx, path.color, traceColor, traceWidth);
      }
    });

    this.paths.forEach((path) => path.draw(ctx) );
  }

  drawBgMap(ctx) {
    bgMap.forEach( vertices => {
      ctx.fillStyle = '#000';
      ctx.beginPath();
      const first = new Coord(vertices[0][0], vertices[0][1]);
      first.scaleToScreen(this.cnvHeight);
      ctx.moveTo(first.x, first.y);

      vertices.forEach( vertice => {
        const bgMapCoord = new Coord( vertice[0], vertice[1]);
        bgMapCoord.scaleToScreen(this.cnvHeight);
        ctx.lineTo(bgMapCoord.x, bgMapCoord.y)
      });
      ctx.closePath();
      ctx.fill();
    });
  }

  step(delta) {
    this.paths.forEach(path => path.moveTrains(delta));
  }
}

export default Map;

// this.segments.forEach(segment => {
//   const path = segment.parentPath;
//   path.lineWidth = (path.selected) ?
//     selectedWidth : traceWidth;
//
//   if (path.muted) {
//     (segment.shouldBeDrawn) ?
//       segment.draw(ctx, '#ffffff', traceColor, traceWidth) :
//       segment.drawTrace(ctx, traceColor, traceWidth);
//   }
//   else if (segment.shouldBeDrawn) {
//     segment.draw(ctx, path.color, traceColor, traceWidth);
//   } else {
//     segment.drawTrace(ctx, traceColor, traceWidth);
//   };
// });
