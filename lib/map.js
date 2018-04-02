import Coord from './coord';
import Train from './train.js';
import bgMap from '../background_map/mapV2.json';
import TrainPath from './path';
import TrainPathSegment from './path_segment';
// import generateViewport from './mercator_util';
import MAP_DATA from './mercator_util';

const BG_COLOR = '#282828';

// MAP_DATA = MAP_DATA.filter( line => !(line.lineName === 'STATEN'));

const sounds = [
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
  2637.02,
  392.00,
  440.00,
  523.25,
  587.33,
  659.25,
  // repeat
  1046.50
]
//  C   D   E   G    A

class Map {
  constructor(width, height, audioCtx) {
    this.paths = [];
    this.segments = [];
    this.cnvWidth = width;
    this.cnvHeight = height;
    this.biggerDimension = (width > height) ? width : height;
    this.audioCtx = audioCtx;
    const bgMap= new Image();
    bgMap.src = 'https://svgshare.com/i/62L.svg'
    this.bgMap = bgMap;
    this.setupMap();
    this.traceWidth = 1;
    this.selectedWidth = 10;
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

  recenter(ctx) {
    ctx.scale(1, 1);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(0.5, 0.5);
    this.draw(ctx);
  }

  handleKey(e) {
    e.preventDefault();

    for (let i = 0; i < this.paths.length; i++) {
      const key = e.key.toUpperCase();
      if (this.paths[i].lineName === key && e.ctrlKey) {
        this.paths[i].startPath(-1)
      } else if (this.paths[i].lineName === key) {
        this.paths[i].startPath(1)
      }
    }
  }

  handleHover(e, ctx) {
    e.preventDefault();
    e.stopPropagation();
    const mousePos = new Coord(parseInt(e.offsetX), parseInt(e.offsetY));
    for (let i = 0; i < this.segments.length; i++) {
      if (this.segments[i].checkHovered(mousePos, ctx)) {
        return true;
      }
    }
    return false;
  }

  handleClick(e, ctx) {
    e.preventDefault();
    e.stopPropagation();
    const mousePos = new Coord(parseInt(e.offsetX), parseInt(e.offsetY));
    this.paths.forEach(path => path.checkClicked(mousePos, ctx));
  }

  // resizeCanvas(width, height) {
  //   this.cnvWidth = width;
  //   this.cnvHeight = height;
  // }

  zoom(factor, transX, transY, ctx) {
    ctx.translate(transX, transY);

    ctx.scale(factor, factor);

    ctx.translate(-transX, -transY)
  }

  pan(offsetX, offsetY, ctx) {
    ctx.translate(offsetX, offsetY);
    this.draw(ctx);
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

  deselectAllPaths() {
    this.paths.forEach( path => path.selected = path.muted = false );
  }

  addSegments(path, vertices, i) {
    for (let j = 0; j < vertices.length - 1; j++) {
      const startPoint = new Coord(vertices[j][1][0], vertices[j][1][1]);
      const endPoint = new Coord(vertices[j + 1][1][0], vertices[j + 1][1][1]);

      startPoint.scaleToScreen(this.cnvWidth, this.cnvHeight);
      endPoint.scaleToScreen(this.cnvWidth, this.cnvHeight);

      const segment = new TrainPathSegment(path, startPoint, endPoint, j, sounds[i], this.audioCtx);
      this.segments.push(segment);
      path.segments.push(segment);
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // turn off transform when clearing rectangle to clear WHOLE canvas
    ctx.clearRect(0, 0, this.cnvWidth, this.cnvHeight);
    ctx.restore();

    ctx.drawImage(
      this.bgMap,
      -this.biggerDimension * .370,
      -this.biggerDimension * .087,
      this.biggerDimension * 1.4,
      this.biggerDimension * 1.4
    );

    const traceColor = '#52565c';
    const traceWidth = 1;
    const selectedWidth = 10;

    if (this.biggerDimensionSwitched) {
      this.biggerDimensionSwitched = false;
      this.setupMap();
    }

    this.segments.forEach(segment => {
      const path = segment.parentPath;
      path.lineWidth = (path.selected) ?
        this.selectedWidth : this.traceWidth;

      if (!segment.shouldBeDrawn) {
        segment.drawTrace(ctx, traceColor, this.traceWidth);
      } else {
        return null;
      }
    });

    this.segments.forEach(segment => {
      const path = segment.parentPath;
      path.lineWidth = (path.selected) ?
        this.selectedWidth : this.traceWidth;

      if (segment.shouldBeDrawn) {
        (path.muted) ?
          segment.draw(ctx, '#ffffff', traceColor, this.traceWidth) :
          segment.draw(ctx, path.color, traceColor, this.traceWidth);
      }
    });

    this.paths.forEach((path) => path.draw(ctx) );
  }

  step(delta) {
    this.paths.forEach(path => path.moveTrains(delta));
  }
}

export default Map;
