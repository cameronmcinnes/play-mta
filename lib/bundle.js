/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./background_map/mapV2.json":
/*!***********************************!*\
  !*** ./background_map/mapV2.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = [[[184.8118190977632,746.3720587029628],[197.12808730616217,659.9339416015692],[212.64583196016812,557.543424026996],[828.2332558073598,-297.5263238032684],[2240.5740058944434,173.87765141310155],[1277.3439044829886,307.47022101453706],[539.7237314149468,407.15515524895966],[352.04188284478846,621.2476135818025],[355.13036600409754,655.8228604223499],[327.6729974294237,710.3913140233716],[184.8118190977632,746.3720587029628]],[[559.3468988051035,429.0809215380879],[476.22150450561986,520.0517691703991],[398.2561369478591,608.3521709085469],[2139.445014642025,916.5778470115619],[2245.282059490921,203.46338092504595],[559.3468988051035,429.0809215380879]],[[389.8569693317454,626.0614436805437],[393.0961102061362,658.1419318567897],[355.5823391493427,728.1005867953435],[193.09799342757896,769.5979104932229],[202.36344290545267,879.9646283043984],[93.73923032741102,993.4585788074477],[254.07670360919334,1205.9347146253724],[706.6901441605925,1147.3254547371312],[759.4580088699587,953.2964780566624],[835.9921281343628,936.7116035559105],[913.0535494015799,926.1703697630571],[1164.425947024984,1057.5492802679898],[2122.83500155361,1101.471087738221],[2139.2566924981593,938.3279260708284],[389.8569693317454,626.0614436805437]],[[-478.08212728690853,965.4540343644336],[-60.647263208402514,937.2035277995833],[52.27069424960195,1106.882254418547],[-246.10691048101177,1325.8236802960937],[-715.2926996920423,1463.878705536497],[-478.08212728690853,965.4540343644336]],[[-69.53606839859867,912.115391372594],[784.0152164292425,-306.2404104053799],[-749.6803231607429,-310.28121669262464],[-1592.1582659296228,1024.1687065906121],[-1773.0981817496197,1589.9869991450028],[-765.6877053887779,1470.8710572857535],[-509.4942608826515,941.5957085466015],[-312.81061383599916,926.3811944389312],[-69.53606839859867,912.115391372594]],[[464.0558940123026,1250.699820799025],[476.5228199357833,1297.6083111772307],[1409.0940763269573,1072.5881071457984],[1253.9919586444653,1058.8493657690967],[959.2678035046504,1131.232504480027],[897.3851470324921,926.1703697630571],[867.856234875351,932.6356598226785],[857.686839106987,932.6707972686659],[920.1344620106883,1147.0443551693074],[464.0558940123026,1250.699820799025]]];

/***/ }),

/***/ "./lib/color_helper.js":
/*!*****************************!*\
  !*** ./lib/color_helper.js ***!
  \*****************************/
/*! exports provided: shadeHexColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadeHexColor", function() { return shadeHexColor; });
// fn to programatically lighten or darken hex color;
const shadeHexColor = (color, percent) => {
  let R = parseInt(color.substring(1,3), 16);
  let G = parseInt(color.substring(3,5), 16);
  let B = parseInt(color.substring(5,7), 16);

  R = parseInt( (R * (100 + percent)) / 100);
  G = parseInt( (G * (100 + percent)) / 100);
  B = parseInt( (B * (100 + percent)) / 100);

  const hexComponents = [R, G, B]

  const hexStr = hexComponents.map( hexComp => {
    if (hexComp > 256) { return '00' }
    const subStr = hexComp.toString(16);
    return (subStr.length === 1) ? `0${subStr}` : subStr;
  });

  return `#${hexStr}`;
}


/***/ }),

/***/ "./lib/coord.js":
/*!**********************!*\
  !*** ./lib/coord.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Coord {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(coord2) {
    return (this.x == coord2.x) && (this.y == coord2.y);
  }

  plus(coord2) {
    return new Coord(this.x + coord2.x, this.y + coord2.y);
  }

  distBetween(coord2) {
    return Math.sqrt(
      Math.pow(this.x - coord2.x, 2) + Math.pow(this.y - coord2.y, 2)
    );
  }

  angleBetween(coord2) {
    return Math.atan2(coord2.y - this.y, coord2.x - this.x);
  }

  addVectorDiffs(speed, angle) {
    const xDiff = Math.cos(angle) * speed;
    const yDiff = Math.sin(angle) * speed;
    return new Coord(this.x + xDiff, this.y + yDiff)
  }

  linePointNearest(lineStart, lineEnd) {
    // BUG edge case of when the mouse point (this) is on line formed by
    // lineStart => lineEnd;

    const lerp = (a,b,x) => ( a +  (x * (b - a)));
    const dx = lineEnd.x - lineStart.x;
    const dy = lineEnd.y - lineStart.y;
    // const slope = dy/dx;
    // extrapolate line, check if point is on line , if so return
    const t = ((this.x-lineStart.x) * dx + (this.y - lineStart.y) * dy)/( (dx * dx) + (dy * dy));

    const lineX = lerp(lineStart.x, lineEnd.x, t);
    const lineY = lerp(lineStart.y, lineEnd.y, t);

    return new Coord(lineX, lineY);
  }

  scaleToScreen(width, height) {
    let scaledX
    let scaledY

    if (width > height) {
      scaledX = this.x * (width / 1200);
      scaledY = this.y * (width / 1200);
    } else {
      scaledX = this.x * (height / 1200);
      scaledY = this.y * (height / 1200);
    }

    this.x = scaledX;
    this.y = scaledY;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Coord);


/***/ }),

/***/ "./lib/entry.js":
/*!**********************!*\
  !*** ./lib/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./lib/map.js");
/* harmony import */ var _map_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map_view */ "./lib/map_view.js");



document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const canvasContainerEl = document.getElementsByClassName("canvas-container")[0];
  const muteBtnEl = document.getElementsByClassName("mute")[0];
  const backgroundImageEl = document.getElementsByClassName("background-img-container")[0];
  const subwayBulletEls = document.getElementsByClassName("bullet-hidden");
  const controlNav = document.getElementsByClassName('controls')[0];

  const width = canvasContainerEl.clientWidth;
  const height = canvasContainerEl.clientHeight;
  canvasEl.width = width;
  canvasEl.height = height;
  backgroundImageEl.style.cssText = `height: ${height}`;

  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();

  const ctx = canvasEl.getContext("2d");
  ctx.translate(0.5, 0.5);
  ctx.lineCap = "round";

  const map = new _map__WEBPACK_IMPORTED_MODULE_0__["default"](width, height, audioCtx);


  canvasEl.addEventListener('mouseup', e => map.handleClick(e, ctx));
  canvasEl.addEventListener('mousemove', e => {
    if (map.handleHover(e, ctx)) {
      canvasEl.style.cssText = 'cursor:pointer;';
    } else {
      canvasEl.style.cssText = 'cursor:inherit;';
    }
  });

  const mapView = new _map_view__WEBPACK_IMPORTED_MODULE_1__["default"](map, ctx, audioCtx);
  canvasEl.addEventListener('mousedown', e => mapView.handleDragStart(e, canvasEl), true);

  canvasEl.addEventListener('wheel', e => mapView.handleScroll(e));
  canvasEl.addEventListener('DOMMouseScroll', e => mapView.handleScroll(e));

  controlNav.addEventListener('click', e => mapView.handleClick(e, muteBtnEl));
  document.addEventListener('keypress', e => mapView.handleKey(e, subwayBulletEls));
  window.addEventListener('resize', e => mapView.handleResize(e, canvasContainerEl));
  mapView.start();

});


/***/ }),

/***/ "./lib/map.js":
/*!********************!*\
  !*** ./lib/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coord */ "./lib/coord.js");
/* harmony import */ var _train_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./train.js */ "./lib/train.js");
/* harmony import */ var _background_map_mapV2_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../background_map/mapV2.json */ "./background_map/mapV2.json");
var _background_map_mapV2_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/Object.assign({}, _background_map_mapV2_json__WEBPACK_IMPORTED_MODULE_2__, {"default": _background_map_mapV2_json__WEBPACK_IMPORTED_MODULE_2__});
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./path */ "./lib/path.js");
/* harmony import */ var _path_segment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./path_segment */ "./lib/path_segment.js");
/* harmony import */ var _mercator_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mercator_util */ "./lib/mercator_util.js");





// import generateViewport from './mercator_util';


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
  130.81,
  146.83,
  164.81,
  196.00,
  220.00,
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
    for (let i = 0; i < _mercator_util__WEBPACK_IMPORTED_MODULE_5__["default"].length; i++) {
      const path = new _path__WEBPACK_IMPORTED_MODULE_3__["default"](_mercator_util__WEBPACK_IMPORTED_MODULE_5__["default"][i], this);
      this.paths.push(path);
      this.addSegments(path, _mercator_util__WEBPACK_IMPORTED_MODULE_5__["default"][i].vertices, i);
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
    const mousePos = new _coord__WEBPACK_IMPORTED_MODULE_0__["default"](parseInt(e.offsetX), parseInt(e.offsetY));
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
    const mousePos = new _coord__WEBPACK_IMPORTED_MODULE_0__["default"](parseInt(e.offsetX), parseInt(e.offsetY));
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
      const startPoint = new _coord__WEBPACK_IMPORTED_MODULE_0__["default"](vertices[j][1][0], vertices[j][1][1]);
      const endPoint = new _coord__WEBPACK_IMPORTED_MODULE_0__["default"](vertices[j + 1][1][0], vertices[j + 1][1][1]);

      startPoint.scaleToScreen(this.cnvWidth, this.cnvHeight);
      endPoint.scaleToScreen(this.cnvWidth, this.cnvHeight);

      const segment = new _path_segment__WEBPACK_IMPORTED_MODULE_4__["default"](path, startPoint, endPoint, j, sounds[i], this.audioCtx);
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

/* harmony default export */ __webpack_exports__["default"] = (Map);

// this.segments.forEach(segment => {
//   const path = segment.parentPath;
//   path.lineWidth = (path.selected) ?
//     selectedWidth : this.traceWidth;
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


/***/ }),

/***/ "./lib/map_view.js":
/*!*************************!*\
  !*** ./lib/map_view.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coord */ "./lib/coord.js");


const lineNames = [
  '1','2','3',
  '4','5','6',
  '7',
  'A','C','E',
  'N','Q','R','W',
  'S',
  'L',
  'G',
  'J','Z',
  'B','D','F','M'
]

class MapView {
  constructor(map, ctx, audioCtx) {
    this.map = map;
    this.ctx = ctx;
    this.ctx.save()
    this.audioCtx = audioCtx;
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.panX = 0;
    this.panY = 0;

    // will be a value from 0 - 1 indicating how zoomed in
    this.prevZoomCenter = null;
    this.zoomCenter = null;

    this.cnvHeight = ctx.canvas.height;
    this.cnvWidth = ctx.canvas.width;

    // VIEWPORT
    // where the view is located relative to orginal canvas coords
    this.zoomed = false;
    this.xleftView = 0;
    this.ytopView = 0;
    this.viewHeightOriginal = 1.0;
    this.viewWidthOriginal = 1.0;
    this.viewHeight = this.viewHeightOriginal;
    this.viewWidth = this.viewWidthOriginal;
    this.scaleFactor = 1;
    this.prevScaleFactor = 1;
    this.zdX = 0;
    this.zdY = 0;
  }

  handleKey(e, subwayBulletEls) {
    const key = e.key.toUpperCase()

    if (!lineNames.includes(key)) { return null }
    this.map.handleKey(e);

    // TODO
    const leftBullet = subwayBulletEls[0];
    const rightBullet = subwayBulletEls[1];

    if (e.ctrlKey) {
      rightBullet.src = `assets/subway_bullets/${key}.svg`;

      if (rightBullet.classList.contains('subway-bullet')) {
        // BUG QUESTION waits for a second before going
        rightBullet.classList.remove('subway-bullet');
        setTimeout( () => rightBullet.classList.toggle('subway-bullet'), 10)
      } else {
        rightBullet.classList.toggle('subway-bullet', true);
      }
    } else {
      leftBullet.src = `assets/subway_bullets/${key}.svg`;

      if (leftBullet.classList.contains('subway-bullet')) {
        // BUG QUESTION waits for a second before going
        leftBullet.classList.remove('subway-bullet');
        setTimeout( () => leftBullet.classList.toggle('subway-bullet'), 10)
      } else {
        leftBullet.classList.toggle('subway-bullet', true);
      }
    }
  }

  handleResize(e, canvasContainerEl) {
    this.resizeCanvas(e, canvasContainerEl)
  }

  resizeCanvas(e, canvasContainerEl) {
    const width = canvasContainerEl.clientWidth;
    const height = canvasContainerEl.clientHeight;
    const prevWidth = this.ctx.canvas.width;
    const prevHeight = this.ctx.canvas.height;

    // check if the bigger dimension has changed, if it has, reset map
    // to rescale paths with bigger dim
    // if (prevWidth > prevHeight !== width > height) {
    // }
    this.map.biggerDimension = (width > height) ? width : height;

    this.ctx.canvas.width = width;
    this.ctx.canvas.height = height;
    this.map.cnvHeight = height;
    this.map.cnvWidth = width;
    // BUG if its desirable behavior? dont clear map when you scale screen
    // just write different method => scale paths
    this.map.resetMap();
  }

  handleScroll(e){
    e.preventDefault();
    e.stopPropagation();
    const delta = e.deltaY ? e.deltaY/40 : e.detail ? -e.detail : 0;
    const scaleDiff = Math.pow(1.1, delta);

    if (!this.zoomed) {
      this.transY = e.offsetY
      this.transX = e.offsetX
      this.prevZoomCenter = new _coord__WEBPACK_IMPORTED_MODULE_0__["default"](e.offsetX, e.offsetY)
      this.zoomed = true;
    } else {
      this.zoomCenter = new _coord__WEBPACK_IMPORTED_MODULE_0__["default"](e.offsetX, e.offsetY)

      this.zdX = (this.zoomCenter.x - this.prevZoomCenter.x)
      this.zdY = (this.zoomCenter.y - this.prevZoomCenter.y)

      if (this.zdX !== 0 || this.zdY !== 0) {
        this.prevZoomCenter = this.zoomCenter;
        this.prevScaleFactor = this.scaleFactor;
        this.prevZoomCenter = this.zoomCenter;
      }

      this.transX += (this.zdX / this.prevScaleFactor)
      this.transY += (this.zdY / this.prevScaleFactor)
    }

    this.scaleFactor *= scaleDiff;

    this.map.zoom(scaleDiff, this.transX, this.transY, this.ctx);
  }

  handleMouseMove(e) {
    let deltaX = e.movementX;
    let deltaY = e.movementY;

    // TODO fix pan
    // this.prevZoomCenter.x -= deltaX / this.scaleFactor
    // this.prevZoomCenter.y -= deltaY / this.scaleFactor

    // limit pan
    // if (this.panX - deltaX > .5 * this.ctx.canvas.width || this.panX - deltaX < 0 ) {
    //   return;
    // }
    // if (this.panY - deltaY > this.ctx.canvas.width || this.panY - deltaY < 0 ) {
    //   return;
    // }
    // this.panX -= deltaX;
    // this.panY -= deltaY;

    this.map.pan(deltaX, deltaY, this.ctx);
  }

  handleDragStart(e, canvasEl) {
    canvasEl.addEventListener('mousemove', this.handleMouseMove);
    canvasEl.addEventListener('mouseup', e => {
      canvasEl.style.cssText = 'cursor:inherit;';
      canvasEl.removeEventListener('mousemove', this.handleMouseMove);
    }, { once: true });
    canvasEl.style.cssText = 'cursor:move;';
  }

  handleClick(e, muteBtnEl) {
    e.stopPropagation();
    e.preventDefault();

    if (e.composedPath()[2].classList[0] === 'mute') {
      this.toggleCtxMute(muteBtnEl);
      return null;
    }

    switch(e.target.classList[0]) {
      case 'reset':
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.translate(0.5, 0.5);
        this.map.resetMap();
        break;
      case 'deselect':
        this.map.deselectAllPaths();
        break;
      case 'train-controls':
        const dir = parseInt(e.target.dataset.dir);
        this.map.startPaths(dir);
        break;
      case 're-center':
        this.map.recenter(this.ctx);
        break;
    }
  }

  toggleCtxMute(muteBtnEl) {
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().then( () => {
        muteBtnEl.children[0].classList.toggle("fa-volume-up");
      });
    } else if (this.audioCtx.state === 'running') {
      this.audioCtx.suspend().then( () => {
        muteBtnEl.children[0].classList.toggle("fa-volume-off");
      })
    }
  }

  start() {
    this.lastTime = 0;

    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.map.step(timeDelta);
    this.map.draw(this.ctx);
    this.lastTime = time;

    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (MapView);


/***/ }),

/***/ "./lib/mercator_util.js":
/*!******************************!*\
  !*** ./lib/mercator_util.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sub_data_merc_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sub_data_merc.json */ "./sub_data_merc.json");
var _sub_data_merc_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/Object.assign({}, _sub_data_merc_json__WEBPACK_IMPORTED_MODULE_0__, {"default": _sub_data_merc_json__WEBPACK_IMPORTED_MODULE_0__});
/* harmony import */ var viewport_mercator_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! viewport-mercator-project */ "./node_modules/viewport-mercator-project/dist-es6/index.js");



const mapData = Object.values(_sub_data_merc_json__WEBPACK_IMPORTED_MODULE_0__)
//
// const generateViewport = (width, height) => {
//
//   new WebMercatorViewport({
//     width: 800,
//     height: 800,
//     longitude: -73.971248,
//     latitude: 40.794136,
//     zoom: 11
//   });
//
//   mapData.forEach(linObj => {
//     linObj['vertices'].forEach(vert => vert[1] = viewport.project(vert[1]))
//   })
// }

// export default generateViewport;



const viewport = new viewport_mercator_project__WEBPACK_IMPORTED_MODULE_1__["default"]({
  width: 800,
  height: 800,
  longitude: -73.971248,
  latitude: 40.794136,
  zoom: 11
});

mapData.forEach(linObj => {
  linObj['vertices'].forEach(vert => vert[1] = viewport.project(vert[1]))
})

/* harmony default export */ __webpack_exports__["default"] = (mapData);


/***/ }),

/***/ "./lib/oscillator_sound.js":
/*!*********************************!*\
  !*** ./lib/oscillator_sound.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const dogBarkingBuffer = null;

//
// const loadDogSound = (audioCtx, url) => {
//   const request = new XMLHttpRequest();
//   request.open('GET', url, true);
//   request.responseType = 'arraybuffer';
//
//   request.onload = function() {
//     audioCtx.decodeAudioData(request.response, function(buffer) {
//       dogBarkingBuffer = buffer;
//     }, onError);
//   }
//   request.send();
// }
//
// const playSound = (audioCtx, buffer) => {
//   // creates a sound source
//   var source = audioCtx.createBufferSource();
//   // tell the source which sound to play
//   source.buffer = buffer;
//   // connect the source to the audioCtx's destination (the speakers)
//   source.connect(audioCtx.destination);
//   // play the source now
//   source.start(0);
// }

//
class OscillatorSound {
  constructor(audioCtx) {
    this.audioCtx = audioCtx
  }

  setup() {
    this.oscillator = this.audioCtx.createOscillator();
    this.gainNode = this.audioCtx.createGain();

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioCtx.destination);
    this.oscillator.type = 'sine';
  }

  play(freqValue) {
    // have to stop playing sounds when audio ctx muted otherwise
    // sounds queue and then play all at once on resume
    if (this.audioCtx.state === 'suspended') { return null }
    this.setup();

    this.oscillator.frequency.setValueAtTime(freqValue, this.audioCtx.currentTime);
    this.gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);
    this.gainNode.gain.linearRampToValueAtTime(
      1,
      this.audioCtx.currentTime + 0.01
    );

    this.oscillator.start(this.audioCtx.currentTime);
    this.stop(this.audioCtx.currentTime);
  }

  stop() {
    if (this.audioCtx.state === 'suspended') { return null }
    
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 1);
    this.oscillator.stop(this.audioCtx.currentTime + 1);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (OscillatorSound);


/***/ }),

/***/ "./lib/path.js":
/*!*********************!*\
  !*** ./lib/path.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _train__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./train */ "./lib/train.js");


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

    const train = new _train__WEBPACK_IMPORTED_MODULE_0__["default"](this, dir, initialTrainPos, originSegment);
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

/* harmony default export */ __webpack_exports__["default"] = (Path);


/***/ }),

/***/ "./lib/path_segment.js":
/*!*****************************!*\
  !*** ./lib/path_segment.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _oscillator_sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oscillator_sound */ "./lib/oscillator_sound.js");


class PathSegment {
  constructor(path, startPos, endPos, j, frequency, audioCtx) {
    this.parentPath = path;
    this.startPos = startPos;
    this.endPos = endPos;

    // this.trainOrigin
    // this.trainDestination
    // angle of the thread from x axis toward y
    this.angle = startPos.angleBetween(endPos);
    this.backwardsAngle = endPos.angleBetween(startPos);

    // TODO DO WE EVEN NEED THIS.POS ?? WHY NOT GRAB THE POSITION FROM
    // THE TRAIN WHEN WE DRAW
    this.pos
    // for debugging; index in its parent paths array of segments
    this.ord = j;
    // length from start to end pos
    this.totalLength = startPos.distBetween(endPos);
    // add segment length to parent path total length
    this.parentPath.totalLength += this.totalLength;
    // initialize threads w length 0, as train moves will increase length
    this.length = 1;
    // initialize without a train
    this.trains = [];

    // segments start out traced
    this.shouldBeDrawn = false;
    this.frequency = frequency;
    this.audioCtx = audioCtx;
  }

  receiveTrain(train) {
    this.trains.push(train);
    this.shouldBeDrawn = true;

    // TODO
    this.trainOrigin = (train.dir > 0) ?
     this.startPos : this.endPos;

    this.trainDestination = (train.dir > 0) ?
     this.endPos : this.startPos;

    // this.trainOrigin = (this.trains.dir > 0) ?
    //   this.startPos : this.endPos;
    //
    // this.trainDestination = (this.trains.dir > 0) ?
    //   this.endPos : this.startPos;

    this.pos = train.pos;
  }

  playSound() {
    if (this.parentPath.muted) { return null }
    let oscSound = new _oscillator_sound__WEBPACK_IMPORTED_MODULE_0__["default"](this.audioCtx);
    oscSound.play(this.frequency);
    oscSound.stop();
  }

  // need debouncing to make this work ???
  // checkHovered(mousePos) {
  //   // get the line point nearest to the mouse position with helper method;
  //   const linePoint = mousePos.linePointNearest(this.startPos, this.pos);
  //   if (linePoint.distBetween(mousePos) < this.parentPath.lineWidth * 2) {
  //     debugger;
  //     this.parentPath.selected = true;
  //     this.parentPath.lineWidth = 10;
  //   } else {
  //     this.parentPath.selected = false;
  //     // this.lineWidth = 3;
  //   }
  // }

  checkClicked(mousePos, ctx) {
    // get the line point nearest to the mouse position with helper method;
    // const linePoint = mousePos.linePointNearest(this.startPos, this.endPos);
    // // hacky to see if line point is on line
    // if (((this.startPos.x > linePoint.x && linePoint.x > this.endPos.x) || (this.startPos.x < linePoint.x && linePoint.x < this.endPos.x)) &&
    //     ((this.startPos.y > linePoint.y && linePoint.y > this.endPos.y) || (this.startPos.y < linePoint.y && linePoint.y < this.endPos.y))) {
    //   if (linePoint.distBetween(mousePos) < 5) {
    //     this.toggleSelected();
    //     this.parentPath.muted = false;
    //     this.parentPath.map.togglePathsMute();
    //   }
    // }

    if (!this.shouldBeDrawn) {return false};

    ctx.save();
    // to make the are outside the line clickable
    ctx.lineWidth = 10;

    if (ctx.isPointInStroke(this.pathObj, mousePos.x, mousePos.y)) {
      this.toggleSelected();
      this.parentPath.muted = false;
      this.parentPath.map.togglePathsMute();
    };
    ctx.restore();
  }

  checkHovered(mousePos, ctx) {
    if (!this.shouldBeDrawn) {return false};

    ctx.save();
    // to make the are outside the line clickable
    ctx.lineWidth = 10;

    if (ctx.isPointInStroke(this.pathObj, mousePos.x, mousePos.y)) {
      ctx.restore();
      return true;
    };
  }

  toggleSelected() {
    this.parentPath.selected = !(this.parentPath.selected);
  }

  trainAdvanced(train) {
    this.pos = train.pos;
  }

  releaseTrain() {
    this.trains.shift();
    this.playSound();
  }

  draw(ctx, color, traceColor, traceWidth) {
    // draw from prev station to active train
    // WHEN THERE ARE MULTIPLE TRAINS ON A SEGMENT;
    let trainOrigin;
    let trainDestination;
    let midPoint;

    const train = this.trains[0];
    if (train) {
      trainOrigin = train.origin
      trainDestination = train.destination
      midPoint = train.pos
    } else {
      trainOrigin = this.startPos
      trainDestination = this.endPos
      midPoint = this.endPos
    }

    this.pathObj = new Path2D()
    this.pathObj.moveTo(trainOrigin.x, trainOrigin.y);
    this.pathObj.lineTo(midPoint.x, midPoint.y);
    this.pathObj.closePath();

    ctx.beginPath();
    ctx.moveTo(trainOrigin.x, trainOrigin.y);
    ctx.lineTo(midPoint.x, midPoint.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = this.parentPath.lineWidth;
    ctx.stroke();

    // draw trace from train to next station
    ctx.beginPath();
    ctx.moveTo(midPoint.x, midPoint.y);
    ctx.lineTo(trainDestination.x, trainDestination.y);
    ctx.strokeStyle = traceColor;
    ctx.lineWidth = traceWidth;
    ctx.stroke();

    this.drawStation(ctx);

    // draw the last station of the train
    if (this.train == [] && this.shouldBeDrawn) {
      this.drawStation(ctx, true);
    }
  }

  drawStation(ctx, end) {
    let station = this.trainOrigin
    if (end) station = this.trainDestination;

    ctx.beginPath();
    ctx.fillStyle = '#ffffff';
    ctx.arc(station.x, station.y, 2, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
  }

  drawTrace(ctx, color, width) {
    ctx.beginPath();
    ctx.moveTo(this.startPos.x, this.startPos.y);
    ctx.lineTo(this.endPos.x, this.endPos.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (PathSegment);


/***/ }),

/***/ "./lib/train.js":
/*!**********************!*\
  !*** ./lib/train.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color_helper */ "./lib/color_helper.js");


class TrainCar {
  constructor(path, dir, initialTrainPos, originSegment) {
    this.parentPath = path;
    this.speed = this.parentPath.getSpeed();

    this.dir = dir;

    this.origin = (dir > 0) ? originSegment.startPos : originSegment.endPos;
    this.destination = (dir < 0) ? originSegment.startPos : originSegment.endPos;

    this.currSegment = originSegment;

    this.pos = initialTrainPos

    this.isMoving = true;

    this.pulsing = false;
    // to start pulsing fast then slow
    this.pulseDampen = .5
    this.pulseAngle = 0;
  }

  draw(ctx) {
    const color = (this.parentPath.muted) ? '#fff' : this.parentPath.color;
    // BUG
    const lighter = Object(_color_helper__WEBPACK_IMPORTED_MODULE_0__["shadeHexColor"])(color, 20);

    let rad = 4
    let baseRad = 3
    if (this.parentPath.selected) { rad = 7; baseRad = 6 }
    if (this.pulsing) {
      rad = baseRad + 2 * Math.abs(Math.cos(this.pulseAngle));
      this.pulseAngle += (Math.PI / 12 * this.pulseDampen);

      ctx.beginPath();
      ctx.fillStyle = '#fff';
      ctx.arc(this.pos.x, this.pos.y, rad + 1, 0, Math.PI*2, false);
      ctx.closePath();
      ctx.fill();
      // once train has shrunk down to size it was stop pulsing and
      // reset pulse angle to 0 so it will grow next time again
      if (rad < baseRad + 1) {this.pulsing = false; this.pulseAngle = 0};
    }
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(this.pos.x, this.pos.y, rad, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
  }

  move(timeDelta) {
    // TODO refactor into helper methods, move forward move back
    const { trainOrigin, angle, backwardsAngle, totalLength, ord } = this.currSegment;
    const speedScale = timeDelta / NORMAL_FRAME_TIME_DELTA
    const speed = this.speed * speedScale;

    const trainAngle = (this.dir > 0) ? angle : backwardsAngle;
    // console.log(`mine: ${trainAngle}`)
    // console.log(`Bwrd: ${angle}, Fwrd: ${backwardsAngle}`)
    // console.log(`ord: ${ord}`)
    // console.log(`dir: ${this.dir}`)
    // console.log(`trainOrigin: [ ${trainOrigin.x},  ${trainOrigin.y} ]`)
    // console.log(`endpos curr seg: [ ${this.currSegment.endPos.x},  ${this.currSegment.endPos.y}]`)
    // console.log(`startpos curr seg: [ ${this.currSegment.startPos.x}, ${this.currSegment.startPos.y}]`)
    //
    // debugger;

    this.pos = this.pos.addVectorDiffs(speed, trainAngle);

    const trainTravelDist = this.origin.distBetween(this.pos);
    if ( trainTravelDist > totalLength ) {
      this.currSegment.releaseTrain();
      // reset the trains current seg to next seg
      // add train to next seg
      const nextOrd = (this.dir > 0) ? ord + 1 : ord - 1
      const nextSegment = this.parentPath.segments[nextOrd]

      if (nextSegment) {
        this.currSegment = nextSegment;

        // REFACTOR TO HELPER
        this.origin = (this.dir > 0) ? nextSegment.startPos : nextSegment.endPos;
        this.destination = (this.dir < 0) ? nextSegment.startPos : nextSegment.endPos;

        nextSegment.receiveTrain(this);
        this.pulsing = true;
      } else {
        this.removeSelf();
      }
    }
  }

  removeSelf() {
    if (this.dir > 0) {
      this.parentPath.fwdTrainsQueue.pop();
    } else if (this.dir < 0) {
      this.parentPath.bwdTrainsQueue.pop();
    }
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

/* harmony default export */ __webpack_exports__["default"] = (TrainCar);


/***/ }),

/***/ "./node_modules/assert/assert.js":
/*!***************************************!*\
  !*** ./node_modules/assert/assert.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(/*! util/ */ "./node_modules/util/util.js");
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/gl-mat4/determinant.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-mat4/determinant.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = determinant;

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};

/***/ }),

/***/ "./node_modules/gl-mat4/fromQuat.js":
/*!******************************************!*\
  !*** ./node_modules/gl-mat4/fromQuat.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = fromQuat;

/**
 * Creates a matrix from a quaternion rotation.
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @returns {mat4} out
 */
function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
};

/***/ }),

/***/ "./node_modules/gl-mat4/frustum.js":
/*!*****************************************!*\
  !*** ./node_modules/gl-mat4/frustum.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = frustum;

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left),
        tb = 1 / (top - bottom),
        nf = 1 / (near - far);
    out[0] = (near * 2) * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = (near * 2) * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (far * near * 2) * nf;
    out[15] = 0;
    return out;
};

/***/ }),

/***/ "./node_modules/gl-mat4/identity.js":
/*!******************************************!*\
  !*** ./node_modules/gl-mat4/identity.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = identity;

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/***/ }),

/***/ "./node_modules/gl-mat4/invert.js":
/*!****************************************!*\
  !*** ./node_modules/gl-mat4/invert.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = invert;

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
};

/***/ }),

/***/ "./node_modules/gl-mat4/lookAt.js":
/*!****************************************!*\
  !*** ./node_modules/gl-mat4/lookAt.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/gl-mat4/identity.js");

module.exports = lookAt;

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < 0.000001 &&
        Math.abs(eyey - centery) < 0.000001 &&
        Math.abs(eyez - centerz) < 0.000001) {
        return identity(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
};

/***/ }),

/***/ "./node_modules/gl-mat4/multiply.js":
/*!******************************************!*\
  !*** ./node_modules/gl-mat4/multiply.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = multiply;

/**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
};

/***/ }),

/***/ "./node_modules/gl-mat4/ortho.js":
/*!***************************************!*\
  !*** ./node_modules/gl-mat4/ortho.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ortho;

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
};

/***/ }),

/***/ "./node_modules/gl-mat4/perspective.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-mat4/perspective.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = perspective;

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
};

/***/ }),

/***/ "./node_modules/gl-mat4/rotate.js":
/*!****************************************!*\
  !*** ./node_modules/gl-mat4/rotate.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rotate;

/**
 * Rotates a mat4 by the given angle
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t,
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23,
        b00, b01, b02,
        b10, b11, b12,
        b20, b21, b22;

    if (Math.abs(len) < 0.000001) { return null; }
    
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};

/***/ }),

/***/ "./node_modules/gl-mat4/rotateX.js":
/*!*****************************************!*\
  !*** ./node_modules/gl-mat4/rotateX.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rotateX;

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[0]  = a[0];
        out[1]  = a[1];
        out[2]  = a[2];
        out[3]  = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
};

/***/ }),

/***/ "./node_modules/gl-mat4/rotateY.js":
/*!*****************************************!*\
  !*** ./node_modules/gl-mat4/rotateY.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rotateY;

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4]  = a[4];
        out[5]  = a[5];
        out[6]  = a[6];
        out[7]  = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
};

/***/ }),

/***/ "./node_modules/gl-mat4/rotateZ.js":
/*!*****************************************!*\
  !*** ./node_modules/gl-mat4/rotateZ.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rotateZ;

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
};

/***/ }),

/***/ "./node_modules/gl-mat4/scale.js":
/*!***************************************!*\
  !*** ./node_modules/gl-mat4/scale.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = scale;

/**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
    var x = v[0], y = v[1], z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/***/ }),

/***/ "./node_modules/gl-mat4/translate.js":
/*!*******************************************!*\
  !*** ./node_modules/gl-mat4/translate.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = translate;

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};

/***/ }),

/***/ "./node_modules/gl-mat4/transpose.js":
/*!*******************************************!*\
  !*** ./node_modules/gl-mat4/transpose.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = transpose;

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3],
            a12 = a[6], a13 = a[7],
            a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    
    return out;
};

/***/ }),

/***/ "./node_modules/gl-quat/add.js":
/*!*************************************!*\
  !*** ./node_modules/gl-quat/add.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
module.exports = __webpack_require__(/*! gl-vec4/add */ "./node_modules/gl-vec4/add.js")


/***/ }),

/***/ "./node_modules/gl-quat/calculateW.js":
/*!********************************************!*\
  !*** ./node_modules/gl-quat/calculateW.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = calculateW

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
function calculateW (out, a) {
  var x = a[0], y = a[1], z = a[2]

  out[0] = x
  out[1] = y
  out[2] = z
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z))
  return out
}


/***/ }),

/***/ "./node_modules/gl-quat/conjugate.js":
/*!*******************************************!*\
  !*** ./node_modules/gl-quat/conjugate.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = conjugate

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate (out, a) {
  out[0] = -a[0]
  out[1] = -a[1]
  out[2] = -a[2]
  out[3] = a[3]
  return out
}


/***/ }),

/***/ "./node_modules/gl-quat/dot.js":
/*!*************************************!*\
  !*** ./node_modules/gl-quat/dot.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
module.exports = __webpack_require__(/*! gl-vec4/dot */ "./node_modules/gl-vec4/dot.js")


/***/ }),

/***/ "./node_modules/gl-quat/fromMat3.js":
/*!******************************************!*\
  !*** ./node_modules/gl-quat/fromMat3.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = fromMat3

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3 (out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8]
  var fRoot

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0)  // 2w
    out[3] = 0.5 * fRoot
    fRoot = 0.5 / fRoot  // 1/(4w)
    out[0] = (m[5] - m[7]) * fRoot
    out[1] = (m[6] - m[2]) * fRoot
    out[2] = (m[1] - m[3]) * fRoot
  } else {
    // |w| <= 1/2
    var i = 0
    if (m[4] > m[0]) {
      i = 1
    }
    if (m[8] > m[i * 3 + i]) {
      i = 2
    }
    var j = (i + 1) % 3
    var k = (i + 2) % 3

    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0)
    out[i] = 0.5 * fRoot
    fRoot = 0.5 / fRoot
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot
  }

  return out
}


/***/ }),

/***/ "./node_modules/gl-quat/identity.js":
/*!******************************************!*\
  !*** ./node_modules/gl-quat/identity.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = identity

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity (out) {
  out[0] = 0
  out[1] = 0
  out[2] = 0
  out[3] = 1
  return out
}


/***/ }),

/***/ "./node_modules/gl-quat/invert.js":
/*!****************************************!*\
  !*** ./node_modules/gl-quat/invert.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = invert

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert (out, a) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
    dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3,
    invDot = dot ? 1.0 / dot : 0

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot
  out[1] = -a1 * invDot
  out[2] = -a2 * invDot
  out[3] = a3 * invDot
  return out
}


/***/ }),

/***/ "./node_modules/gl-quat/length.js":
/*!****************************************!*\
  !*** ./node_modules/gl-quat/length.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 * @function
 */
module.exports = __webpack_require__(/*! gl-vec4/length */ "./node_modules/gl-vec4/length.js")


/***/ }),

/***/ "./node_modules/gl-quat/lerp.js":
/*!**************************************!*\
  !*** ./node_modules/gl-quat/lerp.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
module.exports = __webpack_require__(/*! gl-vec4/lerp */ "./node_modules/gl-vec4/lerp.js")


/***/ }),

/***/ "./node_modules/gl-quat/multiply.js":
/*!******************************************!*\
  !*** ./node_modules/gl-quat/multiply.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = multiply

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply (out, a, b) {
  var ax = a[0], ay = a[1], az = a[2], aw = a[3],
    bx = b[0], by = b[1], bz = b[2], bw = b[3]

  out[0] = ax * bw + aw * bx + ay * bz - az * by
  out[1] = ay * bw + aw * by + az * bx - ax * bz
  out[2] = az * bw + aw * bz + ax * by - ay * bx
  out[3] = aw * bw - ax * bx - ay * by - az * bz
  return out
}


/***/ }),

/***/ "./node_modules/gl-quat/normalize.js":
/*!*******************************************!*\
  !*** ./node_modules/gl-quat/normalize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
module.exports = __webpack_require__(/*! gl-vec4/normalize */ "./node_modules/gl-vec4/normalize.js")


/***/ }),

/***/ "./node_modules/gl-quat/rotateX.js":
/*!*****************************************!*\
  !*** ./node_modules/gl-quat/rotateX.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rotateX

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX (out, a, rad) {
  rad *= 0.5

  var ax = a[0], ay = a[1], az = a[2], aw = a[3],
    bx = Math.sin(rad), bw = Math.cos(rad)

  out[0] = ax * bw + aw * bx
  out[1] = ay * bw + az * bx
  out[2] = az * bw - ay * bx
  out[3] = aw * bw - ax * bx
  return out
}


/***/ }),

/***/ "./node_modules/gl-quat/rotateY.js":
/*!*****************************************!*\
  !*** ./node_modules/gl-quat/rotateY.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rotateY

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY (out, a, rad) {
  rad *= 0.5

  var ax = a[0], ay = a[1], az = a[2], aw = a[3],
    by = Math.sin(rad), bw = Math.cos(rad)

  out[0] = ax * bw - az * by
  out[1] = ay * bw + aw * by
  out[2] = az * bw + ax * by
  out[3] = aw * bw - ay * by
  return out
}


/***/ }),

/***/ "./node_modules/gl-quat/rotateZ.js":
/*!*****************************************!*\
  !*** ./node_modules/gl-quat/rotateZ.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rotateZ

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ (out, a, rad) {
  rad *= 0.5

  var ax = a[0], ay = a[1], az = a[2], aw = a[3],
    bz = Math.sin(rad), bw = Math.cos(rad)

  out[0] = ax * bw + ay * bz
  out[1] = ay * bw - ax * bz
  out[2] = az * bw + aw * bz
  out[3] = aw * bw - az * bz
  return out
}


/***/ }),

/***/ "./node_modules/gl-quat/rotationTo.js":
/*!********************************************!*\
  !*** ./node_modules/gl-quat/rotationTo.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var vecDot = __webpack_require__(/*! gl-vec3/dot */ "./node_modules/gl-vec3/dot.js")
var vecCross = __webpack_require__(/*! gl-vec3/cross */ "./node_modules/gl-vec3/cross.js")
var vecLength = __webpack_require__(/*! gl-vec3/length */ "./node_modules/gl-vec3/length.js")
var vecNormalize = __webpack_require__(/*! gl-vec3/normalize */ "./node_modules/gl-vec3/normalize.js")

var quatNormalize = __webpack_require__(/*! ./normalize */ "./node_modules/gl-quat/normalize.js")
var quatAxisAngle = __webpack_require__(/*! ./setAxisAngle */ "./node_modules/gl-quat/setAxisAngle.js")

module.exports = rotationTo

var tmpvec3 = [0, 0, 0]
var xUnitVec3 = [1, 0, 0]
var yUnitVec3 = [0, 1, 0]

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
function rotationTo (out, a, b) {
  var dot = vecDot(a, b)
  if (dot < -0.999999) {
    vecCross(tmpvec3, xUnitVec3, a)
    if (vecLength(tmpvec3) < 0.000001) {
      vecCross(tmpvec3, yUnitVec3, a)
    }
    vecNormalize(tmpvec3, tmpvec3)
    quatAxisAngle(out, tmpvec3, Math.PI)
    return out
  } else if (dot > 0.999999) {
    out[0] = 0
    out[1] = 0
    out[2] = 0
    out[3] = 1
    return out
  } else {
    vecCross(tmpvec3, a, b)
    out[0] = tmpvec3[0]
    out[1] = tmpvec3[1]
    out[2] = tmpvec3[2]
    out[3] = 1 + dot
    return quatNormalize(out, out)
  }
}


/***/ }),

/***/ "./node_modules/gl-quat/scale.js":
/*!***************************************!*\
  !*** ./node_modules/gl-quat/scale.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
module.exports = __webpack_require__(/*! gl-vec4/scale */ "./node_modules/gl-vec4/scale.js")


/***/ }),

/***/ "./node_modules/gl-quat/set.js":
/*!*************************************!*\
  !*** ./node_modules/gl-quat/set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
module.exports = __webpack_require__(/*! gl-vec4/set */ "./node_modules/gl-vec4/set.js")


/***/ }),

/***/ "./node_modules/gl-quat/setAxisAngle.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-quat/setAxisAngle.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = setAxisAngle

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle (out, axis, rad) {
  rad = rad * 0.5
  var s = Math.sin(rad)
  out[0] = s * axis[0]
  out[1] = s * axis[1]
  out[2] = s * axis[2]
  out[3] = Math.cos(rad)
  return out
}


/***/ }),

/***/ "./node_modules/gl-quat/slerp.js":
/*!***************************************!*\
  !*** ./node_modules/gl-quat/slerp.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = slerp

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
function slerp (out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations

  var ax = a[0], ay = a[1], az = a[2], aw = a[3],
    bx = b[0], by = b[1], bz = b[2], bw = b[3]

  var omega, cosom, sinom, scale0, scale1

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw
  // adjust signs (if necessary)
  if (cosom < 0.0) {
    cosom = -cosom
    bx = -bx
    by = -by
    bz = -bz
    bw = -bw
  }
  // calculate coefficients
  if ((1.0 - cosom) > 0.000001) {
    // standard case (slerp)
    omega = Math.acos(cosom)
    sinom = Math.sin(omega)
    scale0 = Math.sin((1.0 - t) * omega) / sinom
    scale1 = Math.sin(t * omega) / sinom
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t
    scale1 = t
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx
  out[1] = scale0 * ay + scale1 * by
  out[2] = scale0 * az + scale1 * bz
  out[3] = scale0 * aw + scale1 * bw

  return out
}


/***/ }),

/***/ "./node_modules/gl-quat/squaredLength.js":
/*!***********************************************!*\
  !*** ./node_modules/gl-quat/squaredLength.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
module.exports = __webpack_require__(/*! gl-vec4/squaredLength */ "./node_modules/gl-vec4/squaredLength.js")


/***/ }),

/***/ "./node_modules/gl-vec2/add.js":
/*!*************************************!*\
  !*** ./node_modules/gl-vec2/add.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = add

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec2/cross.js":
/*!***************************************!*\
  !*** ./node_modules/gl-vec2/cross.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = cross

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0]
    out[0] = out[1] = 0
    out[2] = z
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec2/divide.js":
/*!****************************************!*\
  !*** ./node_modules/gl-vec2/divide.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = divide

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0]
    out[1] = a[1] / b[1]
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec2/dot.js":
/*!*************************************!*\
  !*** ./node_modules/gl-vec2/dot.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dot

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1]
}

/***/ }),

/***/ "./node_modules/gl-vec2/lerp.js":
/*!**************************************!*\
  !*** ./node_modules/gl-vec2/lerp.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = lerp

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
    var ax = a[0],
        ay = a[1]
    out[0] = ax + t * (b[0] - ax)
    out[1] = ay + t * (b[1] - ay)
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec2/multiply.js":
/*!******************************************!*\
  !*** ./node_modules/gl-vec2/multiply.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = multiply

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec2/negate.js":
/*!****************************************!*\
  !*** ./node_modules/gl-vec2/negate.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = negate

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
    out[0] = -a[0]
    out[1] = -a[1]
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec2/normalize.js":
/*!*******************************************!*\
  !*** ./node_modules/gl-vec2/normalize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = normalize

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1]
    var len = x*x + y*y
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len)
        out[0] = a[0] * len
        out[1] = a[1] * len
    }
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec2/scale.js":
/*!***************************************!*\
  !*** ./node_modules/gl-vec2/scale.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = scale

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b
    out[1] = a[1] * b
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec2/scaleAndAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-vec2/scaleAndAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = scaleAndAdd

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale)
    out[1] = a[1] + (b[1] * scale)
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec2/set.js":
/*!*************************************!*\
  !*** ./node_modules/gl-vec2/set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = set

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
    out[0] = x
    out[1] = y
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec2/subtract.js":
/*!******************************************!*\
  !*** ./node_modules/gl-vec2/subtract.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = subtract

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec2/transformMat4.js":
/*!***********************************************!*\
  !*** ./node_modules/gl-vec2/transformMat4.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = transformMat4

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
    var x = a[0], 
        y = a[1]
    out[0] = m[0] * x + m[4] * y + m[12]
    out[1] = m[1] * x + m[5] * y + m[13]
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec3/add.js":
/*!*************************************!*\
  !*** ./node_modules/gl-vec3/add.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = add;

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    out[2] = a[2] + b[2]
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec3/angle.js":
/*!***************************************!*\
  !*** ./node_modules/gl-vec3/angle.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = angle

var fromValues = __webpack_require__(/*! ./fromValues */ "./node_modules/gl-vec3/fromValues.js")
var normalize = __webpack_require__(/*! ./normalize */ "./node_modules/gl-vec3/normalize.js")
var dot = __webpack_require__(/*! ./dot */ "./node_modules/gl-vec3/dot.js")

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
    var tempA = fromValues(a[0], a[1], a[2])
    var tempB = fromValues(b[0], b[1], b[2])
 
    normalize(tempA, tempA)
    normalize(tempB, tempB)
 
    var cosine = dot(tempA, tempB)

    if(cosine > 1.0){
        return 0
    } else {
        return Math.acos(cosine)
    }     
}


/***/ }),

/***/ "./node_modules/gl-vec3/cross.js":
/*!***************************************!*\
  !*** ./node_modules/gl-vec3/cross.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = cross;

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2]

    out[0] = ay * bz - az * by
    out[1] = az * bx - ax * bz
    out[2] = ax * by - ay * bx
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec3/divide.js":
/*!****************************************!*\
  !*** ./node_modules/gl-vec3/divide.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = divide;

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0]
    out[1] = a[1] / b[1]
    out[2] = a[2] / b[2]
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec3/dot.js":
/*!*************************************!*\
  !*** ./node_modules/gl-vec3/dot.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dot;

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}

/***/ }),

/***/ "./node_modules/gl-vec3/fromValues.js":
/*!********************************************!*\
  !*** ./node_modules/gl-vec3/fromValues.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = fromValues;

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
    var out = new Float32Array(3)
    out[0] = x
    out[1] = y
    out[2] = z
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec3/length.js":
/*!****************************************!*\
  !*** ./node_modules/gl-vec3/length.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = length;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    return Math.sqrt(x*x + y*y + z*z)
}

/***/ }),

/***/ "./node_modules/gl-vec3/multiply.js":
/*!******************************************!*\
  !*** ./node_modules/gl-vec3/multiply.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = multiply;

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
    out[2] = a[2] * b[2]
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec3/normalize.js":
/*!*******************************************!*\
  !*** ./node_modules/gl-vec3/normalize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = normalize;

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    var len = x*x + y*y + z*z
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len)
        out[0] = a[0] * len
        out[1] = a[1] * len
        out[2] = a[2] * len
    }
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec3/rotateX.js":
/*!*****************************************!*\
  !*** ./node_modules/gl-vec3/rotateX.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rotateX;

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c){
    var p = [], r=[]
    //Translate point to the origin
    p[0] = a[0] - b[0]
    p[1] = a[1] - b[1]
    p[2] = a[2] - b[2]

    //perform rotation
    r[0] = p[0]
    r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c)
    r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c)

    //translate to correct position
    out[0] = r[0] + b[0]
    out[1] = r[1] + b[1]
    out[2] = r[2] + b[2]

    return out
}

/***/ }),

/***/ "./node_modules/gl-vec3/rotateY.js":
/*!*****************************************!*\
  !*** ./node_modules/gl-vec3/rotateY.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rotateY;

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c){
    var p = [], r=[]
    //Translate point to the origin
    p[0] = a[0] - b[0]
    p[1] = a[1] - b[1]
    p[2] = a[2] - b[2]
  
    //perform rotation
    r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c)
    r[1] = p[1]
    r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c)
  
    //translate to correct position
    out[0] = r[0] + b[0]
    out[1] = r[1] + b[1]
    out[2] = r[2] + b[2]
  
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec3/rotateZ.js":
/*!*****************************************!*\
  !*** ./node_modules/gl-vec3/rotateZ.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rotateZ;

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c){
    var p = [], r=[]
    //Translate point to the origin
    p[0] = a[0] - b[0]
    p[1] = a[1] - b[1]
    p[2] = a[2] - b[2]
  
    //perform rotation
    r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c)
    r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c)
    r[2] = p[2]
  
    //translate to correct position
    out[0] = r[0] + b[0]
    out[1] = r[1] + b[1]
    out[2] = r[2] + b[2]
  
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec3/scale.js":
/*!***************************************!*\
  !*** ./node_modules/gl-vec3/scale.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = scale;

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b
    out[1] = a[1] * b
    out[2] = a[2] * b
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec3/scaleAndAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-vec3/scaleAndAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = scaleAndAdd;

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale)
    out[1] = a[1] + (b[1] * scale)
    out[2] = a[2] + (b[2] * scale)
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec3/set.js":
/*!*************************************!*\
  !*** ./node_modules/gl-vec3/set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = set;

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
    out[0] = x
    out[1] = y
    out[2] = z
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec3/subtract.js":
/*!******************************************!*\
  !*** ./node_modules/gl-vec3/subtract.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = subtract;

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    out[2] = a[2] - b[2]
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec3/transformMat4.js":
/*!***********************************************!*\
  !*** ./node_modules/gl-vec3/transformMat4.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = transformMat4;

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2],
        w = m[3] * x + m[7] * y + m[11] * z + m[15]
    w = w || 1.0
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w
    return out
}

/***/ }),

/***/ "./node_modules/gl-vec4/add.js":
/*!*************************************!*\
  !*** ./node_modules/gl-vec4/add.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = add

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add (out, a, b) {
  out[0] = a[0] + b[0]
  out[1] = a[1] + b[1]
  out[2] = a[2] + b[2]
  out[3] = a[3] + b[3]
  return out
}


/***/ }),

/***/ "./node_modules/gl-vec4/distance.js":
/*!******************************************!*\
  !*** ./node_modules/gl-vec4/distance.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = distance

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance (a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1],
    z = b[2] - a[2],
    w = b[3] - a[3]
  return Math.sqrt(x * x + y * y + z * z + w * w)
}


/***/ }),

/***/ "./node_modules/gl-vec4/divide.js":
/*!****************************************!*\
  !*** ./node_modules/gl-vec4/divide.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = divide

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function divide (out, a, b) {
  out[0] = a[0] / b[0]
  out[1] = a[1] / b[1]
  out[2] = a[2] / b[2]
  out[3] = a[3] / b[3]
  return out
}


/***/ }),

/***/ "./node_modules/gl-vec4/dot.js":
/*!*************************************!*\
  !*** ./node_modules/gl-vec4/dot.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dot

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot (a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
}


/***/ }),

/***/ "./node_modules/gl-vec4/inverse.js":
/*!*****************************************!*\
  !*** ./node_modules/gl-vec4/inverse.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = inverse

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
function inverse (out, a) {
  out[0] = 1.0 / a[0]
  out[1] = 1.0 / a[1]
  out[2] = 1.0 / a[2]
  out[3] = 1.0 / a[3]
  return out
}


/***/ }),

/***/ "./node_modules/gl-vec4/length.js":
/*!****************************************!*\
  !*** ./node_modules/gl-vec4/length.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = length

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length (a) {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3]
  return Math.sqrt(x * x + y * y + z * z + w * w)
}


/***/ }),

/***/ "./node_modules/gl-vec4/lerp.js":
/*!**************************************!*\
  !*** ./node_modules/gl-vec4/lerp.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = lerp

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
function lerp (out, a, b, t) {
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3]
  out[0] = ax + t * (b[0] - ax)
  out[1] = ay + t * (b[1] - ay)
  out[2] = az + t * (b[2] - az)
  out[3] = aw + t * (b[3] - aw)
  return out
}


/***/ }),

/***/ "./node_modules/gl-vec4/multiply.js":
/*!******************************************!*\
  !*** ./node_modules/gl-vec4/multiply.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = multiply

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function multiply (out, a, b) {
  out[0] = a[0] * b[0]
  out[1] = a[1] * b[1]
  out[2] = a[2] * b[2]
  out[3] = a[3] * b[3]
  return out
}


/***/ }),

/***/ "./node_modules/gl-vec4/negate.js":
/*!****************************************!*\
  !*** ./node_modules/gl-vec4/negate.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = negate

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
function negate (out, a) {
  out[0] = -a[0]
  out[1] = -a[1]
  out[2] = -a[2]
  out[3] = -a[3]
  return out
}


/***/ }),

/***/ "./node_modules/gl-vec4/normalize.js":
/*!*******************************************!*\
  !*** ./node_modules/gl-vec4/normalize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = normalize

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize (out, a) {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3]
  var len = x * x + y * y + z * z + w * w
  if (len > 0) {
    len = 1 / Math.sqrt(len)
    out[0] = x * len
    out[1] = y * len
    out[2] = z * len
    out[3] = w * len
  }
  return out
}


/***/ }),

/***/ "./node_modules/gl-vec4/scale.js":
/*!***************************************!*\
  !*** ./node_modules/gl-vec4/scale.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = scale

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale (out, a, b) {
  out[0] = a[0] * b
  out[1] = a[1] * b
  out[2] = a[2] * b
  out[3] = a[3] * b
  return out
}


/***/ }),

/***/ "./node_modules/gl-vec4/scaleAndAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-vec4/scaleAndAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = scaleAndAdd

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd (out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale)
  out[1] = a[1] + (b[1] * scale)
  out[2] = a[2] + (b[2] * scale)
  out[3] = a[3] + (b[3] * scale)
  return out
}


/***/ }),

/***/ "./node_modules/gl-vec4/set.js":
/*!*************************************!*\
  !*** ./node_modules/gl-vec4/set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = set

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set (out, x, y, z, w) {
  out[0] = x
  out[1] = y
  out[2] = z
  out[3] = w
  return out
}


/***/ }),

/***/ "./node_modules/gl-vec4/squaredLength.js":
/*!***********************************************!*\
  !*** ./node_modules/gl-vec4/squaredLength.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = squaredLength

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength (a) {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3]
  return x * x + y * y + z * z + w * w
}


/***/ }),

/***/ "./node_modules/gl-vec4/subtract.js":
/*!******************************************!*\
  !*** ./node_modules/gl-vec4/subtract.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = subtract

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function subtract (out, a, b) {
  out[0] = a[0] - b[0]
  out[1] = a[1] - b[1]
  out[2] = a[2] - b[2]
  out[3] = a[3] - b[3]
  return out
}


/***/ }),

/***/ "./node_modules/gl-vec4/transformMat4.js":
/*!***********************************************!*\
  !*** ./node_modules/gl-vec4/transformMat4.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = transformMat4

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4 (out, a, m) {
  var x = a[0], y = a[1], z = a[2], w = a[3]
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w
  return out
}


/***/ }),

/***/ "./node_modules/math.gl/dist-es6/common.js":
/*!*************************************************!*\
  !*** ./node_modules/math.gl/dist-es6/common.js ***!
  \*************************************************/
/*! exports provided: config, configure, checkNumber, formatValue, formatAngle, isArray, clone, radians, degrees, sin, cos, tan, asin, acos, atan, clamp, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkNumber", function() { return checkNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatValue", function() { return formatValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatAngle", function() { return formatAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radians", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tan", function() { return tan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return asin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return acos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
var config={EPSILON:1e-12,debug:!0,precision:4,printTypes:!1,printDegrees:!1,printRowMajor:!0};function configure(options){'epsilon'in options&&(config.EPSILON=options.epsilon),'debug'in options&&(config.debug=options.debug)}function checkNumber(value){if(!Number.isFinite(value))throw new Error('Invalid number '+value);return value}function round(value){return Math.round(value/config.EPSILON)*config.EPSILON}function formatValue(value){var _ref=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},_ref$precision=_ref.precision,precision=void 0===_ref$precision?config.precision||4:_ref$precision;return value=round(value),parseFloat(value.toPrecision(precision))}function formatAngle(value){var _ref2=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},_ref2$precision=_ref2.precision,precision=void 0===_ref2$precision?config.precision||4:_ref2$precision,_ref2$printDegrees=_ref2.printDegrees,printDegrees=void 0===_ref2$printDegrees?config.printAngles:_ref2$printDegrees;return value=printDegrees?degrees(value):value,value=round(value),''+parseFloat(value.toPrecision(precision))+(printDegrees?'\xB0':'')}function isArray(value){return Array.isArray(value)||ArrayBuffer.isView(value)&&value.length!==void 0}function clone(array){return array.clone?array.clone():Array(array)}function map(value,func){if(isArray(value)){for(var result=clone(value),i=0;i<result.length;++i)result[i]=func(result[i],i,result);return result}return func(value)}function radians(degrees){return map(degrees,function(degrees){return degrees/180*Math.PI})}function degrees(radians){return map(radians,function(radians){return 180*radians/Math.PI})}function sin(radians){return map(radians,function(angle){return Math.sin(angle)})}function cos(radians){return map(radians,function(angle){return Math.cos(angle)})}function tan(radians){return map(radians,function(angle){return Math.tan(angle)})}function asin(radians){return map(radians,function(angle){return Math.asin(angle)})}function acos(radians){return map(radians,function(angle){return Math.acos(angle)})}function atan(radians){return map(radians,function(angle){return Math.atan(angle)})}function clamp(value,min,max){return map(value,function(value){return Math.max(min,Math.min(max,value))})}function equals(a,b){var _Mathabs=Math.abs;if(Array.isArray(a)&&Array.isArray(b)){if(a===b)return!0;if(a.length!==b.length)return!1;for(var i=0;i<a.length;++i)if(!equals(a[i],b[i]))return!1;return!0}return _Mathabs(a-b)<=config.EPSILON*Math.max(1,_Mathabs(a),_Mathabs(b))}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/math.gl/dist-es6/euler.js":
/*!************************************************!*\
  !*** ./node_modules/math.gl/dist-es6/euler.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-array */ "./node_modules/math.gl/dist-es6/math-array.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/math.gl/dist-es6/common.js");
/* harmony import */ var _matrix4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matrix4 */ "./node_modules/math.gl/dist-es6/matrix4.js");
/* harmony import */ var _quaternion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quaternion */ "./node_modules/math.gl/dist-es6/quaternion.js");
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vector3 */ "./node_modules/math.gl/dist-es6/vector3.js");
var _createClass=function(){function defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,'value'in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return call&&('object'==typeof call||'function'==typeof call)?call:self}function _inherits(subClass,superClass){if('function'!=typeof superClass&&null!==superClass)throw new TypeError('Super expression must either be null or a function, not '+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var ERR_UNKNOWN_ORDER='Unknown Euler angle order',ALMOST_ONE=.99999;function validateOrder(value){return 0<=value&&6>value}function checkOrder(value){if(0>value&&6<=value)throw new Error(ERR_UNKNOWN_ORDER);return value}var Euler=function(_MathArray){function Euler(){var x=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,y=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,z=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,order=3<arguments.length&&void 0!==arguments[3]?arguments[3]:Euler.DefaultOrder;_classCallCheck(this,Euler);var _this=_possibleConstructorReturn(this,(Euler.__proto__||Object.getPrototypeOf(Euler)).call(this));return 0<arguments.length&&Array.isArray(arguments[0])?_this.fromVector3.apply(_this,arguments):_this.set(x,y,z,order),_this}var _NumberisFinite=Number.isFinite;return _inherits(Euler,_MathArray),_createClass(Euler,[{key:'ELEMENTS',get:function get(){return 4}}],[{key:'rotationOrder',value:function rotationOrder(order){return Euler.RotationOrders[order]}},{key:'ZYX',get:function get(){return 0}},{key:'YXZ',get:function get(){return 1}},{key:'XZY',get:function get(){return 2}},{key:'ZXY',get:function get(){return 3}},{key:'YZX',get:function get(){return 4}},{key:'XYZ',get:function get(){return 5}},{key:'RollPitchYaw',get:function get(){return 0}},{key:'DefaultOrder',get:function get(){return Euler.ZYX}},{key:'RotationOrders',get:function get(){return['ZYX','YXZ','XZY','ZXY','YZX','XYZ']}}]),_createClass(Euler,[{key:'copy',value:function copy(array){for(var i=0;3>i;++i)this[i]=array[i];return this[3]=_NumberisFinite(array[3])||this.order,this.check(),this}},{key:'set',value:function set(){var x=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,y=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,z=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,order=arguments[3];return this[0]=x,this[1]=y,this[2]=z,this[3]=_NumberisFinite(order)?order:this[3],this.check(),this}},{key:'validate',value:function validate(){return validateOrder(this[3])&&_NumberisFinite(this[0])&&_NumberisFinite(this[1])&&_NumberisFinite(this[2])}},{key:'toArray',value:function toArray(){var array=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],offset=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;return array[offset]=this[0],array[offset+1]=this[1],array[offset+2]=this[2],array}},{key:'toArray4',value:function toArray4(){var array=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],offset=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;return array[offset]=this[0],array[offset+1]=this[1],array[offset+2]=this[2],array[offset+3]=this[3],array}},{key:'toVector3',value:function toVector3(optionalResult){return optionalResult?optionalResult.set(this[0],this[1],this[2]):new _vector3__WEBPACK_IMPORTED_MODULE_4__["default"](this[0],this[1],this[2])}},{key:'fromVector3',value:function fromVector3(v,order){return this.set(v[0],v[1],v[2],_NumberisFinite(order)?order:this[3])}},{key:'fromArray',value:function fromArray(array){var offset=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;return this[0]=array[0+offset],this[1]=array[1+offset],this[2]=array[2+offset],void 0!==array[3]&&(this[3]=array[3]),this.check(),this}},{key:'fromRollPitchYaw',value:function fromRollPitchYaw(roll,pitch,yaw){return this.set(roll,pitch,yaw,Euler.ZYX)}},{key:'fromQuaternion',value:function fromQuaternion(q,order){return this._fromRotationMatrix(_matrix4__WEBPACK_IMPORTED_MODULE_2__["default"].fromQuaternion(q),order),this.check(),this}},{key:'fromRotationMatrix',value:function fromRotationMatrix(m){var order=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Euler.DefaultOrder;return this._fromRotationMatrix(m,order),this.check(),this}},{key:'getRotationMatrix',value:function getRotationMatrix(){var m=0<arguments.length&&void 0!==arguments[0]?arguments[0]:new _matrix4__WEBPACK_IMPORTED_MODULE_2__["default"];return this._getRotationMatrix(m),m}},{key:'getQuaternion',value:function getQuaternion(){var q=new _quaternion__WEBPACK_IMPORTED_MODULE_3__["default"];switch(this[4]){case Euler.XYZ:return q.rotateX(this[0]).rotateY(this[1]).rotateZ(this[2]);case Euler.YXZ:return q.rotateY(this[0]).rotateX(this[1]).rotateZ(this[2]);case Euler.ZXY:return q.rotateZ(this[0]).rotateX(this[1]).rotateY(this[2]);case Euler.ZYX:return q.rotateZ(this[0]).rotateY(this[1]).rotateX(this[2]);case Euler.YZX:return q.rotateY(this[0]).rotateZ(this[1]).rotateX(this[2]);case Euler.XZY:return q.rotateX(this[0]).rotateZ(this[1]).rotateY(this[2]);default:throw new Error(ERR_UNKNOWN_ORDER);}}},{key:'_fromRotationMatrix',value:function _fromRotationMatrix(m){var _Mathatan=Math.atan2,_Mathabs=Math.abs,_Mathasin=Math.asin,order=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Euler.DefaultOrder,te=m.elements,m11=te[0],m12=te[4],m13=te[8],m21=te[1],m22=te[5],m23=te[9],m31=te[2],m32=te[6],m33=te[10];switch(order=order||this[3],order){case Euler.XYZ:this[1]=_Mathasin(Object(_common__WEBPACK_IMPORTED_MODULE_1__["clamp"])(m13,-1,1)),_Mathabs(m13)<ALMOST_ONE?(this[0]=_Mathatan(-m23,m33),this[2]=_Mathatan(-m12,m11)):(this[0]=_Mathatan(m32,m22),this[2]=0);break;case Euler.YXZ:this[0]=_Mathasin(-Object(_common__WEBPACK_IMPORTED_MODULE_1__["clamp"])(m23,-1,1)),_Mathabs(m23)<ALMOST_ONE?(this[1]=_Mathatan(m13,m33),this[2]=_Mathatan(m21,m22)):(this[1]=_Mathatan(-m31,m11),this[2]=0);break;case Euler.ZXY:this[0]=_Mathasin(Object(_common__WEBPACK_IMPORTED_MODULE_1__["clamp"])(m32,-1,1)),_Mathabs(m32)<ALMOST_ONE?(this[1]=_Mathatan(-m31,m33),this[2]=_Mathatan(-m12,m22)):(this[1]=0,this[2]=_Mathatan(m21,m11));break;case Euler.ZYX:this[1]=_Mathasin(-Object(_common__WEBPACK_IMPORTED_MODULE_1__["clamp"])(m31,-1,1)),_Mathabs(m31)<ALMOST_ONE?(this[0]=_Mathatan(m32,m33),this[2]=_Mathatan(m21,m11)):(this[0]=0,this[2]=_Mathatan(-m12,m22));break;case Euler.YZX:this[2]=_Mathasin(Object(_common__WEBPACK_IMPORTED_MODULE_1__["clamp"])(m21,-1,1)),_Mathabs(m21)<ALMOST_ONE?(this[0]=_Mathatan(-m23,m22),this[1]=_Mathatan(-m31,m11)):(this[0]=0,this[1]=_Mathatan(m13,m33));break;case Euler.XZY:this[2]=_Mathasin(-Object(_common__WEBPACK_IMPORTED_MODULE_1__["clamp"])(m12,-1,1)),_Mathabs(m12)<ALMOST_ONE?(this[0]=_Mathatan(m32,m22),this[1]=_Mathatan(m13,m11)):(this[0]=_Mathatan(-m23,m33),this[1]=0);break;default:throw new Error(ERR_UNKNOWN_ORDER);}return this[3]=order,this}},{key:'_getRotationMatrix',value:function _getRotationMatrix(){var _Mathsin=Math.sin,_Mathcos=Math.cos,te=new _matrix4__WEBPACK_IMPORTED_MODULE_2__["default"],x=this.x,y=this.y,z=this.z,a=_Mathcos(x),c=_Mathcos(y),e=_Mathcos(z),b=_Mathsin(x),d=_Mathsin(y),f=_Mathsin(z);switch(this[3]){case Euler.XYZ:{var ae=a*e,af=a*f,be=b*e,bf=b*f;te[0]=c*e,te[4]=-c*f,te[8]=d,te[1]=af+be*d,te[5]=ae-bf*d,te[9]=-b*c,te[2]=bf-ae*d,te[6]=be+af*d,te[10]=a*c;break}case Euler.YXZ:{var ce=c*e,cf=c*f,de=d*e,df=d*f;te[0]=ce+df*b,te[4]=de*b-cf,te[8]=a*d,te[1]=a*f,te[5]=a*e,te[9]=-b,te[2]=cf*b-de,te[6]=df+ce*b,te[10]=a*c;break}case Euler.ZXY:{var _ce=c*e,_cf=c*f,_de=d*e,_df=d*f;te[0]=_ce-_df*b,te[4]=-a*f,te[8]=_de+_cf*b,te[1]=_cf+_de*b,te[5]=a*e,te[9]=_df-_ce*b,te[2]=-a*d,te[6]=b,te[10]=a*c;break}case Euler.ZYX:{var _ae=a*e,_af=a*f,_be=b*e,_bf=b*f;te[0]=c*e,te[4]=_be*d-_af,te[8]=_ae*d+_bf,te[1]=c*f,te[5]=_bf*d+_ae,te[9]=_af*d-_be,te[2]=-d,te[6]=b*c,te[10]=a*c;break}case Euler.YZX:{var ac=a*c,ad=a*d,bc=b*c,bd=b*d;te[0]=c*e,te[4]=bd-ac*f,te[8]=bc*f+ad,te[1]=f,te[5]=a*e,te[9]=-b*e,te[2]=-d*e,te[6]=ad*f+bc,te[10]=ac-bd*f;break}case Euler.XZY:{var _ac=a*c,_ad=a*d,_bc=b*c,_bd=b*d;te[0]=c*e,te[4]=-f,te[8]=d*e,te[1]=_ac*f+_bd,te[5]=a*e,te[9]=_ad*f-_bc,te[2]=_bc*f-_ad,te[6]=b*e,te[10]=_bd*f+_ac;break}default:throw new Error(ERR_UNKNOWN_ORDER);}return te[3]=0,te[7]=0,te[11]=0,te[12]=0,te[13]=0,te[14]=0,te[15]=1,this}},{key:'x',get:function get(){return this[0]},set:function set(value){return this[0]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'y',get:function get(){return this[1]},set:function set(value){return this[1]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'z',get:function get(){return this[2]},set:function set(value){return this[2]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'alpha',get:function get(){return this[0]},set:function set(value){return this[0]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'beta',get:function get(){return this[1]},set:function set(value){return this[1]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'gamma',get:function get(){return this[2]},set:function set(value){return this[2]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'phi',get:function get(){return this[0]},set:function set(value){return this[0]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'theta',get:function get(){return this[1]},set:function set(value){return this[1]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'psi',get:function get(){return this[2]},set:function set(value){return this[2]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'roll',get:function get(){return this[0]},set:function set(value){return this[0]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'pitch',get:function get(){return this[1]},set:function set(value){return this[1]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'yaw',get:function get(){return this[2]},set:function set(value){return this[2]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'order',get:function get(){return this[3]},set:function set(value){return this[3]=checkOrder(value)}}]),Euler}(_math_array__WEBPACK_IMPORTED_MODULE_0__["default"]);/* harmony default export */ __webpack_exports__["default"] = (Euler);
//# sourceMappingURL=euler.js.map

/***/ }),

/***/ "./node_modules/math.gl/dist-es6/index.js":
/*!************************************************!*\
  !*** ./node_modules/math.gl/dist-es6/index.js ***!
  \************************************************/
/*! exports provided: Vector2, Vector3, Vector4, Matrix4, Quaternion, config, checkNumber, configure, formatValue, isArray, clone, radians, degrees, sin, cos, tan, asin, acos, atan, clamp, equals, experimental */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experimental", function() { return experimental; });
/* harmony import */ var _vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector2 */ "./node_modules/math.gl/dist-es6/vector2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector2", function() { return _vector2__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector3 */ "./node_modules/math.gl/dist-es6/vector3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector3", function() { return _vector3__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _vector4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector4 */ "./node_modules/math.gl/dist-es6/vector4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector4", function() { return _vector4__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _matrix4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matrix4 */ "./node_modules/math.gl/dist-es6/matrix4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix4", function() { return _matrix4__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _quaternion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quaternion */ "./node_modules/math.gl/dist-es6/quaternion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quaternion", function() { return _quaternion__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common */ "./node_modules/math.gl/dist-es6/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["config"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkNumber", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["checkNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["configure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatValue", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["formatValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["clone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radians", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["radians"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["degrees"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["sin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["cos"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tan", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["tan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["asin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["acos"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "atan", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["atan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["clamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["equals"]; });

/* harmony import */ var _euler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./euler */ "./node_modules/math.gl/dist-es6/euler.js");
/* harmony import */ var _spherical_coordinates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spherical-coordinates */ "./node_modules/math.gl/dist-es6/spherical-coordinates.js");
var experimental={Euler:_euler__WEBPACK_IMPORTED_MODULE_6__["default"],SphericalCoordinates:_spherical_coordinates__WEBPACK_IMPORTED_MODULE_7__["default"]};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/math.gl/dist-es6/lib/assert.js":
/*!*****************************************************!*\
  !*** ./node_modules/math.gl/dist-es6/lib/assert.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assert; });
function assert(condition,message){if(!condition)throw new Error("Assertion failed. "+message)}
//# sourceMappingURL=assert.js.map

/***/ }),

/***/ "./node_modules/math.gl/dist-es6/math-array.js":
/*!*****************************************************!*\
  !*** ./node_modules/math.gl/dist-es6/math-array.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./node_modules/math.gl/dist-es6/common.js");
var _createClass=function(){function defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,'value'in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return call&&('object'==typeof call||'function'==typeof call)?call:self}function _inherits(subClass,superClass){if('function'!=typeof superClass&&null!==superClass)throw new TypeError('Super expression must either be null or a function, not '+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}function _extendableBuiltin(cls){function ExtendableBuiltin(){var instance=Reflect.construct(cls,Array.from(arguments));return Object.setPrototypeOf(instance,Object.getPrototypeOf(this)),instance}return ExtendableBuiltin.prototype=Object.create(cls.prototype,{constructor:{value:cls,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(ExtendableBuiltin,cls):ExtendableBuiltin.__proto__=cls,ExtendableBuiltin}var MathArray=function(_extendableBuiltin2){function MathArray(){return _classCallCheck(this,MathArray),_possibleConstructorReturn(this,(MathArray.__proto__||Object.getPrototypeOf(MathArray)).apply(this,arguments))}return _inherits(MathArray,_extendableBuiltin2),_createClass(MathArray,[{key:'clone',value:function(){var Subclass=this.constructor,clone=new Subclass().copy(this);return clone.check(),clone}},{key:'copy',value:function copy(array){for(var i=0;i<this.ELEMENTS;++i)this[i]=array[i];return this.check()}},{key:'set',value:function set(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];for(var i=0;i<this.ELEMENTS;++i)this[i]=args[i]||0;return this.check()}},{key:'fromArray',value:function fromArray(array){for(var offset=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,i=0;i<this.ELEMENTS;++i)this[i]=array[i+offset];return this.check()}},{key:'toString',value:function toString(){return this.formatString(_common__WEBPACK_IMPORTED_MODULE_0__["config"])}},{key:'formatString',value:function formatString(opts){for(var string='',i=0;i<this.ELEMENTS;++i)string+=(0<i?', ':'')+Object(_common__WEBPACK_IMPORTED_MODULE_0__["formatValue"])(this[i],opts);return(opts.printTypes?this.constructor.name:'')+'['+string+']'}},{key:'toArray',value:function toArray(){for(var array=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],offset=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,i=0;i<this.ELEMENTS;++i)array[offset+i]=this[i];return array}},{key:'toFloat32Array',value:function toFloat32Array(){return new Float32Array(this)}},{key:'equals',value:function equals(array){if(!array||this.length!==array.length)return!1;for(var i=0;i<this.ELEMENTS;++i)if(!Object(_common__WEBPACK_IMPORTED_MODULE_0__["equals"])(this[i],array[i]))return!1;return!0}},{key:'exactEquals',value:function exactEquals(array){if(!array||this.length!==array.length)return!1;for(var i=0;i<this.ELEMENTS;++i)if(this[i]!==array[i])return!1;return!0}},{key:'negate',value:function negate(){for(var i=0;i<this.ELEMENTS;++i)this[i]=-this[i];return this.check()}},{key:'inverse',value:function inverse(){for(var i=0;i<this.ELEMENTS;++i)this[i]=1/this[i];return this.check()}},{key:'lerp',value:function lerp(vector,coeff){for(var coord,i=0;i<this.ELEMENTS;++i)coord=this[i],this[i]=coord+coeff*(vector[0]-coord);return this.check()}},{key:'validate',value:function validate(){for(var array=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this,valid=array&&array.length===this.ELEMENTS,i=0;i<this.ELEMENTS;++i)valid=valid&&Number.isFinite(array[i]);return valid}},{key:'check',value:function check(){var array=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(_common__WEBPACK_IMPORTED_MODULE_0__["config"].debug&&!this.validate(array))throw new Error('Invalid '+this.constructor.name);return this}}]),MathArray}(_extendableBuiltin(Array));/* harmony default export */ __webpack_exports__["default"] = (MathArray);
//# sourceMappingURL=math-array.js.map

/***/ }),

/***/ "./node_modules/math.gl/dist-es6/matrix4.js":
/*!**************************************************!*\
  !*** ./node_modules/math.gl/dist-es6/matrix4.js ***!
  \**************************************************/
/*! exports provided: validateMatrix4, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMatrix4", function() { return validateMatrix4; });
/* harmony import */ var _math_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-array */ "./node_modules/math.gl/dist-es6/math-array.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/math.gl/dist-es6/common.js");
/* harmony import */ var _vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector2 */ "./node_modules/math.gl/dist-es6/vector2.js");
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vector3 */ "./node_modules/math.gl/dist-es6/vector3.js");
/* harmony import */ var _vector4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vector4 */ "./node_modules/math.gl/dist-es6/vector4.js");
/* harmony import */ var _lib_assert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/assert */ "./node_modules/math.gl/dist-es6/lib/assert.js");
/* harmony import */ var gl_mat4_determinant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gl-mat4/determinant */ "./node_modules/gl-mat4/determinant.js");
/* harmony import */ var gl_mat4_determinant__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_determinant__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gl_mat4_fromQuat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gl-mat4/fromQuat */ "./node_modules/gl-mat4/fromQuat.js");
/* harmony import */ var gl_mat4_fromQuat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_fromQuat__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var gl_mat4_frustum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gl-mat4/frustum */ "./node_modules/gl-mat4/frustum.js");
/* harmony import */ var gl_mat4_frustum__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_frustum__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gl_mat4_lookAt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gl-mat4/lookAt */ "./node_modules/gl-mat4/lookAt.js");
/* harmony import */ var gl_mat4_lookAt__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_lookAt__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var gl_mat4_ortho__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gl-mat4/ortho */ "./node_modules/gl-mat4/ortho.js");
/* harmony import */ var gl_mat4_ortho__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_ortho__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var gl_mat4_perspective__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gl-mat4/perspective */ "./node_modules/gl-mat4/perspective.js");
/* harmony import */ var gl_mat4_perspective__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_perspective__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var gl_mat4_transpose__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gl-mat4/transpose */ "./node_modules/gl-mat4/transpose.js");
/* harmony import */ var gl_mat4_transpose__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_transpose__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var gl_mat4_invert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gl-mat4/invert */ "./node_modules/gl-mat4/invert.js");
/* harmony import */ var gl_mat4_invert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_invert__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var gl_mat4_multiply__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! gl-mat4/multiply */ "./node_modules/gl-mat4/multiply.js");
/* harmony import */ var gl_mat4_multiply__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_multiply__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var gl_mat4_rotateX__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! gl-mat4/rotateX */ "./node_modules/gl-mat4/rotateX.js");
/* harmony import */ var gl_mat4_rotateX__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_rotateX__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var gl_mat4_rotateY__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! gl-mat4/rotateY */ "./node_modules/gl-mat4/rotateY.js");
/* harmony import */ var gl_mat4_rotateY__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_rotateY__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var gl_mat4_rotateZ__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! gl-mat4/rotateZ */ "./node_modules/gl-mat4/rotateZ.js");
/* harmony import */ var gl_mat4_rotateZ__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_rotateZ__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var gl_mat4_rotate__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! gl-mat4/rotate */ "./node_modules/gl-mat4/rotate.js");
/* harmony import */ var gl_mat4_rotate__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_rotate__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var gl_mat4_scale__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! gl-mat4/scale */ "./node_modules/gl-mat4/scale.js");
/* harmony import */ var gl_mat4_scale__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_scale__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var gl_mat4_translate__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! gl-mat4/translate */ "./node_modules/gl-mat4/translate.js");
/* harmony import */ var gl_mat4_translate__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_translate__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var gl_vec2_transformMat4__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! gl-vec2/transformMat4 */ "./node_modules/gl-vec2/transformMat4.js");
/* harmony import */ var gl_vec2_transformMat4__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(gl_vec2_transformMat4__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var gl_vec3_transformMat4__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! gl-vec3/transformMat4 */ "./node_modules/gl-vec3/transformMat4.js");
/* harmony import */ var gl_vec3_transformMat4__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(gl_vec3_transformMat4__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var gl_vec4_transformMat4__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! gl-vec4/transformMat4 */ "./node_modules/gl-vec4/transformMat4.js");
/* harmony import */ var gl_vec4_transformMat4__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(gl_vec4_transformMat4__WEBPACK_IMPORTED_MODULE_23__);
var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!(i&&_arr.length===i));_n=!0);}catch(err){_d=!0,_e=err}finally{try{!_n&&_i['return']&&_i['return']()}finally{if(_d)throw _e}}return _arr}return function(arr,i){if(Array.isArray(arr))return arr;if(Symbol.iterator in Object(arr))return sliceIterator(arr,i);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),_createClass=function(){function defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,'value'in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return call&&('object'==typeof call||'function'==typeof call)?call:self}function _inherits(subClass,superClass){if('function'!=typeof superClass&&null!==superClass)throw new TypeError('Super expression must either be null or a function, not '+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var IDENTITY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];function validateMatrix4(m){var _NumberisFinite=Number.isFinite;return 16===m.length&&_NumberisFinite(m[0])&&_NumberisFinite(m[1])&&_NumberisFinite(m[2])&&_NumberisFinite(m[3])&&_NumberisFinite(m[4])&&_NumberisFinite(m[5])&&_NumberisFinite(m[6])&&_NumberisFinite(m[7])&&_NumberisFinite(m[8])&&_NumberisFinite(m[9])&&_NumberisFinite(m[10])&&_NumberisFinite(m[11])&&_NumberisFinite(m[12])&&_NumberisFinite(m[13])&&_NumberisFinite(m[14])&&_NumberisFinite(m[15])}var tempVector4=[0,0,0,0],Matrix4=function(_MathArray){function Matrix4(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];_classCallCheck(this,Matrix4);var _this=_possibleConstructorReturn(this,(Matrix4.__proto__||Object.getPrototypeOf(Matrix4)).call(this));return Array.isArray(args[0])&&1===arguments.length?_this.copy(args[0]):_this.identity(),_this}return _inherits(Matrix4,_MathArray),_createClass(Matrix4,[{key:'setRowMajor',value:function setRowMajor(){var m00=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,m10=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,m20=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,m30=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0,m01=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,m11=5<arguments.length&&void 0!==arguments[5]?arguments[5]:1,m21=6<arguments.length&&void 0!==arguments[6]?arguments[6]:0,m31=7<arguments.length&&void 0!==arguments[7]?arguments[7]:0,m02=8<arguments.length&&void 0!==arguments[8]?arguments[8]:0,m12=9<arguments.length&&void 0!==arguments[9]?arguments[9]:0,m22=10<arguments.length&&void 0!==arguments[10]?arguments[10]:1,m32=11<arguments.length&&void 0!==arguments[11]?arguments[11]:0,m03=12<arguments.length&&void 0!==arguments[12]?arguments[12]:0,m13=13<arguments.length&&void 0!==arguments[13]?arguments[13]:0,m23=14<arguments.length&&void 0!==arguments[14]?arguments[14]:0,m33=15<arguments.length&&void 0!==arguments[15]?arguments[15]:1;return this.set(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33)}},{key:'setColumnMajor',value:function setColumnMajor(){var m00=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,m01=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,m02=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,m03=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0,m10=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,m11=5<arguments.length&&void 0!==arguments[5]?arguments[5]:1,m12=6<arguments.length&&void 0!==arguments[6]?arguments[6]:0,m13=7<arguments.length&&void 0!==arguments[7]?arguments[7]:0,m20=8<arguments.length&&void 0!==arguments[8]?arguments[8]:0,m21=9<arguments.length&&void 0!==arguments[9]?arguments[9]:0,m22=10<arguments.length&&void 0!==arguments[10]?arguments[10]:1,m23=11<arguments.length&&void 0!==arguments[11]?arguments[11]:0,m30=12<arguments.length&&void 0!==arguments[12]?arguments[12]:0,m31=13<arguments.length&&void 0!==arguments[13]?arguments[13]:0,m32=14<arguments.length&&void 0!==arguments[14]?arguments[14]:0,m33=15<arguments.length&&void 0!==arguments[15]?arguments[15]:1;return this.set(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33)}},{key:'set',value:function set(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33){return this[0]=m00,this[1]=m01,this[2]=m02,this[3]=m03,this[4]=m10,this[5]=m11,this[6]=m12,this[7]=m13,this[8]=m20,this[9]=m21,this[10]=m22,this[11]=m23,this[12]=m30,this[13]=m31,this[14]=m32,this[15]=m33,this.check(),this}},{key:'determinant',value:function determinant(){return gl_mat4_determinant__WEBPACK_IMPORTED_MODULE_6___default()(this)}},{key:'identity',value:function identity(){for(var i=0;i<IDENTITY.length;++i)this[i]=IDENTITY[i];return this.check(),this}},{key:'fromQuaternion',value:function fromQuaternion(q){return gl_mat4_fromQuat__WEBPACK_IMPORTED_MODULE_7___default()(this,q),this.check(),this}},{key:'frustum',value:function frustum(_ref){var left=_ref.left,right=_ref.right,bottom=_ref.bottom,top=_ref.top,near=_ref.near,far=_ref.far;return gl_mat4_frustum__WEBPACK_IMPORTED_MODULE_8___default()(this,left,right,bottom,top,near,far),this.check(),this}},{key:'lookAt',value:function lookAt(){var _ref2=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},eye=_ref2.eye,_ref2$center=_ref2.center,center=void 0===_ref2$center?[0,0,0]:_ref2$center,_ref2$up=_ref2.up,up=void 0===_ref2$up?[0,1,0]:_ref2$up;return gl_mat4_lookAt__WEBPACK_IMPORTED_MODULE_9___default()(this,eye,center,up),this.check(),this}},{key:'ortho',value:function ortho(_ref3){var left=_ref3.left,right=_ref3.right,bottom=_ref3.bottom,top=_ref3.top,_ref3$near=_ref3.near,near=void 0===_ref3$near?.1:_ref3$near,_ref3$far=_ref3.far,far=void 0===_ref3$far?500:_ref3$far;return gl_mat4_ortho__WEBPACK_IMPORTED_MODULE_10___default()(this,left,right,bottom,top,near,far),this.check(),this}},{key:'perspective',value:function perspective(){var _MathPI=Math.PI,_ref4=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},_ref4$fov=_ref4.fov,fov=void 0===_ref4$fov?45*_MathPI/180:_ref4$fov,_ref4$aspect=_ref4.aspect,aspect=void 0===_ref4$aspect?1:_ref4$aspect,_ref4$near=_ref4.near,near=void 0===_ref4$near?.1:_ref4$near,_ref4$far=_ref4.far,far=void 0===_ref4$far?500:_ref4$far;if(fov>2*_MathPI)throw Error('radians');return gl_mat4_perspective__WEBPACK_IMPORTED_MODULE_11___default()(this,fov,aspect,near,far),this.check(),this}},{key:'transpose',value:function transpose(){return gl_mat4_transpose__WEBPACK_IMPORTED_MODULE_12___default()(this,this),this.check(),this}},{key:'invert',value:function invert(){return gl_mat4_invert__WEBPACK_IMPORTED_MODULE_13___default()(this,this),this.check(),this}},{key:'multiplyLeft',value:function multiplyLeft(a){return gl_mat4_multiply__WEBPACK_IMPORTED_MODULE_14___default()(this,a,this),this.check(),this}},{key:'multiplyRight',value:function multiplyRight(a){return gl_mat4_multiply__WEBPACK_IMPORTED_MODULE_14___default()(this,this,a),this.check(),this}},{key:'rotateX',value:function rotateX(radians){return gl_mat4_rotateX__WEBPACK_IMPORTED_MODULE_15___default()(this,this,radians),this.check(),this}},{key:'rotateY',value:function rotateY(radians){return gl_mat4_rotateY__WEBPACK_IMPORTED_MODULE_16___default()(this,this,radians),this.check(),this}},{key:'rotateZ',value:function rotateZ(radians){return gl_mat4_rotateZ__WEBPACK_IMPORTED_MODULE_17___default()(this,this,radians),this.check(),this}},{key:'rotateXYZ',value:function rotateXYZ(_ref5){var _ref6=_slicedToArray(_ref5,3),rx=_ref6[0],ry=_ref6[1],rz=_ref6[2];return this.rotateX(rx).rotateY(ry).rotateZ(rz)}},{key:'rotateAxis',value:function rotateAxis(radians,axis){return gl_mat4_rotate__WEBPACK_IMPORTED_MODULE_18___default()(this,this,radians,axis),this.check(),this}},{key:'scale',value:function scale(vec){return gl_mat4_scale__WEBPACK_IMPORTED_MODULE_19___default()(this,this,vec),this.check(),this}},{key:'translate',value:function translate(vec){return gl_mat4_translate__WEBPACK_IMPORTED_MODULE_20___default()(this,this,vec),this.check(),this}},{key:'transformVector2',value:function transformVector2(vector,out){return out=out||new _vector2__WEBPACK_IMPORTED_MODULE_2__["default"],gl_vec2_transformMat4__WEBPACK_IMPORTED_MODULE_21___default()(out,vector,this),Object(_lib_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_vector2__WEBPACK_IMPORTED_MODULE_2__["validateVector2"])(out)),out}},{key:'transformVector3',value:function transformVector3(vector){var out=1<arguments.length&&void 0!==arguments[1]?arguments[1]:new _vector3__WEBPACK_IMPORTED_MODULE_3__["default"];return out=out||new _vector3__WEBPACK_IMPORTED_MODULE_3__["default"],gl_vec3_transformMat4__WEBPACK_IMPORTED_MODULE_22___default()(out,vector,this),Object(_lib_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_vector3__WEBPACK_IMPORTED_MODULE_3__["validateVector3"])(out)),out}},{key:'transformVector4',value:function transformVector4(vector){var out=1<arguments.length&&void 0!==arguments[1]?arguments[1]:new _vector4__WEBPACK_IMPORTED_MODULE_4__["default"];return out=out||new _vector4__WEBPACK_IMPORTED_MODULE_4__["default"],gl_vec4_transformMat4__WEBPACK_IMPORTED_MODULE_23___default()(out,vector,this),Object(_lib_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_vector4__WEBPACK_IMPORTED_MODULE_4__["validateVector4"])(out)),out}},{key:'transformVector',value:function transformVector(vector,out){switch(vector.length){case 2:return this.transformVector2(vector,out);case 3:return this.transformVector3(vector,out);case 4:return this.transformVector4(vector,out);default:throw new Error('Illegal vector');}}},{key:'transformDirection',value:function transformDirection(vector,out){switch(vector.length){case 2:gl_vec4_transformMat4__WEBPACK_IMPORTED_MODULE_23___default()(tempVector4,[vector[0],vector[1],0,0],this),out=out||new _vector2__WEBPACK_IMPORTED_MODULE_2__["default"],out[0]=tempVector4[0],out[1]=tempVector4[1];break;case 3:gl_vec4_transformMat4__WEBPACK_IMPORTED_MODULE_23___default()(tempVector4,[vector[0],vector[1],vector[2],0],this),out=out||new _vector3__WEBPACK_IMPORTED_MODULE_3__["default"],out[0]=tempVector4[0],out[1]=tempVector4[1],out[2]=tempVector4[2];break;case 4:Object(_lib_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(0===vector[3]),out=out||new _vector4__WEBPACK_IMPORTED_MODULE_4__["default"],gl_vec4_transformMat4__WEBPACK_IMPORTED_MODULE_23___default()(out,vector,this);break;default:throw new Error('Illegal vector');}return out}},{key:'transformPoint',value:function transformPoint(vector,out){switch(vector.length){case 2:out=out||new _vector2__WEBPACK_IMPORTED_MODULE_2__["default"],gl_vec4_transformMat4__WEBPACK_IMPORTED_MODULE_23___default()(out,[vector[0],vector[1],0,1],this),out.length=2,Object(_lib_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_vector2__WEBPACK_IMPORTED_MODULE_2__["validateVector2"])(out));break;case 3:out=out||new _vector3__WEBPACK_IMPORTED_MODULE_3__["default"],gl_vec4_transformMat4__WEBPACK_IMPORTED_MODULE_23___default()(out,[vector[0],vector[1],vector[2],1],this),out.length=3,Object(_lib_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_vector3__WEBPACK_IMPORTED_MODULE_3__["validateVector3"])(out));break;case 4:Object(_lib_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(0!==vector[3]),out=out||new _vector4__WEBPACK_IMPORTED_MODULE_4__["default"],gl_vec4_transformMat4__WEBPACK_IMPORTED_MODULE_23___default()(out,vector,this),Object(_lib_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_vector4__WEBPACK_IMPORTED_MODULE_4__["validateVector4"])(out));break;default:throw new Error('Illegal vector');}return out}},{key:'ELEMENTS',get:function get(){return 16}},{key:'m00',get:function get(){return this[0]},set:function set(value){return this[0]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'m01',get:function get(){return this[4]},set:function set(value){return this[4]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'m02',get:function get(){return this[8]},set:function set(value){return this[8]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'m03',get:function get(){return this[12]},set:function set(value){return this[12]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'m10',get:function get(){return this[1]},set:function set(value){return this[1]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'m11',get:function get(){return this[5]},set:function set(value){return this[5]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'m12',get:function get(){return this[9]},set:function set(value){return this[9]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'m13',get:function get(){return this[13]},set:function set(value){return this[13]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'m20',get:function get(){return this[2]},set:function set(value){return this[2]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'m21',get:function get(){return this[6]},set:function set(value){return this[6]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'m22',get:function get(){return this[10]},set:function set(value){return this[10]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'m23',get:function get(){return this[14]},set:function set(value){return this[14]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'m30',get:function get(){return this[3]},set:function set(value){return this[3]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'m31',get:function get(){return this[7]},set:function set(value){return this[7]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'m32',get:function get(){return this[11]},set:function set(value){return this[11]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'m33',get:function get(){return this[15]},set:function set(value){return this[15]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}}]),Matrix4}(_math_array__WEBPACK_IMPORTED_MODULE_0__["default"]);/* harmony default export */ __webpack_exports__["default"] = (Matrix4);
//# sourceMappingURL=matrix4.js.map

/***/ }),

/***/ "./node_modules/math.gl/dist-es6/quaternion.js":
/*!*****************************************************!*\
  !*** ./node_modules/math.gl/dist-es6/quaternion.js ***!
  \*****************************************************/
/*! exports provided: validateQuaternion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateQuaternion", function() { return validateQuaternion; });
/* harmony import */ var _math_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-array */ "./node_modules/math.gl/dist-es6/math-array.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/math.gl/dist-es6/common.js");
/* harmony import */ var gl_quat_fromMat3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-quat/fromMat3 */ "./node_modules/gl-quat/fromMat3.js");
/* harmony import */ var gl_quat_fromMat3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gl_quat_fromMat3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gl_quat_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-quat/identity */ "./node_modules/gl-quat/identity.js");
/* harmony import */ var gl_quat_identity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gl_quat_identity__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gl_quat_length__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gl-quat/length */ "./node_modules/gl-quat/length.js");
/* harmony import */ var gl_quat_length__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gl_quat_length__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gl_quat_squaredLength__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gl-quat/squaredLength */ "./node_modules/gl-quat/squaredLength.js");
/* harmony import */ var gl_quat_squaredLength__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gl_quat_squaredLength__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gl_quat_dot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gl-quat/dot */ "./node_modules/gl-quat/dot.js");
/* harmony import */ var gl_quat_dot__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gl_quat_dot__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gl_quat_rotationTo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gl-quat/rotationTo */ "./node_modules/gl-quat/rotationTo.js");
/* harmony import */ var gl_quat_rotationTo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gl_quat_rotationTo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var gl_quat_add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gl-quat/add */ "./node_modules/gl-quat/add.js");
/* harmony import */ var gl_quat_add__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(gl_quat_add__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gl_quat_calculateW__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gl-quat/calculateW */ "./node_modules/gl-quat/calculateW.js");
/* harmony import */ var gl_quat_calculateW__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(gl_quat_calculateW__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var gl_quat_conjugate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gl-quat/conjugate */ "./node_modules/gl-quat/conjugate.js");
/* harmony import */ var gl_quat_conjugate__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(gl_quat_conjugate__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var gl_quat_invert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gl-quat/invert */ "./node_modules/gl-quat/invert.js");
/* harmony import */ var gl_quat_invert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(gl_quat_invert__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var gl_quat_lerp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gl-quat/lerp */ "./node_modules/gl-quat/lerp.js");
/* harmony import */ var gl_quat_lerp__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(gl_quat_lerp__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var gl_quat_multiply__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gl-quat/multiply */ "./node_modules/gl-quat/multiply.js");
/* harmony import */ var gl_quat_multiply__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(gl_quat_multiply__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var gl_quat_normalize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! gl-quat/normalize */ "./node_modules/gl-quat/normalize.js");
/* harmony import */ var gl_quat_normalize__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(gl_quat_normalize__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var gl_quat_rotateX__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! gl-quat/rotateX */ "./node_modules/gl-quat/rotateX.js");
/* harmony import */ var gl_quat_rotateX__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(gl_quat_rotateX__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var gl_quat_rotateY__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! gl-quat/rotateY */ "./node_modules/gl-quat/rotateY.js");
/* harmony import */ var gl_quat_rotateY__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(gl_quat_rotateY__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var gl_quat_rotateZ__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! gl-quat/rotateZ */ "./node_modules/gl-quat/rotateZ.js");
/* harmony import */ var gl_quat_rotateZ__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(gl_quat_rotateZ__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var gl_quat_scale__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! gl-quat/scale */ "./node_modules/gl-quat/scale.js");
/* harmony import */ var gl_quat_scale__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(gl_quat_scale__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var gl_quat_set__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! gl-quat/set */ "./node_modules/gl-quat/set.js");
/* harmony import */ var gl_quat_set__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(gl_quat_set__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var gl_quat_setAxisAngle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! gl-quat/setAxisAngle */ "./node_modules/gl-quat/setAxisAngle.js");
/* harmony import */ var gl_quat_setAxisAngle__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(gl_quat_setAxisAngle__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var gl_quat_slerp__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! gl-quat/slerp */ "./node_modules/gl-quat/slerp.js");
/* harmony import */ var gl_quat_slerp__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(gl_quat_slerp__WEBPACK_IMPORTED_MODULE_21__);
var _createClass=function(){function defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,'value'in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return call&&('object'==typeof call||'function'==typeof call)?call:self}function _inherits(subClass,superClass){if('function'!=typeof superClass&&null!==superClass)throw new TypeError('Super expression must either be null or a function, not '+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var IDENTITY_QUATERNION=[0,0,0,1];function validateQuaternion(q){var _NumberisFinite=Number.isFinite;return 4===q.length&&_NumberisFinite(q[0])&&_NumberisFinite(q[1])&&_NumberisFinite(q[2])&&_NumberisFinite(q[3])}var Quaternion=function(_MathArray){function Quaternion(){var x=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,y=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,z=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,w=3<arguments.length&&void 0!==arguments[3]?arguments[3]:1;_classCallCheck(this,Quaternion);var _this=_possibleConstructorReturn(this,(Quaternion.__proto__||Object.getPrototypeOf(Quaternion)).call(this));return Array.isArray(x)&&1===arguments.length?_this.copy(x):_this.set(x,y,z,w),_this}return _inherits(Quaternion,_MathArray),_createClass(Quaternion,[{key:'fromMatrix3',value:function fromMatrix3(m){return gl_quat_fromMat3__WEBPACK_IMPORTED_MODULE_2___default()(this,m),this.check(),this}},{key:'fromValues',value:function fromValues(x,y,z,w){return this.set(x,y,z,w)}},{key:'identity',value:function identity(){return gl_quat_identity__WEBPACK_IMPORTED_MODULE_3___default()(this),this.check(),this}},{key:'length',value:function length(){return gl_quat_length__WEBPACK_IMPORTED_MODULE_4___default()(this)}},{key:'squaredLength',value:function squaredLength(){return gl_quat_squaredLength__WEBPACK_IMPORTED_MODULE_5___default()(this)}},{key:'dot',value:function dot(a,b){if(void 0!==b)throw new Error('Quaternion.dot only takes one argument');return gl_quat_dot__WEBPACK_IMPORTED_MODULE_6___default()(this,a)}},{key:'rotationTo',value:function rotationTo(vectorA,vectorB){return gl_quat_rotationTo__WEBPACK_IMPORTED_MODULE_7___default()(this,vectorA,vectorB),this.check(),this}},{key:'add',value:function add(a,b){if(void 0!==b)throw new Error('Quaternion.add only takes one argument');return gl_quat_add__WEBPACK_IMPORTED_MODULE_8___default()(this,a),this.check(),this}},{key:'calculateW',value:function calculateW(){return gl_quat_calculateW__WEBPACK_IMPORTED_MODULE_9___default()(this,this),this.check(),this}},{key:'conjugate',value:function conjugate(){return gl_quat_conjugate__WEBPACK_IMPORTED_MODULE_10___default()(this,this),this.check(),this}},{key:'invert',value:function invert(){return gl_quat_invert__WEBPACK_IMPORTED_MODULE_11___default()(this,this),this.check(),this}},{key:'lerp',value:function lerp(a,b,t){return gl_quat_lerp__WEBPACK_IMPORTED_MODULE_12___default()(this,a,b,t),this.check(),this}},{key:'multiply',value:function multiply(a,b){if(void 0!==b)throw new Error('Quaternion.multiply only takes one argument');return gl_quat_multiply__WEBPACK_IMPORTED_MODULE_13___default()(this,this,b),this.check(),this}},{key:'normalize',value:function normalize(){return gl_quat_normalize__WEBPACK_IMPORTED_MODULE_14___default()(this,this),this.check(),this}},{key:'rotateX',value:function rotateX(rad){return gl_quat_rotateX__WEBPACK_IMPORTED_MODULE_15___default()(this,this,rad),this.check(),this}},{key:'rotateY',value:function rotateY(rad){return gl_quat_rotateY__WEBPACK_IMPORTED_MODULE_16___default()(this,this,rad),this.check(),this}},{key:'rotateZ',value:function rotateZ(rad){return gl_quat_rotateZ__WEBPACK_IMPORTED_MODULE_17___default()(this,this,rad),this.check(),this}},{key:'scale',value:function scale(b){return gl_quat_scale__WEBPACK_IMPORTED_MODULE_18___default()(this,this,b),this.check(),this}},{key:'set',value:function set(i,j,k,l){return gl_quat_set__WEBPACK_IMPORTED_MODULE_19___default()(this,i,j,k,l),this.check(),this}},{key:'setAxisAngle',value:function setAxisAngle(axis,rad){return gl_quat_setAxisAngle__WEBPACK_IMPORTED_MODULE_20___default()(this,axis,rad),this.check(),this}},{key:'slerp',value:function slerp(_ref){var _ref$start=_ref.start,start=void 0===_ref$start?IDENTITY_QUATERNION:_ref$start,target=_ref.target,ratio=_ref.ratio;return gl_quat_slerp__WEBPACK_IMPORTED_MODULE_21___default()(this,start,target,ratio),this.check(),this}},{key:'ELEMENTS',get:function get(){return 4}},{key:'x',get:function get(){return this[0]},set:function set(value){return this[0]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'y',get:function get(){return this[1]},set:function set(value){return this[1]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'z',get:function get(){return this[2]},set:function set(value){return this[2]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'w',get:function get(){return this[3]},set:function set(value){return this[3]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}}]),Quaternion}(_math_array__WEBPACK_IMPORTED_MODULE_0__["default"]);/* harmony default export */ __webpack_exports__["default"] = (Quaternion);
//# sourceMappingURL=quaternion.js.map

/***/ }),

/***/ "./node_modules/math.gl/dist-es6/spherical-coordinates.js":
/*!****************************************************************!*\
  !*** ./node_modules/math.gl/dist-es6/spherical-coordinates.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./node_modules/math.gl/dist-es6/common.js");
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector3 */ "./node_modules/math.gl/dist-es6/vector3.js");
/* harmony import */ var gl_vec3_length__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-vec3/length */ "./node_modules/gl-vec3/length.js");
/* harmony import */ var gl_vec3_length__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gl_vec3_length__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_assert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/assert */ "./node_modules/math.gl/dist-es6/lib/assert.js");
var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!(i&&_arr.length===i));_n=!0);}catch(err){_d=!0,_e=err}finally{try{!_n&&_i['return']&&_i['return']()}finally{if(_d)throw _e}}return _arr}return function(arr,i){if(Array.isArray(arr))return arr;if(Symbol.iterator in Object(arr))return sliceIterator(arr,i);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),_createClass=function(){function defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,'value'in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError('Cannot call a class as a function')}var EPSILON=1e-6,EARTH_RADIUS_METERS=6371e3,SphericalCoordinates=function(){function SphericalCoordinates(){var _ref=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},phi=_ref.phi,theta=_ref.theta,radius=_ref.radius,bearing=_ref.bearing,pitch=_ref.pitch,altitude=_ref.altitude,_ref$radiusScale=_ref.radiusScale,radiusScale=void 0===_ref$radiusScale?EARTH_RADIUS_METERS:_ref$radiusScale;_classCallCheck(this,SphericalCoordinates),0===arguments.length?(this.phi=0,this.theta=0,this.radius=1):_NumberisFinite(phi)||_NumberisFinite(theta)?(this.phi=phi||0,this.theta=theta||0):(_NumberisFinite(bearing)||_NumberisFinite(pitch))&&(this.bearing=bearing||0,this.pitch=pitch||0),this.radius=radius||1,this.radiusScale=radiusScale||1,this.check()}var _MathPI=Math.PI,_NumberisFinite=Number.isFinite;return _createClass(SphericalCoordinates,[{key:'toString',value:function toString(){return this.formatString(_common__WEBPACK_IMPORTED_MODULE_0__["config"])}},{key:'formatString',value:function formatString(_ref2){var printTypes=_ref2.printTypes,printDegrees=_ref2.printDegrees,f=_common__WEBPACK_IMPORTED_MODULE_0__["formatValue"];return(printTypes?'Spherical':'')+'[rho:'+f(this.radius)+',theta:'+f(this.theta)+',phi:'+f(this.phi)+']'}},{key:'equals',value:function equals(other){return Object(_common__WEBPACK_IMPORTED_MODULE_0__["equals"])(this.radius,other.radius)&&Object(_common__WEBPACK_IMPORTED_MODULE_0__["equals"])(this.theta,other.theta)&&Object(_common__WEBPACK_IMPORTED_MODULE_0__["equals"])(this.phi,other.phi)}},{key:'exactEquals',value:function exactEquals(other){return this.radius===other.radius&&this.theta===other.theta&&this.phi===other.phi}},{key:'set',value:function set(radius,phi,theta){return this.radius=radius,this.phi=phi,this.theta=theta,this.check()}},{key:'clone',value:function clone(){return new this.constructor().copy(this)}},{key:'copy',value:function copy(other){return this.radius=other.radius,this.phi=other.phi,this.theta=other.theta,this.check()}},{key:'fromLngLatZ',value:function fromLngLatZ(_ref3){var _ref4=_slicedToArray(_ref3,3),lng=_ref4[0],lat=_ref4[1],z=_ref4[2];this.radius=1+z/this.radiusScale,this.phi=Object(_common__WEBPACK_IMPORTED_MODULE_0__["radians"])(lat),this.theta=Object(_common__WEBPACK_IMPORTED_MODULE_0__["radians"])(lng)}},{key:'fromVector3',value:function fromVector3(v){return this.radius=gl_vec3_length__WEBPACK_IMPORTED_MODULE_2___default()(v),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(v[0],v[1]),this.phi=Math.acos(Object(_common__WEBPACK_IMPORTED_MODULE_0__["clamp"])(v[2]/this.radius,-1,1))),this.check()}},{key:'toVector3',value:function toVector3(){return new _vector3__WEBPACK_IMPORTED_MODULE_1__["default"](0,0,this.radius).rotateX({radians:this.theta}).rotateZ({radians:this.phi})}},{key:'makeSafe',value:function makeSafe(){this.phi=Math.max(EPSILON,Math.min(_MathPI-EPSILON,this.phi))}},{key:'check',value:function check(){return Object(_lib_assert__WEBPACK_IMPORTED_MODULE_3__["default"])(_NumberisFinite(this.phi)&&_NumberisFinite(this.theta)&&0<this.radius),this}},{key:'bearing',get:function get(){return 180-Object(_common__WEBPACK_IMPORTED_MODULE_0__["degrees"])(this.phi)},set:function set(v){this.phi=_MathPI-Object(_common__WEBPACK_IMPORTED_MODULE_0__["radians"])(v)}},{key:'pitch',get:function get(){return Object(_common__WEBPACK_IMPORTED_MODULE_0__["degrees"])(this.theta)},set:function set(v){this.theta=Object(_common__WEBPACK_IMPORTED_MODULE_0__["radians"])(v)}},{key:'longitude',get:function get(){return Object(_common__WEBPACK_IMPORTED_MODULE_0__["degrees"])(this.phi)}},{key:'latitude',get:function get(){return Object(_common__WEBPACK_IMPORTED_MODULE_0__["degrees"])(this.theta)}},{key:'lng',get:function get(){return Object(_common__WEBPACK_IMPORTED_MODULE_0__["degrees"])(this.phi)}},{key:'lat',get:function get(){return Object(_common__WEBPACK_IMPORTED_MODULE_0__["degrees"])(this.theta)}},{key:'z',get:function get(){return(this.radius-1)*this.radiusScale}}]),SphericalCoordinates}();/* harmony default export */ __webpack_exports__["default"] = (SphericalCoordinates);
//# sourceMappingURL=spherical-coordinates.js.map

/***/ }),

/***/ "./node_modules/math.gl/dist-es6/vector.js":
/*!*************************************************!*\
  !*** ./node_modules/math.gl/dist-es6/vector.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-array */ "./node_modules/math.gl/dist-es6/math-array.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/math.gl/dist-es6/common.js");
var _createClass=function(){function defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,'value'in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return call&&('object'==typeof call||'function'==typeof call)?call:self}function _inherits(subClass,superClass){if('function'!=typeof superClass&&null!==superClass)throw new TypeError('Super expression must either be null or a function, not '+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var Vector=function(_MathArray){function Vector(){return _classCallCheck(this,Vector),_possibleConstructorReturn(this,(Vector.__proto__||Object.getPrototypeOf(Vector)).apply(this,arguments))}var _Mathsqrt=Math.sqrt;return _inherits(Vector,_MathArray),_createClass(Vector,[{key:'len',value:function len(){return _Mathsqrt(this.lengthSquared())}},{key:'magnitude',value:function magnitude(){return _Mathsqrt(this.lengthSquared())}},{key:'lengthSquared',value:function lengthSquared(){for(var length=0,i=0;i<this.ELEMENTS;++i)length+=this[i]*this[i];return length}},{key:'distance',value:function distance(mathArray){return _Mathsqrt(this.distanceSquared(mathArray))}},{key:'distanceSquared',value:function distanceSquared(mathArray){for(var dist,length=0,i=0;i<this.ELEMENTS;++i)dist=this[i]-mathArray[i],length+=dist*dist;return Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(length)}},{key:'dot',value:function dot(mathArray){for(var product=0,i=0;i<this.ELEMENTS;++i)product+=this[i]*mathArray[i];return Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(product)}},{key:'normalize',value:function normalize(){var length=this.magnitude();if(0!==length)for(var i=0;i<this.ELEMENTS;++i)this[i]/=length;return this.check()}}]),Vector}(_math_array__WEBPACK_IMPORTED_MODULE_0__["default"]);/* harmony default export */ __webpack_exports__["default"] = (Vector);
//# sourceMappingURL=vector.js.map

/***/ }),

/***/ "./node_modules/math.gl/dist-es6/vector2.js":
/*!**************************************************!*\
  !*** ./node_modules/math.gl/dist-es6/vector2.js ***!
  \**************************************************/
/*! exports provided: validateVector2, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateVector2", function() { return validateVector2; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./node_modules/math.gl/dist-es6/vector.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/math.gl/dist-es6/common.js");
/* harmony import */ var gl_vec2_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-vec2/set */ "./node_modules/gl-vec2/set.js");
/* harmony import */ var gl_vec2_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gl_vec2_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gl_vec2_add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-vec2/add */ "./node_modules/gl-vec2/add.js");
/* harmony import */ var gl_vec2_add__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gl_vec2_add__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gl_vec2_subtract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gl-vec2/subtract */ "./node_modules/gl-vec2/subtract.js");
/* harmony import */ var gl_vec2_subtract__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gl_vec2_subtract__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gl_vec2_multiply__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gl-vec2/multiply */ "./node_modules/gl-vec2/multiply.js");
/* harmony import */ var gl_vec2_multiply__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gl_vec2_multiply__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gl_vec2_divide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gl-vec2/divide */ "./node_modules/gl-vec2/divide.js");
/* harmony import */ var gl_vec2_divide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gl_vec2_divide__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gl_vec2_scale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gl-vec2/scale */ "./node_modules/gl-vec2/scale.js");
/* harmony import */ var gl_vec2_scale__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gl_vec2_scale__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var gl_vec2_scaleAndAdd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gl-vec2/scaleAndAdd */ "./node_modules/gl-vec2/scaleAndAdd.js");
/* harmony import */ var gl_vec2_scaleAndAdd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(gl_vec2_scaleAndAdd__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gl_vec2_negate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gl-vec2/negate */ "./node_modules/gl-vec2/negate.js");
/* harmony import */ var gl_vec2_negate__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(gl_vec2_negate__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var gl_vec2_normalize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gl-vec2/normalize */ "./node_modules/gl-vec2/normalize.js");
/* harmony import */ var gl_vec2_normalize__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(gl_vec2_normalize__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var gl_vec2_dot__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gl-vec2/dot */ "./node_modules/gl-vec2/dot.js");
/* harmony import */ var gl_vec2_dot__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(gl_vec2_dot__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var gl_vec2_cross__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gl-vec2/cross */ "./node_modules/gl-vec2/cross.js");
/* harmony import */ var gl_vec2_cross__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(gl_vec2_cross__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var gl_vec2_lerp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gl-vec2/lerp */ "./node_modules/gl-vec2/lerp.js");
/* harmony import */ var gl_vec2_lerp__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(gl_vec2_lerp__WEBPACK_IMPORTED_MODULE_13__);
var _createClass=function(){function defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,'value'in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return call&&('object'==typeof call||'function'==typeof call)?call:self}function _inherits(subClass,superClass){if('function'!=typeof superClass&&null!==superClass)throw new TypeError('Super expression must either be null or a function, not '+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}function validateVector2(v){var _NumberisFinite=Number.isFinite;return 2===v.length&&_NumberisFinite(v[0])&&_NumberisFinite(v[1])}var Vector2=function(_Vector){function Vector2(){var x=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,y=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;_classCallCheck(this,Vector2);var _this=_possibleConstructorReturn(this,(Vector2.__proto__||Object.getPrototypeOf(Vector2)).call(this));return Array.isArray(x)&&1===arguments.length?_this.copy(x):_this.set(x,y),_this}var _Mathatan=Math.atan2;return _inherits(Vector2,_Vector),_createClass(Vector2,[{key:'set',value:function set(x,y){return gl_vec2_set__WEBPACK_IMPORTED_MODULE_2___default()(this,x,y),this.check(),this}},{key:'add',value:function add(){for(var _len=arguments.length,vectors=Array(_len),_key=0;_key<_len;_key++)vectors[_key]=arguments[_key];var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,vector,_iterator=vectors[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0)vector=_step.value,gl_vec2_add__WEBPACK_IMPORTED_MODULE_3___default()(this,this,vector)}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator.return&&_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}return this}},{key:'subtract',value:function subtract(){for(var _len2=arguments.length,vectors=Array(_len2),_key2=0;_key2<_len2;_key2++)vectors[_key2]=arguments[_key2];var _iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _step2,vector,_iterator2=vectors[Symbol.iterator]();!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0)vector=_step2.value,gl_vec2_subtract__WEBPACK_IMPORTED_MODULE_4___default()(this,this,vector)}catch(err){_didIteratorError2=!0,_iteratorError2=err}finally{try{!_iteratorNormalCompletion2&&_iterator2.return&&_iterator2.return()}finally{if(_didIteratorError2)throw _iteratorError2}}return this.check(),this}},{key:'multiply',value:function multiply(){for(var _len3=arguments.length,vectors=Array(_len3),_key3=0;_key3<_len3;_key3++)vectors[_key3]=arguments[_key3];var _iteratorNormalCompletion3=!0,_didIteratorError3=!1,_iteratorError3=void 0;try{for(var _step3,vector,_iterator3=vectors[Symbol.iterator]();!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=!0)vector=_step3.value,gl_vec2_multiply__WEBPACK_IMPORTED_MODULE_5___default()(this,this,vector)}catch(err){_didIteratorError3=!0,_iteratorError3=err}finally{try{!_iteratorNormalCompletion3&&_iterator3.return&&_iterator3.return()}finally{if(_didIteratorError3)throw _iteratorError3}}return this.check(),this}},{key:'divide',value:function divide(){for(var _len4=arguments.length,vectors=Array(_len4),_key4=0;_key4<_len4;_key4++)vectors[_key4]=arguments[_key4];var _iteratorNormalCompletion4=!0,_didIteratorError4=!1,_iteratorError4=void 0;try{for(var _step4,vector,_iterator4=vectors[Symbol.iterator]();!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=!0)vector=_step4.value,gl_vec2_divide__WEBPACK_IMPORTED_MODULE_6___default()(this,this,vector)}catch(err){_didIteratorError4=!0,_iteratorError4=err}finally{try{!_iteratorNormalCompletion4&&_iterator4.return&&_iterator4.return()}finally{if(_didIteratorError4)throw _iteratorError4}}return this.check(),this}},{key:'scale',value:function scale(_scale){return Number.isFinite(_scale)&&gl_vec2_scale__WEBPACK_IMPORTED_MODULE_7___default()(this,this,_scale),this.check(),this}},{key:'scaleAndAdd',value:function scaleAndAdd(vector,scale){return gl_vec2_scaleAndAdd__WEBPACK_IMPORTED_MODULE_8___default()(this,this,vector,scale),this.check(),this}},{key:'negate',value:function negate(){return gl_vec2_negate__WEBPACK_IMPORTED_MODULE_9___default()(this,this),this.check(),this}},{key:'normalize',value:function normalize(){return gl_vec2_normalize__WEBPACK_IMPORTED_MODULE_10___default()(this,this),this.check(),this}},{key:'dot',value:function dot(vector){return gl_vec2_dot__WEBPACK_IMPORTED_MODULE_11___default()(this,vector)}},{key:'cross',value:function cross(vector){return gl_vec2_cross__WEBPACK_IMPORTED_MODULE_12___default()(this,this,vector),this.check(),this}},{key:'lerp',value:function lerp(vector,coeff){return gl_vec2_lerp__WEBPACK_IMPORTED_MODULE_13___default()(this,this,vector,coeff),this.check(),this}},{key:'horizontalAngle',value:function horizontalAngle(){return _Mathatan(this.y,this.x)}},{key:'verticalAngle',value:function verticalAngle(){return _Mathatan(this.x,this.y)}},{key:'operation',value:function operation(_operation){for(var _len5=arguments.length,args=Array(1<_len5?_len5-1:0),_key5=1;_key5<_len5;_key5++)args[_key5-1]=arguments[_key5];return _operation.apply(void 0,[this,this].concat(args)),this.check(),this}},{key:'ELEMENTS',get:function get(){return 2}},{key:'x',get:function get(){return this[0]},set:function set(value){return this[0]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'y',get:function get(){return this[1]},set:function set(value){return this[1]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}}]),Vector2}(_vector__WEBPACK_IMPORTED_MODULE_0__["default"]);/* harmony default export */ __webpack_exports__["default"] = (Vector2);
//# sourceMappingURL=vector2.js.map

/***/ }),

/***/ "./node_modules/math.gl/dist-es6/vector3.js":
/*!**************************************************!*\
  !*** ./node_modules/math.gl/dist-es6/vector3.js ***!
  \**************************************************/
/*! exports provided: validateVector3, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateVector3", function() { return validateVector3; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./node_modules/math.gl/dist-es6/vector.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/math.gl/dist-es6/common.js");
/* harmony import */ var gl_vec3_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-vec3/set */ "./node_modules/gl-vec3/set.js");
/* harmony import */ var gl_vec3_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gl_vec3_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gl_vec3_angle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-vec3/angle */ "./node_modules/gl-vec3/angle.js");
/* harmony import */ var gl_vec3_angle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gl_vec3_angle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gl_vec3_add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gl-vec3/add */ "./node_modules/gl-vec3/add.js");
/* harmony import */ var gl_vec3_add__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gl_vec3_add__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gl_vec3_subtract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gl-vec3/subtract */ "./node_modules/gl-vec3/subtract.js");
/* harmony import */ var gl_vec3_subtract__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gl_vec3_subtract__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gl_vec3_multiply__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gl-vec3/multiply */ "./node_modules/gl-vec3/multiply.js");
/* harmony import */ var gl_vec3_multiply__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gl_vec3_multiply__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gl_vec3_divide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gl-vec3/divide */ "./node_modules/gl-vec3/divide.js");
/* harmony import */ var gl_vec3_divide__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gl_vec3_divide__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var gl_vec3_scale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gl-vec3/scale */ "./node_modules/gl-vec3/scale.js");
/* harmony import */ var gl_vec3_scale__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(gl_vec3_scale__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gl_vec3_scaleAndAdd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gl-vec3/scaleAndAdd */ "./node_modules/gl-vec3/scaleAndAdd.js");
/* harmony import */ var gl_vec3_scaleAndAdd__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(gl_vec3_scaleAndAdd__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var gl_vec3_cross__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gl-vec3/cross */ "./node_modules/gl-vec3/cross.js");
/* harmony import */ var gl_vec3_cross__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(gl_vec3_cross__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var gl_vec3_rotateX__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gl-vec3/rotateX */ "./node_modules/gl-vec3/rotateX.js");
/* harmony import */ var gl_vec3_rotateX__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(gl_vec3_rotateX__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var gl_vec3_rotateY__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gl-vec3/rotateY */ "./node_modules/gl-vec3/rotateY.js");
/* harmony import */ var gl_vec3_rotateY__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(gl_vec3_rotateY__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var gl_vec3_rotateZ__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gl-vec3/rotateZ */ "./node_modules/gl-vec3/rotateZ.js");
/* harmony import */ var gl_vec3_rotateZ__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(gl_vec3_rotateZ__WEBPACK_IMPORTED_MODULE_13__);
var _createClass=function(){function defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,'value'in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return call&&('object'==typeof call||'function'==typeof call)?call:self}function _inherits(subClass,superClass){if('function'!=typeof superClass&&null!==superClass)throw new TypeError('Super expression must either be null or a function, not '+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var ORIGIN=[0,0,0];function validateVector3(v){var _NumberisFinite=Number.isFinite;return 3===v.length&&_NumberisFinite(v[0])&&_NumberisFinite(v[1])&&_NumberisFinite(v[2])}var Vector3=function(_Vector){function Vector3(){var x=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,y=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,z=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;_classCallCheck(this,Vector3);var _this=_possibleConstructorReturn(this,(Vector3.__proto__||Object.getPrototypeOf(Vector3)).call(this));return Array.isArray(x)&&1===arguments.length?_this.copy(x):_this.set(x,y,z),_this}return _inherits(Vector3,_Vector),_createClass(Vector3,[{key:'set',value:function set(x,y,z){return gl_vec3_set__WEBPACK_IMPORTED_MODULE_2___default()(this,x,y,z),this.check()}},{key:'angle',value:function angle(vector){return gl_vec3_angle__WEBPACK_IMPORTED_MODULE_3___default()(this,vector)}},{key:'add',value:function add(){for(var _len=arguments.length,vectors=Array(_len),_key=0;_key<_len;_key++)vectors[_key]=arguments[_key];var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,vector,_iterator=vectors[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0)vector=_step.value,gl_vec3_add__WEBPACK_IMPORTED_MODULE_4___default()(this,this,vector)}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator.return&&_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}return this.check()}},{key:'subtract',value:function subtract(){for(var _len2=arguments.length,vectors=Array(_len2),_key2=0;_key2<_len2;_key2++)vectors[_key2]=arguments[_key2];var _iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _step2,vector,_iterator2=vectors[Symbol.iterator]();!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0)vector=_step2.value,gl_vec3_subtract__WEBPACK_IMPORTED_MODULE_5___default()(this,this,vector)}catch(err){_didIteratorError2=!0,_iteratorError2=err}finally{try{!_iteratorNormalCompletion2&&_iterator2.return&&_iterator2.return()}finally{if(_didIteratorError2)throw _iteratorError2}}return this.check()}},{key:'multiply',value:function multiply(){for(var _len3=arguments.length,vectors=Array(_len3),_key3=0;_key3<_len3;_key3++)vectors[_key3]=arguments[_key3];var _iteratorNormalCompletion3=!0,_didIteratorError3=!1,_iteratorError3=void 0;try{for(var _step3,vector,_iterator3=vectors[Symbol.iterator]();!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=!0)vector=_step3.value,gl_vec3_multiply__WEBPACK_IMPORTED_MODULE_6___default()(this,this,vector)}catch(err){_didIteratorError3=!0,_iteratorError3=err}finally{try{!_iteratorNormalCompletion3&&_iterator3.return&&_iterator3.return()}finally{if(_didIteratorError3)throw _iteratorError3}}return this.check()}},{key:'scale',value:function scale(_scale){return Number.isFinite(_scale)?gl_vec3_scale__WEBPACK_IMPORTED_MODULE_8___default()(this,this,_scale):gl_vec3_multiply__WEBPACK_IMPORTED_MODULE_6___default()(this,this,_scale),this.check()}},{key:'cross',value:function cross(vector){return gl_vec3_cross__WEBPACK_IMPORTED_MODULE_10___default()(this,this,vector),this.check()}},{key:'rotateX',value:function rotateX(_ref){var radians=_ref.radians,_ref$origin=_ref.origin,origin=void 0===_ref$origin?ORIGIN:_ref$origin;return gl_vec3_rotateX__WEBPACK_IMPORTED_MODULE_11___default()(this,this,origin,radians),this.check()}},{key:'rotateY',value:function rotateY(_ref2){var radians=_ref2.radians,_ref2$origin=_ref2.origin,origin=void 0===_ref2$origin?ORIGIN:_ref2$origin;return gl_vec3_rotateY__WEBPACK_IMPORTED_MODULE_12___default()(this,this,origin,radians),this.check()}},{key:'rotateZ',value:function rotateZ(_ref3){var radians=_ref3.radians,_ref3$origin=_ref3.origin,origin=void 0===_ref3$origin?ORIGIN:_ref3$origin;return gl_vec3_rotateZ__WEBPACK_IMPORTED_MODULE_13___default()(this,this,origin,radians),this.check()}},{key:'operation',value:function operation(_operation){for(var _len4=arguments.length,args=Array(1<_len4?_len4-1:0),_key4=1;_key4<_len4;_key4++)args[_key4-1]=arguments[_key4];return _operation.apply(void 0,[this,this].concat(args)),this.check()}},{key:'divide',value:function divide(){for(var _len5=arguments.length,vectors=Array(_len5),_key5=0;_key5<_len5;_key5++)vectors[_key5]=arguments[_key5];var _iteratorNormalCompletion4=!0,_didIteratorError4=!1,_iteratorError4=void 0;try{for(var _step4,vector,_iterator4=vectors[Symbol.iterator]();!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=!0)vector=_step4.value,gl_vec3_divide__WEBPACK_IMPORTED_MODULE_7___default()(this,this,vector)}catch(err){_didIteratorError4=!0,_iteratorError4=err}finally{try{!_iteratorNormalCompletion4&&_iterator4.return&&_iterator4.return()}finally{if(_didIteratorError4)throw _iteratorError4}}return this.check()}},{key:'scaleAndAdd',value:function scaleAndAdd(vector,scale){return gl_vec3_scaleAndAdd__WEBPACK_IMPORTED_MODULE_9___default()(this,this,vector,scale),this.check()}},{key:'ELEMENTS',get:function get(){return 3}},{key:'x',get:function get(){return this[0]},set:function set(value){return this[0]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'y',get:function get(){return this[1]},set:function set(value){return this[1]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'z',get:function get(){return this[2]},set:function set(value){return this[2]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}}]),Vector3}(_vector__WEBPACK_IMPORTED_MODULE_0__["default"]);/* harmony default export */ __webpack_exports__["default"] = (Vector3);
//# sourceMappingURL=vector3.js.map

/***/ }),

/***/ "./node_modules/math.gl/dist-es6/vector4.js":
/*!**************************************************!*\
  !*** ./node_modules/math.gl/dist-es6/vector4.js ***!
  \**************************************************/
/*! exports provided: validateVector4, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateVector4", function() { return validateVector4; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./node_modules/math.gl/dist-es6/vector.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/math.gl/dist-es6/common.js");
/* harmony import */ var gl_vec4_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-vec4/set */ "./node_modules/gl-vec4/set.js");
/* harmony import */ var gl_vec4_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gl_vec4_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gl_vec4_distance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-vec4/distance */ "./node_modules/gl-vec4/distance.js");
/* harmony import */ var gl_vec4_distance__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gl_vec4_distance__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gl_vec4_add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gl-vec4/add */ "./node_modules/gl-vec4/add.js");
/* harmony import */ var gl_vec4_add__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gl_vec4_add__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gl_vec4_subtract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gl-vec4/subtract */ "./node_modules/gl-vec4/subtract.js");
/* harmony import */ var gl_vec4_subtract__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gl_vec4_subtract__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gl_vec4_multiply__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gl-vec4/multiply */ "./node_modules/gl-vec4/multiply.js");
/* harmony import */ var gl_vec4_multiply__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gl_vec4_multiply__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gl_vec4_divide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gl-vec4/divide */ "./node_modules/gl-vec4/divide.js");
/* harmony import */ var gl_vec4_divide__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gl_vec4_divide__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var gl_vec4_scale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gl-vec4/scale */ "./node_modules/gl-vec4/scale.js");
/* harmony import */ var gl_vec4_scale__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(gl_vec4_scale__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gl_vec4_scaleAndAdd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gl-vec4/scaleAndAdd */ "./node_modules/gl-vec4/scaleAndAdd.js");
/* harmony import */ var gl_vec4_scaleAndAdd__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(gl_vec4_scaleAndAdd__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var gl_vec4_negate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gl-vec4/negate */ "./node_modules/gl-vec4/negate.js");
/* harmony import */ var gl_vec4_negate__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(gl_vec4_negate__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var gl_vec4_inverse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gl-vec4/inverse */ "./node_modules/gl-vec4/inverse.js");
/* harmony import */ var gl_vec4_inverse__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(gl_vec4_inverse__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var gl_vec4_normalize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gl-vec4/normalize */ "./node_modules/gl-vec4/normalize.js");
/* harmony import */ var gl_vec4_normalize__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(gl_vec4_normalize__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var gl_vec4_dot__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gl-vec4/dot */ "./node_modules/gl-vec4/dot.js");
/* harmony import */ var gl_vec4_dot__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(gl_vec4_dot__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var gl_vec4_lerp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! gl-vec4/lerp */ "./node_modules/gl-vec4/lerp.js");
/* harmony import */ var gl_vec4_lerp__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(gl_vec4_lerp__WEBPACK_IMPORTED_MODULE_14__);
var _createClass=function(){function defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,'value'in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return call&&('object'==typeof call||'function'==typeof call)?call:self}function _inherits(subClass,superClass){if('function'!=typeof superClass&&null!==superClass)throw new TypeError('Super expression must either be null or a function, not '+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}function validateVector4(v){var _NumberisFinite=Number.isFinite;return 4===v.length&&_NumberisFinite(v[0])&&_NumberisFinite(v[1])&&_NumberisFinite(v[2])&&_NumberisFinite(v[3])}var Vector4=function(_Vector){function Vector4(){var x=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,y=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,z=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,w=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0;_classCallCheck(this,Vector4);var _this=_possibleConstructorReturn(this,(Vector4.__proto__||Object.getPrototypeOf(Vector4)).call(this));return Array.isArray(x)&&1===arguments.length?_this.copy(x):_this.set(x,y,z,w),_this}return _inherits(Vector4,_Vector),_createClass(Vector4,[{key:'set',value:function set(x,y,z,w){return gl_vec4_set__WEBPACK_IMPORTED_MODULE_2___default()(this,x,y,z,w),this.check(),this}},{key:'distance',value:function distance(vector){return gl_vec4_distance__WEBPACK_IMPORTED_MODULE_3___default()(vector)}},{key:'add',value:function add(){for(var _len=arguments.length,vectors=Array(_len),_key=0;_key<_len;_key++)vectors[_key]=arguments[_key];var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,vector,_iterator=vectors[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0)vector=_step.value,gl_vec4_add__WEBPACK_IMPORTED_MODULE_4___default()(this,this,vector)}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator.return&&_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}return this.check(),this}},{key:'subtract',value:function subtract(){for(var _len2=arguments.length,vectors=Array(_len2),_key2=0;_key2<_len2;_key2++)vectors[_key2]=arguments[_key2];var _iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _step2,vector,_iterator2=vectors[Symbol.iterator]();!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0)vector=_step2.value,gl_vec4_subtract__WEBPACK_IMPORTED_MODULE_5___default()(this,this,vector)}catch(err){_didIteratorError2=!0,_iteratorError2=err}finally{try{!_iteratorNormalCompletion2&&_iterator2.return&&_iterator2.return()}finally{if(_didIteratorError2)throw _iteratorError2}}return this.check(),this}},{key:'multiply',value:function multiply(){for(var _len3=arguments.length,vectors=Array(_len3),_key3=0;_key3<_len3;_key3++)vectors[_key3]=arguments[_key3];var _iteratorNormalCompletion3=!0,_didIteratorError3=!1,_iteratorError3=void 0;try{for(var _step3,vector,_iterator3=vectors[Symbol.iterator]();!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=!0)vector=_step3.value,gl_vec4_multiply__WEBPACK_IMPORTED_MODULE_6___default()(this,this,vector)}catch(err){_didIteratorError3=!0,_iteratorError3=err}finally{try{!_iteratorNormalCompletion3&&_iterator3.return&&_iterator3.return()}finally{if(_didIteratorError3)throw _iteratorError3}}return this.check(),this}},{key:'divide',value:function divide(){for(var _len4=arguments.length,vectors=Array(_len4),_key4=0;_key4<_len4;_key4++)vectors[_key4]=arguments[_key4];var _iteratorNormalCompletion4=!0,_didIteratorError4=!1,_iteratorError4=void 0;try{for(var _step4,vector,_iterator4=vectors[Symbol.iterator]();!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=!0)vector=_step4.value,gl_vec4_divide__WEBPACK_IMPORTED_MODULE_7___default()(this,this,vector)}catch(err){_didIteratorError4=!0,_iteratorError4=err}finally{try{!_iteratorNormalCompletion4&&_iterator4.return&&_iterator4.return()}finally{if(_didIteratorError4)throw _iteratorError4}}return this.check(),this}},{key:'scale',value:function scale(_scale){return gl_vec4_scale__WEBPACK_IMPORTED_MODULE_8___default()(this,this,_scale),this.check(),this}},{key:'scaleAndAdd',value:function scaleAndAdd(vector,scale){return gl_vec4_scaleAndAdd__WEBPACK_IMPORTED_MODULE_9___default()(this,this,vector,scale),this.check(),this}},{key:'negate',value:function negate(){return gl_vec4_negate__WEBPACK_IMPORTED_MODULE_10___default()(this,this),this.check(),this}},{key:'inverse',value:function inverse(){return gl_vec4_inverse__WEBPACK_IMPORTED_MODULE_11___default()(this,this),this.check(),this}},{key:'normalize',value:function normalize(){return gl_vec4_normalize__WEBPACK_IMPORTED_MODULE_12___default()(this,this),this.check(),this}},{key:'dot',value:function dot(vector){return gl_vec4_dot__WEBPACK_IMPORTED_MODULE_13___default()(this,vector)}},{key:'lerp',value:function lerp(vector,coeff){return gl_vec4_lerp__WEBPACK_IMPORTED_MODULE_14___default()(this,this,vector,coeff),this.check(),this}},{key:'ELEMENTS',get:function get(){return 4}},{key:'x',get:function get(){return this[0]},set:function set(value){return this[0]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'y',get:function get(){return this[1]},set:function set(value){return this[1]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'z',get:function get(){return this[2]},set:function set(value){return this[2]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}},{key:'w',get:function get(){return this[3]},set:function set(value){return this[3]=Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])(value)}}]),Vector4}(_vector__WEBPACK_IMPORTED_MODULE_0__["default"]);/* harmony default export */ __webpack_exports__["default"] = (Vector4);
//# sourceMappingURL=vector4.js.map

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/viewport-mercator-project/dist-es6/fit-bounds.js":
/*!***********************************************************************!*\
  !*** ./node_modules/viewport-mercator-project/dist-es6/fit-bounds.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fitBounds; });
/* harmony import */ var _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-mercator-viewport */ "./node_modules/viewport-mercator-project/dist-es6/web-mercator-viewport.js");
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



/**
 * Returns map settings {latitude, longitude, zoom}
 * that will contain the provided corners within the provided width.
 * Only supports non-perspective mode.
 * @param {Number} width - viewport width
 * @param {Number} height - viewport height
 * @param {Array} bounds - [[lon, lat], [lon, lat]]
 * @param {Number} [padding] - The amount of padding in pixels to add to the given bounds.
 * @param {Array} [offset] - The center of the given bounds relative to the map's center,
 *    [x, y] measured in pixels.
 * @returns {Object} - latitude, longitude and zoom
 */
function fitBounds(_ref) {
  var width = _ref.width,
      height = _ref.height,
      bounds = _ref.bounds,
      _ref$padding = _ref.padding,
      padding = _ref$padding === undefined ? 0 : _ref$padding,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? [0, 0] : _ref$offset;

  var _bounds = _slicedToArray(bounds, 2),
      _bounds$ = _slicedToArray(_bounds[0], 2),
      west = _bounds$[0],
      south = _bounds$[1],
      _bounds$2 = _slicedToArray(_bounds[1], 2),
      east = _bounds$2[0],
      north = _bounds$2[1];

  var viewport = new _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__["default"]({
    width: width,
    height: height,
    longitude: 0,
    latitude: 0,
    zoom: 0
  });

  var nw = viewport.project([west, north]);
  var se = viewport.project([east, south]);
  var size = [Math.abs(se[0] - nw[0]), Math.abs(se[1] - nw[1])];
  var center = [(se[0] + nw[0]) / 2, (se[1] + nw[1]) / 2];

  var scaleX = (width - padding * 2 - Math.abs(offset[0]) * 2) / size[0];
  var scaleY = (height - padding * 2 - Math.abs(offset[1]) * 2) / size[1];

  var centerLngLat = viewport.unproject(center);
  var zoom = viewport.zoom + Math.log2(Math.abs(Math.min(scaleX, scaleY)));

  return {
    longitude: centerLngLat[0],
    latitude: centerLngLat[1],
    zoom: zoom
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maXQtYm91bmRzLmpzIl0sIm5hbWVzIjpbIldlYk1lcmNhdG9yVmlld3BvcnQiLCJmaXRCb3VuZHMiLCJ3aWR0aCIsImhlaWdodCIsImJvdW5kcyIsInBhZGRpbmciLCJvZmZzZXQiLCJ3ZXN0Iiwic291dGgiLCJlYXN0Iiwibm9ydGgiLCJ2aWV3cG9ydCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiem9vbSIsIm53IiwicHJvamVjdCIsInNlIiwic2l6ZSIsIk1hdGgiLCJhYnMiLCJjZW50ZXIiLCJzY2FsZVgiLCJzY2FsZVkiLCJjZW50ZXJMbmdMYXQiLCJ1bnByb2plY3QiLCJsb2cyIiwibWluIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLG1CQUFQLE1BQWdDLHlCQUFoQzs7QUFFQTs7Ozs7Ozs7Ozs7O0FBWUEsZUFBZSxTQUFTQyxTQUFULE9BT1o7QUFBQSxNQU5EQyxLQU1DLFFBTkRBLEtBTUM7QUFBQSxNQUxEQyxNQUtDLFFBTERBLE1BS0M7QUFBQSxNQUpEQyxNQUlDLFFBSkRBLE1BSUM7QUFBQSwwQkFGREMsT0FFQztBQUFBLE1BRkRBLE9BRUMsZ0NBRlMsQ0FFVDtBQUFBLHlCQUREQyxNQUNDO0FBQUEsTUFEREEsTUFDQywrQkFEUSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQ1I7O0FBQUEsK0JBQ3NDRixNQUR0QztBQUFBO0FBQUEsTUFDT0csSUFEUDtBQUFBLE1BQ2FDLEtBRGI7QUFBQTtBQUFBLE1BQ3NCQyxJQUR0QjtBQUFBLE1BQzRCQyxLQUQ1Qjs7QUFHRCxNQUFNQyxXQUFXLElBQUlYLG1CQUFKLENBQXdCO0FBQ3ZDRSxnQkFEdUM7QUFFdkNDLGtCQUZ1QztBQUd2Q1MsZUFBVyxDQUg0QjtBQUl2Q0MsY0FBVSxDQUo2QjtBQUt2Q0MsVUFBTTtBQUxpQyxHQUF4QixDQUFqQjs7QUFRQSxNQUFNQyxLQUFLSixTQUFTSyxPQUFULENBQWlCLENBQUNULElBQUQsRUFBT0csS0FBUCxDQUFqQixDQUFYO0FBQ0EsTUFBTU8sS0FBS04sU0FBU0ssT0FBVCxDQUFpQixDQUFDUCxJQUFELEVBQU9ELEtBQVAsQ0FBakIsQ0FBWDtBQUNBLE1BQU1VLE9BQU8sQ0FDWEMsS0FBS0MsR0FBTCxDQUFTSCxHQUFHLENBQUgsSUFBUUYsR0FBRyxDQUFILENBQWpCLENBRFcsRUFFWEksS0FBS0MsR0FBTCxDQUFTSCxHQUFHLENBQUgsSUFBUUYsR0FBRyxDQUFILENBQWpCLENBRlcsQ0FBYjtBQUlBLE1BQU1NLFNBQVMsQ0FDYixDQUFDSixHQUFHLENBQUgsSUFBUUYsR0FBRyxDQUFILENBQVQsSUFBa0IsQ0FETCxFQUViLENBQUNFLEdBQUcsQ0FBSCxJQUFRRixHQUFHLENBQUgsQ0FBVCxJQUFrQixDQUZMLENBQWY7O0FBS0EsTUFBTU8sU0FBUyxDQUFDcEIsUUFBUUcsVUFBVSxDQUFsQixHQUFzQmMsS0FBS0MsR0FBTCxDQUFTZCxPQUFPLENBQVAsQ0FBVCxJQUFzQixDQUE3QyxJQUFrRFksS0FBSyxDQUFMLENBQWpFO0FBQ0EsTUFBTUssU0FBUyxDQUFDcEIsU0FBU0UsVUFBVSxDQUFuQixHQUF1QmMsS0FBS0MsR0FBTCxDQUFTZCxPQUFPLENBQVAsQ0FBVCxJQUFzQixDQUE5QyxJQUFtRFksS0FBSyxDQUFMLENBQWxFOztBQUVBLE1BQU1NLGVBQWViLFNBQVNjLFNBQVQsQ0FBbUJKLE1BQW5CLENBQXJCO0FBQ0EsTUFBTVAsT0FBT0gsU0FBU0csSUFBVCxHQUFnQkssS0FBS08sSUFBTCxDQUFVUCxLQUFLQyxHQUFMLENBQVNELEtBQUtRLEdBQUwsQ0FBU0wsTUFBVCxFQUFpQkMsTUFBakIsQ0FBVCxDQUFWLENBQTdCOztBQUVBLFNBQU87QUFDTFgsZUFBV1ksYUFBYSxDQUFiLENBRE47QUFFTFgsY0FBVVcsYUFBYSxDQUFiLENBRkw7QUFHTFY7QUFISyxHQUFQO0FBS0QiLCJmaWxlIjoiZml0LWJvdW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWJNZXJjYXRvclZpZXdwb3J0IGZyb20gJy4vd2ViLW1lcmNhdG9yLXZpZXdwb3J0JztcblxuLyoqXG4gKiBSZXR1cm5zIG1hcCBzZXR0aW5ncyB7bGF0aXR1ZGUsIGxvbmdpdHVkZSwgem9vbX1cbiAqIHRoYXQgd2lsbCBjb250YWluIHRoZSBwcm92aWRlZCBjb3JuZXJzIHdpdGhpbiB0aGUgcHJvdmlkZWQgd2lkdGguXG4gKiBPbmx5IHN1cHBvcnRzIG5vbi1wZXJzcGVjdGl2ZSBtb2RlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIC0gdmlld3BvcnQgd2lkdGhcbiAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgLSB2aWV3cG9ydCBoZWlnaHRcbiAqIEBwYXJhbSB7QXJyYXl9IGJvdW5kcyAtIFtbbG9uLCBsYXRdLCBbbG9uLCBsYXRdXVxuICogQHBhcmFtIHtOdW1iZXJ9IFtwYWRkaW5nXSAtIFRoZSBhbW91bnQgb2YgcGFkZGluZyBpbiBwaXhlbHMgdG8gYWRkIHRvIHRoZSBnaXZlbiBib3VuZHMuXG4gKiBAcGFyYW0ge0FycmF5fSBbb2Zmc2V0XSAtIFRoZSBjZW50ZXIgb2YgdGhlIGdpdmVuIGJvdW5kcyByZWxhdGl2ZSB0byB0aGUgbWFwJ3MgY2VudGVyLFxuICogICAgW3gsIHldIG1lYXN1cmVkIGluIHBpeGVscy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IC0gbGF0aXR1ZGUsIGxvbmdpdHVkZSBhbmQgem9vbVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaXRCb3VuZHMoe1xuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBib3VuZHMsXG4gIC8vIG9wdGlvbnNcbiAgcGFkZGluZyA9IDAsXG4gIG9mZnNldCA9IFswLCAwXVxufSkge1xuICBjb25zdCBbW3dlc3QsIHNvdXRoXSwgW2Vhc3QsIG5vcnRoXV0gPSBib3VuZHM7XG5cbiAgY29uc3Qgdmlld3BvcnQgPSBuZXcgV2ViTWVyY2F0b3JWaWV3cG9ydCh7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxvbmdpdHVkZTogMCxcbiAgICBsYXRpdHVkZTogMCxcbiAgICB6b29tOiAwXG4gIH0pO1xuXG4gIGNvbnN0IG53ID0gdmlld3BvcnQucHJvamVjdChbd2VzdCwgbm9ydGhdKTtcbiAgY29uc3Qgc2UgPSB2aWV3cG9ydC5wcm9qZWN0KFtlYXN0LCBzb3V0aF0pO1xuICBjb25zdCBzaXplID0gW1xuICAgIE1hdGguYWJzKHNlWzBdIC0gbndbMF0pLFxuICAgIE1hdGguYWJzKHNlWzFdIC0gbndbMV0pXG4gIF07XG4gIGNvbnN0IGNlbnRlciA9IFtcbiAgICAoc2VbMF0gKyBud1swXSkgLyAyLFxuICAgIChzZVsxXSArIG53WzFdKSAvIDJcbiAgXTtcblxuICBjb25zdCBzY2FsZVggPSAod2lkdGggLSBwYWRkaW5nICogMiAtIE1hdGguYWJzKG9mZnNldFswXSkgKiAyKSAvIHNpemVbMF07XG4gIGNvbnN0IHNjYWxlWSA9IChoZWlnaHQgLSBwYWRkaW5nICogMiAtIE1hdGguYWJzKG9mZnNldFsxXSkgKiAyKSAvIHNpemVbMV07XG5cbiAgY29uc3QgY2VudGVyTG5nTGF0ID0gdmlld3BvcnQudW5wcm9qZWN0KGNlbnRlcik7XG4gIGNvbnN0IHpvb20gPSB2aWV3cG9ydC56b29tICsgTWF0aC5sb2cyKE1hdGguYWJzKE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKSkpO1xuXG4gIHJldHVybiB7XG4gICAgbG9uZ2l0dWRlOiBjZW50ZXJMbmdMYXRbMF0sXG4gICAgbGF0aXR1ZGU6IGNlbnRlckxuZ0xhdFsxXSxcbiAgICB6b29tXG4gIH07XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/viewport-mercator-project/dist-es6/fly-to-viewport.js":
/*!****************************************************************************!*\
  !*** ./node_modules/viewport-mercator-project/dist-es6/fly-to-viewport.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flyToViewport; });
/* harmony import */ var math_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math.gl */ "./node_modules/math.gl/dist-es6/index.js");
/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math-utils */ "./node_modules/viewport-mercator-project/dist-es6/math-utils.js");
/* harmony import */ var _web_mercator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-mercator-utils */ "./node_modules/viewport-mercator-project/dist-es6/web-mercator-utils.js");




var EPSILON = 0.01;
var VIEWPORT_TRANSITION_PROPS = ['longitude', 'latitude', 'zoom'];

/**
 * mapbox-gl-js flyTo : https://www.mapbox.com/mapbox-gl-js/api/#map#flyto.
 * It implements “Smooth and efficient zooming and panning.” algorithm by
 * "Jarke J. van Wijk and Wim A.A. Nuij"
*/
/* eslint-disable max-statements */
function flyToViewport(startProps, endProps, t) {
  // Equations from above paper are referred where needed.

  var viewport = {};

  // TODO: add this as an option for applications.
  var rho = 1.414;

  var startZoom = startProps.zoom;
  var startCenter = [startProps.longitude, startProps.latitude];
  var startScale = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_2__["zoomToScale"])(startZoom);
  var endZoom = endProps.zoom;
  var endCenter = [endProps.longitude, endProps.latitude];
  var scale = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_2__["zoomToScale"])(endZoom - startZoom);

  var startCenterXY = new math_gl__WEBPACK_IMPORTED_MODULE_0__["Vector2"](Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_2__["lngLatToWorld"])(startCenter, startScale));
  var endCenterXY = new math_gl__WEBPACK_IMPORTED_MODULE_0__["Vector2"](Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_2__["lngLatToWorld"])(endCenter, startScale));
  var uDelta = endCenterXY.subtract(startCenterXY);

  var w0 = Math.max(startProps.width, startProps.height);
  var w1 = w0 / scale;
  var u1 = Math.sqrt(uDelta.x * uDelta.x + uDelta.y * uDelta.y);
  // u0 is treated as '0' in Eq (9).

  // If change in center is too small, do linear interpolaiton.
  if (Math.abs(u1) < EPSILON) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = VIEWPORT_TRANSITION_PROPS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        var startValue = startProps[key];
        var endValue = endProps[key];
        viewport[key] = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["lerp"])(startValue, endValue, t);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return viewport;
  }

  // Implement Equation (9) from above algorithm.
  var rho2 = rho * rho;
  var b0 = (w1 * w1 - w0 * w0 + rho2 * rho2 * u1 * u1) / (2 * w0 * rho2 * u1);
  var b1 = (w1 * w1 - w0 * w0 - rho2 * rho2 * u1 * u1) / (2 * w1 * rho2 * u1);
  var r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0);
  var r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
  var S = (r1 - r0) / rho;
  var s = t * S;

  var w = Math.cosh(r0) / Math.cosh(r0 + rho * s);
  var u = w0 * ((Math.cosh(r0) * Math.tanh(r0 + rho * s) - Math.sinh(r0)) / rho2) / u1;

  var scaleIncrement = 1 / w; // Using w method for scaling.
  var newZoom = startZoom + Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_2__["scaleToZoom"])(scaleIncrement);

  var newCenter = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_2__["worldToLngLat"])(startCenterXY.add(uDelta.scale(u)).scale(scaleIncrement), Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_2__["zoomToScale"])(newZoom));
  viewport.longitude = newCenter[0];
  viewport.latitude = newCenter[1];
  viewport.zoom = newZoom;
  return viewport;
}
/* eslint-enable max-statements */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mbHktdG8tdmlld3BvcnQuanMiXSwibmFtZXMiOlsiVmVjdG9yMiIsImxlcnAiLCJzY2FsZVRvWm9vbSIsInpvb21Ub1NjYWxlIiwibG5nTGF0VG9Xb3JsZCIsIndvcmxkVG9MbmdMYXQiLCJFUFNJTE9OIiwiVklFV1BPUlRfVFJBTlNJVElPTl9QUk9QUyIsImZseVRvVmlld3BvcnQiLCJzdGFydFByb3BzIiwiZW5kUHJvcHMiLCJ0Iiwidmlld3BvcnQiLCJyaG8iLCJzdGFydFpvb20iLCJ6b29tIiwic3RhcnRDZW50ZXIiLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsInN0YXJ0U2NhbGUiLCJlbmRab29tIiwiZW5kQ2VudGVyIiwic2NhbGUiLCJzdGFydENlbnRlclhZIiwiZW5kQ2VudGVyWFkiLCJ1RGVsdGEiLCJzdWJ0cmFjdCIsIncwIiwiTWF0aCIsIm1heCIsIndpZHRoIiwiaGVpZ2h0IiwidzEiLCJ1MSIsInNxcnQiLCJ4IiwieSIsImFicyIsImtleSIsInN0YXJ0VmFsdWUiLCJlbmRWYWx1ZSIsInJobzIiLCJiMCIsImIxIiwicjAiLCJsb2ciLCJyMSIsIlMiLCJzIiwidyIsImNvc2giLCJ1IiwidGFuaCIsInNpbmgiLCJzY2FsZUluY3JlbWVudCIsIm5ld1pvb20iLCJuZXdDZW50ZXIiLCJhZGQiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVFBLE9BQVIsUUFBc0IsU0FBdEI7QUFDQSxTQUFRQyxJQUFSLFFBQW1CLGNBQW5CO0FBQ0EsU0FDRUMsV0FERixFQUVFQyxXQUZGLEVBR0VDLGFBSEYsRUFJRUMsYUFKRixRQUtPLHNCQUxQOztBQU9BLElBQU1DLFVBQVUsSUFBaEI7QUFDQSxJQUFNQyw0QkFBNEIsQ0FBQyxXQUFELEVBQWMsVUFBZCxFQUEwQixNQUExQixDQUFsQzs7QUFFQTs7Ozs7QUFLQTtBQUNBLGVBQWUsU0FBU0MsYUFBVCxDQUF1QkMsVUFBdkIsRUFBbUNDLFFBQW5DLEVBQTZDQyxDQUE3QyxFQUFnRDtBQUM3RDs7QUFFQSxNQUFNQyxXQUFXLEVBQWpCOztBQUVBO0FBQ0EsTUFBTUMsTUFBTSxLQUFaOztBQUVBLE1BQU1DLFlBQVlMLFdBQVdNLElBQTdCO0FBQ0EsTUFBTUMsY0FBYyxDQUFDUCxXQUFXUSxTQUFaLEVBQXVCUixXQUFXUyxRQUFsQyxDQUFwQjtBQUNBLE1BQU1DLGFBQWFoQixZQUFZVyxTQUFaLENBQW5CO0FBQ0EsTUFBTU0sVUFBVVYsU0FBU0ssSUFBekI7QUFDQSxNQUFNTSxZQUFZLENBQUNYLFNBQVNPLFNBQVYsRUFBcUJQLFNBQVNRLFFBQTlCLENBQWxCO0FBQ0EsTUFBTUksUUFBUW5CLFlBQVlpQixVQUFVTixTQUF0QixDQUFkOztBQUVBLE1BQU1TLGdCQUFnQixJQUFJdkIsT0FBSixDQUFZSSxjQUFjWSxXQUFkLEVBQTJCRyxVQUEzQixDQUFaLENBQXRCO0FBQ0EsTUFBTUssY0FBYyxJQUFJeEIsT0FBSixDQUFZSSxjQUFjaUIsU0FBZCxFQUF5QkYsVUFBekIsQ0FBWixDQUFwQjtBQUNBLE1BQU1NLFNBQVNELFlBQVlFLFFBQVosQ0FBcUJILGFBQXJCLENBQWY7O0FBRUEsTUFBTUksS0FBS0MsS0FBS0MsR0FBTCxDQUFTcEIsV0FBV3FCLEtBQXBCLEVBQTJCckIsV0FBV3NCLE1BQXRDLENBQVg7QUFDQSxNQUFNQyxLQUFLTCxLQUFLTCxLQUFoQjtBQUNBLE1BQU1XLEtBQUtMLEtBQUtNLElBQUwsQ0FBV1QsT0FBT1UsQ0FBUCxHQUFXVixPQUFPVSxDQUFuQixHQUF5QlYsT0FBT1csQ0FBUCxHQUFXWCxPQUFPVyxDQUFyRCxDQUFYO0FBQ0E7O0FBRUE7QUFDQSxNQUFJUixLQUFLUyxHQUFMLENBQVNKLEVBQVQsSUFBZTNCLE9BQW5CLEVBQTRCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQzFCLDJCQUFrQkMseUJBQWxCLDhIQUE2QztBQUFBLFlBQWxDK0IsR0FBa0M7O0FBQzNDLFlBQU1DLGFBQWE5QixXQUFXNkIsR0FBWCxDQUFuQjtBQUNBLFlBQU1FLFdBQVc5QixTQUFTNEIsR0FBVCxDQUFqQjtBQUNBMUIsaUJBQVMwQixHQUFULElBQWdCckMsS0FBS3NDLFVBQUwsRUFBaUJDLFFBQWpCLEVBQTJCN0IsQ0FBM0IsQ0FBaEI7QUFDRDtBQUx5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU0xQixXQUFPQyxRQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxNQUFNNkIsT0FBTzVCLE1BQU1BLEdBQW5CO0FBQ0EsTUFBTTZCLEtBQUssQ0FBQ1YsS0FBS0EsRUFBTCxHQUFVTCxLQUFLQSxFQUFmLEdBQW9CYyxPQUFPQSxJQUFQLEdBQWNSLEVBQWQsR0FBbUJBLEVBQXhDLEtBQStDLElBQUlOLEVBQUosR0FBU2MsSUFBVCxHQUFnQlIsRUFBL0QsQ0FBWDtBQUNBLE1BQU1VLEtBQUssQ0FBQ1gsS0FBS0EsRUFBTCxHQUFVTCxLQUFLQSxFQUFmLEdBQW9CYyxPQUFPQSxJQUFQLEdBQWNSLEVBQWQsR0FBbUJBLEVBQXhDLEtBQStDLElBQUlELEVBQUosR0FBU1MsSUFBVCxHQUFnQlIsRUFBL0QsQ0FBWDtBQUNBLE1BQU1XLEtBQUtoQixLQUFLaUIsR0FBTCxDQUFTakIsS0FBS00sSUFBTCxDQUFVUSxLQUFLQSxFQUFMLEdBQVUsQ0FBcEIsSUFBeUJBLEVBQWxDLENBQVg7QUFDQSxNQUFNSSxLQUFLbEIsS0FBS2lCLEdBQUwsQ0FBU2pCLEtBQUtNLElBQUwsQ0FBVVMsS0FBS0EsRUFBTCxHQUFVLENBQXBCLElBQXlCQSxFQUFsQyxDQUFYO0FBQ0EsTUFBTUksSUFBSSxDQUFDRCxLQUFLRixFQUFOLElBQVkvQixHQUF0QjtBQUNBLE1BQU1tQyxJQUFJckMsSUFBSW9DLENBQWQ7O0FBRUEsTUFBTUUsSUFBS3JCLEtBQUtzQixJQUFMLENBQVVOLEVBQVYsSUFBZ0JoQixLQUFLc0IsSUFBTCxDQUFVTixLQUFLL0IsTUFBTW1DLENBQXJCLENBQTNCO0FBQ0EsTUFBTUcsSUFBSXhCLE1BQU0sQ0FBQ0MsS0FBS3NCLElBQUwsQ0FBVU4sRUFBVixJQUFnQmhCLEtBQUt3QixJQUFMLENBQVVSLEtBQUsvQixNQUFNbUMsQ0FBckIsQ0FBaEIsR0FBMENwQixLQUFLeUIsSUFBTCxDQUFVVCxFQUFWLENBQTNDLElBQTRESCxJQUFsRSxJQUEwRVIsRUFBcEY7O0FBRUEsTUFBTXFCLGlCQUFpQixJQUFJTCxDQUEzQixDQTlDNkQsQ0E4Qy9CO0FBQzlCLE1BQU1NLFVBQVV6QyxZQUFZWixZQUFZb0QsY0FBWixDQUE1Qjs7QUFFQSxNQUFNRSxZQUFZbkQsY0FDZmtCLGNBQWNrQyxHQUFkLENBQWtCaEMsT0FBT0gsS0FBUCxDQUFhNkIsQ0FBYixDQUFsQixDQUFELENBQXFDN0IsS0FBckMsQ0FBMkNnQyxjQUEzQyxDQURnQixFQUVoQm5ELFlBQVlvRCxPQUFaLENBRmdCLENBQWxCO0FBR0EzQyxXQUFTSyxTQUFULEdBQXFCdUMsVUFBVSxDQUFWLENBQXJCO0FBQ0E1QyxXQUFTTSxRQUFULEdBQW9Cc0MsVUFBVSxDQUFWLENBQXBCO0FBQ0E1QyxXQUFTRyxJQUFULEdBQWdCd0MsT0FBaEI7QUFDQSxTQUFPM0MsUUFBUDtBQUNEO0FBQ0QiLCJmaWxlIjoiZmx5LXRvLXZpZXdwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWZWN0b3IyfSBmcm9tICdtYXRoLmdsJztcbmltcG9ydCB7bGVycH0gZnJvbSAnLi9tYXRoLXV0aWxzJztcbmltcG9ydCB7XG4gIHNjYWxlVG9ab29tLFxuICB6b29tVG9TY2FsZSxcbiAgbG5nTGF0VG9Xb3JsZCxcbiAgd29ybGRUb0xuZ0xhdFxufSBmcm9tICcuL3dlYi1tZXJjYXRvci11dGlscyc7XG5cbmNvbnN0IEVQU0lMT04gPSAwLjAxO1xuY29uc3QgVklFV1BPUlRfVFJBTlNJVElPTl9QUk9QUyA9IFsnbG9uZ2l0dWRlJywgJ2xhdGl0dWRlJywgJ3pvb20nXTtcblxuLyoqXG4gKiBtYXBib3gtZ2wtanMgZmx5VG8gOiBodHRwczovL3d3dy5tYXBib3guY29tL21hcGJveC1nbC1qcy9hcGkvI21hcCNmbHl0by5cbiAqIEl0IGltcGxlbWVudHMg4oCcU21vb3RoIGFuZCBlZmZpY2llbnQgem9vbWluZyBhbmQgcGFubmluZy7igJ0gYWxnb3JpdGhtIGJ5XG4gKiBcIkphcmtlIEouIHZhbiBXaWprIGFuZCBXaW0gQS5BLiBOdWlqXCJcbiovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtc3RhdGVtZW50cyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmx5VG9WaWV3cG9ydChzdGFydFByb3BzLCBlbmRQcm9wcywgdCkge1xuICAvLyBFcXVhdGlvbnMgZnJvbSBhYm92ZSBwYXBlciBhcmUgcmVmZXJyZWQgd2hlcmUgbmVlZGVkLlxuXG4gIGNvbnN0IHZpZXdwb3J0ID0ge307XG5cbiAgLy8gVE9ETzogYWRkIHRoaXMgYXMgYW4gb3B0aW9uIGZvciBhcHBsaWNhdGlvbnMuXG4gIGNvbnN0IHJobyA9IDEuNDE0O1xuXG4gIGNvbnN0IHN0YXJ0Wm9vbSA9IHN0YXJ0UHJvcHMuem9vbTtcbiAgY29uc3Qgc3RhcnRDZW50ZXIgPSBbc3RhcnRQcm9wcy5sb25naXR1ZGUsIHN0YXJ0UHJvcHMubGF0aXR1ZGVdO1xuICBjb25zdCBzdGFydFNjYWxlID0gem9vbVRvU2NhbGUoc3RhcnRab29tKTtcbiAgY29uc3QgZW5kWm9vbSA9IGVuZFByb3BzLnpvb207XG4gIGNvbnN0IGVuZENlbnRlciA9IFtlbmRQcm9wcy5sb25naXR1ZGUsIGVuZFByb3BzLmxhdGl0dWRlXTtcbiAgY29uc3Qgc2NhbGUgPSB6b29tVG9TY2FsZShlbmRab29tIC0gc3RhcnRab29tKTtcblxuICBjb25zdCBzdGFydENlbnRlclhZID0gbmV3IFZlY3RvcjIobG5nTGF0VG9Xb3JsZChzdGFydENlbnRlciwgc3RhcnRTY2FsZSkpO1xuICBjb25zdCBlbmRDZW50ZXJYWSA9IG5ldyBWZWN0b3IyKGxuZ0xhdFRvV29ybGQoZW5kQ2VudGVyLCBzdGFydFNjYWxlKSk7XG4gIGNvbnN0IHVEZWx0YSA9IGVuZENlbnRlclhZLnN1YnRyYWN0KHN0YXJ0Q2VudGVyWFkpO1xuXG4gIGNvbnN0IHcwID0gTWF0aC5tYXgoc3RhcnRQcm9wcy53aWR0aCwgc3RhcnRQcm9wcy5oZWlnaHQpO1xuICBjb25zdCB3MSA9IHcwIC8gc2NhbGU7XG4gIGNvbnN0IHUxID0gTWF0aC5zcXJ0KCh1RGVsdGEueCAqIHVEZWx0YS54KSArICh1RGVsdGEueSAqIHVEZWx0YS55KSk7XG4gIC8vIHUwIGlzIHRyZWF0ZWQgYXMgJzAnIGluIEVxICg5KS5cblxuICAvLyBJZiBjaGFuZ2UgaW4gY2VudGVyIGlzIHRvbyBzbWFsbCwgZG8gbGluZWFyIGludGVycG9sYWl0b24uXG4gIGlmIChNYXRoLmFicyh1MSkgPCBFUFNJTE9OKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgVklFV1BPUlRfVFJBTlNJVElPTl9QUk9QUykge1xuICAgICAgY29uc3Qgc3RhcnRWYWx1ZSA9IHN0YXJ0UHJvcHNba2V5XTtcbiAgICAgIGNvbnN0IGVuZFZhbHVlID0gZW5kUHJvcHNba2V5XTtcbiAgICAgIHZpZXdwb3J0W2tleV0gPSBsZXJwKHN0YXJ0VmFsdWUsIGVuZFZhbHVlLCB0KTtcbiAgICB9XG4gICAgcmV0dXJuIHZpZXdwb3J0O1xuICB9XG5cbiAgLy8gSW1wbGVtZW50IEVxdWF0aW9uICg5KSBmcm9tIGFib3ZlIGFsZ29yaXRobS5cbiAgY29uc3QgcmhvMiA9IHJobyAqIHJobztcbiAgY29uc3QgYjAgPSAodzEgKiB3MSAtIHcwICogdzAgKyByaG8yICogcmhvMiAqIHUxICogdTEpIC8gKDIgKiB3MCAqIHJobzIgKiB1MSk7XG4gIGNvbnN0IGIxID0gKHcxICogdzEgLSB3MCAqIHcwIC0gcmhvMiAqIHJobzIgKiB1MSAqIHUxKSAvICgyICogdzEgKiByaG8yICogdTEpO1xuICBjb25zdCByMCA9IE1hdGgubG9nKE1hdGguc3FydChiMCAqIGIwICsgMSkgLSBiMCk7XG4gIGNvbnN0IHIxID0gTWF0aC5sb2coTWF0aC5zcXJ0KGIxICogYjEgKyAxKSAtIGIxKTtcbiAgY29uc3QgUyA9IChyMSAtIHIwKSAvIHJobztcbiAgY29uc3QgcyA9IHQgKiBTO1xuXG4gIGNvbnN0IHcgPSAoTWF0aC5jb3NoKHIwKSAvIE1hdGguY29zaChyMCArIHJobyAqIHMpKTtcbiAgY29uc3QgdSA9IHcwICogKChNYXRoLmNvc2gocjApICogTWF0aC50YW5oKHIwICsgcmhvICogcykgLSBNYXRoLnNpbmgocjApKSAvIHJobzIpIC8gdTE7XG5cbiAgY29uc3Qgc2NhbGVJbmNyZW1lbnQgPSAxIC8gdzsgLy8gVXNpbmcgdyBtZXRob2QgZm9yIHNjYWxpbmcuXG4gIGNvbnN0IG5ld1pvb20gPSBzdGFydFpvb20gKyBzY2FsZVRvWm9vbShzY2FsZUluY3JlbWVudCk7XG5cbiAgY29uc3QgbmV3Q2VudGVyID0gd29ybGRUb0xuZ0xhdChcbiAgICAoc3RhcnRDZW50ZXJYWS5hZGQodURlbHRhLnNjYWxlKHUpKSkuc2NhbGUoc2NhbGVJbmNyZW1lbnQpLFxuICAgIHpvb21Ub1NjYWxlKG5ld1pvb20pKTtcbiAgdmlld3BvcnQubG9uZ2l0dWRlID0gbmV3Q2VudGVyWzBdO1xuICB2aWV3cG9ydC5sYXRpdHVkZSA9IG5ld0NlbnRlclsxXTtcbiAgdmlld3BvcnQuem9vbSA9IG5ld1pvb207XG4gIHJldHVybiB2aWV3cG9ydDtcbn1cbi8qIGVzbGludC1lbmFibGUgbWF4LXN0YXRlbWVudHMgKi9cbiJdfQ==

/***/ }),

/***/ "./node_modules/viewport-mercator-project/dist-es6/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/viewport-mercator-project/dist-es6/index.js ***!
  \******************************************************************/
/*! exports provided: default, WebMercatorViewport, fitBounds, normalizeViewportProps, flyToViewport, lngLatToWorld, worldToLngLat, worldToPixels, pixelsToWorld, getMeterZoom, getDistanceScales, getWorldPosition, getViewMatrix, getProjectionMatrix, PerspectiveMercatorViewport, getUncenteredViewMatrix, projectFlat, unprojectFlat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-mercator-viewport */ "./node_modules/viewport-mercator-project/dist-es6/web-mercator-viewport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebMercatorViewport", function() { return _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _fit_bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fit-bounds */ "./node_modules/viewport-mercator-project/dist-es6/fit-bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fitBounds", function() { return _fit_bounds__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _normalize_viewport_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-viewport-props */ "./node_modules/viewport-mercator-project/dist-es6/normalize-viewport-props.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeViewportProps", function() { return _normalize_viewport_props__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _fly_to_viewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fly-to-viewport */ "./node_modules/viewport-mercator-project/dist-es6/fly-to-viewport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flyToViewport", function() { return _fly_to_viewport__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-mercator-utils */ "./node_modules/viewport-mercator-project/dist-es6/web-mercator-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lngLatToWorld", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["lngLatToWorld"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "worldToLngLat", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["worldToLngLat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "worldToPixels", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["worldToPixels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pixelsToWorld", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["pixelsToWorld"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMeterZoom", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["getMeterZoom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDistanceScales", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["getDistanceScales"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWorldPosition", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["getWorldPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getViewMatrix", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["getViewMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProjectionMatrix", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["getProjectionMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerspectiveMercatorViewport", function() { return _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUncenteredViewMatrix", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["getViewMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "projectFlat", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["lngLatToWorld"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unprojectFlat", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["worldToLngLat"]; });

// Classic web-mercator-project









// Deprecated


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiV2ViTWVyY2F0b3JWaWV3cG9ydCIsImZpdEJvdW5kcyIsIm5vcm1hbGl6ZVZpZXdwb3J0UHJvcHMiLCJmbHlUb1ZpZXdwb3J0IiwibG5nTGF0VG9Xb3JsZCIsIndvcmxkVG9MbmdMYXQiLCJ3b3JsZFRvUGl4ZWxzIiwicGl4ZWxzVG9Xb3JsZCIsImdldE1ldGVyWm9vbSIsImdldERpc3RhbmNlU2NhbGVzIiwiZ2V0V29ybGRQb3NpdGlvbiIsImdldFZpZXdNYXRyaXgiLCJnZXRQcm9qZWN0aW9uTWF0cml4IiwiUGVyc3BlY3RpdmVNZXJjYXRvclZpZXdwb3J0IiwiZ2V0VW5jZW50ZXJlZFZpZXdNYXRyaXgiLCJwcm9qZWN0RmxhdCIsInVucHJvamVjdEZsYXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsU0FBUUEsT0FBUixRQUFpQyx5QkFBakM7QUFDQSxTQUFRQSxXQUFXQyxtQkFBbkIsUUFBNkMseUJBQTdDOztBQUVBLFNBQVFELFdBQVdFLFNBQW5CLFFBQW1DLGNBQW5DO0FBQ0EsU0FBUUYsV0FBV0csc0JBQW5CLFFBQWdELDRCQUFoRDtBQUNBLFNBQVFILFdBQVdJLGFBQW5CLFFBQXVDLG1CQUF2Qzs7QUFFQSxTQUNFQyxhQURGLEVBRUVDLGFBRkYsRUFHRUMsYUFIRixFQUlFQyxhQUpGLEVBS0VDLFlBTEYsRUFNRUMsaUJBTkYsRUFPRUMsZ0JBUEYsRUFRRUMsYUFSRixFQVNFQyxtQkFURixRQVVPLHNCQVZQOztBQVlBO0FBQ0EsU0FBUWIsV0FBV2MsMkJBQW5CLFFBQXFELHlCQUFyRDtBQUNBLFNBQ0VGLGlCQUFpQkcsdUJBRG5CLEVBRUVWLGlCQUFpQlcsV0FGbkIsRUFHRVYsaUJBQWlCVyxhQUhuQixRQUlPLHNCQUpQIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2xhc3NpYyB3ZWItbWVyY2F0b3ItcHJvamVjdFxuZXhwb3J0IHtkZWZhdWx0IGFzIGRlZmF1bHR9IGZyb20gJy4vd2ViLW1lcmNhdG9yLXZpZXdwb3J0JztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBXZWJNZXJjYXRvclZpZXdwb3J0fSBmcm9tICcuL3dlYi1tZXJjYXRvci12aWV3cG9ydCc7XG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBmaXRCb3VuZHN9IGZyb20gJy4vZml0LWJvdW5kcyc7XG5leHBvcnQge2RlZmF1bHQgYXMgbm9ybWFsaXplVmlld3BvcnRQcm9wc30gZnJvbSAnLi9ub3JtYWxpemUtdmlld3BvcnQtcHJvcHMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGZseVRvVmlld3BvcnR9IGZyb20gJy4vZmx5LXRvLXZpZXdwb3J0JztcblxuZXhwb3J0IHtcbiAgbG5nTGF0VG9Xb3JsZCxcbiAgd29ybGRUb0xuZ0xhdCxcbiAgd29ybGRUb1BpeGVscyxcbiAgcGl4ZWxzVG9Xb3JsZCxcbiAgZ2V0TWV0ZXJab29tLFxuICBnZXREaXN0YW5jZVNjYWxlcyxcbiAgZ2V0V29ybGRQb3NpdGlvbixcbiAgZ2V0Vmlld01hdHJpeCxcbiAgZ2V0UHJvamVjdGlvbk1hdHJpeFxufSBmcm9tICcuL3dlYi1tZXJjYXRvci11dGlscyc7XG5cbi8vIERlcHJlY2F0ZWRcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQZXJzcGVjdGl2ZU1lcmNhdG9yVmlld3BvcnR9IGZyb20gJy4vd2ViLW1lcmNhdG9yLXZpZXdwb3J0JztcbmV4cG9ydCB7XG4gIGdldFZpZXdNYXRyaXggYXMgZ2V0VW5jZW50ZXJlZFZpZXdNYXRyaXgsXG4gIGxuZ0xhdFRvV29ybGQgYXMgcHJvamVjdEZsYXQsXG4gIHdvcmxkVG9MbmdMYXQgYXMgdW5wcm9qZWN0RmxhdFxufSBmcm9tICcuL3dlYi1tZXJjYXRvci11dGlscyc7XG4iXX0=

/***/ }),

/***/ "./node_modules/viewport-mercator-project/dist-es6/math-utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/viewport-mercator-project/dist-es6/math-utils.js ***!
  \***********************************************************************/
/*! exports provided: createMat4, transformVector, mod, lerp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMat4", function() { return createMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformVector", function() { return transformVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mod", function() { return mod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony import */ var gl_vec4_scale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-vec4/scale */ "./node_modules/gl-vec4/scale.js");
/* harmony import */ var gl_vec4_scale__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_vec4_scale__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gl_vec4_transformMat4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-vec4/transformMat4 */ "./node_modules/gl-vec4/transformMat4.js");
/* harmony import */ var gl_vec4_transformMat4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gl_vec4_transformMat4__WEBPACK_IMPORTED_MODULE_1__);



// Helper, avoids low-precision 32 bit matrices from gl-matrix mat4.create()
function createMat4() {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}

// Transforms a vec4 with a projection matrix
function transformVector(matrix, vector) {
  var result = gl_vec4_transformMat4__WEBPACK_IMPORTED_MODULE_1___default()([], vector, matrix);
  gl_vec4_scale__WEBPACK_IMPORTED_MODULE_0___default()(result, result, 1 / result[3]);
  return result;
}

function mod(value, divisor) {
  var modulus = value % divisor;
  return modulus < 0 ? divisor + modulus : modulus;
}

function lerp(start, end, step) {
  return step * end + (1 - step) * start;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXRoLXV0aWxzLmpzIl0sIm5hbWVzIjpbInZlYzRfc2NhbGUiLCJ2ZWM0X3RyYW5zZm9ybU1hdDQiLCJjcmVhdGVNYXQ0IiwidHJhbnNmb3JtVmVjdG9yIiwibWF0cml4IiwidmVjdG9yIiwicmVzdWx0IiwibW9kIiwidmFsdWUiLCJkaXZpc29yIiwibW9kdWx1cyIsImxlcnAiLCJzdGFydCIsImVuZCIsInN0ZXAiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFVBQVAsTUFBdUIsZUFBdkI7QUFDQSxPQUFPQyxrQkFBUCxNQUErQix1QkFBL0I7O0FBRUE7QUFDQSxPQUFPLFNBQVNDLFVBQVQsR0FBc0I7QUFDM0IsU0FBTyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLEVBQXdDLENBQXhDLEVBQTJDLENBQTNDLEVBQThDLENBQTlDLENBQVA7QUFDRDs7QUFFRDtBQUNBLE9BQU8sU0FBU0MsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUNDLE1BQWpDLEVBQXlDO0FBQzlDLE1BQU1DLFNBQVNMLG1CQUFtQixFQUFuQixFQUF1QkksTUFBdkIsRUFBK0JELE1BQS9CLENBQWY7QUFDQUosYUFBV00sTUFBWCxFQUFtQkEsTUFBbkIsRUFBMkIsSUFBSUEsT0FBTyxDQUFQLENBQS9CO0FBQ0EsU0FBT0EsTUFBUDtBQUNEOztBQUVELE9BQU8sU0FBU0MsR0FBVCxDQUFhQyxLQUFiLEVBQW9CQyxPQUFwQixFQUE2QjtBQUNsQyxNQUFNQyxVQUFVRixRQUFRQyxPQUF4QjtBQUNBLFNBQU9DLFVBQVUsQ0FBVixHQUFjRCxVQUFVQyxPQUF4QixHQUFrQ0EsT0FBekM7QUFDRDs7QUFFRCxPQUFPLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxFQUFxQkMsR0FBckIsRUFBMEJDLElBQTFCLEVBQWdDO0FBQ3JDLFNBQU9BLE9BQU9ELEdBQVAsR0FBYSxDQUFDLElBQUlDLElBQUwsSUFBYUYsS0FBakM7QUFDRCIsImZpbGUiOiJtYXRoLXV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZlYzRfc2NhbGUgZnJvbSAnZ2wtdmVjNC9zY2FsZSc7XG5pbXBvcnQgdmVjNF90cmFuc2Zvcm1NYXQ0IGZyb20gJ2dsLXZlYzQvdHJhbnNmb3JtTWF0NCc7XG5cbi8vIEhlbHBlciwgYXZvaWRzIGxvdy1wcmVjaXNpb24gMzIgYml0IG1hdHJpY2VzIGZyb20gZ2wtbWF0cml4IG1hdDQuY3JlYXRlKClcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYXQ0KCkge1xuICByZXR1cm4gWzEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDFdO1xufVxuXG4vLyBUcmFuc2Zvcm1zIGEgdmVjNCB3aXRoIGEgcHJvamVjdGlvbiBtYXRyaXhcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1WZWN0b3IobWF0cml4LCB2ZWN0b3IpIHtcbiAgY29uc3QgcmVzdWx0ID0gdmVjNF90cmFuc2Zvcm1NYXQ0KFtdLCB2ZWN0b3IsIG1hdHJpeCk7XG4gIHZlYzRfc2NhbGUocmVzdWx0LCByZXN1bHQsIDEgLyByZXN1bHRbM10pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9kKHZhbHVlLCBkaXZpc29yKSB7XG4gIGNvbnN0IG1vZHVsdXMgPSB2YWx1ZSAlIGRpdmlzb3I7XG4gIHJldHVybiBtb2R1bHVzIDwgMCA/IGRpdmlzb3IgKyBtb2R1bHVzIDogbW9kdWx1cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAoc3RhcnQsIGVuZCwgc3RlcCkge1xuICByZXR1cm4gc3RlcCAqIGVuZCArICgxIC0gc3RlcCkgKiBzdGFydDtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/viewport-mercator-project/dist-es6/normalize-viewport-props.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/viewport-mercator-project/dist-es6/normalize-viewport-props.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeViewportProps; });
/* harmony import */ var _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-mercator-viewport */ "./node_modules/viewport-mercator-project/dist-es6/web-mercator-viewport.js");
/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math-utils */ "./node_modules/viewport-mercator-project/dist-es6/math-utils.js");



// defined by mapbox-gl
var MAX_LATITUDE = 85.05113;
var MIN_LATITUDE = -85.05113;

// Apply mathematical constraints to viewport props
/* eslint-disable complexity */
function normalizeViewportProps(_ref) {
  var width = _ref.width,
      height = _ref.height,
      longitude = _ref.longitude,
      latitude = _ref.latitude,
      zoom = _ref.zoom,
      _ref$pitch = _ref.pitch,
      pitch = _ref$pitch === undefined ? 0 : _ref$pitch,
      _ref$bearing = _ref.bearing,
      bearing = _ref$bearing === undefined ? 0 : _ref$bearing;

  // Normalize degrees
  if (longitude < -180 || longitude > 180) {
    longitude = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["mod"])(longitude + 180, 360) - 180;
  }
  if (bearing < -180 || bearing > 180) {
    bearing = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["mod"])(bearing + 180, 360) - 180;
  }

  // Constrain zoom and shift center at low zoom levels
  var flatViewport = new _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__["default"]({ width: width, height: height, longitude: longitude, latitude: latitude, zoom: zoom });
  var topY = flatViewport.project([longitude, MAX_LATITUDE])[1];
  var bottomY = flatViewport.project([longitude, MIN_LATITUDE])[1];
  var shiftY = 0;

  if (bottomY - topY < height) {
    // Map height must not be smaller than viewport height
    // Zoom out map to fit map height into viewport
    zoom += Math.log2(height / (bottomY - topY));

    // Calculate top and bottom using new zoom
    flatViewport = new _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__["default"]({ width: width, height: height, longitude: longitude, latitude: latitude, zoom: zoom });
    topY = flatViewport.project([longitude, MAX_LATITUDE])[1];
    bottomY = flatViewport.project([longitude, MIN_LATITUDE])[1];
  }
  if (topY > 0) {
    // Compensate for white gap on top
    shiftY = topY;
  } else if (bottomY < height) {
    // Compensate for white gap on bottom
    shiftY = bottomY - height;
  }
  if (shiftY) {
    latitude = flatViewport.unproject([width / 2, height / 2 + shiftY])[1];
  }

  return { width: width, height: height, longitude: longitude, latitude: latitude, zoom: zoom, pitch: pitch, bearing: bearing };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub3JtYWxpemUtdmlld3BvcnQtcHJvcHMuanMiXSwibmFtZXMiOlsiV2ViTWVyY2F0b3JWaWV3cG9ydCIsIm1vZCIsIk1BWF9MQVRJVFVERSIsIk1JTl9MQVRJVFVERSIsIm5vcm1hbGl6ZVZpZXdwb3J0UHJvcHMiLCJ3aWR0aCIsImhlaWdodCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiem9vbSIsInBpdGNoIiwiYmVhcmluZyIsImZsYXRWaWV3cG9ydCIsInRvcFkiLCJwcm9qZWN0IiwiYm90dG9tWSIsInNoaWZ0WSIsIk1hdGgiLCJsb2cyIiwidW5wcm9qZWN0Il0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxtQkFBUCxNQUFnQyx5QkFBaEM7QUFDQSxTQUFRQyxHQUFSLFFBQW1CLGNBQW5COztBQUVBO0FBQ0EsSUFBTUMsZUFBZSxRQUFyQjtBQUNBLElBQU1DLGVBQWUsQ0FBQyxRQUF0Qjs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxTQUFTQyxzQkFBVCxPQVFaO0FBQUEsTUFQREMsS0FPQyxRQVBEQSxLQU9DO0FBQUEsTUFOREMsTUFNQyxRQU5EQSxNQU1DO0FBQUEsTUFMREMsU0FLQyxRQUxEQSxTQUtDO0FBQUEsTUFKREMsUUFJQyxRQUpEQSxRQUlDO0FBQUEsTUFIREMsSUFHQyxRQUhEQSxJQUdDO0FBQUEsd0JBRkRDLEtBRUM7QUFBQSxNQUZEQSxLQUVDLDhCQUZPLENBRVA7QUFBQSwwQkFEREMsT0FDQztBQUFBLE1BRERBLE9BQ0MsZ0NBRFMsQ0FDVDs7QUFDRDtBQUNBLE1BQUlKLFlBQVksQ0FBQyxHQUFiLElBQW9CQSxZQUFZLEdBQXBDLEVBQXlDO0FBQ3ZDQSxnQkFBWU4sSUFBSU0sWUFBWSxHQUFoQixFQUFxQixHQUFyQixJQUE0QixHQUF4QztBQUNEO0FBQ0QsTUFBSUksVUFBVSxDQUFDLEdBQVgsSUFBa0JBLFVBQVUsR0FBaEMsRUFBcUM7QUFDbkNBLGNBQVVWLElBQUlVLFVBQVUsR0FBZCxFQUFtQixHQUFuQixJQUEwQixHQUFwQztBQUNEOztBQUVEO0FBQ0EsTUFBSUMsZUFBZSxJQUFJWixtQkFBSixDQUF3QixFQUFDSyxZQUFELEVBQVFDLGNBQVIsRUFBZ0JDLG9CQUFoQixFQUEyQkMsa0JBQTNCLEVBQXFDQyxVQUFyQyxFQUF4QixDQUFuQjtBQUNBLE1BQUlJLE9BQU9ELGFBQWFFLE9BQWIsQ0FBcUIsQ0FBQ1AsU0FBRCxFQUFZTCxZQUFaLENBQXJCLEVBQWdELENBQWhELENBQVg7QUFDQSxNQUFJYSxVQUFVSCxhQUFhRSxPQUFiLENBQXFCLENBQUNQLFNBQUQsRUFBWUosWUFBWixDQUFyQixFQUFnRCxDQUFoRCxDQUFkO0FBQ0EsTUFBSWEsU0FBUyxDQUFiOztBQUVBLE1BQUlELFVBQVVGLElBQVYsR0FBaUJQLE1BQXJCLEVBQTZCO0FBQzNCO0FBQ0E7QUFDQUcsWUFBUVEsS0FBS0MsSUFBTCxDQUFVWixVQUFVUyxVQUFVRixJQUFwQixDQUFWLENBQVI7O0FBRUE7QUFDQUQsbUJBQWUsSUFBSVosbUJBQUosQ0FBd0IsRUFBQ0ssWUFBRCxFQUFRQyxjQUFSLEVBQWdCQyxvQkFBaEIsRUFBMkJDLGtCQUEzQixFQUFxQ0MsVUFBckMsRUFBeEIsQ0FBZjtBQUNBSSxXQUFPRCxhQUFhRSxPQUFiLENBQXFCLENBQUNQLFNBQUQsRUFBWUwsWUFBWixDQUFyQixFQUFnRCxDQUFoRCxDQUFQO0FBQ0FhLGNBQVVILGFBQWFFLE9BQWIsQ0FBcUIsQ0FBQ1AsU0FBRCxFQUFZSixZQUFaLENBQXJCLEVBQWdELENBQWhELENBQVY7QUFDRDtBQUNELE1BQUlVLE9BQU8sQ0FBWCxFQUFjO0FBQ1o7QUFDQUcsYUFBU0gsSUFBVDtBQUNELEdBSEQsTUFHTyxJQUFJRSxVQUFVVCxNQUFkLEVBQXNCO0FBQzNCO0FBQ0FVLGFBQVNELFVBQVVULE1BQW5CO0FBQ0Q7QUFDRCxNQUFJVSxNQUFKLEVBQVk7QUFDVlIsZUFBV0ksYUFBYU8sU0FBYixDQUF1QixDQUFDZCxRQUFRLENBQVQsRUFBWUMsU0FBUyxDQUFULEdBQWFVLE1BQXpCLENBQXZCLEVBQXlELENBQXpELENBQVg7QUFDRDs7QUFFRCxTQUFPLEVBQUNYLFlBQUQsRUFBUUMsY0FBUixFQUFnQkMsb0JBQWhCLEVBQTJCQyxrQkFBM0IsRUFBcUNDLFVBQXJDLEVBQTJDQyxZQUEzQyxFQUFrREMsZ0JBQWxELEVBQVA7QUFDRCIsImZpbGUiOiJub3JtYWxpemUtdmlld3BvcnQtcHJvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViTWVyY2F0b3JWaWV3cG9ydCBmcm9tICcuL3dlYi1tZXJjYXRvci12aWV3cG9ydCc7XG5pbXBvcnQge21vZH0gIGZyb20gJy4vbWF0aC11dGlscyc7XG5cbi8vIGRlZmluZWQgYnkgbWFwYm94LWdsXG5jb25zdCBNQVhfTEFUSVRVREUgPSA4NS4wNTExMztcbmNvbnN0IE1JTl9MQVRJVFVERSA9IC04NS4wNTExMztcblxuLy8gQXBwbHkgbWF0aGVtYXRpY2FsIGNvbnN0cmFpbnRzIHRvIHZpZXdwb3J0IHByb3BzXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVWaWV3cG9ydFByb3BzKHtcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgbG9uZ2l0dWRlLFxuICBsYXRpdHVkZSxcbiAgem9vbSxcbiAgcGl0Y2ggPSAwLFxuICBiZWFyaW5nID0gMFxufSkge1xuICAvLyBOb3JtYWxpemUgZGVncmVlc1xuICBpZiAobG9uZ2l0dWRlIDwgLTE4MCB8fCBsb25naXR1ZGUgPiAxODApIHtcbiAgICBsb25naXR1ZGUgPSBtb2QobG9uZ2l0dWRlICsgMTgwLCAzNjApIC0gMTgwO1xuICB9XG4gIGlmIChiZWFyaW5nIDwgLTE4MCB8fCBiZWFyaW5nID4gMTgwKSB7XG4gICAgYmVhcmluZyA9IG1vZChiZWFyaW5nICsgMTgwLCAzNjApIC0gMTgwO1xuICB9XG5cbiAgLy8gQ29uc3RyYWluIHpvb20gYW5kIHNoaWZ0IGNlbnRlciBhdCBsb3cgem9vbSBsZXZlbHNcbiAgbGV0IGZsYXRWaWV3cG9ydCA9IG5ldyBXZWJNZXJjYXRvclZpZXdwb3J0KHt3aWR0aCwgaGVpZ2h0LCBsb25naXR1ZGUsIGxhdGl0dWRlLCB6b29tfSk7XG4gIGxldCB0b3BZID0gZmxhdFZpZXdwb3J0LnByb2plY3QoW2xvbmdpdHVkZSwgTUFYX0xBVElUVURFXSlbMV07XG4gIGxldCBib3R0b21ZID0gZmxhdFZpZXdwb3J0LnByb2plY3QoW2xvbmdpdHVkZSwgTUlOX0xBVElUVURFXSlbMV07XG4gIGxldCBzaGlmdFkgPSAwO1xuXG4gIGlmIChib3R0b21ZIC0gdG9wWSA8IGhlaWdodCkge1xuICAgIC8vIE1hcCBoZWlnaHQgbXVzdCBub3QgYmUgc21hbGxlciB0aGFuIHZpZXdwb3J0IGhlaWdodFxuICAgIC8vIFpvb20gb3V0IG1hcCB0byBmaXQgbWFwIGhlaWdodCBpbnRvIHZpZXdwb3J0XG4gICAgem9vbSArPSBNYXRoLmxvZzIoaGVpZ2h0IC8gKGJvdHRvbVkgLSB0b3BZKSk7XG5cbiAgICAvLyBDYWxjdWxhdGUgdG9wIGFuZCBib3R0b20gdXNpbmcgbmV3IHpvb21cbiAgICBmbGF0Vmlld3BvcnQgPSBuZXcgV2ViTWVyY2F0b3JWaWV3cG9ydCh7d2lkdGgsIGhlaWdodCwgbG9uZ2l0dWRlLCBsYXRpdHVkZSwgem9vbX0pO1xuICAgIHRvcFkgPSBmbGF0Vmlld3BvcnQucHJvamVjdChbbG9uZ2l0dWRlLCBNQVhfTEFUSVRVREVdKVsxXTtcbiAgICBib3R0b21ZID0gZmxhdFZpZXdwb3J0LnByb2plY3QoW2xvbmdpdHVkZSwgTUlOX0xBVElUVURFXSlbMV07XG4gIH1cbiAgaWYgKHRvcFkgPiAwKSB7XG4gICAgLy8gQ29tcGVuc2F0ZSBmb3Igd2hpdGUgZ2FwIG9uIHRvcFxuICAgIHNoaWZ0WSA9IHRvcFk7XG4gIH0gZWxzZSBpZiAoYm90dG9tWSA8IGhlaWdodCkge1xuICAgIC8vIENvbXBlbnNhdGUgZm9yIHdoaXRlIGdhcCBvbiBib3R0b21cbiAgICBzaGlmdFkgPSBib3R0b21ZIC0gaGVpZ2h0O1xuICB9XG4gIGlmIChzaGlmdFkpIHtcbiAgICBsYXRpdHVkZSA9IGZsYXRWaWV3cG9ydC51bnByb2plY3QoW3dpZHRoIC8gMiwgaGVpZ2h0IC8gMiArIHNoaWZ0WV0pWzFdO1xuICB9XG5cbiAgcmV0dXJuIHt3aWR0aCwgaGVpZ2h0LCBsb25naXR1ZGUsIGxhdGl0dWRlLCB6b29tLCBwaXRjaCwgYmVhcmluZ307XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/viewport-mercator-project/dist-es6/viewport.js":
/*!*********************************************************************!*\
  !*** ./node_modules/viewport-mercator-project/dist-es6/viewport.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var math_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math.gl */ "./node_modules/math.gl/dist-es6/index.js");
/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math-utils */ "./node_modules/viewport-mercator-project/dist-es6/math-utils.js");
/* harmony import */ var _web_mercator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-mercator-utils */ "./node_modules/viewport-mercator-project/dist-es6/web-mercator-utils.js");
/* harmony import */ var gl_mat4_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-mat4/scale */ "./node_modules/gl-mat4/scale.js");
/* harmony import */ var gl_mat4_scale__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_scale__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gl_mat4_translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gl-mat4/translate */ "./node_modules/gl-mat4/translate.js");
/* harmony import */ var gl_mat4_translate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_translate__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gl_mat4_multiply__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gl-mat4/multiply */ "./node_modules/gl-mat4/multiply.js");
/* harmony import */ var gl_mat4_multiply__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_multiply__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gl_mat4_invert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gl-mat4/invert */ "./node_modules/gl-mat4/invert.js");
/* harmony import */ var gl_mat4_invert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_invert__WEBPACK_IMPORTED_MODULE_6__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// View and Projection Matrix management

/* eslint-disable camelcase */









var IDENTITY = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["createMat4"])();

var Viewport = function () {
  /**
   * @classdesc
   * Manages coordinate system transformations for deck.gl.
   *
   * Note: The Viewport is immutable in the sense that it only has accessors.
   * A new viewport instance should be created if any parameters have changed.
   *
   * @class
   * @param {Object} opt - options
   * @param {Boolean} mercator=true - Whether to use mercator projection
   *
   * @param {Number} opt.width=1 - Width of "viewport" or window
   * @param {Number} opt.height=1 - Height of "viewport" or window
   * @param {Array} opt.center=[0, 0] - Center of viewport
   *   [longitude, latitude] or [x, y]
   * @param {Number} opt.scale=1 - Either use scale or zoom
   * @param {Number} opt.pitch=0 - Camera angle in degrees (0 is straight down)
   * @param {Number} opt.bearing=0 - Map rotation in degrees (0 means north is up)
   * @param {Number} opt.altitude= - Altitude of camera in screen units
   *
   * Web mercator projection short-hand parameters
   * @param {Number} opt.latitude - Center of viewport on map (alternative to opt.center)
   * @param {Number} opt.longitude - Center of viewport on map (alternative to opt.center)
   * @param {Number} opt.zoom - Scale = Math.pow(2,zoom) on map (alternative to opt.scale)
   */
  /* eslint-disable complexity */
  function Viewport() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        width = _ref.width,
        height = _ref.height,
        _ref$viewMatrix = _ref.viewMatrix,
        viewMatrix = _ref$viewMatrix === undefined ? IDENTITY : _ref$viewMatrix,
        _ref$projectionMatrix = _ref.projectionMatrix,
        projectionMatrix = _ref$projectionMatrix === undefined ? IDENTITY : _ref$projectionMatrix;

    _classCallCheck(this, Viewport);

    // Silently allow apps to send in 0,0
    this.width = width || 1;
    this.height = height || 1;
    this.scale = 1;

    this.viewMatrix = viewMatrix;
    this.projectionMatrix = projectionMatrix;

    // Note: As usual, matrix operations should be applied in "reverse" order
    // since vectors will be multiplied in from the right during transformation
    var vpm = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["createMat4"])();
    gl_mat4_multiply__WEBPACK_IMPORTED_MODULE_5___default()(vpm, vpm, this.projectionMatrix);
    gl_mat4_multiply__WEBPACK_IMPORTED_MODULE_5___default()(vpm, vpm, this.viewMatrix);
    this.viewProjectionMatrix = vpm;

    // Calculate matrices and scales needed for projection
    /**
     * Builds matrices that converts preprojected lngLats to screen pixels
     * and vice versa.
     * Note: Currently returns bottom-left coordinates!
     * Note: Starts with the GL projection matrix and adds steps to the
     *       scale and translate that matrix onto the window.
     * Note: WebGL controls clip space to screen projection with gl.viewport
     *       and does not need this step.
     */
    var m = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["createMat4"])();

    // matrix for conversion from location to screen coordinates
    gl_mat4_scale__WEBPACK_IMPORTED_MODULE_3___default()(m, m, [this.width / 2, -this.height / 2, 1]);
    gl_mat4_translate__WEBPACK_IMPORTED_MODULE_4___default()(m, m, [1, -1, 0]);

    gl_mat4_multiply__WEBPACK_IMPORTED_MODULE_5___default()(m, m, this.viewProjectionMatrix);

    var mInverse = gl_mat4_invert__WEBPACK_IMPORTED_MODULE_6___default()(Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["createMat4"])(), m);
    if (!mInverse) {
      throw new Error('Pixel project matrix not invertible');
    }

    this.pixelProjectionMatrix = m;
    this.pixelUnprojectionMatrix = mInverse;

    // Bind methods for easy access
    this.equals = this.equals.bind(this);
    this.project = this.project.bind(this);
    this.unproject = this.unproject.bind(this);
    this.projectFlat = this.projectFlat.bind(this);
    this.unprojectFlat = this.unprojectFlat.bind(this);
  }
  /* eslint-enable complexity */

  // Two viewports are equal if width and height are identical, and if
  // their view and projection matrices are (approximately) equal.


  _createClass(Viewport, [{
    key: 'equals',
    value: function equals(viewport) {
      if (!(viewport instanceof Viewport)) {
        return false;
      }

      return viewport.width === this.width && viewport.height === this.height && Object(math_gl__WEBPACK_IMPORTED_MODULE_0__["equals"])(viewport.projectionMatrix, this.projectionMatrix) && Object(math_gl__WEBPACK_IMPORTED_MODULE_0__["equals"])(viewport.viewMatrix, this.viewMatrix);
    }

    /**
     * Projects xyz (possibly latitude and longitude) to pixel coordinates in window
     * using viewport projection parameters
     * - [longitude, latitude] to [x, y]
     * - [longitude, latitude, Z] => [x, y, z]
     * Note: By default, returns top-left coordinates for canvas/SVG type render
     *
     * @param {Array} lngLatZ - [lng, lat] or [lng, lat, Z]
     * @param {Object} opts - options
     * @param {Object} opts.topLeft=true - Whether projected coords are top left
     * @return {Array} - screen coordinates [x, y] or [x, y, z], z as pixel depth
     */

  }, {
    key: 'project',
    value: function project(xyz) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$topLeft = _ref2.topLeft,
          topLeft = _ref2$topLeft === undefined ? true : _ref2$topLeft;

      var _xyz = _slicedToArray(xyz, 3),
          x0 = _xyz[0],
          y0 = _xyz[1],
          z0 = _xyz[2];

      var _projectFlat = this.projectFlat([x0, y0]),
          _projectFlat2 = _slicedToArray(_projectFlat, 2),
          X = _projectFlat2[0],
          Y = _projectFlat2[1];

      var coord = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_2__["worldToPixels"])([X, Y, z0], this.pixelProjectionMatrix);

      var _coord = _slicedToArray(coord, 2),
          x = _coord[0],
          y = _coord[1];

      var y2 = topLeft ? y : this.height - y;
      return xyz.length === 2 ? [x, y2] : [x, y2, coord[2]];
    }

    /**
     * Unproject pixel coordinates on screen onto world coordinates,
     * (possibly [lon, lat]) on map.
     * - [x, y] => [lng, lat]
     * - [x, y, z] => [lng, lat, Z]
     * @param {Array} xyz - screen coordinates, z as pixel depth
     * @param {Object} opts - options
     * @param {Object} opts.topLeft=true - Whether projected coords are top left
     * @param {Object} opts.targetZ=0 - If pixel depth is unknown, targetZ is used as
     *   the elevation plane to unproject onto
     * @return {Array} - [lng, lat, Z] or [X, Y, Z]
     */

  }, {
    key: 'unproject',
    value: function unproject(xyz) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$topLeft = _ref3.topLeft,
          topLeft = _ref3$topLeft === undefined ? true : _ref3$topLeft,
          targetZ = _ref3.targetZ;

      var _xyz2 = _slicedToArray(xyz, 3),
          x = _xyz2[0],
          y = _xyz2[1],
          z = _xyz2[2];

      var y2 = topLeft ? y : this.height - y;
      var coord = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_2__["pixelsToWorld"])([x, y2, z], this.pixelUnprojectionMatrix, targetZ);

      var _unprojectFlat = this.unprojectFlat(coord),
          _unprojectFlat2 = _slicedToArray(_unprojectFlat, 2),
          X = _unprojectFlat2[0],
          Y = _unprojectFlat2[1];

      if (Number.isFinite(z)) {
        // Has depth component
        return [X, Y, coord[2]];
      }

      return Number.isFinite(targetZ) ? [X, Y, targetZ] : [X, Y];
    }

    // NON_LINEAR PROJECTION HOOKS
    // Used for web meractor projection

    /**
     * Project map coordinates to world coordinates.
     * This should be overridden by each viewport that implements a specific
     * geographic projection.
     * @param {Array} xyz - map coordinates
     * @return {Array} [x,y,z] world coordinates.
     */

  }, {
    key: 'projectFlat',
    value: function projectFlat(xyz) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scale;

      return xyz;
    }

    /**
     * Project world coordinates to map coordinates.
     * This should be overridden by each viewport that implements a specific
     * geographic projection.
     * @param {Array} xyz - world coordinates
     * @return {Array} [x,y,z] map coordinates.
     */

  }, {
    key: 'unprojectFlat',
    value: function unprojectFlat(xyz) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scale;

      return xyz;
    }
  }]);

  return Viewport;
}();

/* harmony default export */ __webpack_exports__["default"] = (Viewport);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3cG9ydC5qcyJdLCJuYW1lcyI6WyJlcXVhbHMiLCJjcmVhdGVNYXQ0Iiwid29ybGRUb1BpeGVscyIsInBpeGVsc1RvV29ybGQiLCJtYXQ0X3NjYWxlIiwibWF0NF90cmFuc2xhdGUiLCJtYXQ0X211bHRpcGx5IiwibWF0NF9pbnZlcnQiLCJJREVOVElUWSIsIlZpZXdwb3J0Iiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3TWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsInNjYWxlIiwidnBtIiwidmlld1Byb2plY3Rpb25NYXRyaXgiLCJtIiwibUludmVyc2UiLCJFcnJvciIsInBpeGVsUHJvamVjdGlvbk1hdHJpeCIsInBpeGVsVW5wcm9qZWN0aW9uTWF0cml4IiwiYmluZCIsInByb2plY3QiLCJ1bnByb2plY3QiLCJwcm9qZWN0RmxhdCIsInVucHJvamVjdEZsYXQiLCJ2aWV3cG9ydCIsInh5eiIsInRvcExlZnQiLCJ4MCIsInkwIiwiejAiLCJYIiwiWSIsImNvb3JkIiwieCIsInkiLCJ5MiIsImxlbmd0aCIsInRhcmdldFoiLCJ6IiwiTnVtYmVyIiwiaXNGaW5pdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBO0FBQ0EsU0FBUUEsaUJBQVIsUUFBcUIsU0FBckI7QUFDQSxTQUFRQyxVQUFSLFFBQXlCLGNBQXpCO0FBQ0EsU0FBUUMsYUFBUixFQUF1QkMsYUFBdkIsUUFBMkMsc0JBQTNDOztBQUVBLE9BQU9DLFVBQVAsTUFBdUIsZUFBdkI7QUFDQSxPQUFPQyxjQUFQLE1BQTJCLG1CQUEzQjtBQUNBLE9BQU9DLGFBQVAsTUFBMEIsa0JBQTFCO0FBQ0EsT0FBT0MsV0FBUCxNQUF3QixnQkFBeEI7O0FBRUEsSUFBTUMsV0FBV1AsWUFBakI7O0lBRXFCUSxRO0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0Esc0JBT1E7QUFBQSxtRkFBSixFQUFJO0FBQUEsUUFMTkMsS0FLTSxRQUxOQSxLQUtNO0FBQUEsUUFKTkMsTUFJTSxRQUpOQSxNQUlNO0FBQUEsK0JBRk5DLFVBRU07QUFBQSxRQUZOQSxVQUVNLG1DQUZPSixRQUVQO0FBQUEscUNBRE5LLGdCQUNNO0FBQUEsUUFETkEsZ0JBQ00seUNBRGFMLFFBQ2I7O0FBQUE7O0FBQ047QUFDQSxTQUFLRSxLQUFMLEdBQWFBLFNBQVMsQ0FBdEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLFVBQVUsQ0FBeEI7QUFDQSxTQUFLRyxLQUFMLEdBQWEsQ0FBYjs7QUFFQSxTQUFLRixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7O0FBRUE7QUFDQTtBQUNBLFFBQU1FLE1BQU1kLFlBQVo7QUFDQUssa0JBQWNTLEdBQWQsRUFBbUJBLEdBQW5CLEVBQXdCLEtBQUtGLGdCQUE3QjtBQUNBUCxrQkFBY1MsR0FBZCxFQUFtQkEsR0FBbkIsRUFBd0IsS0FBS0gsVUFBN0I7QUFDQSxTQUFLSSxvQkFBTCxHQUE0QkQsR0FBNUI7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FBU0EsUUFBTUUsSUFBSWhCLFlBQVY7O0FBRUE7QUFDQUcsZUFBV2EsQ0FBWCxFQUFjQSxDQUFkLEVBQWlCLENBQUMsS0FBS1AsS0FBTCxHQUFhLENBQWQsRUFBaUIsQ0FBQyxLQUFLQyxNQUFOLEdBQWUsQ0FBaEMsRUFBbUMsQ0FBbkMsQ0FBakI7QUFDQU4sbUJBQWVZLENBQWYsRUFBa0JBLENBQWxCLEVBQXFCLENBQUMsQ0FBRCxFQUFJLENBQUMsQ0FBTCxFQUFRLENBQVIsQ0FBckI7O0FBRUFYLGtCQUFjVyxDQUFkLEVBQWlCQSxDQUFqQixFQUFvQixLQUFLRCxvQkFBekI7O0FBRUEsUUFBTUUsV0FBV1gsWUFBWU4sWUFBWixFQUEwQmdCLENBQTFCLENBQWpCO0FBQ0EsUUFBSSxDQUFDQyxRQUFMLEVBQWU7QUFDYixZQUFNLElBQUlDLEtBQUosQ0FBVSxxQ0FBVixDQUFOO0FBQ0Q7O0FBRUQsU0FBS0MscUJBQUwsR0FBNkJILENBQTdCO0FBQ0EsU0FBS0ksdUJBQUwsR0FBK0JILFFBQS9COztBQUVBO0FBQ0EsU0FBS2xCLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlzQixJQUFaLENBQWlCLElBQWpCLENBQWQ7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhRCxJQUFiLENBQWtCLElBQWxCLENBQWY7QUFDQSxTQUFLRSxTQUFMLEdBQWlCLEtBQUtBLFNBQUwsQ0FBZUYsSUFBZixDQUFvQixJQUFwQixDQUFqQjtBQUNBLFNBQUtHLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkgsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLSSxhQUFMLEdBQXFCLEtBQUtBLGFBQUwsQ0FBbUJKLElBQW5CLENBQXdCLElBQXhCLENBQXJCO0FBQ0Q7QUFDRDs7QUFFQTtBQUNBOzs7OzsyQkFDT0ssUSxFQUFVO0FBQ2YsVUFBSSxFQUFFQSxvQkFBb0JsQixRQUF0QixDQUFKLEVBQXFDO0FBQ25DLGVBQU8sS0FBUDtBQUNEOztBQUVELGFBQU9rQixTQUFTakIsS0FBVCxLQUFtQixLQUFLQSxLQUF4QixJQUNMaUIsU0FBU2hCLE1BQVQsS0FBb0IsS0FBS0EsTUFEcEIsSUFFTFgsUUFBTzJCLFNBQVNkLGdCQUFoQixFQUFrQyxLQUFLQSxnQkFBdkMsQ0FGSyxJQUdMYixRQUFPMkIsU0FBU2YsVUFBaEIsRUFBNEIsS0FBS0EsVUFBakMsQ0FIRjtBQUlEOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7NEJBWVFnQixHLEVBQTRCO0FBQUEsc0ZBQUosRUFBSTtBQUFBLGdDQUF0QkMsT0FBc0I7QUFBQSxVQUF0QkEsT0FBc0IsaUNBQVosSUFBWTs7QUFBQSxnQ0FDYkQsR0FEYTtBQUFBLFVBQzNCRSxFQUQyQjtBQUFBLFVBQ3ZCQyxFQUR1QjtBQUFBLFVBQ25CQyxFQURtQjs7QUFBQSx5QkFHbkIsS0FBS1AsV0FBTCxDQUFpQixDQUFDSyxFQUFELEVBQUtDLEVBQUwsQ0FBakIsQ0FIbUI7QUFBQTtBQUFBLFVBRzNCRSxDQUgyQjtBQUFBLFVBR3hCQyxDQUh3Qjs7QUFJbEMsVUFBTUMsUUFBUWpDLGNBQWMsQ0FBQytCLENBQUQsRUFBSUMsQ0FBSixFQUFPRixFQUFQLENBQWQsRUFBMEIsS0FBS1oscUJBQS9CLENBQWQ7O0FBSmtDLGtDQU1uQmUsS0FObUI7QUFBQSxVQU0zQkMsQ0FOMkI7QUFBQSxVQU14QkMsQ0FOd0I7O0FBT2xDLFVBQU1DLEtBQUtULFVBQVVRLENBQVYsR0FBYyxLQUFLMUIsTUFBTCxHQUFjMEIsQ0FBdkM7QUFDQSxhQUFPVCxJQUFJVyxNQUFKLEtBQWUsQ0FBZixHQUFtQixDQUFDSCxDQUFELEVBQUlFLEVBQUosQ0FBbkIsR0FBNkIsQ0FBQ0YsQ0FBRCxFQUFJRSxFQUFKLEVBQVFILE1BQU0sQ0FBTixDQUFSLENBQXBDO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs4QkFZVVAsRyxFQUFxQztBQUFBLHNGQUFKLEVBQUk7QUFBQSxnQ0FBL0JDLE9BQStCO0FBQUEsVUFBL0JBLE9BQStCLGlDQUFyQixJQUFxQjtBQUFBLFVBQWZXLE9BQWUsU0FBZkEsT0FBZTs7QUFBQSxpQ0FDM0JaLEdBRDJCO0FBQUEsVUFDdENRLENBRHNDO0FBQUEsVUFDbkNDLENBRG1DO0FBQUEsVUFDaENJLENBRGdDOztBQUc3QyxVQUFNSCxLQUFLVCxVQUFVUSxDQUFWLEdBQWMsS0FBSzFCLE1BQUwsR0FBYzBCLENBQXZDO0FBQ0EsVUFBTUYsUUFBUWhDLGNBQWMsQ0FBQ2lDLENBQUQsRUFBSUUsRUFBSixFQUFRRyxDQUFSLENBQWQsRUFBMEIsS0FBS3BCLHVCQUEvQixFQUF3RG1CLE9BQXhELENBQWQ7O0FBSjZDLDJCQUs5QixLQUFLZCxhQUFMLENBQW1CUyxLQUFuQixDQUw4QjtBQUFBO0FBQUEsVUFLdENGLENBTHNDO0FBQUEsVUFLbkNDLENBTG1DOztBQU83QyxVQUFJUSxPQUFPQyxRQUFQLENBQWdCRixDQUFoQixDQUFKLEVBQXdCO0FBQ3RCO0FBQ0EsZUFBTyxDQUFDUixDQUFELEVBQUlDLENBQUosRUFBT0MsTUFBTSxDQUFOLENBQVAsQ0FBUDtBQUNEOztBQUVELGFBQU9PLE9BQU9DLFFBQVAsQ0FBZ0JILE9BQWhCLElBQTJCLENBQUNQLENBQUQsRUFBSUMsQ0FBSixFQUFPTSxPQUFQLENBQTNCLEdBQTZDLENBQUNQLENBQUQsRUFBSUMsQ0FBSixDQUFwRDtBQUNEOztBQUVEO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Z0NBT1lOLEcsRUFBeUI7QUFBQSxVQUFwQmQsS0FBb0IsdUVBQVosS0FBS0EsS0FBTzs7QUFDbkMsYUFBT2MsR0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7O2tDQU9jQSxHLEVBQXlCO0FBQUEsVUFBcEJkLEtBQW9CLHVFQUFaLEtBQUtBLEtBQU87O0FBQ3JDLGFBQU9jLEdBQVA7QUFDRDs7Ozs7O2VBM0trQm5CLFEiLCJmaWxlIjoidmlld3BvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBWaWV3IGFuZCBQcm9qZWN0aW9uIE1hdHJpeCBtYW5hZ2VtZW50XG5cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IHtlcXVhbHN9IGZyb20gJ21hdGguZ2wnO1xuaW1wb3J0IHtjcmVhdGVNYXQ0fSBmcm9tICcuL21hdGgtdXRpbHMnO1xuaW1wb3J0IHt3b3JsZFRvUGl4ZWxzLCBwaXhlbHNUb1dvcmxkfSBmcm9tICcuL3dlYi1tZXJjYXRvci11dGlscyc7XG5cbmltcG9ydCBtYXQ0X3NjYWxlIGZyb20gJ2dsLW1hdDQvc2NhbGUnO1xuaW1wb3J0IG1hdDRfdHJhbnNsYXRlIGZyb20gJ2dsLW1hdDQvdHJhbnNsYXRlJztcbmltcG9ydCBtYXQ0X211bHRpcGx5IGZyb20gJ2dsLW1hdDQvbXVsdGlwbHknO1xuaW1wb3J0IG1hdDRfaW52ZXJ0IGZyb20gJ2dsLW1hdDQvaW52ZXJ0JztcblxuY29uc3QgSURFTlRJVFkgPSBjcmVhdGVNYXQ0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdwb3J0IHtcbiAgLyoqXG4gICAqIEBjbGFzc2Rlc2NcbiAgICogTWFuYWdlcyBjb29yZGluYXRlIHN5c3RlbSB0cmFuc2Zvcm1hdGlvbnMgZm9yIGRlY2suZ2wuXG4gICAqXG4gICAqIE5vdGU6IFRoZSBWaWV3cG9ydCBpcyBpbW11dGFibGUgaW4gdGhlIHNlbnNlIHRoYXQgaXQgb25seSBoYXMgYWNjZXNzb3JzLlxuICAgKiBBIG5ldyB2aWV3cG9ydCBpbnN0YW5jZSBzaG91bGQgYmUgY3JlYXRlZCBpZiBhbnkgcGFyYW1ldGVycyBoYXZlIGNoYW5nZWQuXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0IC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG1lcmNhdG9yPXRydWUgLSBXaGV0aGVyIHRvIHVzZSBtZXJjYXRvciBwcm9qZWN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHQud2lkdGg9MSAtIFdpZHRoIG9mIFwidmlld3BvcnRcIiBvciB3aW5kb3dcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdC5oZWlnaHQ9MSAtIEhlaWdodCBvZiBcInZpZXdwb3J0XCIgb3Igd2luZG93XG4gICAqIEBwYXJhbSB7QXJyYXl9IG9wdC5jZW50ZXI9WzAsIDBdIC0gQ2VudGVyIG9mIHZpZXdwb3J0XG4gICAqICAgW2xvbmdpdHVkZSwgbGF0aXR1ZGVdIG9yIFt4LCB5XVxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0LnNjYWxlPTEgLSBFaXRoZXIgdXNlIHNjYWxlIG9yIHpvb21cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdC5waXRjaD0wIC0gQ2FtZXJhIGFuZ2xlIGluIGRlZ3JlZXMgKDAgaXMgc3RyYWlnaHQgZG93bilcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdC5iZWFyaW5nPTAgLSBNYXAgcm90YXRpb24gaW4gZGVncmVlcyAoMCBtZWFucyBub3J0aCBpcyB1cClcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdC5hbHRpdHVkZT0gLSBBbHRpdHVkZSBvZiBjYW1lcmEgaW4gc2NyZWVuIHVuaXRzXG4gICAqXG4gICAqIFdlYiBtZXJjYXRvciBwcm9qZWN0aW9uIHNob3J0LWhhbmQgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0LmxhdGl0dWRlIC0gQ2VudGVyIG9mIHZpZXdwb3J0IG9uIG1hcCAoYWx0ZXJuYXRpdmUgdG8gb3B0LmNlbnRlcilcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdC5sb25naXR1ZGUgLSBDZW50ZXIgb2Ygdmlld3BvcnQgb24gbWFwIChhbHRlcm5hdGl2ZSB0byBvcHQuY2VudGVyKVxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0Lnpvb20gLSBTY2FsZSA9IE1hdGgucG93KDIsem9vbSkgb24gbWFwIChhbHRlcm5hdGl2ZSB0byBvcHQuc2NhbGUpXG4gICAqL1xuICAvKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG4gIGNvbnN0cnVjdG9yKHtcbiAgICAvLyBXaW5kb3cgd2lkdGgvaGVpZ2h0IGluIHBpeGVscyAoZm9yIHBpeGVsIHByb2plY3Rpb24pXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIC8vIERlc2NcbiAgICB2aWV3TWF0cml4ID0gSURFTlRJVFksXG4gICAgcHJvamVjdGlvbk1hdHJpeCA9IElERU5USVRZXG4gIH0gPSB7fSkge1xuICAgIC8vIFNpbGVudGx5IGFsbG93IGFwcHMgdG8gc2VuZCBpbiAwLDBcbiAgICB0aGlzLndpZHRoID0gd2lkdGggfHwgMTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCB8fCAxO1xuICAgIHRoaXMuc2NhbGUgPSAxO1xuXG4gICAgdGhpcy52aWV3TWF0cml4ID0gdmlld01hdHJpeDtcbiAgICB0aGlzLnByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4O1xuXG4gICAgLy8gTm90ZTogQXMgdXN1YWwsIG1hdHJpeCBvcGVyYXRpb25zIHNob3VsZCBiZSBhcHBsaWVkIGluIFwicmV2ZXJzZVwiIG9yZGVyXG4gICAgLy8gc2luY2UgdmVjdG9ycyB3aWxsIGJlIG11bHRpcGxpZWQgaW4gZnJvbSB0aGUgcmlnaHQgZHVyaW5nIHRyYW5zZm9ybWF0aW9uXG4gICAgY29uc3QgdnBtID0gY3JlYXRlTWF0NCgpO1xuICAgIG1hdDRfbXVsdGlwbHkodnBtLCB2cG0sIHRoaXMucHJvamVjdGlvbk1hdHJpeCk7XG4gICAgbWF0NF9tdWx0aXBseSh2cG0sIHZwbSwgdGhpcy52aWV3TWF0cml4KTtcbiAgICB0aGlzLnZpZXdQcm9qZWN0aW9uTWF0cml4ID0gdnBtO1xuXG4gICAgLy8gQ2FsY3VsYXRlIG1hdHJpY2VzIGFuZCBzY2FsZXMgbmVlZGVkIGZvciBwcm9qZWN0aW9uXG4gICAgLyoqXG4gICAgICogQnVpbGRzIG1hdHJpY2VzIHRoYXQgY29udmVydHMgcHJlcHJvamVjdGVkIGxuZ0xhdHMgdG8gc2NyZWVuIHBpeGVsc1xuICAgICAqIGFuZCB2aWNlIHZlcnNhLlxuICAgICAqIE5vdGU6IEN1cnJlbnRseSByZXR1cm5zIGJvdHRvbS1sZWZ0IGNvb3JkaW5hdGVzIVxuICAgICAqIE5vdGU6IFN0YXJ0cyB3aXRoIHRoZSBHTCBwcm9qZWN0aW9uIG1hdHJpeCBhbmQgYWRkcyBzdGVwcyB0byB0aGVcbiAgICAgKiAgICAgICBzY2FsZSBhbmQgdHJhbnNsYXRlIHRoYXQgbWF0cml4IG9udG8gdGhlIHdpbmRvdy5cbiAgICAgKiBOb3RlOiBXZWJHTCBjb250cm9scyBjbGlwIHNwYWNlIHRvIHNjcmVlbiBwcm9qZWN0aW9uIHdpdGggZ2wudmlld3BvcnRcbiAgICAgKiAgICAgICBhbmQgZG9lcyBub3QgbmVlZCB0aGlzIHN0ZXAuXG4gICAgICovXG4gICAgY29uc3QgbSA9IGNyZWF0ZU1hdDQoKTtcblxuICAgIC8vIG1hdHJpeCBmb3IgY29udmVyc2lvbiBmcm9tIGxvY2F0aW9uIHRvIHNjcmVlbiBjb29yZGluYXRlc1xuICAgIG1hdDRfc2NhbGUobSwgbSwgW3RoaXMud2lkdGggLyAyLCAtdGhpcy5oZWlnaHQgLyAyLCAxXSk7XG4gICAgbWF0NF90cmFuc2xhdGUobSwgbSwgWzEsIC0xLCAwXSk7XG5cbiAgICBtYXQ0X211bHRpcGx5KG0sIG0sIHRoaXMudmlld1Byb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgY29uc3QgbUludmVyc2UgPSBtYXQ0X2ludmVydChjcmVhdGVNYXQ0KCksIG0pO1xuICAgIGlmICghbUludmVyc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGl4ZWwgcHJvamVjdCBtYXRyaXggbm90IGludmVydGlibGUnKTtcbiAgICB9XG5cbiAgICB0aGlzLnBpeGVsUHJvamVjdGlvbk1hdHJpeCA9IG07XG4gICAgdGhpcy5waXhlbFVucHJvamVjdGlvbk1hdHJpeCA9IG1JbnZlcnNlO1xuXG4gICAgLy8gQmluZCBtZXRob2RzIGZvciBlYXN5IGFjY2Vzc1xuICAgIHRoaXMuZXF1YWxzID0gdGhpcy5lcXVhbHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnByb2plY3QgPSB0aGlzLnByb2plY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVucHJvamVjdCA9IHRoaXMudW5wcm9qZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5wcm9qZWN0RmxhdCA9IHRoaXMucHJvamVjdEZsYXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVucHJvamVjdEZsYXQgPSB0aGlzLnVucHJvamVjdEZsYXQuYmluZCh0aGlzKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIGNvbXBsZXhpdHkgKi9cblxuICAvLyBUd28gdmlld3BvcnRzIGFyZSBlcXVhbCBpZiB3aWR0aCBhbmQgaGVpZ2h0IGFyZSBpZGVudGljYWwsIGFuZCBpZlxuICAvLyB0aGVpciB2aWV3IGFuZCBwcm9qZWN0aW9uIG1hdHJpY2VzIGFyZSAoYXBwcm94aW1hdGVseSkgZXF1YWwuXG4gIGVxdWFscyh2aWV3cG9ydCkge1xuICAgIGlmICghKHZpZXdwb3J0IGluc3RhbmNlb2YgVmlld3BvcnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpZXdwb3J0LndpZHRoID09PSB0aGlzLndpZHRoICYmXG4gICAgICB2aWV3cG9ydC5oZWlnaHQgPT09IHRoaXMuaGVpZ2h0ICYmXG4gICAgICBlcXVhbHModmlld3BvcnQucHJvamVjdGlvbk1hdHJpeCwgdGhpcy5wcm9qZWN0aW9uTWF0cml4KSAmJlxuICAgICAgZXF1YWxzKHZpZXdwb3J0LnZpZXdNYXRyaXgsIHRoaXMudmlld01hdHJpeCk7XG4gIH1cblxuICAvKipcbiAgICogUHJvamVjdHMgeHl6IChwb3NzaWJseSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlKSB0byBwaXhlbCBjb29yZGluYXRlcyBpbiB3aW5kb3dcbiAgICogdXNpbmcgdmlld3BvcnQgcHJvamVjdGlvbiBwYXJhbWV0ZXJzXG4gICAqIC0gW2xvbmdpdHVkZSwgbGF0aXR1ZGVdIHRvIFt4LCB5XVxuICAgKiAtIFtsb25naXR1ZGUsIGxhdGl0dWRlLCBaXSA9PiBbeCwgeSwgel1cbiAgICogTm90ZTogQnkgZGVmYXVsdCwgcmV0dXJucyB0b3AtbGVmdCBjb29yZGluYXRlcyBmb3IgY2FudmFzL1NWRyB0eXBlIHJlbmRlclxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBsbmdMYXRaIC0gW2xuZywgbGF0XSBvciBbbG5nLCBsYXQsIFpdXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy50b3BMZWZ0PXRydWUgLSBXaGV0aGVyIHByb2plY3RlZCBjb29yZHMgYXJlIHRvcCBsZWZ0XG4gICAqIEByZXR1cm4ge0FycmF5fSAtIHNjcmVlbiBjb29yZGluYXRlcyBbeCwgeV0gb3IgW3gsIHksIHpdLCB6IGFzIHBpeGVsIGRlcHRoXG4gICAqL1xuICBwcm9qZWN0KHh5eiwge3RvcExlZnQgPSB0cnVlfSA9IHt9KSB7XG4gICAgY29uc3QgW3gwLCB5MCwgejBdID0geHl6O1xuXG4gICAgY29uc3QgW1gsIFldID0gdGhpcy5wcm9qZWN0RmxhdChbeDAsIHkwXSk7XG4gICAgY29uc3QgY29vcmQgPSB3b3JsZFRvUGl4ZWxzKFtYLCBZLCB6MF0sIHRoaXMucGl4ZWxQcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkO1xuICAgIGNvbnN0IHkyID0gdG9wTGVmdCA/IHkgOiB0aGlzLmhlaWdodCAtIHk7XG4gICAgcmV0dXJuIHh5ei5sZW5ndGggPT09IDIgPyBbeCwgeTJdIDogW3gsIHkyLCBjb29yZFsyXV07XG4gIH1cblxuICAvKipcbiAgICogVW5wcm9qZWN0IHBpeGVsIGNvb3JkaW5hdGVzIG9uIHNjcmVlbiBvbnRvIHdvcmxkIGNvb3JkaW5hdGVzLFxuICAgKiAocG9zc2libHkgW2xvbiwgbGF0XSkgb24gbWFwLlxuICAgKiAtIFt4LCB5XSA9PiBbbG5nLCBsYXRdXG4gICAqIC0gW3gsIHksIHpdID0+IFtsbmcsIGxhdCwgWl1cbiAgICogQHBhcmFtIHtBcnJheX0geHl6IC0gc2NyZWVuIGNvb3JkaW5hdGVzLCB6IGFzIHBpeGVsIGRlcHRoXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy50b3BMZWZ0PXRydWUgLSBXaGV0aGVyIHByb2plY3RlZCBjb29yZHMgYXJlIHRvcCBsZWZ0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLnRhcmdldFo9MCAtIElmIHBpeGVsIGRlcHRoIGlzIHVua25vd24sIHRhcmdldFogaXMgdXNlZCBhc1xuICAgKiAgIHRoZSBlbGV2YXRpb24gcGxhbmUgdG8gdW5wcm9qZWN0IG9udG9cbiAgICogQHJldHVybiB7QXJyYXl9IC0gW2xuZywgbGF0LCBaXSBvciBbWCwgWSwgWl1cbiAgICovXG4gIHVucHJvamVjdCh4eXosIHt0b3BMZWZ0ID0gdHJ1ZSwgdGFyZ2V0Wn0gPSB7fSkge1xuICAgIGNvbnN0IFt4LCB5LCB6XSA9IHh5ejtcblxuICAgIGNvbnN0IHkyID0gdG9wTGVmdCA/IHkgOiB0aGlzLmhlaWdodCAtIHk7XG4gICAgY29uc3QgY29vcmQgPSBwaXhlbHNUb1dvcmxkKFt4LCB5Miwgel0sIHRoaXMucGl4ZWxVbnByb2plY3Rpb25NYXRyaXgsIHRhcmdldFopO1xuICAgIGNvbnN0IFtYLCBZXSA9IHRoaXMudW5wcm9qZWN0RmxhdChjb29yZCk7XG5cbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHopKSB7XG4gICAgICAvLyBIYXMgZGVwdGggY29tcG9uZW50XG4gICAgICByZXR1cm4gW1gsIFksIGNvb3JkWzJdXTtcbiAgICB9XG5cbiAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKHRhcmdldFopID8gW1gsIFksIHRhcmdldFpdIDogW1gsIFldO1xuICB9XG5cbiAgLy8gTk9OX0xJTkVBUiBQUk9KRUNUSU9OIEhPT0tTXG4gIC8vIFVzZWQgZm9yIHdlYiBtZXJhY3RvciBwcm9qZWN0aW9uXG5cbiAgLyoqXG4gICAqIFByb2plY3QgbWFwIGNvb3JkaW5hdGVzIHRvIHdvcmxkIGNvb3JkaW5hdGVzLlxuICAgKiBUaGlzIHNob3VsZCBiZSBvdmVycmlkZGVuIGJ5IGVhY2ggdmlld3BvcnQgdGhhdCBpbXBsZW1lbnRzIGEgc3BlY2lmaWNcbiAgICogZ2VvZ3JhcGhpYyBwcm9qZWN0aW9uLlxuICAgKiBAcGFyYW0ge0FycmF5fSB4eXogLSBtYXAgY29vcmRpbmF0ZXNcbiAgICogQHJldHVybiB7QXJyYXl9IFt4LHksel0gd29ybGQgY29vcmRpbmF0ZXMuXG4gICAqL1xuICBwcm9qZWN0RmxhdCh4eXosIHNjYWxlID0gdGhpcy5zY2FsZSkge1xuICAgIHJldHVybiB4eXo7XG4gIH1cblxuICAvKipcbiAgICogUHJvamVjdCB3b3JsZCBjb29yZGluYXRlcyB0byBtYXAgY29vcmRpbmF0ZXMuXG4gICAqIFRoaXMgc2hvdWxkIGJlIG92ZXJyaWRkZW4gYnkgZWFjaCB2aWV3cG9ydCB0aGF0IGltcGxlbWVudHMgYSBzcGVjaWZpY1xuICAgKiBnZW9ncmFwaGljIHByb2plY3Rpb24uXG4gICAqIEBwYXJhbSB7QXJyYXl9IHh5eiAtIHdvcmxkIGNvb3JkaW5hdGVzXG4gICAqIEByZXR1cm4ge0FycmF5fSBbeCx5LHpdIG1hcCBjb29yZGluYXRlcy5cbiAgICovXG4gIHVucHJvamVjdEZsYXQoeHl6LCBzY2FsZSA9IHRoaXMuc2NhbGUpIHtcbiAgICByZXR1cm4geHl6O1xuICB9XG5cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/viewport-mercator-project/dist-es6/web-mercator-utils.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/viewport-mercator-project/dist-es6/web-mercator-utils.js ***!
  \*******************************************************************************/
/*! exports provided: zoomToScale, scaleToZoom, lngLatToWorld, worldToLngLat, getMeterZoom, getDistanceScales, getWorldPosition, getViewMatrix, getProjectionMatrix, worldToPixels, pixelsToWorld */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomToScale", function() { return zoomToScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleToZoom", function() { return scaleToZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lngLatToWorld", function() { return lngLatToWorld; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worldToLngLat", function() { return worldToLngLat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeterZoom", function() { return getMeterZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistanceScales", function() { return getDistanceScales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorldPosition", function() { return getWorldPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewMatrix", function() { return getViewMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectionMatrix", function() { return getProjectionMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worldToPixels", function() { return worldToPixels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pixelsToWorld", function() { return pixelsToWorld; });
/* harmony import */ var math_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math.gl */ "./node_modules/math.gl/dist-es6/index.js");
/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math-utils */ "./node_modules/viewport-mercator-project/dist-es6/math-utils.js");
/* harmony import */ var gl_mat4_perspective__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-mat4/perspective */ "./node_modules/gl-mat4/perspective.js");
/* harmony import */ var gl_mat4_perspective__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_perspective__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gl_mat4_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-mat4/scale */ "./node_modules/gl-mat4/scale.js");
/* harmony import */ var gl_mat4_scale__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_scale__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gl_mat4_translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gl-mat4/translate */ "./node_modules/gl-mat4/translate.js");
/* harmony import */ var gl_mat4_translate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_translate__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gl_mat4_rotateX__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gl-mat4/rotateX */ "./node_modules/gl-mat4/rotateX.js");
/* harmony import */ var gl_mat4_rotateX__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_rotateX__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gl_mat4_rotateZ__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gl-mat4/rotateZ */ "./node_modules/gl-mat4/rotateZ.js");
/* harmony import */ var gl_mat4_rotateZ__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gl_mat4_rotateZ__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gl_vec2_lerp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gl-vec2/lerp */ "./node_modules/gl-vec2/lerp.js");
/* harmony import */ var gl_vec2_lerp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gl_vec2_lerp__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_8__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// TODO - THE UTILITIES IN THIS FILE SHOULD BE IMPORTED FROM WEB-MERCATOR-VIEWPORT MODULE












// CONSTANTS
var PI = Math.PI;
var PI_4 = PI / 4;
var DEGREES_TO_RADIANS = PI / 180;
var RADIANS_TO_DEGREES = 180 / PI;
var TILE_SIZE = 512;
// Average circumference (40075 km equatorial, 40007 km meridional)
var EARTH_CIRCUMFERENCE = 40.03e6;

/** Util functions **/
function zoomToScale(zoom) {
  return Math.pow(2, zoom);
}

function scaleToZoom(scale) {
  return Math.log2(scale);
}

/**
 * Project [lng,lat] on sphere onto [x,y] on 512*512 Mercator Zoom 0 tile.
 * Performs the nonlinear part of the web mercator projection.
 * Remaining projection is done with 4x4 matrices which also handles
 * perspective.
 *
 * @param {Array} lngLat - [lng, lat] coordinates
 *   Specifies a point on the sphere to project onto the map.
 * @return {Array} [x,y] coordinates.
 */
function lngLatToWorld(_ref, scale) {
  var _ref2 = _slicedToArray(_ref, 2),
      lng = _ref2[0],
      lat = _ref2[1];

  scale *= TILE_SIZE;
  var lambda2 = lng * DEGREES_TO_RADIANS;
  var phi2 = lat * DEGREES_TO_RADIANS;
  var x = scale * (lambda2 + PI) / (2 * PI);
  var y = scale * (PI - Math.log(Math.tan(PI_4 + phi2 * 0.5))) / (2 * PI);
  return [x, y];
}

/**
 * Unproject world point [x,y] on map onto {lat, lon} on sphere
 *
 * @param {object|Vector} xy - object with {x,y} members
 *  representing point on projected map plane
 * @return {GeoCoordinates} - object with {lat,lon} of point on sphere.
 *   Has toArray method if you need a GeoJSON Array.
 *   Per cartographic tradition, lat and lon are specified as degrees.
 */
function worldToLngLat(_ref3, scale) {
  var _ref4 = _slicedToArray(_ref3, 2),
      x = _ref4[0],
      y = _ref4[1];

  scale *= TILE_SIZE;
  var lambda2 = x / scale * (2 * PI) - PI;
  var phi2 = 2 * (Math.atan(Math.exp(PI - y / scale * (2 * PI))) - PI_4);
  return [lambda2 * RADIANS_TO_DEGREES, phi2 * RADIANS_TO_DEGREES];
}

// Returns the zoom level that gives a 1 meter pixel at a certain latitude
// S=C*cos(y)/2^(z+8)
function getMeterZoom(_ref5) {
  var latitude = _ref5.latitude;

  assert__WEBPACK_IMPORTED_MODULE_8___default()(Number.isFinite(latitude));
  var latCosine = Math.cos(latitude * DEGREES_TO_RADIANS);
  return scaleToZoom(EARTH_CIRCUMFERENCE * latCosine) - 8;
}

/**
 * Calculate distance scales in meters around current lat/lon, both for
 * degrees and pixels.
 * In mercator projection mode, the distance scales vary significantly
 * with latitude.
 */
function getDistanceScales(_ref6) {
  var latitude = _ref6.latitude,
      longitude = _ref6.longitude,
      zoom = _ref6.zoom,
      scale = _ref6.scale,
      _ref6$highPrecision = _ref6.highPrecision,
      highPrecision = _ref6$highPrecision === undefined ? false : _ref6$highPrecision;

  // Calculate scale from zoom if not provided
  scale = scale !== undefined ? scale : zoomToScale(zoom);

  assert__WEBPACK_IMPORTED_MODULE_8___default()(Number.isFinite(latitude) && Number.isFinite(longitude) && Number.isFinite(scale));

  var result = {};
  var worldSize = TILE_SIZE * scale;
  var latCosine = Math.cos(latitude * DEGREES_TO_RADIANS);

  /**
   * Number of pixels occupied by one degree longitude around current lat/lon:
     pixelsPerDegreeX = d(lngLatToWorld([lng, lat])[0])/d(lng)
       = scale * TILE_SIZE * DEGREES_TO_RADIANS / (2 * PI)
     pixelsPerDegreeY = d(lngLatToWorld([lng, lat])[1])/d(lat)
       = -scale * TILE_SIZE * DEGREES_TO_RADIANS / cos(lat * DEGREES_TO_RADIANS)  / (2 * PI)
   */
  var pixelsPerDegreeX = worldSize / 360;
  var pixelsPerDegreeY = pixelsPerDegreeX / latCosine;

  /**
   * Number of pixels occupied by one meter around current lat/lon:
   */
  var altPixelsPerMeter = worldSize / EARTH_CIRCUMFERENCE / latCosine;

  result.pixelsPerMeter = [altPixelsPerMeter, altPixelsPerMeter, altPixelsPerMeter];
  result.metersPerPixel = [1 / altPixelsPerMeter, 1 / altPixelsPerMeter, 1 / altPixelsPerMeter];

  result.pixelsPerDegree = [pixelsPerDegreeX, pixelsPerDegreeY, altPixelsPerMeter];
  result.degreesPerPixel = [1 / pixelsPerDegreeX, 1 / pixelsPerDegreeY, 1 / altPixelsPerMeter];

  /**
   * Taylor series 2nd order for 1/latCosine
     f'(a) * (x - a)
       = d(1/cos(lat * DEGREES_TO_RADIANS))/d(lat) * dLat
       = DEGREES_TO_RADIANS * tan(lat * DEGREES_TO_RADIANS) / cos(lat * DEGREES_TO_RADIANS) * dLat
   */
  if (highPrecision) {
    var latCosine2 = DEGREES_TO_RADIANS * Math.tan(latitude * DEGREES_TO_RADIANS) / latCosine;
    var pixelsPerDegreeY2 = pixelsPerDegreeX * latCosine2 / 2;
    var altPixelsPerDegree2 = worldSize / EARTH_CIRCUMFERENCE * latCosine2;
    var altPixelsPerMeter2 = altPixelsPerDegree2 / pixelsPerDegreeY * altPixelsPerMeter;

    result.pixelsPerDegree2 = [0, pixelsPerDegreeY2, altPixelsPerDegree2];
    result.pixelsPerMeter2 = [altPixelsPerMeter2, 0, altPixelsPerMeter2];
  }

  // Main results, used for converting meters to latlng deltas and scaling offsets
  return result;
}

/**
 * Calculates a mercator world position ("pixels" in given zoom level)
 * from a lng/lat and meterOffset
 */
function getWorldPosition(_ref7) {
  var longitude = _ref7.longitude,
      latitude = _ref7.latitude,
      zoom = _ref7.zoom,
      scale = _ref7.scale,
      meterOffset = _ref7.meterOffset,
      _ref7$distanceScales = _ref7.distanceScales,
      distanceScales = _ref7$distanceScales === undefined ? null : _ref7$distanceScales;

  // Calculate scale from zoom if not provided
  scale = scale !== undefined ? scale : zoomToScale(zoom);

  // Make a centered version of the matrix for projection modes without an offset
  var center2d = lngLatToWorld([longitude, latitude], scale);
  var center = new math_gl__WEBPACK_IMPORTED_MODULE_0__["Vector3"](center2d[0], center2d[1], 0);

  if (meterOffset) {
    // Calculate distance scales if lng/lat/zoom are provided
    distanceScales = distanceScales || getDistanceScales({ latitude: latitude, longitude: longitude, scale: scale });

    var pixelPosition = new math_gl__WEBPACK_IMPORTED_MODULE_0__["Vector3"](meterOffset)
    // Convert to pixels in current zoom
    .scale(distanceScales.pixelsPerMeter)
    // We want positive Y to represent an offset towards north,
    // but web mercator world coordinates is top-left
    .scale([1, -1, 1]);
    center.add(pixelPosition);
  }

  return center;
}

// ATTRIBUTION:
// view and projection matrix creation is intentionally kept compatible with
// mapbox-gl's implementation to ensure that seamless interoperation
// with mapbox and react-map-gl. See: https://github.com/mapbox/mapbox-gl-js

// Variable fov (in radians)
function getFov(_ref8) {
  var height = _ref8.height,
      altitude = _ref8.altitude;

  return 2 * Math.atan(height / 2 / altitude);
}

function getClippingPlanes(_ref9) {
  var altitude = _ref9.altitude,
      pitch = _ref9.pitch;

  // Find the distance from the center point to the center top
  // in altitude units using law of sines.
  var pitchRadians = pitch * DEGREES_TO_RADIANS;
  var halfFov = Math.atan(0.5 / altitude);
  var topHalfSurfaceDistance = Math.sin(halfFov) * altitude / Math.sin(Math.PI / 2 - pitchRadians - halfFov);

  // Calculate z value of the farthest fragment that should be rendered.
  var farZ = Math.cos(Math.PI / 2 - pitchRadians) * topHalfSurfaceDistance + altitude;

  return { farZ: farZ, nearZ: 0.1 };
}

function getViewMatrix(_ref10) {
  var height = _ref10.height,
      pitch = _ref10.pitch,
      bearing = _ref10.bearing,
      altitude = _ref10.altitude,
      _ref10$center = _ref10.center,
      center = _ref10$center === undefined ? null : _ref10$center,
      _ref10$flipY = _ref10.flipY,
      flipY = _ref10$flipY === undefined ? false : _ref10$flipY;


  // VIEW MATRIX: PROJECTS MERCATOR WORLD COORDINATES
  // Note that mercator world coordinates typically need to be flipped
  //
  // Note: As usual, matrix operation orders should be read in reverse
  // since vectors will be multiplied from the right during transformation
  var vm = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["createMat4"])();

  // Move camera to altitude (along the pitch & bearing direction)
  gl_mat4_translate__WEBPACK_IMPORTED_MODULE_4___default()(vm, vm, [0, 0, -altitude]);

  // After the rotateX, z values are in pixel units. Convert them to
  // altitude units. 1 altitude unit = the screen height.
  gl_mat4_scale__WEBPACK_IMPORTED_MODULE_3___default()(vm, vm, [1, 1, 1 / height]);

  // Rotate by bearing, and then by pitch (which tilts the view)
  gl_mat4_rotateX__WEBPACK_IMPORTED_MODULE_5___default()(vm, vm, -pitch * DEGREES_TO_RADIANS);
  gl_mat4_rotateZ__WEBPACK_IMPORTED_MODULE_6___default()(vm, vm, bearing * DEGREES_TO_RADIANS);

  if (flipY) {
    gl_mat4_scale__WEBPACK_IMPORTED_MODULE_3___default()(vm, vm, [1, -1, 1]);
  }

  if (center) {
    gl_mat4_translate__WEBPACK_IMPORTED_MODULE_4___default()(vm, vm, new math_gl__WEBPACK_IMPORTED_MODULE_0__["Vector3"](center).negate());
  }

  return vm;
}

// PROJECTION MATRIX: PROJECTS FROM CAMERA (VIEW) SPACE TO CLIPSPACE
// This is a "Mapbox" projection matrix - matches mapbox exactly if farZMultiplier === 1
function getProjectionMatrix(_ref11) {
  var width = _ref11.width,
      height = _ref11.height,
      pitch = _ref11.pitch,
      altitude = _ref11.altitude,
      _ref11$farZMultiplier = _ref11.farZMultiplier,
      farZMultiplier = _ref11$farZMultiplier === undefined ? 10 : _ref11$farZMultiplier;

  var _getClippingPlanes = getClippingPlanes({ altitude: altitude, pitch: pitch }),
      nearZ = _getClippingPlanes.nearZ,
      farZ = _getClippingPlanes.farZ;

  var fov = getFov({ height: height, altitude: altitude });

  var projectionMatrix = gl_mat4_perspective__WEBPACK_IMPORTED_MODULE_2___default()([], fov, // fov in radians
  width / height, // aspect ratio
  nearZ, // near plane
  farZ * farZMultiplier // far plane
  );

  return projectionMatrix;
}

/**
 * Project flat coordinates to pixels on screen.
 *
 * @param {Array} xyz - flat coordinate on 512*512 Mercator Zoom 0 tile
 * @param {Matrix4} pixelProjectionMatrix - projection matrix
 * @return {Array} [x, y, depth] pixel coordinate on screen.
 */
function worldToPixels(xyz, pixelProjectionMatrix) {
  var _xyz = _slicedToArray(xyz, 3),
      x = _xyz[0],
      y = _xyz[1],
      _xyz$ = _xyz[2],
      z = _xyz$ === undefined ? 0 : _xyz$;

  assert__WEBPACK_IMPORTED_MODULE_8___default()(Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z));

  return Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["transformVector"])(pixelProjectionMatrix, [x, y, z, 1]);
}

/**
 * Unproject pixels on screen to flat coordinates.
 *
 * @param {Array} xyz - pixel coordinate on screen.
 * @param {Matrix4} pixelUnprojectionMatrix - unprojection matrix
 * @param {Number} targetZ - if pixel coordinate does not have a 3rd component (depth),
 *    targetZ is used as the elevation plane to unproject onto
 * @return {Array} [x, y, Z] flat coordinates on 512*512 Mercator Zoom 0 tile.
 */
function pixelsToWorld(xyz, pixelUnprojectionMatrix) {
  var targetZ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var _xyz2 = _slicedToArray(xyz, 3),
      x = _xyz2[0],
      y = _xyz2[1],
      z = _xyz2[2];

  assert__WEBPACK_IMPORTED_MODULE_8___default()(Number.isFinite(x) && Number.isFinite(y));

  if (Number.isFinite(z)) {
    // Has depth component
    var coord = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["transformVector"])(pixelUnprojectionMatrix, [x, y, z, 1]);
    return coord;
  }

  // since we don't know the correct projected z value for the point,
  // unproject two points to get a line and then find the point on that line with z=0
  var coord0 = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["transformVector"])(pixelUnprojectionMatrix, [x, y, 0, 1]);
  var coord1 = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["transformVector"])(pixelUnprojectionMatrix, [x, y, 1, 1]);

  var z0 = coord0[2];
  var z1 = coord1[2];

  var t = z0 === z1 ? 0 : ((targetZ || 0) - z0) / (z1 - z0);
  return gl_vec2_lerp__WEBPACK_IMPORTED_MODULE_7___default()([], coord0, coord1, t);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93ZWItbWVyY2F0b3ItdXRpbHMuanMiXSwibmFtZXMiOlsiVmVjdG9yMyIsImNyZWF0ZU1hdDQiLCJ0cmFuc2Zvcm1WZWN0b3IiLCJtYXQ0X3BlcnNwZWN0aXZlIiwibWF0NF9zY2FsZSIsIm1hdDRfdHJhbnNsYXRlIiwibWF0NF9yb3RhdGVYIiwibWF0NF9yb3RhdGVaIiwidmVjMl9sZXJwIiwiYXNzZXJ0IiwiUEkiLCJNYXRoIiwiUElfNCIsIkRFR1JFRVNfVE9fUkFESUFOUyIsIlJBRElBTlNfVE9fREVHUkVFUyIsIlRJTEVfU0laRSIsIkVBUlRIX0NJUkNVTUZFUkVOQ0UiLCJ6b29tVG9TY2FsZSIsInpvb20iLCJwb3ciLCJzY2FsZVRvWm9vbSIsInNjYWxlIiwibG9nMiIsImxuZ0xhdFRvV29ybGQiLCJsbmciLCJsYXQiLCJsYW1iZGEyIiwicGhpMiIsIngiLCJ5IiwibG9nIiwidGFuIiwid29ybGRUb0xuZ0xhdCIsImF0YW4iLCJleHAiLCJnZXRNZXRlclpvb20iLCJsYXRpdHVkZSIsIk51bWJlciIsImlzRmluaXRlIiwibGF0Q29zaW5lIiwiY29zIiwiZ2V0RGlzdGFuY2VTY2FsZXMiLCJsb25naXR1ZGUiLCJoaWdoUHJlY2lzaW9uIiwidW5kZWZpbmVkIiwicmVzdWx0Iiwid29ybGRTaXplIiwicGl4ZWxzUGVyRGVncmVlWCIsInBpeGVsc1BlckRlZ3JlZVkiLCJhbHRQaXhlbHNQZXJNZXRlciIsInBpeGVsc1Blck1ldGVyIiwibWV0ZXJzUGVyUGl4ZWwiLCJwaXhlbHNQZXJEZWdyZWUiLCJkZWdyZWVzUGVyUGl4ZWwiLCJsYXRDb3NpbmUyIiwicGl4ZWxzUGVyRGVncmVlWTIiLCJhbHRQaXhlbHNQZXJEZWdyZWUyIiwiYWx0UGl4ZWxzUGVyTWV0ZXIyIiwicGl4ZWxzUGVyRGVncmVlMiIsInBpeGVsc1Blck1ldGVyMiIsImdldFdvcmxkUG9zaXRpb24iLCJtZXRlck9mZnNldCIsImRpc3RhbmNlU2NhbGVzIiwiY2VudGVyMmQiLCJjZW50ZXIiLCJwaXhlbFBvc2l0aW9uIiwiYWRkIiwiZ2V0Rm92IiwiaGVpZ2h0IiwiYWx0aXR1ZGUiLCJnZXRDbGlwcGluZ1BsYW5lcyIsInBpdGNoIiwicGl0Y2hSYWRpYW5zIiwiaGFsZkZvdiIsInRvcEhhbGZTdXJmYWNlRGlzdGFuY2UiLCJzaW4iLCJmYXJaIiwibmVhcloiLCJnZXRWaWV3TWF0cml4IiwiYmVhcmluZyIsImZsaXBZIiwidm0iLCJuZWdhdGUiLCJnZXRQcm9qZWN0aW9uTWF0cml4Iiwid2lkdGgiLCJmYXJaTXVsdGlwbGllciIsImZvdiIsInByb2plY3Rpb25NYXRyaXgiLCJ3b3JsZFRvUGl4ZWxzIiwieHl6IiwicGl4ZWxQcm9qZWN0aW9uTWF0cml4IiwieiIsInBpeGVsc1RvV29ybGQiLCJwaXhlbFVucHJvamVjdGlvbk1hdHJpeCIsInRhcmdldFoiLCJjb29yZCIsImNvb3JkMCIsImNvb3JkMSIsInowIiwiejEiLCJ0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLFNBQVFBLE9BQVIsUUFBc0IsU0FBdEI7QUFDQSxTQUFRQyxVQUFSLEVBQW9CQyxlQUFwQixRQUEwQyxjQUExQzs7QUFFQSxPQUFPQyxnQkFBUCxNQUE2QixxQkFBN0I7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLGVBQXZCO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQixtQkFBM0I7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGlCQUF6QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsaUJBQXpCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixjQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFBbkI7O0FBRUE7QUFDQSxJQUFNQyxLQUFLQyxLQUFLRCxFQUFoQjtBQUNBLElBQU1FLE9BQU9GLEtBQUssQ0FBbEI7QUFDQSxJQUFNRyxxQkFBcUJILEtBQUssR0FBaEM7QUFDQSxJQUFNSSxxQkFBcUIsTUFBTUosRUFBakM7QUFDQSxJQUFNSyxZQUFZLEdBQWxCO0FBQ0E7QUFDQSxJQUFNQyxzQkFBc0IsT0FBNUI7O0FBRUE7QUFDQSxPQUFPLFNBQVNDLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTJCO0FBQ2hDLFNBQU9QLEtBQUtRLEdBQUwsQ0FBUyxDQUFULEVBQVlELElBQVosQ0FBUDtBQUNEOztBQUVELE9BQU8sU0FBU0UsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDakMsU0FBT1YsS0FBS1csSUFBTCxDQUFVRCxLQUFWLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OztBQVVBLE9BQU8sU0FBU0UsYUFBVCxPQUFtQ0YsS0FBbkMsRUFBMEM7QUFBQTtBQUFBLE1BQWxCRyxHQUFrQjtBQUFBLE1BQWJDLEdBQWE7O0FBQy9DSixXQUFTTixTQUFUO0FBQ0EsTUFBTVcsVUFBVUYsTUFBTVgsa0JBQXRCO0FBQ0EsTUFBTWMsT0FBT0YsTUFBTVosa0JBQW5CO0FBQ0EsTUFBTWUsSUFBSVAsU0FBU0ssVUFBVWhCLEVBQW5CLEtBQTBCLElBQUlBLEVBQTlCLENBQVY7QUFDQSxNQUFNbUIsSUFBSVIsU0FBU1gsS0FBS0MsS0FBS21CLEdBQUwsQ0FBU25CLEtBQUtvQixHQUFMLENBQVNuQixPQUFPZSxPQUFPLEdBQXZCLENBQVQsQ0FBZCxLQUF3RCxJQUFJakIsRUFBNUQsQ0FBVjtBQUNBLFNBQU8sQ0FBQ2tCLENBQUQsRUFBSUMsQ0FBSixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztBQVNBLE9BQU8sU0FBU0csYUFBVCxRQUErQlgsS0FBL0IsRUFBc0M7QUFBQTtBQUFBLE1BQWRPLENBQWM7QUFBQSxNQUFYQyxDQUFXOztBQUMzQ1IsV0FBU04sU0FBVDtBQUNBLE1BQU1XLFVBQVdFLElBQUlQLEtBQUwsSUFBZSxJQUFJWCxFQUFuQixJQUF5QkEsRUFBekM7QUFDQSxNQUFNaUIsT0FBTyxLQUFLaEIsS0FBS3NCLElBQUwsQ0FBVXRCLEtBQUt1QixHQUFMLENBQVN4QixLQUFNbUIsSUFBSVIsS0FBTCxJQUFlLElBQUlYLEVBQW5CLENBQWQsQ0FBVixJQUFtREUsSUFBeEQsQ0FBYjtBQUNBLFNBQU8sQ0FBQ2MsVUFBVVosa0JBQVgsRUFBK0JhLE9BQU9iLGtCQUF0QyxDQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBLE9BQU8sU0FBU3FCLFlBQVQsUUFBa0M7QUFBQSxNQUFYQyxRQUFXLFNBQVhBLFFBQVc7O0FBQ3ZDM0IsU0FBTzRCLE9BQU9DLFFBQVAsQ0FBZ0JGLFFBQWhCLENBQVA7QUFDQSxNQUFNRyxZQUFZNUIsS0FBSzZCLEdBQUwsQ0FBU0osV0FBV3ZCLGtCQUFwQixDQUFsQjtBQUNBLFNBQU9PLFlBQVlKLHNCQUFzQnVCLFNBQWxDLElBQStDLENBQXREO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1BLE9BQU8sU0FBU0UsaUJBQVQsUUFBc0Y7QUFBQSxNQUExREwsUUFBMEQsU0FBMURBLFFBQTBEO0FBQUEsTUFBaERNLFNBQWdELFNBQWhEQSxTQUFnRDtBQUFBLE1BQXJDeEIsSUFBcUMsU0FBckNBLElBQXFDO0FBQUEsTUFBL0JHLEtBQStCLFNBQS9CQSxLQUErQjtBQUFBLGtDQUF4QnNCLGFBQXdCO0FBQUEsTUFBeEJBLGFBQXdCLHVDQUFSLEtBQVE7O0FBQzNGO0FBQ0F0QixVQUFRQSxVQUFVdUIsU0FBVixHQUFzQnZCLEtBQXRCLEdBQThCSixZQUFZQyxJQUFaLENBQXRDOztBQUVBVCxTQUFPNEIsT0FBT0MsUUFBUCxDQUFnQkYsUUFBaEIsS0FBNkJDLE9BQU9DLFFBQVAsQ0FBZ0JJLFNBQWhCLENBQTdCLElBQTJETCxPQUFPQyxRQUFQLENBQWdCakIsS0FBaEIsQ0FBbEU7O0FBRUEsTUFBTXdCLFNBQVMsRUFBZjtBQUNBLE1BQU1DLFlBQVkvQixZQUFZTSxLQUE5QjtBQUNBLE1BQU1rQixZQUFZNUIsS0FBSzZCLEdBQUwsQ0FBU0osV0FBV3ZCLGtCQUFwQixDQUFsQjs7QUFFQTs7Ozs7OztBQU9BLE1BQU1rQyxtQkFBbUJELFlBQVksR0FBckM7QUFDQSxNQUFNRSxtQkFBbUJELG1CQUFtQlIsU0FBNUM7O0FBRUE7OztBQUdBLE1BQU1VLG9CQUFvQkgsWUFBWTlCLG1CQUFaLEdBQWtDdUIsU0FBNUQ7O0FBRUFNLFNBQU9LLGNBQVAsR0FBd0IsQ0FBQ0QsaUJBQUQsRUFBb0JBLGlCQUFwQixFQUF1Q0EsaUJBQXZDLENBQXhCO0FBQ0FKLFNBQU9NLGNBQVAsR0FBd0IsQ0FBQyxJQUFJRixpQkFBTCxFQUF3QixJQUFJQSxpQkFBNUIsRUFBK0MsSUFBSUEsaUJBQW5ELENBQXhCOztBQUVBSixTQUFPTyxlQUFQLEdBQXlCLENBQUNMLGdCQUFELEVBQW1CQyxnQkFBbkIsRUFBcUNDLGlCQUFyQyxDQUF6QjtBQUNBSixTQUFPUSxlQUFQLEdBQXlCLENBQUMsSUFBSU4sZ0JBQUwsRUFBdUIsSUFBSUMsZ0JBQTNCLEVBQTZDLElBQUlDLGlCQUFqRCxDQUF6Qjs7QUFFQTs7Ozs7O0FBTUEsTUFBSU4sYUFBSixFQUFtQjtBQUNqQixRQUFNVyxhQUFhekMscUJBQXFCRixLQUFLb0IsR0FBTCxDQUFTSyxXQUFXdkIsa0JBQXBCLENBQXJCLEdBQStEMEIsU0FBbEY7QUFDQSxRQUFNZ0Isb0JBQW9CUixtQkFBbUJPLFVBQW5CLEdBQWdDLENBQTFEO0FBQ0EsUUFBTUUsc0JBQXNCVixZQUFZOUIsbUJBQVosR0FBa0NzQyxVQUE5RDtBQUNBLFFBQU1HLHFCQUFxQkQsc0JBQXNCUixnQkFBdEIsR0FBeUNDLGlCQUFwRTs7QUFFQUosV0FBT2EsZ0JBQVAsR0FBMEIsQ0FBQyxDQUFELEVBQUlILGlCQUFKLEVBQXVCQyxtQkFBdkIsQ0FBMUI7QUFDQVgsV0FBT2MsZUFBUCxHQUF5QixDQUFDRixrQkFBRCxFQUFxQixDQUFyQixFQUF3QkEsa0JBQXhCLENBQXpCO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFPWixNQUFQO0FBQ0Q7O0FBRUQ7Ozs7QUFJQSxPQUFPLFNBQVNlLGdCQUFULFFBT0o7QUFBQSxNQU5EbEIsU0FNQyxTQU5EQSxTQU1DO0FBQUEsTUFMRE4sUUFLQyxTQUxEQSxRQUtDO0FBQUEsTUFKRGxCLElBSUMsU0FKREEsSUFJQztBQUFBLE1BSERHLEtBR0MsU0FIREEsS0FHQztBQUFBLE1BRkR3QyxXQUVDLFNBRkRBLFdBRUM7QUFBQSxtQ0FEREMsY0FDQztBQUFBLE1BRERBLGNBQ0Msd0NBRGdCLElBQ2hCOztBQUNEO0FBQ0F6QyxVQUFRQSxVQUFVdUIsU0FBVixHQUFzQnZCLEtBQXRCLEdBQThCSixZQUFZQyxJQUFaLENBQXRDOztBQUVBO0FBQ0EsTUFBTTZDLFdBQVd4QyxjQUFjLENBQUNtQixTQUFELEVBQVlOLFFBQVosQ0FBZCxFQUFxQ2YsS0FBckMsQ0FBakI7QUFDQSxNQUFNMkMsU0FBUyxJQUFJaEUsT0FBSixDQUFZK0QsU0FBUyxDQUFULENBQVosRUFBeUJBLFNBQVMsQ0FBVCxDQUF6QixFQUFzQyxDQUF0QyxDQUFmOztBQUVBLE1BQUlGLFdBQUosRUFBaUI7QUFDZjtBQUNBQyxxQkFBaUJBLGtCQUFrQnJCLGtCQUFrQixFQUFDTCxrQkFBRCxFQUFXTSxvQkFBWCxFQUFzQnJCLFlBQXRCLEVBQWxCLENBQW5DOztBQUVBLFFBQU00QyxnQkFBZ0IsSUFBSWpFLE9BQUosQ0FBWTZELFdBQVo7QUFDcEI7QUFEb0IsS0FFbkJ4QyxLQUZtQixDQUVieUMsZUFBZVosY0FGRjtBQUdwQjtBQUNBO0FBSm9CLEtBS25CN0IsS0FMbUIsQ0FLYixDQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsRUFBUSxDQUFSLENBTGEsQ0FBdEI7QUFNQTJDLFdBQU9FLEdBQVAsQ0FBV0QsYUFBWDtBQUNEOztBQUVELFNBQU9ELE1BQVA7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVNHLE1BQVQsUUFBb0M7QUFBQSxNQUFuQkMsTUFBbUIsU0FBbkJBLE1BQW1CO0FBQUEsTUFBWEMsUUFBVyxTQUFYQSxRQUFXOztBQUNsQyxTQUFPLElBQUkxRCxLQUFLc0IsSUFBTCxDQUFXbUMsU0FBUyxDQUFWLEdBQWVDLFFBQXpCLENBQVg7QUFDRDs7QUFFRCxTQUFTQyxpQkFBVCxRQUE4QztBQUFBLE1BQWxCRCxRQUFrQixTQUFsQkEsUUFBa0I7QUFBQSxNQUFSRSxLQUFRLFNBQVJBLEtBQVE7O0FBQzVDO0FBQ0E7QUFDQSxNQUFNQyxlQUFlRCxRQUFRMUQsa0JBQTdCO0FBQ0EsTUFBTTRELFVBQVU5RCxLQUFLc0IsSUFBTCxDQUFVLE1BQU1vQyxRQUFoQixDQUFoQjtBQUNBLE1BQU1LLHlCQUNKL0QsS0FBS2dFLEdBQUwsQ0FBU0YsT0FBVCxJQUFvQkosUUFBcEIsR0FBK0IxRCxLQUFLZ0UsR0FBTCxDQUFTaEUsS0FBS0QsRUFBTCxHQUFVLENBQVYsR0FBYzhELFlBQWQsR0FBNkJDLE9BQXRDLENBRGpDOztBQUdBO0FBQ0EsTUFBTUcsT0FBT2pFLEtBQUs2QixHQUFMLENBQVM3QixLQUFLRCxFQUFMLEdBQVUsQ0FBVixHQUFjOEQsWUFBdkIsSUFBdUNFLHNCQUF2QyxHQUFnRUwsUUFBN0U7O0FBRUEsU0FBTyxFQUFDTyxVQUFELEVBQU9DLE9BQU8sR0FBZCxFQUFQO0FBQ0Q7O0FBRUQsT0FBTyxTQUFTQyxhQUFULFNBVUo7QUFBQSxNQVJEVixNQVFDLFVBUkRBLE1BUUM7QUFBQSxNQVBERyxLQU9DLFVBUERBLEtBT0M7QUFBQSxNQU5EUSxPQU1DLFVBTkRBLE9BTUM7QUFBQSxNQUxEVixRQUtDLFVBTERBLFFBS0M7QUFBQSw2QkFIREwsTUFHQztBQUFBLE1BSERBLE1BR0MsaUNBSFEsSUFHUjtBQUFBLDRCQUREZ0IsS0FDQztBQUFBLE1BRERBLEtBQ0MsZ0NBRE8sS0FDUDs7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1DLEtBQUtoRixZQUFYOztBQUVBO0FBQ0FJLGlCQUFlNEUsRUFBZixFQUFtQkEsRUFBbkIsRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQUNaLFFBQVIsQ0FBdkI7O0FBRUE7QUFDQTtBQUNBakUsYUFBVzZFLEVBQVgsRUFBZUEsRUFBZixFQUFtQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sSUFBSWIsTUFBWCxDQUFuQjs7QUFFQTtBQUNBOUQsZUFBYTJFLEVBQWIsRUFBaUJBLEVBQWpCLEVBQXFCLENBQUNWLEtBQUQsR0FBUzFELGtCQUE5QjtBQUNBTixlQUFhMEUsRUFBYixFQUFpQkEsRUFBakIsRUFBcUJGLFVBQVVsRSxrQkFBL0I7O0FBRUEsTUFBSW1FLEtBQUosRUFBVztBQUNUNUUsZUFBVzZFLEVBQVgsRUFBZUEsRUFBZixFQUFtQixDQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsRUFBUSxDQUFSLENBQW5CO0FBQ0Q7O0FBRUQsTUFBSWpCLE1BQUosRUFBWTtBQUNWM0QsbUJBQWU0RSxFQUFmLEVBQW1CQSxFQUFuQixFQUF1QixJQUFJakYsT0FBSixDQUFZZ0UsTUFBWixFQUFvQmtCLE1BQXBCLEVBQXZCO0FBQ0Q7O0FBRUQsU0FBT0QsRUFBUDtBQUNEOztBQUVEO0FBQ0E7QUFDQSxPQUFPLFNBQVNFLG1CQUFULFNBTUo7QUFBQSxNQUxEQyxLQUtDLFVBTERBLEtBS0M7QUFBQSxNQUpEaEIsTUFJQyxVQUpEQSxNQUlDO0FBQUEsTUFIREcsS0FHQyxVQUhEQSxLQUdDO0FBQUEsTUFGREYsUUFFQyxVQUZEQSxRQUVDO0FBQUEscUNBRERnQixjQUNDO0FBQUEsTUFEREEsY0FDQyx5Q0FEZ0IsRUFDaEI7O0FBQUEsMkJBQ3FCZixrQkFBa0IsRUFBQ0Qsa0JBQUQsRUFBV0UsWUFBWCxFQUFsQixDQURyQjtBQUFBLE1BQ01NLEtBRE4sc0JBQ01BLEtBRE47QUFBQSxNQUNhRCxJQURiLHNCQUNhQSxJQURiOztBQUVELE1BQU1VLE1BQU1uQixPQUFPLEVBQUNDLGNBQUQsRUFBU0Msa0JBQVQsRUFBUCxDQUFaOztBQUVBLE1BQU1rQixtQkFBbUJwRixpQkFDdkIsRUFEdUIsRUFFdkJtRixHQUZ1QixFQUVMO0FBQ2xCRixVQUFRaEIsTUFIZSxFQUdMO0FBQ2xCUyxPQUp1QixFQUlMO0FBQ2xCRCxTQUFPUyxjQUxnQixDQUtEO0FBTEMsR0FBekI7O0FBUUEsU0FBT0UsZ0JBQVA7QUFDRDs7QUFFRDs7Ozs7OztBQU9BLE9BQU8sU0FBU0MsYUFBVCxDQUF1QkMsR0FBdkIsRUFBNEJDLHFCQUE1QixFQUFtRDtBQUFBLDRCQUNsQ0QsR0FEa0M7QUFBQSxNQUNqRDdELENBRGlEO0FBQUEsTUFDOUNDLENBRDhDO0FBQUE7QUFBQSxNQUMzQzhELENBRDJDLHlCQUN2QyxDQUR1Qzs7QUFFeERsRixTQUFPNEIsT0FBT0MsUUFBUCxDQUFnQlYsQ0FBaEIsS0FBc0JTLE9BQU9DLFFBQVAsQ0FBZ0JULENBQWhCLENBQXRCLElBQTRDUSxPQUFPQyxRQUFQLENBQWdCcUQsQ0FBaEIsQ0FBbkQ7O0FBRUEsU0FBT3pGLGdCQUFnQndGLHFCQUFoQixFQUF1QyxDQUFDOUQsQ0FBRCxFQUFJQyxDQUFKLEVBQU84RCxDQUFQLEVBQVUsQ0FBVixDQUF2QyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztBQVNBLE9BQU8sU0FBU0MsYUFBVCxDQUF1QkgsR0FBdkIsRUFBNEJJLHVCQUE1QixFQUFrRTtBQUFBLE1BQWJDLE9BQWEsdUVBQUgsQ0FBRzs7QUFBQSw2QkFDckRMLEdBRHFEO0FBQUEsTUFDaEU3RCxDQURnRTtBQUFBLE1BQzdEQyxDQUQ2RDtBQUFBLE1BQzFEOEQsQ0FEMEQ7O0FBRXZFbEYsU0FBTzRCLE9BQU9DLFFBQVAsQ0FBZ0JWLENBQWhCLEtBQXNCUyxPQUFPQyxRQUFQLENBQWdCVCxDQUFoQixDQUE3Qjs7QUFFQSxNQUFJUSxPQUFPQyxRQUFQLENBQWdCcUQsQ0FBaEIsQ0FBSixFQUF3QjtBQUN0QjtBQUNBLFFBQU1JLFFBQVE3RixnQkFBZ0IyRix1QkFBaEIsRUFBeUMsQ0FBQ2pFLENBQUQsRUFBSUMsQ0FBSixFQUFPOEQsQ0FBUCxFQUFVLENBQVYsQ0FBekMsQ0FBZDtBQUNBLFdBQU9JLEtBQVA7QUFDRDs7QUFFRDtBQUNBO0FBQ0EsTUFBTUMsU0FBUzlGLGdCQUFnQjJGLHVCQUFoQixFQUF5QyxDQUFDakUsQ0FBRCxFQUFJQyxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBekMsQ0FBZjtBQUNBLE1BQU1vRSxTQUFTL0YsZ0JBQWdCMkYsdUJBQWhCLEVBQXlDLENBQUNqRSxDQUFELEVBQUlDLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUF6QyxDQUFmOztBQUVBLE1BQU1xRSxLQUFLRixPQUFPLENBQVAsQ0FBWDtBQUNBLE1BQU1HLEtBQUtGLE9BQU8sQ0FBUCxDQUFYOztBQUVBLE1BQU1HLElBQUlGLE9BQU9DLEVBQVAsR0FBWSxDQUFaLEdBQWdCLENBQUMsQ0FBQ0wsV0FBVyxDQUFaLElBQWlCSSxFQUFsQixLQUF5QkMsS0FBS0QsRUFBOUIsQ0FBMUI7QUFDQSxTQUFPMUYsVUFBVSxFQUFWLEVBQWN3RixNQUFkLEVBQXNCQyxNQUF0QixFQUE4QkcsQ0FBOUIsQ0FBUDtBQUNEIiwiZmlsZSI6IndlYi1tZXJjYXRvci11dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE8gLSBUSEUgVVRJTElUSUVTIElOIFRISVMgRklMRSBTSE9VTEQgQkUgSU1QT1JURUQgRlJPTSBXRUItTUVSQ0FUT1ItVklFV1BPUlQgTU9EVUxFXG5cbmltcG9ydCB7VmVjdG9yM30gZnJvbSAnbWF0aC5nbCc7XG5pbXBvcnQge2NyZWF0ZU1hdDQsIHRyYW5zZm9ybVZlY3Rvcn0gZnJvbSAnLi9tYXRoLXV0aWxzJztcblxuaW1wb3J0IG1hdDRfcGVyc3BlY3RpdmUgZnJvbSAnZ2wtbWF0NC9wZXJzcGVjdGl2ZSc7XG5pbXBvcnQgbWF0NF9zY2FsZSBmcm9tICdnbC1tYXQ0L3NjYWxlJztcbmltcG9ydCBtYXQ0X3RyYW5zbGF0ZSBmcm9tICdnbC1tYXQ0L3RyYW5zbGF0ZSc7XG5pbXBvcnQgbWF0NF9yb3RhdGVYIGZyb20gJ2dsLW1hdDQvcm90YXRlWCc7XG5pbXBvcnQgbWF0NF9yb3RhdGVaIGZyb20gJ2dsLW1hdDQvcm90YXRlWic7XG5pbXBvcnQgdmVjMl9sZXJwIGZyb20gJ2dsLXZlYzIvbGVycCc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5cbi8vIENPTlNUQU5UU1xuY29uc3QgUEkgPSBNYXRoLlBJO1xuY29uc3QgUElfNCA9IFBJIC8gNDtcbmNvbnN0IERFR1JFRVNfVE9fUkFESUFOUyA9IFBJIC8gMTgwO1xuY29uc3QgUkFESUFOU19UT19ERUdSRUVTID0gMTgwIC8gUEk7XG5jb25zdCBUSUxFX1NJWkUgPSA1MTI7XG4vLyBBdmVyYWdlIGNpcmN1bWZlcmVuY2UgKDQwMDc1IGttIGVxdWF0b3JpYWwsIDQwMDA3IGttIG1lcmlkaW9uYWwpXG5jb25zdCBFQVJUSF9DSVJDVU1GRVJFTkNFID0gNDAuMDNlNjtcblxuLyoqIFV0aWwgZnVuY3Rpb25zICoqL1xuZXhwb3J0IGZ1bmN0aW9uIHpvb21Ub1NjYWxlKHpvb20pIHtcbiAgcmV0dXJuIE1hdGgucG93KDIsIHpvb20pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVUb1pvb20oc2NhbGUpIHtcbiAgcmV0dXJuIE1hdGgubG9nMihzY2FsZSk7XG59XG5cbi8qKlxuICogUHJvamVjdCBbbG5nLGxhdF0gb24gc3BoZXJlIG9udG8gW3gseV0gb24gNTEyKjUxMiBNZXJjYXRvciBab29tIDAgdGlsZS5cbiAqIFBlcmZvcm1zIHRoZSBub25saW5lYXIgcGFydCBvZiB0aGUgd2ViIG1lcmNhdG9yIHByb2plY3Rpb24uXG4gKiBSZW1haW5pbmcgcHJvamVjdGlvbiBpcyBkb25lIHdpdGggNHg0IG1hdHJpY2VzIHdoaWNoIGFsc28gaGFuZGxlc1xuICogcGVyc3BlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gbG5nTGF0IC0gW2xuZywgbGF0XSBjb29yZGluYXRlc1xuICogICBTcGVjaWZpZXMgYSBwb2ludCBvbiB0aGUgc3BoZXJlIHRvIHByb2plY3Qgb250byB0aGUgbWFwLlxuICogQHJldHVybiB7QXJyYXl9IFt4LHldIGNvb3JkaW5hdGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG5nTGF0VG9Xb3JsZChbbG5nLCBsYXRdLCBzY2FsZSkge1xuICBzY2FsZSAqPSBUSUxFX1NJWkU7XG4gIGNvbnN0IGxhbWJkYTIgPSBsbmcgKiBERUdSRUVTX1RPX1JBRElBTlM7XG4gIGNvbnN0IHBoaTIgPSBsYXQgKiBERUdSRUVTX1RPX1JBRElBTlM7XG4gIGNvbnN0IHggPSBzY2FsZSAqIChsYW1iZGEyICsgUEkpIC8gKDIgKiBQSSk7XG4gIGNvbnN0IHkgPSBzY2FsZSAqIChQSSAtIE1hdGgubG9nKE1hdGgudGFuKFBJXzQgKyBwaGkyICogMC41KSkpIC8gKDIgKiBQSSk7XG4gIHJldHVybiBbeCwgeV07XG59XG5cbi8qKlxuICogVW5wcm9qZWN0IHdvcmxkIHBvaW50IFt4LHldIG9uIG1hcCBvbnRvIHtsYXQsIGxvbn0gb24gc3BoZXJlXG4gKlxuICogQHBhcmFtIHtvYmplY3R8VmVjdG9yfSB4eSAtIG9iamVjdCB3aXRoIHt4LHl9IG1lbWJlcnNcbiAqICByZXByZXNlbnRpbmcgcG9pbnQgb24gcHJvamVjdGVkIG1hcCBwbGFuZVxuICogQHJldHVybiB7R2VvQ29vcmRpbmF0ZXN9IC0gb2JqZWN0IHdpdGgge2xhdCxsb259IG9mIHBvaW50IG9uIHNwaGVyZS5cbiAqICAgSGFzIHRvQXJyYXkgbWV0aG9kIGlmIHlvdSBuZWVkIGEgR2VvSlNPTiBBcnJheS5cbiAqICAgUGVyIGNhcnRvZ3JhcGhpYyB0cmFkaXRpb24sIGxhdCBhbmQgbG9uIGFyZSBzcGVjaWZpZWQgYXMgZGVncmVlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdvcmxkVG9MbmdMYXQoW3gsIHldLCBzY2FsZSkge1xuICBzY2FsZSAqPSBUSUxFX1NJWkU7XG4gIGNvbnN0IGxhbWJkYTIgPSAoeCAvIHNjYWxlKSAqICgyICogUEkpIC0gUEk7XG4gIGNvbnN0IHBoaTIgPSAyICogKE1hdGguYXRhbihNYXRoLmV4cChQSSAtICh5IC8gc2NhbGUpICogKDIgKiBQSSkpKSAtIFBJXzQpO1xuICByZXR1cm4gW2xhbWJkYTIgKiBSQURJQU5TX1RPX0RFR1JFRVMsIHBoaTIgKiBSQURJQU5TX1RPX0RFR1JFRVNdO1xufVxuXG4vLyBSZXR1cm5zIHRoZSB6b29tIGxldmVsIHRoYXQgZ2l2ZXMgYSAxIG1ldGVyIHBpeGVsIGF0IGEgY2VydGFpbiBsYXRpdHVkZVxuLy8gUz1DKmNvcyh5KS8yXih6KzgpXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWV0ZXJab29tKHtsYXRpdHVkZX0pIHtcbiAgYXNzZXJ0KE51bWJlci5pc0Zpbml0ZShsYXRpdHVkZSkpO1xuICBjb25zdCBsYXRDb3NpbmUgPSBNYXRoLmNvcyhsYXRpdHVkZSAqIERFR1JFRVNfVE9fUkFESUFOUyk7XG4gIHJldHVybiBzY2FsZVRvWm9vbShFQVJUSF9DSVJDVU1GRVJFTkNFICogbGF0Q29zaW5lKSAtIDg7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIGRpc3RhbmNlIHNjYWxlcyBpbiBtZXRlcnMgYXJvdW5kIGN1cnJlbnQgbGF0L2xvbiwgYm90aCBmb3JcbiAqIGRlZ3JlZXMgYW5kIHBpeGVscy5cbiAqIEluIG1lcmNhdG9yIHByb2plY3Rpb24gbW9kZSwgdGhlIGRpc3RhbmNlIHNjYWxlcyB2YXJ5IHNpZ25pZmljYW50bHlcbiAqIHdpdGggbGF0aXR1ZGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZVNjYWxlcyh7bGF0aXR1ZGUsIGxvbmdpdHVkZSwgem9vbSwgc2NhbGUsIGhpZ2hQcmVjaXNpb24gPSBmYWxzZX0pIHtcbiAgLy8gQ2FsY3VsYXRlIHNjYWxlIGZyb20gem9vbSBpZiBub3QgcHJvdmlkZWRcbiAgc2NhbGUgPSBzY2FsZSAhPT0gdW5kZWZpbmVkID8gc2NhbGUgOiB6b29tVG9TY2FsZSh6b29tKTtcblxuICBhc3NlcnQoTnVtYmVyLmlzRmluaXRlKGxhdGl0dWRlKSAmJiBOdW1iZXIuaXNGaW5pdGUobG9uZ2l0dWRlKSAmJiBOdW1iZXIuaXNGaW5pdGUoc2NhbGUpKTtcblxuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgY29uc3Qgd29ybGRTaXplID0gVElMRV9TSVpFICogc2NhbGU7XG4gIGNvbnN0IGxhdENvc2luZSA9IE1hdGguY29zKGxhdGl0dWRlICogREVHUkVFU19UT19SQURJQU5TKTtcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHBpeGVscyBvY2N1cGllZCBieSBvbmUgZGVncmVlIGxvbmdpdHVkZSBhcm91bmQgY3VycmVudCBsYXQvbG9uOlxuICAgICBwaXhlbHNQZXJEZWdyZWVYID0gZChsbmdMYXRUb1dvcmxkKFtsbmcsIGxhdF0pWzBdKS9kKGxuZylcbiAgICAgICA9IHNjYWxlICogVElMRV9TSVpFICogREVHUkVFU19UT19SQURJQU5TIC8gKDIgKiBQSSlcbiAgICAgcGl4ZWxzUGVyRGVncmVlWSA9IGQobG5nTGF0VG9Xb3JsZChbbG5nLCBsYXRdKVsxXSkvZChsYXQpXG4gICAgICAgPSAtc2NhbGUgKiBUSUxFX1NJWkUgKiBERUdSRUVTX1RPX1JBRElBTlMgLyBjb3MobGF0ICogREVHUkVFU19UT19SQURJQU5TKSAgLyAoMiAqIFBJKVxuICAgKi9cbiAgY29uc3QgcGl4ZWxzUGVyRGVncmVlWCA9IHdvcmxkU2l6ZSAvIDM2MDtcbiAgY29uc3QgcGl4ZWxzUGVyRGVncmVlWSA9IHBpeGVsc1BlckRlZ3JlZVggLyBsYXRDb3NpbmU7XG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiBwaXhlbHMgb2NjdXBpZWQgYnkgb25lIG1ldGVyIGFyb3VuZCBjdXJyZW50IGxhdC9sb246XG4gICAqL1xuICBjb25zdCBhbHRQaXhlbHNQZXJNZXRlciA9IHdvcmxkU2l6ZSAvIEVBUlRIX0NJUkNVTUZFUkVOQ0UgLyBsYXRDb3NpbmU7XG5cbiAgcmVzdWx0LnBpeGVsc1Blck1ldGVyID0gW2FsdFBpeGVsc1Blck1ldGVyLCBhbHRQaXhlbHNQZXJNZXRlciwgYWx0UGl4ZWxzUGVyTWV0ZXJdO1xuICByZXN1bHQubWV0ZXJzUGVyUGl4ZWwgPSBbMSAvIGFsdFBpeGVsc1Blck1ldGVyLCAxIC8gYWx0UGl4ZWxzUGVyTWV0ZXIsIDEgLyBhbHRQaXhlbHNQZXJNZXRlcl07XG5cbiAgcmVzdWx0LnBpeGVsc1BlckRlZ3JlZSA9IFtwaXhlbHNQZXJEZWdyZWVYLCBwaXhlbHNQZXJEZWdyZWVZLCBhbHRQaXhlbHNQZXJNZXRlcl07XG4gIHJlc3VsdC5kZWdyZWVzUGVyUGl4ZWwgPSBbMSAvIHBpeGVsc1BlckRlZ3JlZVgsIDEgLyBwaXhlbHNQZXJEZWdyZWVZLCAxIC8gYWx0UGl4ZWxzUGVyTWV0ZXJdO1xuXG4gIC8qKlxuICAgKiBUYXlsb3Igc2VyaWVzIDJuZCBvcmRlciBmb3IgMS9sYXRDb3NpbmVcbiAgICAgZicoYSkgKiAoeCAtIGEpXG4gICAgICAgPSBkKDEvY29zKGxhdCAqIERFR1JFRVNfVE9fUkFESUFOUykpL2QobGF0KSAqIGRMYXRcbiAgICAgICA9IERFR1JFRVNfVE9fUkFESUFOUyAqIHRhbihsYXQgKiBERUdSRUVTX1RPX1JBRElBTlMpIC8gY29zKGxhdCAqIERFR1JFRVNfVE9fUkFESUFOUykgKiBkTGF0XG4gICAqL1xuICBpZiAoaGlnaFByZWNpc2lvbikge1xuICAgIGNvbnN0IGxhdENvc2luZTIgPSBERUdSRUVTX1RPX1JBRElBTlMgKiBNYXRoLnRhbihsYXRpdHVkZSAqIERFR1JFRVNfVE9fUkFESUFOUykgLyBsYXRDb3NpbmU7XG4gICAgY29uc3QgcGl4ZWxzUGVyRGVncmVlWTIgPSBwaXhlbHNQZXJEZWdyZWVYICogbGF0Q29zaW5lMiAvIDI7XG4gICAgY29uc3QgYWx0UGl4ZWxzUGVyRGVncmVlMiA9IHdvcmxkU2l6ZSAvIEVBUlRIX0NJUkNVTUZFUkVOQ0UgKiBsYXRDb3NpbmUyO1xuICAgIGNvbnN0IGFsdFBpeGVsc1Blck1ldGVyMiA9IGFsdFBpeGVsc1BlckRlZ3JlZTIgLyBwaXhlbHNQZXJEZWdyZWVZICogYWx0UGl4ZWxzUGVyTWV0ZXI7XG5cbiAgICByZXN1bHQucGl4ZWxzUGVyRGVncmVlMiA9IFswLCBwaXhlbHNQZXJEZWdyZWVZMiwgYWx0UGl4ZWxzUGVyRGVncmVlMl07XG4gICAgcmVzdWx0LnBpeGVsc1Blck1ldGVyMiA9IFthbHRQaXhlbHNQZXJNZXRlcjIsIDAsIGFsdFBpeGVsc1Blck1ldGVyMl07XG4gIH1cblxuICAvLyBNYWluIHJlc3VsdHMsIHVzZWQgZm9yIGNvbnZlcnRpbmcgbWV0ZXJzIHRvIGxhdGxuZyBkZWx0YXMgYW5kIHNjYWxpbmcgb2Zmc2V0c1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgYSBtZXJjYXRvciB3b3JsZCBwb3NpdGlvbiAoXCJwaXhlbHNcIiBpbiBnaXZlbiB6b29tIGxldmVsKVxuICogZnJvbSBhIGxuZy9sYXQgYW5kIG1ldGVyT2Zmc2V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXb3JsZFBvc2l0aW9uKHtcbiAgbG9uZ2l0dWRlLFxuICBsYXRpdHVkZSxcbiAgem9vbSxcbiAgc2NhbGUsXG4gIG1ldGVyT2Zmc2V0LFxuICBkaXN0YW5jZVNjYWxlcyA9IG51bGxcbn0pIHtcbiAgLy8gQ2FsY3VsYXRlIHNjYWxlIGZyb20gem9vbSBpZiBub3QgcHJvdmlkZWRcbiAgc2NhbGUgPSBzY2FsZSAhPT0gdW5kZWZpbmVkID8gc2NhbGUgOiB6b29tVG9TY2FsZSh6b29tKTtcblxuICAvLyBNYWtlIGEgY2VudGVyZWQgdmVyc2lvbiBvZiB0aGUgbWF0cml4IGZvciBwcm9qZWN0aW9uIG1vZGVzIHdpdGhvdXQgYW4gb2Zmc2V0XG4gIGNvbnN0IGNlbnRlcjJkID0gbG5nTGF0VG9Xb3JsZChbbG9uZ2l0dWRlLCBsYXRpdHVkZV0sIHNjYWxlKTtcbiAgY29uc3QgY2VudGVyID0gbmV3IFZlY3RvcjMoY2VudGVyMmRbMF0sIGNlbnRlcjJkWzFdLCAwKTtcblxuICBpZiAobWV0ZXJPZmZzZXQpIHtcbiAgICAvLyBDYWxjdWxhdGUgZGlzdGFuY2Ugc2NhbGVzIGlmIGxuZy9sYXQvem9vbSBhcmUgcHJvdmlkZWRcbiAgICBkaXN0YW5jZVNjYWxlcyA9IGRpc3RhbmNlU2NhbGVzIHx8IGdldERpc3RhbmNlU2NhbGVzKHtsYXRpdHVkZSwgbG9uZ2l0dWRlLCBzY2FsZX0pO1xuXG4gICAgY29uc3QgcGl4ZWxQb3NpdGlvbiA9IG5ldyBWZWN0b3IzKG1ldGVyT2Zmc2V0KVxuICAgICAgLy8gQ29udmVydCB0byBwaXhlbHMgaW4gY3VycmVudCB6b29tXG4gICAgICAuc2NhbGUoZGlzdGFuY2VTY2FsZXMucGl4ZWxzUGVyTWV0ZXIpXG4gICAgICAvLyBXZSB3YW50IHBvc2l0aXZlIFkgdG8gcmVwcmVzZW50IGFuIG9mZnNldCB0b3dhcmRzIG5vcnRoLFxuICAgICAgLy8gYnV0IHdlYiBtZXJjYXRvciB3b3JsZCBjb29yZGluYXRlcyBpcyB0b3AtbGVmdFxuICAgICAgLnNjYWxlKFsxLCAtMSwgMV0pO1xuICAgIGNlbnRlci5hZGQocGl4ZWxQb3NpdGlvbik7XG4gIH1cblxuICByZXR1cm4gY2VudGVyO1xufVxuXG4vLyBBVFRSSUJVVElPTjpcbi8vIHZpZXcgYW5kIHByb2plY3Rpb24gbWF0cml4IGNyZWF0aW9uIGlzIGludGVudGlvbmFsbHkga2VwdCBjb21wYXRpYmxlIHdpdGhcbi8vIG1hcGJveC1nbCdzIGltcGxlbWVudGF0aW9uIHRvIGVuc3VyZSB0aGF0IHNlYW1sZXNzIGludGVyb3BlcmF0aW9uXG4vLyB3aXRoIG1hcGJveCBhbmQgcmVhY3QtbWFwLWdsLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXBib3gvbWFwYm94LWdsLWpzXG5cbi8vIFZhcmlhYmxlIGZvdiAoaW4gcmFkaWFucylcbmZ1bmN0aW9uIGdldEZvdih7aGVpZ2h0LCBhbHRpdHVkZX0pIHtcbiAgcmV0dXJuIDIgKiBNYXRoLmF0YW4oKGhlaWdodCAvIDIpIC8gYWx0aXR1ZGUpO1xufVxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1BsYW5lcyh7YWx0aXR1ZGUsIHBpdGNofSkge1xuICAvLyBGaW5kIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBjZW50ZXIgcG9pbnQgdG8gdGhlIGNlbnRlciB0b3BcbiAgLy8gaW4gYWx0aXR1ZGUgdW5pdHMgdXNpbmcgbGF3IG9mIHNpbmVzLlxuICBjb25zdCBwaXRjaFJhZGlhbnMgPSBwaXRjaCAqIERFR1JFRVNfVE9fUkFESUFOUztcbiAgY29uc3QgaGFsZkZvdiA9IE1hdGguYXRhbigwLjUgLyBhbHRpdHVkZSk7XG4gIGNvbnN0IHRvcEhhbGZTdXJmYWNlRGlzdGFuY2UgPVxuICAgIE1hdGguc2luKGhhbGZGb3YpICogYWx0aXR1ZGUgLyBNYXRoLnNpbihNYXRoLlBJIC8gMiAtIHBpdGNoUmFkaWFucyAtIGhhbGZGb3YpO1xuXG4gIC8vIENhbGN1bGF0ZSB6IHZhbHVlIG9mIHRoZSBmYXJ0aGVzdCBmcmFnbWVudCB0aGF0IHNob3VsZCBiZSByZW5kZXJlZC5cbiAgY29uc3QgZmFyWiA9IE1hdGguY29zKE1hdGguUEkgLyAyIC0gcGl0Y2hSYWRpYW5zKSAqIHRvcEhhbGZTdXJmYWNlRGlzdGFuY2UgKyBhbHRpdHVkZTtcblxuICByZXR1cm4ge2ZhclosIG5lYXJaOiAwLjF9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vmlld01hdHJpeCh7XG4gIC8vIFZpZXdwb3J0IHByb3BzXG4gIGhlaWdodCxcbiAgcGl0Y2gsXG4gIGJlYXJpbmcsXG4gIGFsdGl0dWRlLFxuICAvLyBQcmUtY2FsY3VsYXRlZCBwYXJhbWV0ZXJzXG4gIGNlbnRlciA9IG51bGwsXG4gIC8vIE9wdGlvbnNcbiAgZmxpcFkgPSBmYWxzZVxufSkge1xuXG4gIC8vIFZJRVcgTUFUUklYOiBQUk9KRUNUUyBNRVJDQVRPUiBXT1JMRCBDT09SRElOQVRFU1xuICAvLyBOb3RlIHRoYXQgbWVyY2F0b3Igd29ybGQgY29vcmRpbmF0ZXMgdHlwaWNhbGx5IG5lZWQgdG8gYmUgZmxpcHBlZFxuICAvL1xuICAvLyBOb3RlOiBBcyB1c3VhbCwgbWF0cml4IG9wZXJhdGlvbiBvcmRlcnMgc2hvdWxkIGJlIHJlYWQgaW4gcmV2ZXJzZVxuICAvLyBzaW5jZSB2ZWN0b3JzIHdpbGwgYmUgbXVsdGlwbGllZCBmcm9tIHRoZSByaWdodCBkdXJpbmcgdHJhbnNmb3JtYXRpb25cbiAgY29uc3Qgdm0gPSBjcmVhdGVNYXQ0KCk7XG5cbiAgLy8gTW92ZSBjYW1lcmEgdG8gYWx0aXR1ZGUgKGFsb25nIHRoZSBwaXRjaCAmIGJlYXJpbmcgZGlyZWN0aW9uKVxuICBtYXQ0X3RyYW5zbGF0ZSh2bSwgdm0sIFswLCAwLCAtYWx0aXR1ZGVdKTtcblxuICAvLyBBZnRlciB0aGUgcm90YXRlWCwgeiB2YWx1ZXMgYXJlIGluIHBpeGVsIHVuaXRzLiBDb252ZXJ0IHRoZW0gdG9cbiAgLy8gYWx0aXR1ZGUgdW5pdHMuIDEgYWx0aXR1ZGUgdW5pdCA9IHRoZSBzY3JlZW4gaGVpZ2h0LlxuICBtYXQ0X3NjYWxlKHZtLCB2bSwgWzEsIDEsIDEgLyBoZWlnaHRdKTtcblxuICAvLyBSb3RhdGUgYnkgYmVhcmluZywgYW5kIHRoZW4gYnkgcGl0Y2ggKHdoaWNoIHRpbHRzIHRoZSB2aWV3KVxuICBtYXQ0X3JvdGF0ZVgodm0sIHZtLCAtcGl0Y2ggKiBERUdSRUVTX1RPX1JBRElBTlMpO1xuICBtYXQ0X3JvdGF0ZVoodm0sIHZtLCBiZWFyaW5nICogREVHUkVFU19UT19SQURJQU5TKTtcblxuICBpZiAoZmxpcFkpIHtcbiAgICBtYXQ0X3NjYWxlKHZtLCB2bSwgWzEsIC0xLCAxXSk7XG4gIH1cblxuICBpZiAoY2VudGVyKSB7XG4gICAgbWF0NF90cmFuc2xhdGUodm0sIHZtLCBuZXcgVmVjdG9yMyhjZW50ZXIpLm5lZ2F0ZSgpKTtcbiAgfVxuXG4gIHJldHVybiB2bTtcbn1cblxuLy8gUFJPSkVDVElPTiBNQVRSSVg6IFBST0pFQ1RTIEZST00gQ0FNRVJBIChWSUVXKSBTUEFDRSBUTyBDTElQU1BBQ0Vcbi8vIFRoaXMgaXMgYSBcIk1hcGJveFwiIHByb2plY3Rpb24gbWF0cml4IC0gbWF0Y2hlcyBtYXBib3ggZXhhY3RseSBpZiBmYXJaTXVsdGlwbGllciA9PT0gMVxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3Rpb25NYXRyaXgoe1xuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBwaXRjaCxcbiAgYWx0aXR1ZGUsXG4gIGZhclpNdWx0aXBsaWVyID0gMTBcbn0pIHtcbiAgY29uc3Qge25lYXJaLCBmYXJafSA9IGdldENsaXBwaW5nUGxhbmVzKHthbHRpdHVkZSwgcGl0Y2h9KTtcbiAgY29uc3QgZm92ID0gZ2V0Rm92KHtoZWlnaHQsIGFsdGl0dWRlfSk7XG5cbiAgY29uc3QgcHJvamVjdGlvbk1hdHJpeCA9IG1hdDRfcGVyc3BlY3RpdmUoXG4gICAgW10sXG4gICAgZm92LCAgICAgICAgICAgICAgLy8gZm92IGluIHJhZGlhbnNcbiAgICB3aWR0aCAvIGhlaWdodCwgICAvLyBhc3BlY3QgcmF0aW9cbiAgICBuZWFyWiwgICAgICAgICAgICAvLyBuZWFyIHBsYW5lXG4gICAgZmFyWiAqIGZhclpNdWx0aXBsaWVyIC8vIGZhciBwbGFuZVxuICApO1xuXG4gIHJldHVybiBwcm9qZWN0aW9uTWF0cml4O1xufVxuXG4vKipcbiAqIFByb2plY3QgZmxhdCBjb29yZGluYXRlcyB0byBwaXhlbHMgb24gc2NyZWVuLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHh5eiAtIGZsYXQgY29vcmRpbmF0ZSBvbiA1MTIqNTEyIE1lcmNhdG9yIFpvb20gMCB0aWxlXG4gKiBAcGFyYW0ge01hdHJpeDR9IHBpeGVsUHJvamVjdGlvbk1hdHJpeCAtIHByb2plY3Rpb24gbWF0cml4XG4gKiBAcmV0dXJuIHtBcnJheX0gW3gsIHksIGRlcHRoXSBwaXhlbCBjb29yZGluYXRlIG9uIHNjcmVlbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdvcmxkVG9QaXhlbHMoeHl6LCBwaXhlbFByb2plY3Rpb25NYXRyaXgpIHtcbiAgY29uc3QgW3gsIHksIHogPSAwXSA9IHh5ejtcbiAgYXNzZXJ0KE51bWJlci5pc0Zpbml0ZSh4KSAmJiBOdW1iZXIuaXNGaW5pdGUoeSkgJiYgTnVtYmVyLmlzRmluaXRlKHopKTtcblxuICByZXR1cm4gdHJhbnNmb3JtVmVjdG9yKHBpeGVsUHJvamVjdGlvbk1hdHJpeCwgW3gsIHksIHosIDFdKTtcbn1cblxuLyoqXG4gKiBVbnByb2plY3QgcGl4ZWxzIG9uIHNjcmVlbiB0byBmbGF0IGNvb3JkaW5hdGVzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHh5eiAtIHBpeGVsIGNvb3JkaW5hdGUgb24gc2NyZWVuLlxuICogQHBhcmFtIHtNYXRyaXg0fSBwaXhlbFVucHJvamVjdGlvbk1hdHJpeCAtIHVucHJvamVjdGlvbiBtYXRyaXhcbiAqIEBwYXJhbSB7TnVtYmVyfSB0YXJnZXRaIC0gaWYgcGl4ZWwgY29vcmRpbmF0ZSBkb2VzIG5vdCBoYXZlIGEgM3JkIGNvbXBvbmVudCAoZGVwdGgpLFxuICogICAgdGFyZ2V0WiBpcyB1c2VkIGFzIHRoZSBlbGV2YXRpb24gcGxhbmUgdG8gdW5wcm9qZWN0IG9udG9cbiAqIEByZXR1cm4ge0FycmF5fSBbeCwgeSwgWl0gZmxhdCBjb29yZGluYXRlcyBvbiA1MTIqNTEyIE1lcmNhdG9yIFpvb20gMCB0aWxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGl4ZWxzVG9Xb3JsZCh4eXosIHBpeGVsVW5wcm9qZWN0aW9uTWF0cml4LCB0YXJnZXRaID0gMCkge1xuICBjb25zdCBbeCwgeSwgel0gPSB4eXo7XG4gIGFzc2VydChOdW1iZXIuaXNGaW5pdGUoeCkgJiYgTnVtYmVyLmlzRmluaXRlKHkpKTtcblxuICBpZiAoTnVtYmVyLmlzRmluaXRlKHopKSB7XG4gICAgLy8gSGFzIGRlcHRoIGNvbXBvbmVudFxuICAgIGNvbnN0IGNvb3JkID0gdHJhbnNmb3JtVmVjdG9yKHBpeGVsVW5wcm9qZWN0aW9uTWF0cml4LCBbeCwgeSwgeiwgMV0pO1xuICAgIHJldHVybiBjb29yZDtcbiAgfVxuXG4gIC8vIHNpbmNlIHdlIGRvbid0IGtub3cgdGhlIGNvcnJlY3QgcHJvamVjdGVkIHogdmFsdWUgZm9yIHRoZSBwb2ludCxcbiAgLy8gdW5wcm9qZWN0IHR3byBwb2ludHMgdG8gZ2V0IGEgbGluZSBhbmQgdGhlbiBmaW5kIHRoZSBwb2ludCBvbiB0aGF0IGxpbmUgd2l0aCB6PTBcbiAgY29uc3QgY29vcmQwID0gdHJhbnNmb3JtVmVjdG9yKHBpeGVsVW5wcm9qZWN0aW9uTWF0cml4LCBbeCwgeSwgMCwgMV0pO1xuICBjb25zdCBjb29yZDEgPSB0cmFuc2Zvcm1WZWN0b3IocGl4ZWxVbnByb2plY3Rpb25NYXRyaXgsIFt4LCB5LCAxLCAxXSk7XG5cbiAgY29uc3QgejAgPSBjb29yZDBbMl07XG4gIGNvbnN0IHoxID0gY29vcmQxWzJdO1xuXG4gIGNvbnN0IHQgPSB6MCA9PT0gejEgPyAwIDogKCh0YXJnZXRaIHx8IDApIC0gejApIC8gKHoxIC0gejApO1xuICByZXR1cm4gdmVjMl9sZXJwKFtdLCBjb29yZDAsIGNvb3JkMSwgdCk7XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/viewport-mercator-project/dist-es6/web-mercator-viewport.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/viewport-mercator-project/dist-es6/web-mercator-viewport.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewport */ "./node_modules/viewport-mercator-project/dist-es6/viewport.js");
/* harmony import */ var _web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-mercator-utils */ "./node_modules/viewport-mercator-project/dist-es6/web-mercator-utils.js");
/* harmony import */ var _fit_bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fit-bounds */ "./node_modules/viewport-mercator-project/dist-es6/fit-bounds.js");
/* harmony import */ var gl_vec2_add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-vec2/add */ "./node_modules/gl-vec2/add.js");
/* harmony import */ var gl_vec2_add__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gl_vec2_add__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gl_vec2_negate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gl-vec2/negate */ "./node_modules/gl-vec2/negate.js");
/* harmony import */ var gl_vec2_negate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gl_vec2_negate__WEBPACK_IMPORTED_MODULE_4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// View and Projection Matrix calculations for mapbox-js style map view properties








var WebMercatorViewport = function (_Viewport) {
  _inherits(WebMercatorViewport, _Viewport);

  /**
   * @classdesc
   * Creates view/projection matrices from mercator params
   * Note: The Viewport is immutable in the sense that it only has accessors.
   * A new viewport instance should be created if any parameters have changed.
   *
   * @class
   * @param {Object} opt - options
   *
   * @param {Number} opt.width=1 - Width of "viewport" or window
   * @param {Number} opt.height=1 - Height of "viewport" or window
   * @param {Number} opt.scale=1 - Either use scale or zoom
   * @param {Number} opt.pitch=0 - Camera angle in degrees (0 is straight down)
   * @param {Number} opt.bearing=0 - Map rotation in degrees (0 means north is up)
   * @param {Number} opt.altitude= - Altitude of camera in screen units
   *
   * Web mercator projection short-hand parameters
   * @param {Number} opt.latitude - Center of viewport on map (alternative to opt.center)
   * @param {Number} opt.longitude - Center of viewport on map (alternative to opt.center)
   * @param {Number} opt.zoom - Scale = Math.pow(2,zoom) on map (alternative to opt.scale)
    * Notes:
   *  - Only one of center or [latitude, longitude] can be specified
   *  - [latitude, longitude] can only be specified when "mercator" is true
   *  - Altitude has a default value that matches assumptions in mapbox-gl
   *  - width and height are forced to 1 if supplied as 0, to avoid
   *    division by zero. This is intended to reduce the burden of apps to
   *    to check values before instantiating a Viewport.
   */
  /* eslint-disable complexity */
  function WebMercatorViewport() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        width = _ref.width,
        height = _ref.height,
        _ref$latitude = _ref.latitude,
        latitude = _ref$latitude === undefined ? 0 : _ref$latitude,
        _ref$longitude = _ref.longitude,
        longitude = _ref$longitude === undefined ? 0 : _ref$longitude,
        _ref$zoom = _ref.zoom,
        zoom = _ref$zoom === undefined ? 0 : _ref$zoom,
        _ref$pitch = _ref.pitch,
        pitch = _ref$pitch === undefined ? 0 : _ref$pitch,
        _ref$bearing = _ref.bearing,
        bearing = _ref$bearing === undefined ? 0 : _ref$bearing,
        _ref$altitude = _ref.altitude,
        altitude = _ref$altitude === undefined ? 1.5 : _ref$altitude,
        _ref$farZMultiplier = _ref.farZMultiplier,
        farZMultiplier = _ref$farZMultiplier === undefined ? 10 : _ref$farZMultiplier;

    _classCallCheck(this, WebMercatorViewport);

    // Silently allow apps to send in 0,0 to facilitate isomorphic render etc
    width = width || 1;
    height = height || 1;

    var scale = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["zoomToScale"])(zoom);
    // Altitude - prevent division by 0
    // TODO - just throw an Error instead?
    altitude = Math.max(0.75, altitude);

    var center = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["getWorldPosition"])({ longitude: longitude, latitude: latitude, scale: scale });

    var projectionMatrix = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["getProjectionMatrix"])({
      width: width,
      height: height,
      pitch: pitch,
      bearing: bearing,
      altitude: altitude,
      farZMultiplier: farZMultiplier
    });

    var viewMatrix = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["getViewMatrix"])({
      height: height,
      center: center,
      pitch: pitch,
      bearing: bearing,
      altitude: altitude,
      flipY: true
    });

    // Save parameters
    var _this = _possibleConstructorReturn(this, (WebMercatorViewport.__proto__ || Object.getPrototypeOf(WebMercatorViewport)).call(this, { width: width, height: height, viewMatrix: viewMatrix, projectionMatrix: projectionMatrix }));

    _this.latitude = latitude;
    _this.longitude = longitude;
    _this.zoom = zoom;
    _this.pitch = pitch;
    _this.bearing = bearing;
    _this.altitude = altitude;

    _this.scale = scale;
    _this.center = center;

    Object.freeze(_this);
    return _this;
  }
  /* eslint-enable complexity */

  /**
   * Project [lng,lat] on sphere onto [x,y] on 512*512 Mercator Zoom 0 tile.
   * Performs the nonlinear part of the web mercator projection.
   * Remaining projection is done with 4x4 matrices which also handles
   * perspective.
   *
   * @param {Array} lngLat - [lng, lat] coordinates
   *   Specifies a point on the sphere to project onto the map.
   * @return {Array} [x,y] coordinates.
   */


  _createClass(WebMercatorViewport, [{
    key: 'projectFlat',
    value: function projectFlat(lngLat) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scale;

      return Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["lngLatToWorld"])(lngLat, scale);
    }

    /**
     * Unproject world point [x,y] on map onto {lat, lon} on sphere
     *
     * @param {object|Vector} xy - object with {x,y} members
     *  representing point on projected map plane
     * @return {GeoCoordinates} - object with {lat,lon} of point on sphere.
     *   Has toArray method if you need a GeoJSON Array.
     *   Per cartographic tradition, lat and lon are specified as degrees.
     */

  }, {
    key: 'unprojectFlat',
    value: function unprojectFlat(xy) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scale;

      return Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["worldToLngLat"])(xy, scale);
    }

    /**
     * Get the map center that place a given [lng, lat] coordinate at screen
     * point [x, y]
     *
     * @param {Array} lngLat - [lng,lat] coordinates
     *   Specifies a point on the sphere.
     * @param {Array} pos - [x,y] coordinates
     *   Specifies a point on the screen.
     * @return {Array} [lng,lat] new map center.
     */

  }, {
    key: 'getMapCenterByLngLatPosition',
    value: function getMapCenterByLngLatPosition(_ref2) {
      var lngLat = _ref2.lngLat,
          pos = _ref2.pos;

      var fromLocation = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["pixelsToWorld"])(pos, this.pixelUnprojectionMatrix);
      var toLocation = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["lngLatToWorld"])(lngLat, this.scale);

      var translate = gl_vec2_add__WEBPACK_IMPORTED_MODULE_3___default()([], toLocation, gl_vec2_negate__WEBPACK_IMPORTED_MODULE_4___default()([], fromLocation));
      var newCenter = gl_vec2_add__WEBPACK_IMPORTED_MODULE_3___default()([], this.center, translate);

      return Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["worldToLngLat"])(newCenter, this.scale);
    }

    // Legacy method name

  }, {
    key: 'getLocationAtPoint',
    value: function getLocationAtPoint(_ref3) {
      var lngLat = _ref3.lngLat,
          pos = _ref3.pos;

      return this.getMapCenterByLngLatPosition({ lngLat: lngLat, pos: pos });
    }

    /**
     * Returns a new viewport that fit around the given rectangle.
     * Only supports non-perspective mode.
     * @param {Array} bounds - [[lon, lat], [lon, lat]]
     * @param {Number} [options.padding] - The amount of padding in pixels to add to the given bounds.
     * @param {Array} [options.offset] - The center of the given bounds relative to the map's center,
     *    [x, y] measured in pixels.
     * @returns {WebMercatorViewport}
     */

  }, {
    key: 'fitBounds',
    value: function fitBounds(bounds) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var width = this.width,
          height = this.height;

      var _fitBounds2 = Object(_fit_bounds__WEBPACK_IMPORTED_MODULE_2__["default"])(Object.assign({ width: width, height: height, bounds: bounds }, options)),
          longitude = _fitBounds2.longitude,
          latitude = _fitBounds2.latitude,
          zoom = _fitBounds2.zoom;

      return new WebMercatorViewport({ width: width, height: height, longitude: longitude, latitude: latitude, zoom: zoom });
    }
  }]);

  return WebMercatorViewport;
}(_viewport__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (WebMercatorViewport);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93ZWItbWVyY2F0b3Itdmlld3BvcnQuanMiXSwibmFtZXMiOlsiVmlld3BvcnQiLCJ6b29tVG9TY2FsZSIsImdldFdvcmxkUG9zaXRpb24iLCJwaXhlbHNUb1dvcmxkIiwibG5nTGF0VG9Xb3JsZCIsIndvcmxkVG9MbmdMYXQiLCJnZXRQcm9qZWN0aW9uTWF0cml4IiwiZ2V0Vmlld01hdHJpeCIsImZpdEJvdW5kcyIsInZlYzJfYWRkIiwidmVjMl9uZWdhdGUiLCJXZWJNZXJjYXRvclZpZXdwb3J0Iiwid2lkdGgiLCJoZWlnaHQiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInpvb20iLCJwaXRjaCIsImJlYXJpbmciLCJhbHRpdHVkZSIsImZhclpNdWx0aXBsaWVyIiwic2NhbGUiLCJNYXRoIiwibWF4IiwiY2VudGVyIiwicHJvamVjdGlvbk1hdHJpeCIsInZpZXdNYXRyaXgiLCJmbGlwWSIsIk9iamVjdCIsImZyZWV6ZSIsImxuZ0xhdCIsInh5IiwicG9zIiwiZnJvbUxvY2F0aW9uIiwicGl4ZWxVbnByb2plY3Rpb25NYXRyaXgiLCJ0b0xvY2F0aW9uIiwidHJhbnNsYXRlIiwibmV3Q2VudGVyIiwiZ2V0TWFwQ2VudGVyQnlMbmdMYXRQb3NpdGlvbiIsImJvdW5kcyIsIm9wdGlvbnMiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxRQUFQLE1BQXFCLFlBQXJCOztBQUVBLFNBQ0VDLFdBREYsRUFFRUMsZ0JBRkYsRUFHRUMsYUFIRixFQUlFQyxhQUpGLEVBS0VDLGFBTEYsRUFNRUMsbUJBTkYsRUFPRUMsYUFQRixRQVFPLHNCQVJQO0FBU0EsT0FBT0MsVUFBUCxNQUFzQixjQUF0Qjs7QUFFQSxPQUFPQyxRQUFQLE1BQXFCLGFBQXJCO0FBQ0EsT0FBT0MsV0FBUCxNQUF3QixnQkFBeEI7O0lBRXFCQyxtQjs7O0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBO0FBQ0EsaUNBV1E7QUFBQSxtRkFBSixFQUFJO0FBQUEsUUFUTkMsS0FTTSxRQVROQSxLQVNNO0FBQUEsUUFSTkMsTUFRTSxRQVJOQSxNQVFNO0FBQUEsNkJBUE5DLFFBT007QUFBQSxRQVBOQSxRQU9NLGlDQVBLLENBT0w7QUFBQSw4QkFOTkMsU0FNTTtBQUFBLFFBTk5BLFNBTU0sa0NBTk0sQ0FNTjtBQUFBLHlCQUxOQyxJQUtNO0FBQUEsUUFMTkEsSUFLTSw2QkFMQyxDQUtEO0FBQUEsMEJBSk5DLEtBSU07QUFBQSxRQUpOQSxLQUlNLDhCQUpFLENBSUY7QUFBQSw0QkFITkMsT0FHTTtBQUFBLFFBSE5BLE9BR00sZ0NBSEksQ0FHSjtBQUFBLDZCQUZOQyxRQUVNO0FBQUEsUUFGTkEsUUFFTSxpQ0FGSyxHQUVMO0FBQUEsbUNBRE5DLGNBQ007QUFBQSxRQUROQSxjQUNNLHVDQURXLEVBQ1g7O0FBQUE7O0FBQ047QUFDQVIsWUFBUUEsU0FBUyxDQUFqQjtBQUNBQyxhQUFTQSxVQUFVLENBQW5COztBQUVBLFFBQU1RLFFBQVFwQixZQUFZZSxJQUFaLENBQWQ7QUFDQTtBQUNBO0FBQ0FHLGVBQVdHLEtBQUtDLEdBQUwsQ0FBUyxJQUFULEVBQWVKLFFBQWYsQ0FBWDs7QUFFQSxRQUFNSyxTQUFTdEIsaUJBQWlCLEVBQUNhLG9CQUFELEVBQVlELGtCQUFaLEVBQXNCTyxZQUF0QixFQUFqQixDQUFmOztBQUVBLFFBQU1JLG1CQUFtQm5CLG9CQUFvQjtBQUMzQ00sa0JBRDJDO0FBRTNDQyxvQkFGMkM7QUFHM0NJLGtCQUgyQztBQUkzQ0Msc0JBSjJDO0FBSzNDQyx3QkFMMkM7QUFNM0NDO0FBTjJDLEtBQXBCLENBQXpCOztBQVNBLFFBQU1NLGFBQWFuQixjQUFjO0FBQy9CTSxvQkFEK0I7QUFFL0JXLG9CQUYrQjtBQUcvQlAsa0JBSCtCO0FBSS9CQyxzQkFKK0I7QUFLL0JDLHdCQUwrQjtBQU0vQlEsYUFBTztBQU53QixLQUFkLENBQW5COztBQVdBO0FBaENNLDBJQThCQSxFQUFDZixZQUFELEVBQVFDLGNBQVIsRUFBZ0JhLHNCQUFoQixFQUE0QkQsa0NBQTVCLEVBOUJBOztBQWlDTixVQUFLWCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBRUEsVUFBS0UsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0csTUFBTCxHQUFjQSxNQUFkOztBQUVBSSxXQUFPQyxNQUFQO0FBM0NNO0FBNENQO0FBQ0Q7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O2dDQVVZQyxNLEVBQTRCO0FBQUEsVUFBcEJULEtBQW9CLHVFQUFaLEtBQUtBLEtBQU87O0FBQ3RDLGFBQU9qQixjQUFjMEIsTUFBZCxFQUFzQlQsS0FBdEIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7a0NBU2NVLEUsRUFBd0I7QUFBQSxVQUFwQlYsS0FBb0IsdUVBQVosS0FBS0EsS0FBTzs7QUFDcEMsYUFBT2hCLGNBQWMwQixFQUFkLEVBQWtCVixLQUFsQixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7d0RBVTRDO0FBQUEsVUFBZFMsTUFBYyxTQUFkQSxNQUFjO0FBQUEsVUFBTkUsR0FBTSxTQUFOQSxHQUFNOztBQUMxQyxVQUFNQyxlQUFlOUIsY0FBYzZCLEdBQWQsRUFBbUIsS0FBS0UsdUJBQXhCLENBQXJCO0FBQ0EsVUFBTUMsYUFBYS9CLGNBQWMwQixNQUFkLEVBQXNCLEtBQUtULEtBQTNCLENBQW5COztBQUVBLFVBQU1lLFlBQVkzQixTQUFTLEVBQVQsRUFBYTBCLFVBQWIsRUFBeUJ6QixZQUFZLEVBQVosRUFBZ0J1QixZQUFoQixDQUF6QixDQUFsQjtBQUNBLFVBQU1JLFlBQVk1QixTQUFTLEVBQVQsRUFBYSxLQUFLZSxNQUFsQixFQUEwQlksU0FBMUIsQ0FBbEI7O0FBRUEsYUFBTy9CLGNBQWNnQyxTQUFkLEVBQXlCLEtBQUtoQixLQUE5QixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7OENBQ2tDO0FBQUEsVUFBZFMsTUFBYyxTQUFkQSxNQUFjO0FBQUEsVUFBTkUsR0FBTSxTQUFOQSxHQUFNOztBQUNoQyxhQUFPLEtBQUtNLDRCQUFMLENBQWtDLEVBQUNSLGNBQUQsRUFBU0UsUUFBVCxFQUFsQyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs4QkFTVU8sTSxFQUFzQjtBQUFBLFVBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUFBLFVBQ3ZCNUIsS0FEdUIsR0FDTixJQURNLENBQ3ZCQSxLQUR1QjtBQUFBLFVBQ2hCQyxNQURnQixHQUNOLElBRE0sQ0FDaEJBLE1BRGdCOztBQUFBLHdCQUVNTCxXQUFVb0IsT0FBT2EsTUFBUCxDQUFjLEVBQUM3QixZQUFELEVBQVFDLGNBQVIsRUFBZ0IwQixjQUFoQixFQUFkLEVBQXVDQyxPQUF2QyxDQUFWLENBRk47QUFBQSxVQUV2QnpCLFNBRnVCLGVBRXZCQSxTQUZ1QjtBQUFBLFVBRVpELFFBRlksZUFFWkEsUUFGWTtBQUFBLFVBRUZFLElBRkUsZUFFRkEsSUFGRTs7QUFHOUIsYUFBTyxJQUFJTCxtQkFBSixDQUF3QixFQUFDQyxZQUFELEVBQVFDLGNBQVIsRUFBZ0JFLG9CQUFoQixFQUEyQkQsa0JBQTNCLEVBQXFDRSxVQUFyQyxFQUF4QixDQUFQO0FBQ0Q7Ozs7RUExSjhDaEIsUTs7ZUFBNUJXLG1CIiwiZmlsZSI6IndlYi1tZXJjYXRvci12aWV3cG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFZpZXcgYW5kIFByb2plY3Rpb24gTWF0cml4IGNhbGN1bGF0aW9ucyBmb3IgbWFwYm94LWpzIHN0eWxlIG1hcCB2aWV3IHByb3BlcnRpZXNcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL3ZpZXdwb3J0JztcblxuaW1wb3J0IHtcbiAgem9vbVRvU2NhbGUsXG4gIGdldFdvcmxkUG9zaXRpb24sXG4gIHBpeGVsc1RvV29ybGQsXG4gIGxuZ0xhdFRvV29ybGQsXG4gIHdvcmxkVG9MbmdMYXQsXG4gIGdldFByb2plY3Rpb25NYXRyaXgsXG4gIGdldFZpZXdNYXRyaXhcbn0gZnJvbSAnLi93ZWItbWVyY2F0b3ItdXRpbHMnO1xuaW1wb3J0IGZpdEJvdW5kcyBmcm9tICcuL2ZpdC1ib3VuZHMnO1xuXG5pbXBvcnQgdmVjMl9hZGQgZnJvbSAnZ2wtdmVjMi9hZGQnO1xuaW1wb3J0IHZlYzJfbmVnYXRlIGZyb20gJ2dsLXZlYzIvbmVnYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViTWVyY2F0b3JWaWV3cG9ydCBleHRlbmRzIFZpZXdwb3J0IHtcbiAgLyoqXG4gICAqIEBjbGFzc2Rlc2NcbiAgICogQ3JlYXRlcyB2aWV3L3Byb2plY3Rpb24gbWF0cmljZXMgZnJvbSBtZXJjYXRvciBwYXJhbXNcbiAgICogTm90ZTogVGhlIFZpZXdwb3J0IGlzIGltbXV0YWJsZSBpbiB0aGUgc2Vuc2UgdGhhdCBpdCBvbmx5IGhhcyBhY2Nlc3NvcnMuXG4gICAqIEEgbmV3IHZpZXdwb3J0IGluc3RhbmNlIHNob3VsZCBiZSBjcmVhdGVkIGlmIGFueSBwYXJhbWV0ZXJzIGhhdmUgY2hhbmdlZC5cbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHQgLSBvcHRpb25zXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHQud2lkdGg9MSAtIFdpZHRoIG9mIFwidmlld3BvcnRcIiBvciB3aW5kb3dcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdC5oZWlnaHQ9MSAtIEhlaWdodCBvZiBcInZpZXdwb3J0XCIgb3Igd2luZG93XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHQuc2NhbGU9MSAtIEVpdGhlciB1c2Ugc2NhbGUgb3Igem9vbVxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0LnBpdGNoPTAgLSBDYW1lcmEgYW5nbGUgaW4gZGVncmVlcyAoMCBpcyBzdHJhaWdodCBkb3duKVxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0LmJlYXJpbmc9MCAtIE1hcCByb3RhdGlvbiBpbiBkZWdyZWVzICgwIG1lYW5zIG5vcnRoIGlzIHVwKVxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0LmFsdGl0dWRlPSAtIEFsdGl0dWRlIG9mIGNhbWVyYSBpbiBzY3JlZW4gdW5pdHNcbiAgICpcbiAgICogV2ViIG1lcmNhdG9yIHByb2plY3Rpb24gc2hvcnQtaGFuZCBwYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHQubGF0aXR1ZGUgLSBDZW50ZXIgb2Ygdmlld3BvcnQgb24gbWFwIChhbHRlcm5hdGl2ZSB0byBvcHQuY2VudGVyKVxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0LmxvbmdpdHVkZSAtIENlbnRlciBvZiB2aWV3cG9ydCBvbiBtYXAgKGFsdGVybmF0aXZlIHRvIG9wdC5jZW50ZXIpXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHQuem9vbSAtIFNjYWxlID0gTWF0aC5wb3coMix6b29tKSBvbiBtYXAgKGFsdGVybmF0aXZlIHRvIG9wdC5zY2FsZSlcblxuICAgKiBOb3RlczpcbiAgICogIC0gT25seSBvbmUgb2YgY2VudGVyIG9yIFtsYXRpdHVkZSwgbG9uZ2l0dWRlXSBjYW4gYmUgc3BlY2lmaWVkXG4gICAqICAtIFtsYXRpdHVkZSwgbG9uZ2l0dWRlXSBjYW4gb25seSBiZSBzcGVjaWZpZWQgd2hlbiBcIm1lcmNhdG9yXCIgaXMgdHJ1ZVxuICAgKiAgLSBBbHRpdHVkZSBoYXMgYSBkZWZhdWx0IHZhbHVlIHRoYXQgbWF0Y2hlcyBhc3N1bXB0aW9ucyBpbiBtYXBib3gtZ2xcbiAgICogIC0gd2lkdGggYW5kIGhlaWdodCBhcmUgZm9yY2VkIHRvIDEgaWYgc3VwcGxpZWQgYXMgMCwgdG8gYXZvaWRcbiAgICogICAgZGl2aXNpb24gYnkgemVyby4gVGhpcyBpcyBpbnRlbmRlZCB0byByZWR1Y2UgdGhlIGJ1cmRlbiBvZiBhcHBzIHRvXG4gICAqICAgIHRvIGNoZWNrIHZhbHVlcyBiZWZvcmUgaW5zdGFudGlhdGluZyBhIFZpZXdwb3J0LlxuICAgKi9cbiAgLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgLy8gTWFwIHN0YXRlXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxhdGl0dWRlID0gMCxcbiAgICBsb25naXR1ZGUgPSAwLFxuICAgIHpvb20gPSAwLFxuICAgIHBpdGNoID0gMCxcbiAgICBiZWFyaW5nID0gMCxcbiAgICBhbHRpdHVkZSA9IDEuNSxcbiAgICBmYXJaTXVsdGlwbGllciA9IDEwXG4gIH0gPSB7fSkge1xuICAgIC8vIFNpbGVudGx5IGFsbG93IGFwcHMgdG8gc2VuZCBpbiAwLDAgdG8gZmFjaWxpdGF0ZSBpc29tb3JwaGljIHJlbmRlciBldGNcbiAgICB3aWR0aCA9IHdpZHRoIHx8IDE7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IDE7XG5cbiAgICBjb25zdCBzY2FsZSA9IHpvb21Ub1NjYWxlKHpvb20pO1xuICAgIC8vIEFsdGl0dWRlIC0gcHJldmVudCBkaXZpc2lvbiBieSAwXG4gICAgLy8gVE9ETyAtIGp1c3QgdGhyb3cgYW4gRXJyb3IgaW5zdGVhZD9cbiAgICBhbHRpdHVkZSA9IE1hdGgubWF4KDAuNzUsIGFsdGl0dWRlKTtcblxuICAgIGNvbnN0IGNlbnRlciA9IGdldFdvcmxkUG9zaXRpb24oe2xvbmdpdHVkZSwgbGF0aXR1ZGUsIHNjYWxlfSk7XG5cbiAgICBjb25zdCBwcm9qZWN0aW9uTWF0cml4ID0gZ2V0UHJvamVjdGlvbk1hdHJpeCh7XG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBpdGNoLFxuICAgICAgYmVhcmluZyxcbiAgICAgIGFsdGl0dWRlLFxuICAgICAgZmFyWk11bHRpcGxpZXJcbiAgICB9KTtcblxuICAgIGNvbnN0IHZpZXdNYXRyaXggPSBnZXRWaWV3TWF0cml4KHtcbiAgICAgIGhlaWdodCxcbiAgICAgIGNlbnRlcixcbiAgICAgIHBpdGNoLFxuICAgICAgYmVhcmluZyxcbiAgICAgIGFsdGl0dWRlLFxuICAgICAgZmxpcFk6IHRydWVcbiAgICB9KTtcblxuICAgIHN1cGVyKHt3aWR0aCwgaGVpZ2h0LCB2aWV3TWF0cml4LCBwcm9qZWN0aW9uTWF0cml4fSk7XG5cbiAgICAvLyBTYXZlIHBhcmFtZXRlcnNcbiAgICB0aGlzLmxhdGl0dWRlID0gbGF0aXR1ZGU7XG4gICAgdGhpcy5sb25naXR1ZGUgPSBsb25naXR1ZGU7XG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgICB0aGlzLnBpdGNoID0gcGl0Y2g7XG4gICAgdGhpcy5iZWFyaW5nID0gYmVhcmluZztcbiAgICB0aGlzLmFsdGl0dWRlID0gYWx0aXR1ZGU7XG5cbiAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgdGhpcy5jZW50ZXIgPSBjZW50ZXI7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xuXG4gIC8qKlxuICAgKiBQcm9qZWN0IFtsbmcsbGF0XSBvbiBzcGhlcmUgb250byBbeCx5XSBvbiA1MTIqNTEyIE1lcmNhdG9yIFpvb20gMCB0aWxlLlxuICAgKiBQZXJmb3JtcyB0aGUgbm9ubGluZWFyIHBhcnQgb2YgdGhlIHdlYiBtZXJjYXRvciBwcm9qZWN0aW9uLlxuICAgKiBSZW1haW5pbmcgcHJvamVjdGlvbiBpcyBkb25lIHdpdGggNHg0IG1hdHJpY2VzIHdoaWNoIGFsc28gaGFuZGxlc1xuICAgKiBwZXJzcGVjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gbG5nTGF0IC0gW2xuZywgbGF0XSBjb29yZGluYXRlc1xuICAgKiAgIFNwZWNpZmllcyBhIHBvaW50IG9uIHRoZSBzcGhlcmUgdG8gcHJvamVjdCBvbnRvIHRoZSBtYXAuXG4gICAqIEByZXR1cm4ge0FycmF5fSBbeCx5XSBjb29yZGluYXRlcy5cbiAgICovXG4gIHByb2plY3RGbGF0KGxuZ0xhdCwgc2NhbGUgPSB0aGlzLnNjYWxlKSB7XG4gICAgcmV0dXJuIGxuZ0xhdFRvV29ybGQobG5nTGF0LCBzY2FsZSk7XG4gIH1cblxuICAvKipcbiAgICogVW5wcm9qZWN0IHdvcmxkIHBvaW50IFt4LHldIG9uIG1hcCBvbnRvIHtsYXQsIGxvbn0gb24gc3BoZXJlXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fFZlY3Rvcn0geHkgLSBvYmplY3Qgd2l0aCB7eCx5fSBtZW1iZXJzXG4gICAqICByZXByZXNlbnRpbmcgcG9pbnQgb24gcHJvamVjdGVkIG1hcCBwbGFuZVxuICAgKiBAcmV0dXJuIHtHZW9Db29yZGluYXRlc30gLSBvYmplY3Qgd2l0aCB7bGF0LGxvbn0gb2YgcG9pbnQgb24gc3BoZXJlLlxuICAgKiAgIEhhcyB0b0FycmF5IG1ldGhvZCBpZiB5b3UgbmVlZCBhIEdlb0pTT04gQXJyYXkuXG4gICAqICAgUGVyIGNhcnRvZ3JhcGhpYyB0cmFkaXRpb24sIGxhdCBhbmQgbG9uIGFyZSBzcGVjaWZpZWQgYXMgZGVncmVlcy5cbiAgICovXG4gIHVucHJvamVjdEZsYXQoeHksIHNjYWxlID0gdGhpcy5zY2FsZSkge1xuICAgIHJldHVybiB3b3JsZFRvTG5nTGF0KHh5LCBzY2FsZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtYXAgY2VudGVyIHRoYXQgcGxhY2UgYSBnaXZlbiBbbG5nLCBsYXRdIGNvb3JkaW5hdGUgYXQgc2NyZWVuXG4gICAqIHBvaW50IFt4LCB5XVxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBsbmdMYXQgLSBbbG5nLGxhdF0gY29vcmRpbmF0ZXNcbiAgICogICBTcGVjaWZpZXMgYSBwb2ludCBvbiB0aGUgc3BoZXJlLlxuICAgKiBAcGFyYW0ge0FycmF5fSBwb3MgLSBbeCx5XSBjb29yZGluYXRlc1xuICAgKiAgIFNwZWNpZmllcyBhIHBvaW50IG9uIHRoZSBzY3JlZW4uXG4gICAqIEByZXR1cm4ge0FycmF5fSBbbG5nLGxhdF0gbmV3IG1hcCBjZW50ZXIuXG4gICAqL1xuICBnZXRNYXBDZW50ZXJCeUxuZ0xhdFBvc2l0aW9uKHtsbmdMYXQsIHBvc30pIHtcbiAgICBjb25zdCBmcm9tTG9jYXRpb24gPSBwaXhlbHNUb1dvcmxkKHBvcywgdGhpcy5waXhlbFVucHJvamVjdGlvbk1hdHJpeCk7XG4gICAgY29uc3QgdG9Mb2NhdGlvbiA9IGxuZ0xhdFRvV29ybGQobG5nTGF0LCB0aGlzLnNjYWxlKTtcblxuICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHZlYzJfYWRkKFtdLCB0b0xvY2F0aW9uLCB2ZWMyX25lZ2F0ZShbXSwgZnJvbUxvY2F0aW9uKSk7XG4gICAgY29uc3QgbmV3Q2VudGVyID0gdmVjMl9hZGQoW10sIHRoaXMuY2VudGVyLCB0cmFuc2xhdGUpO1xuXG4gICAgcmV0dXJuIHdvcmxkVG9MbmdMYXQobmV3Q2VudGVyLCB0aGlzLnNjYWxlKTtcbiAgfVxuXG4gIC8vIExlZ2FjeSBtZXRob2QgbmFtZVxuICBnZXRMb2NhdGlvbkF0UG9pbnQoe2xuZ0xhdCwgcG9zfSkge1xuICAgIHJldHVybiB0aGlzLmdldE1hcENlbnRlckJ5TG5nTGF0UG9zaXRpb24oe2xuZ0xhdCwgcG9zfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIG5ldyB2aWV3cG9ydCB0aGF0IGZpdCBhcm91bmQgdGhlIGdpdmVuIHJlY3RhbmdsZS5cbiAgICogT25seSBzdXBwb3J0cyBub24tcGVyc3BlY3RpdmUgbW9kZS5cbiAgICogQHBhcmFtIHtBcnJheX0gYm91bmRzIC0gW1tsb24sIGxhdF0sIFtsb24sIGxhdF1dXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5wYWRkaW5nXSAtIFRoZSBhbW91bnQgb2YgcGFkZGluZyBpbiBwaXhlbHMgdG8gYWRkIHRvIHRoZSBnaXZlbiBib3VuZHMuXG4gICAqIEBwYXJhbSB7QXJyYXl9IFtvcHRpb25zLm9mZnNldF0gLSBUaGUgY2VudGVyIG9mIHRoZSBnaXZlbiBib3VuZHMgcmVsYXRpdmUgdG8gdGhlIG1hcCdzIGNlbnRlcixcbiAgICogICAgW3gsIHldIG1lYXN1cmVkIGluIHBpeGVscy5cbiAgICogQHJldHVybnMge1dlYk1lcmNhdG9yVmlld3BvcnR9XG4gICAqL1xuICBmaXRCb3VuZHMoYm91bmRzLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7d2lkdGgsIGhlaWdodH0gPSB0aGlzO1xuICAgIGNvbnN0IHtsb25naXR1ZGUsIGxhdGl0dWRlLCB6b29tfSA9IGZpdEJvdW5kcyhPYmplY3QuYXNzaWduKHt3aWR0aCwgaGVpZ2h0LCBib3VuZHN9LCBvcHRpb25zKSk7XG4gICAgcmV0dXJuIG5ldyBXZWJNZXJjYXRvclZpZXdwb3J0KHt3aWR0aCwgaGVpZ2h0LCBsb25naXR1ZGUsIGxhdGl0dWRlLCB6b29tfSk7XG4gIH1cblxufVxuIl19

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./sub_data_merc.json":
/*!****************************!*\
  !*** ./sub_data_merc.json ***!
  \****************************/
/*! exports provided: 1, 2, 3, 4, 5, 6, 7, S, A, C, E, B, D, F, M, G, J, Z, L, N, Q, R, W, STATEN, default */
/***/ (function(module) {

module.exports = {"1":{"vertices":[["Van Cortlandt Park - 242 St",[-73.898583,40.889248]],["238 St",[-73.90087,40.884667]],["231 St",[-73.904834,40.878856]],["Marble Hill - 225 St",[-73.909831,40.874561]],["215 St",[-73.915279,40.869444]],["207 St",[-73.918822,40.864621]],["Dyckman St",[-73.925536,40.860531]],["191 St",[-73.929412,40.855225]],["181 St",[-73.933596,40.849505]],["168 St - Washington Hts",[-73.940133,40.840556]],["157 St",[-73.94489,40.834041]],["145 St",[-73.95036,40.826551]],["137 St - City College",[-73.953676,40.822008]],["125 St",[-73.958372,40.815581]],["116 St - Columbia University",[-73.96411,40.807722]],["Cathedral Pkwy",[-73.966847,40.803967]],["103 St",[-73.968379,40.799446]],["96 St",[-73.972323,40.793919]],["86 St",[-73.976218,40.788644]],["79 St",[-73.979917,40.783934]],["72 St",[-73.98197,40.778453]],["66 St - Lincoln Center",[-73.982209,40.77344]],["59 St - Columbus Circle",[-73.981929,40.768247]],["50 St",[-73.983849,40.761728]],["Times Sq - 42 St",[-73.987495,40.75529]],["34 St - Penn Station",[-73.991057,40.750373]],["28 St",[-73.993365,40.747215]],["23 St",[-73.995657,40.744081]],["18 St",[-73.997871,40.74104]],["14 St",[-74.000201,40.737826]],["Christopher St - Sheridan Sq",[-74.002906,40.733422]],["Houston St",[-74.005367,40.728251]],["Canal St",[-74.006277,40.722854]],["Franklin St",[-74.006886,40.719318]],["Chambers St",[-74.009266,40.715478]],["Cortlandt St",[-74.012188,40.711835]],["Rector St",[-74.013783,40.707513]],["South Ferry Loop",[-74.013205,40.701411]],["South Ferry",[-74.013664,40.702068]]],"lineName":"1","duration":53,"color":"#EE352E"},"2":{"vertices":[["Wakefield - 241 St",[-73.85062,40.903125]],["Nereid Av",[-73.854376,40.898379]],["233 St",[-73.857473,40.893193]],["225 St",[-73.860341,40.888022]],["219 St",[-73.862633,40.883895]],["Gun Hill Rd",[-73.866256,40.87785]],["Burke Av",[-73.867164,40.871356]],["Allerton Av",[-73.867352,40.865462]],["Pelham Pkwy",[-73.867615,40.857192]],["Bronx Park East",[-73.868457,40.848828]],["E 180 St",[-73.873488,40.841894]],["West Farms Sq - E Tremont Av",[-73.880049,40.840295]],["174 St",[-73.887734,40.837288]],["Freeman St",[-73.891865,40.829993]],["Simpson St",[-73.893064,40.824073]],["Intervale Av",[-73.896736,40.822181]],["Prospect Av",[-73.90177,40.819585]],["Jackson Av",[-73.907807,40.81649]],["3 Av - 149 St",[-73.917757,40.816109]],["149 St - Grand Concourse",[-73.926718,40.81841]],["135 St",[-73.94077,40.814229]],["125 St",[-73.945495,40.807754]],["116 St",[-73.949625,40.802098]],["Central Park North (110 St)",[-73.951822,40.799075]],["96 St",[-73.972323,40.793919]],["86 St",[-73.976218,40.788644]],["79 St",[-73.979917,40.783934]],["72 St",[-73.98197,40.778453]],["66 St - Lincoln Center",[-73.982209,40.77344]],["59 St - Columbus Circle",[-73.981929,40.768247]],["50 St",[-73.983849,40.761728]],["Times Sq - 42 St",[-73.987495,40.75529]],["34 St - Penn Station",[-73.991057,40.750373]],["28 St",[-73.993365,40.747215]],["23 St",[-73.995657,40.744081]],["18 St",[-73.997871,40.74104]],["14 St",[-74.000201,40.737826]],["Christopher St - Sheridan Sq",[-74.002906,40.733422]],["Houston St",[-74.005367,40.728251]],["Canal St",[-74.006277,40.722854]],["Franklin St",[-74.006886,40.719318]],["Chambers St",[-74.009266,40.715478]],["Park Pl",[-74.008811,40.713051]],["Fulton St",[-74.006571,40.709416]],["Wall St",[-74.0091,40.706821]],["Clark St",[-73.993086,40.697466]],["Borough Hall",[-73.989998,40.693219]],["Hoyt St",[-73.985065,40.690545]],["Nevins St",[-73.980492,40.688246]],["Atlantic Av - Barclays Ctr",[-73.977666,40.684359]],["Bergen St",[-73.975098,40.680829]],["Grand Army Plaza",[-73.971046,40.675235]],["Eastern Pkwy - Brooklyn Museum",[-73.964375,40.671987]],["Franklin Av",[-73.958131,40.670682]],["President St",[-73.950683,40.667883]],["Sterling St",[-73.95085,40.662742]],["Winthrop St",[-73.9502,40.656652]],["Church Av",[-73.949575,40.650843]],["Beverly Rd",[-73.948959,40.645098]],["Newkirk Av",[-73.948411,40.639967]],["Flatbush Av - Brooklyn College",[-73.947642,40.632836]]],"lineName":"2","duration":94,"color":"#EE352E"},"3":{"vertices":[["Harlem - 148 St",[-73.93647,40.82388]],["145 St",[-73.936245,40.820421]],["135 St",[-73.94077,40.814229]],["125 St",[-73.945495,40.807754]],["116 St",[-73.949625,40.802098]],["Central Park North (110 St)",[-73.951822,40.799075]],["96 St",[-73.972323,40.793919]],["72 St",[-73.98197,40.778453]],["Times Sq - 42 St",[-73.987495,40.75529]],["34 St - Penn Station",[-73.991057,40.750373]],["14 St",[-74.000201,40.737826]],["Chambers St",[-74.009266,40.715478]],["Park Pl",[-74.008811,40.713051]],["Fulton St",[-74.006571,40.709416]],["Wall St",[-74.0091,40.706821]],["Clark St",[-73.993086,40.697466]],["Borough Hall",[-73.989998,40.693219]],["Hoyt St",[-73.985065,40.690545]],["Nevins St",[-73.980492,40.688246]],["Atlantic Av - Barclays Ctr",[-73.977666,40.684359]],["Bergen St",[-73.975098,40.680829]],["Grand Army Plaza",[-73.971046,40.675235]],["Eastern Pkwy - Brooklyn Museum",[-73.964375,40.671987]],["Franklin Av",[-73.958131,40.670682]],["Nostrand Av",[-73.950466,40.669847]],["Kingston Av",[-73.942161,40.669399]],["Crown Hts - Utica Av",[-73.932942,40.668897]],["Sutter Av - Rutland Rd",[-73.92261,40.664717]],["Saratoga Av",[-73.916327,40.661453]],["Rockaway Av",[-73.908946,40.662549]],["Junius St",[-73.902447,40.663515]],["Pennsylvania Av",[-73.894895,40.664635]],["Van Siclen Av",[-73.889395,40.665449]],["New Lots Av",[-73.884079,40.666235]]],"lineName":"3","duration":64,"color":"#EE352E"},"4":{"vertices":[["Woodlawn",[-73.878751,40.886037]],["Mosholu Pkwy",[-73.884655,40.87975]],["Bedford Park Blvd - Lehman College",[-73.890064,40.873412]],["Kingsbridge Rd",[-73.897174,40.86776]],["Fordham Rd",[-73.901034,40.862803]],["183 St",[-73.903879,40.858407]],["Burnside Av",[-73.907684,40.853453]],["176 St",[-73.911794,40.84848]],["Mt Eden Av",[-73.914685,40.844434]],["170 St",[-73.917791,40.840075]],["167 St",[-73.9214,40.835537]],["161 St - Yankee Stadium",[-73.925831,40.827994]],["149 St - Grand Concourse",[-73.927351,40.818375]],["138 St - Grand Concourse",[-73.929849,40.813224]],["125 St",[-73.937594,40.804138]],["116 St",[-73.941617,40.798629]],["110 St",[-73.94425,40.79502]],["103 St",[-73.947478,40.7906]],["96 St",[-73.95107,40.785672]],["86 St",[-73.955589,40.779492]],["77 St",[-73.959874,40.77362]],["68 St - Hunter College",[-73.96387,40.768141]],["59 St",[-73.967967,40.762526]],["51 St",[-73.97192,40.757107]],["Grand Central - 42 St",[-73.976848,40.751776]],["33 St",[-73.982076,40.746081]],["28 St",[-73.984264,40.74307]],["23 St",[-73.986599,40.739864]],["14 St - Union Sq",[-73.989951,40.734673]],["Astor Pl",[-73.99107,40.730054]],["Bleecker St",[-73.994659,40.725915]],["Spring St",[-73.997141,40.722301]],["Canal St",[-74.000193,40.718803]],["Brooklyn Bridge - City Hall",[-74.004131,40.713065]],["Fulton St",[-74.009509,40.710368]],["Wall St",[-74.011862,40.707557]],["Bowling Green",[-74.014065,40.704817]],["Borough Hall",[-73.990151,40.692404]],["Hoyt St",[-73.985065,40.690545]],["Nevins St",[-73.980492,40.688246]],["Atlantic Av - Barclays Ctr",[-73.977666,40.684359]],["Bergen St",[-73.975098,40.680829]],["Grand Army Plaza",[-73.971046,40.675235]],["Eastern Pkwy - Brooklyn Museum",[-73.964375,40.671987]],["Franklin Av",[-73.958131,40.670682]],["Nostrand Av",[-73.950426,40.680438]],["Kingston - Throop Avs",[-73.940858,40.679921]],["Crown Hts - Utica Av",[-73.932942,40.668897]],["Sutter Av - Rutland Rd",[-73.92261,40.664717]],["Saratoga Av",[-73.916327,40.661453]],["Rockaway Av",[-73.908946,40.662549]],["Junius St",[-73.902447,40.663515]],["Pennsylvania Av",[-73.894895,40.664635]],["Van Siclen Av",[-73.889395,40.665449]],["New Lots Av",[-73.884079,40.666235]]],"lineName":"4","duration":75,"color":"#00933C"},"5":{"vertices":[["Eastchester - Dyre Av",[-73.830834,40.8883]],["Baychester Av",[-73.838591,40.878663]],["Gun Hill Rd",[-73.846384,40.869526]],["Pelham Pkwy",[-73.855359,40.858985]],["Morris Park",[-73.860495,40.854364]],["E 180 St",[-73.873488,40.841894]],["West Farms Sq - E Tremont Av",[-73.880049,40.840295]],["174 St",[-73.887734,40.837288]],["Freeman St",[-73.891865,40.829993]],["Simpson St",[-73.893064,40.824073]],["Intervale Av",[-73.896736,40.822181]],["Prospect Av",[-73.90177,40.819585]],["Jackson Av",[-73.907807,40.81649]],["3 Av - 149 St",[-73.917757,40.816109]],["149 St - Grand Concourse",[-73.926718,40.81841]],["138 St - Grand Concourse",[-73.929849,40.813224]],["125 St",[-73.937594,40.804138]],["86 St",[-73.955589,40.779492]],["59 St",[-73.967967,40.762526]],["Grand Central - 42 St",[-73.976848,40.751776]],["14 St - Union Sq",[-73.989951,40.734673]],["Brooklyn Bridge - City Hall",[-74.004131,40.713065]],["Fulton St",[-74.009509,40.710368]],["Wall St",[-74.011862,40.707557]],["Bowling Green",[-74.014065,40.704817]],["Borough Hall",[-73.989998,40.693219]],["Nevins St",[-73.980492,40.688246]],["Atlantic Av - Barclays Ctr",[-73.977666,40.684359]],["Franklin Av",[-73.958131,40.670682]],["President St",[-73.950683,40.667883]],["Sterling St",[-73.95085,40.662742]],["Winthrop St",[-73.9502,40.656652]],["Church Av",[-73.949575,40.650843]],["Beverly Rd",[-73.948959,40.645098]],["Newkirk Av",[-73.948411,40.639967]],["Flatbush Av - Brooklyn College",[-73.947642,40.632836]]],"lineName":"5","duration":54,"color":"#00933C"},"6":{"vertices":[["Pelham Bay Park",[-73.828121,40.852462]],["Buhre Av",[-73.832569,40.84681]],["Middletown Rd",[-73.836322,40.843863]],["Westchester Sq - E Tremont Av",[-73.842952,40.839892]],["Zerega Av",[-73.847036,40.836488]],["Castle Hill Av",[-73.851222,40.834255]],["Parkchester",[-73.860816,40.833226]],["St Lawrence Av",[-73.867618,40.831509]],["Morrison Av- Sound View",[-73.874516,40.829521]],["Elder Av",[-73.879159,40.828584]],["Whitlock Av",[-73.886283,40.826525]],["Hunts Point Av",[-73.890549,40.820948]],["Longwood Av",[-73.896435,40.816104]],["E 149 St",[-73.904098,40.812118]],["E 143 St - St Mary's St",[-73.907657,40.808719]],["Cypress Av",[-73.914042,40.805368]],["Brook Av",[-73.91924,40.807566]],["3 Av - 138 St",[-73.926138,40.810476]],["125 St",[-73.937594,40.804138]],["116 St",[-73.941617,40.798629]],["110 St",[-73.94425,40.79502]],["103 St",[-73.947478,40.7906]],["96 St",[-73.95107,40.785672]],["86 St",[-73.955589,40.779492]],["77 St",[-73.959874,40.77362]],["68 St - Hunter College",[-73.96387,40.768141]],["59 St",[-73.967967,40.762526]],["51 St",[-73.97192,40.757107]],["Grand Central - 42 St",[-73.976848,40.751776]],["33 St",[-73.982076,40.746081]],["28 St",[-73.984264,40.74307]],["23 St",[-73.986599,40.739864]],["14 St - Union Sq",[-73.989951,40.734673]],["Astor Pl",[-73.99107,40.730054]],["Bleecker St",[-73.994659,40.725915]],["Spring St",[-73.997141,40.722301]],["Canal St",[-74.000193,40.718803]],["Brooklyn Bridge - City Hall",[-74.004131,40.713065]]],"lineName":"6","duration":66,"color":"#00933C"},"7":{"vertices":[["hewes - Main St",[-73.83003,40.7596]],["Mets - Willets Point",[-73.845625,40.754622]],["111 St",[-73.855334,40.75173]],["103 St - Corona Plaza",[-73.8627,40.749865]],["Junction Blvd",[-73.869527,40.749145]],["90 St - Elmhurst Av",[-73.876613,40.748408]],["82 St - Jackson Hts",[-73.883697,40.747659]],["74 St - Broadway",[-73.891394,40.746848]],["69 St",[-73.896403,40.746325]],["Woodside - 61 St",[-73.902984,40.74563]],["52 St",[-73.912549,40.744149]],["46 St",[-73.918435,40.743132]],["40 St",[-73.924016,40.743781]],["33 St",[-73.930997,40.744587]],["Queensboro Plaza",[-73.940202,40.750582]],["Court Sq",[-73.945264,40.747023]],["Hunters Point Av",[-73.948916,40.742216]],["Vernon Blvd - Jackson Av",[-73.953581,40.742626]],["Grand Central - 42 St",[-73.976041,40.751431]],["5 Av",[-73.981963,40.753821]],["Times Sq - 42 St",[-73.987691,40.755477]],["34 St - 11 Av",[-74.00191,40.755882]]],"lineName":"7","duration":38,"color":"#B933AD"},"S":{"vertices":[["Franklin Av",[-73.955827,40.680596]],["Park Pl",[-73.957624,40.674772]],["Botanic Garden",[-73.959245,40.670343]]],"lineName":"S","duration":5,"color":"#808183"},"A":{"vertices":[["Inwood - 207 St",[-73.919899,40.868072]],["Dyckman St",[-73.927271,40.865491]],["190 St",[-73.93418,40.859022]],["181 St",[-73.937969,40.851695]],["175 St",[-73.939704,40.847391]],["168 St",[-73.939561,40.840719]],["163 St - Amsterdam Av",[-73.939892,40.836013]],["155 St",[-73.941514,40.830518]],["145 St",[-73.944216,40.824783]],["135 St",[-73.947649,40.817894]],["125 St",[-73.952343,40.811109]],["116 St",[-73.954882,40.805085]],["Cathedral Pkwy (110 St)",[-73.958161,40.800603]],["103 St",[-73.961454,40.796092]],["96 St",[-73.964696,40.791642]],["86 St",[-73.968916,40.785868]],["81 St - Museum of Natural History",[-73.972143,40.781433]],["72 St",[-73.97641,40.775594]],["59 St - Columbus Circle",[-73.981736,40.768296]],["50 St",[-73.985984,40.762456]],["42 St - Port Authority Bus Terminal",[-73.989735,40.757308]],["34 St - Penn Station",[-73.993391,40.752287]],["23 St",[-73.998041,40.745906]],["14 St",[-74.00169,40.740893]],["W 4 St",[-74.000495,40.732338]],["Spring St",[-74.003739,40.726227]],["Canal St",[-74.005229,40.720824]],["Chambers St",[-74.008585,40.714111]],["Fulton St",[-74.007691,40.710197]],["High St",[-73.990531,40.699337]],["Jay St - MetroTech",[-73.987342,40.692338]],["Hoyt - Schermerhorn Sts",[-73.985001,40.688484]],["Lafayette Av",[-73.973946,40.686113]],["Clinton - Washington Avs",[-73.965838,40.683263]],["Franklin Av",[-73.956848,40.68138]],["Nostrand Av",[-73.950426,40.680438]],["Kingston - Throop Avs",[-73.940858,40.679921]],["Utica Av",[-73.930729,40.679364]],["Ralph Av",[-73.920786,40.678822]],["Rockaway Av",[-73.911946,40.67834]],["Broadway Jct",[-73.905316,40.678334]],["Liberty Av",[-73.896548,40.674542]],["Van Siclen Av",[-73.890358,40.67271]],["Shepherd Av",[-73.88075,40.67413]],["Euclid Av",[-73.872106,40.675377]],["Grant Av",[-73.86505,40.677044]],["80 St",[-73.858992,40.679371]],["88 St",[-73.85147,40.679843]],["Rockaway Blvd",[-73.843853,40.680429]],["104 St",[-73.837683,40.681711]],["111 St",[-73.832163,40.684331]],["Ozone Park - Lefferts Blvd",[-73.825798,40.685951]],["Aqueduct Racetrack",[-73.834058,40.668234]],["Aqueduct - N Conduit Av",[-73.834058,40.668234]],["Howard Beach - JFK Airport",[-73.830301,40.660476]],["Broad Channel",[-73.815925,40.608382]],["Beach 67 St",[-73.796924,40.590927]],["Beach 60 St",[-73.788522,40.592374]],["Beach 44 St",[-73.776013,40.592943]],["Beach 36 St",[-73.768175,40.595398]],["Beach 25 St",[-73.761353,40.600066]],["Far Rockaway - Mott Av",[-73.755405,40.603995]],["Broad Channel",[-73.816024,40.609014]],["Beach 90 St",[-73.813641,40.588034]],["Beach 98 St",[-73.820558,40.585307]],["Beach 105 St",[-73.827559,40.583209]],["Rockaway Park - Beach 116 St",[-73.835592,40.580903]]],"lineName":"A","duration":74,"color":"#0039A6"},"C":{"vertices":[["168 St",[-73.939561,40.840719]],["163 St - Amsterdam Av",[-73.939892,40.836013]],["155 St",[-73.941514,40.830518]],["145 St",[-73.944216,40.824783]],["135 St",[-73.947649,40.817894]],["125 St",[-73.952343,40.811109]],["116 St",[-73.954882,40.805085]],["Cathedral Pkwy (110 St)",[-73.958161,40.800603]],["103 St",[-73.961454,40.796092]],["96 St",[-73.964696,40.791642]],["86 St",[-73.968916,40.785868]],["81 St - Museum of Natural History",[-73.972143,40.781433]],["72 St",[-73.97641,40.775594]],["59 St - Columbus Circle",[-73.981736,40.768296]],["50 St",[-73.985984,40.762456]],["42 St - Port Authority Bus Terminal",[-73.989735,40.757308]],["34 St - Penn Station",[-73.993391,40.752287]],["23 St",[-73.998041,40.745906]],["14 St",[-74.00169,40.740893]],["W 4 St",[-74.000495,40.732338]],["Spring St",[-74.003739,40.726227]],["Canal St",[-74.005229,40.720824]],["Chambers St",[-74.008585,40.714111]],["Fulton St",[-74.007691,40.710197]],["High St",[-73.990531,40.699337]],["Jay St - MetroTech",[-73.987342,40.692338]],["Hoyt - Schermerhorn Sts",[-73.985001,40.688484]],["Lafayette Av",[-73.973946,40.686113]],["Clinton - Washington Avs",[-73.965838,40.683263]],["Franklin Av",[-73.956848,40.68138]],["Nostrand Av",[-73.950426,40.680438]],["Kingston - Throop Avs",[-73.940858,40.679921]],["Utica Av",[-73.930729,40.679364]],["Ralph Av",[-73.920786,40.678822]],["Rockaway Av",[-73.911946,40.67834]],["Broadway Jct",[-73.905316,40.678334]],["Liberty Av",[-73.896548,40.674542]],["Van Siclen Av",[-73.890358,40.67271]],["Shepherd Av",[-73.88075,40.67413]],["Euclid Av",[-73.872106,40.675377]]],"lineName":"C","duration":54,"color":"#0039A6"},"E":{"vertices":[["Jamaica Center - Parsons/Archer",[-73.801109,40.702147]],["Sutphin Blvd - Archer Av - JFK Airport",[-73.807969,40.700486]],["Jamaica - Van Wyck",[-73.816859,40.702566]],["Briarwood - Van Wyck Blvd",[-73.820574,40.709179]],["Kew Gardens - Union Tpke",[-73.831008,40.714441]],["75 Av",[-73.837324,40.718331]],["Forest Hills - 71 Av",[-73.844521,40.721691]],["67 Av",[-73.852719,40.726523]],["63 Dr - Rego Park",[-73.861604,40.729846]],["Woodhaven Blvd",[-73.869229,40.733106]],["Grand Av - Newtown",[-73.877223,40.737015]],["Elmhurst Av",[-73.882017,40.742454]],["Jackson Hts - Roosevelt Av",[-73.891338,40.746644]],["65 St",[-73.898453,40.749669]],["Northern Blvd",[-73.906006,40.752885]],["46 St",[-73.913333,40.756312]],["Steinway St",[-73.92074,40.756879]],["36 St",[-73.928781,40.752039]],["Queens Plaza",[-73.937243,40.748973]],["Court Sq",[-73.946,40.747846]],["Lexington Av/53 St",[-73.969055,40.757552]],["5 Av/53 St",[-73.975224,40.760167]],["7 Av",[-73.981637,40.762862]],["50 St",[-73.985984,40.762456]],["42 St - Port Authority Bus Terminal",[-73.989735,40.757308]],["34 St - Penn Station",[-73.993391,40.752287]],["23 St",[-73.998041,40.745906]],["14 St",[-74.00169,40.740893]],["W 4 St",[-74.000495,40.732338]],["Spring St",[-74.003739,40.726227]],["Canal St",[-74.005229,40.720824]],["World Trade Center",[-74.009781,40.712582]]],"lineName":"E","duration":60,"color":"#0039A6"},"B":{"vertices":[["Bedford Park Blvd",[-73.887138,40.873244]],["Kingsbridge Rd",[-73.893509,40.866978]],["Fordham Rd",[-73.897749,40.861296]],["182-183 Sts",[-73.900741,40.856093]],["Tremont Av",[-73.905227,40.85041]],["174-175 Sts",[-73.910136,40.8459]],["170 St",[-73.9134,40.839306]],["167 St",[-73.91844,40.833771]],["161 St - Yankee Stadium",[-73.925651,40.827905]],["155 St",[-73.938209,40.830135]],["145 St",[-73.944216,40.824783]],["125 St",[-73.952343,40.811109]],["116 St",[-73.954882,40.805085]],["Cathedral Pkwy (110 St)",[-73.958161,40.800603]],["103 St",[-73.961454,40.796092]],["96 St",[-73.964696,40.791642]],["86 St",[-73.968916,40.785868]],["81 St - Museum of Natural History",[-73.972143,40.781433]],["72 St",[-73.97641,40.775594]],["59 St - Columbus Circle",[-73.981736,40.768296]],["7 Av",[-73.981637,40.762862]],["47-50 Sts - Rockefeller Ctr",[-73.981329,40.758663]],["42 St - Bryant Pk",[-73.984569,40.754222]],["34 St - Herald Sq",[-73.987823,40.749719]],["23 St",[-73.992821,40.742878]],["14 St",[-73.996209,40.738228]],["W 4 St",[-74.000495,40.732338]],["Broadway-Lafayette St",[-73.996204,40.725297]],["Grand St",[-73.993753,40.718267]],["DeKalb Av",[-73.981824,40.690635]],["Atlantic Av - Barclays Ctr",[-73.97881,40.683666]],["7 Av",[-73.972367,40.67705]],["Prospect Park",[-73.962246,40.661614]],["Church Av",[-73.962982,40.650527]],["Newkirk Plaza",[-73.962793,40.635082]],["Kings Hwy",[-73.957734,40.60867]],["Sheepshead Bay",[-73.954155,40.586896]],["Brighton Beach",[-73.961376,40.577621]]],"lineName":"B","duration":68,"color":"#FF6319"},"D":{"vertices":[["Norwood - 205 St",[-73.878855,40.874811]],["Bedford Park Blvd",[-73.887138,40.873244]],["Kingsbridge Rd",[-73.893509,40.866978]],["Fordham Rd",[-73.897749,40.861296]],["182-183 Sts",[-73.900741,40.856093]],["Tremont Av",[-73.905227,40.85041]],["174-175 Sts",[-73.910136,40.8459]],["170 St",[-73.9134,40.839306]],["167 St",[-73.91844,40.833771]],["161 St - Yankee Stadium",[-73.925651,40.827905]],["155 St",[-73.938209,40.830135]],["145 St",[-73.944216,40.824783]],["125 St",[-73.952343,40.811109]],["59 St - Columbus Circle",[-73.981736,40.768296]],["7 Av",[-73.981637,40.762862]],["47-50 Sts - Rockefeller Ctr",[-73.981329,40.758663]],["42 St - Bryant Pk",[-73.984569,40.754222]],["34 St - Herald Sq",[-73.987823,40.749719]],["W 4 St",[-74.000495,40.732338]],["Broadway-Lafayette St",[-73.996204,40.725297]],["Grand St",[-73.993753,40.718267]],["DeKalb Av",[-73.981824,40.690635]],["Atlantic Av - Barclays Ctr",[-73.97689,40.68446]],["Union St",[-73.98311,40.677316]],["9 St",[-73.988302,40.670847]],["Prospect Av",[-73.992872,40.665414]],["25 St",[-73.998091,40.660397]],["36 St",[-74.003549,40.655144]],["9 Av",[-73.994324,40.646292]],["Fort Hamilton Pkwy",[-73.994304,40.640914]],["50 St",[-73.994791,40.63626]],["55 St",[-73.995476,40.631435]],["62 St",[-73.996895,40.626472]],["71 St",[-73.998864,40.619589]],["79 St",[-74.00061,40.613501]],["18 Av",[-74.001736,40.607954]],["20 Av",[-73.998168,40.604556]],["Bay Pkwy",[-73.993728,40.601875]],["25 Av",[-73.986829,40.597704]],["Bay 50 St",[-73.983765,40.588841]],["Coney Island - Stillwell Av",[-73.981233,40.577422]]],"lineName":"D","duration":91,"color":"#FF6319"},"F":{"vertices":[["Jamaica - 179 St",[-73.783817,40.712646]],["169 St",[-73.793604,40.71047]],["Parsons Blvd",[-73.803326,40.707564]],["Sutphin Blvd",[-73.810708,40.70546]],["Briarwood - Van Wyck Blvd",[-73.820574,40.709179]],["Kew Gardens - Union Tpke",[-73.831008,40.714441]],["75 Av",[-73.837324,40.718331]],["Forest Hills - 71 Av",[-73.844521,40.721691]],["Jackson Hts - Roosevelt Av",[-73.891338,40.746644]],["21 St - Queensbridge",[-73.942836,40.754203]],["Roosevelt Island",[-73.95326,40.759145]],["Lexington Av/63 St",[-73.966113,40.764629]],["57 St",[-73.97745,40.763972]],["47-50 Sts - Rockefeller Ctr",[-73.981329,40.758663]],["42 St - Bryant Pk",[-73.984569,40.754222]],["34 St - Herald Sq",[-73.987823,40.749719]],["23 St",[-73.992821,40.742878]],["14 St",[-73.996209,40.738228]],["W 4 St",[-74.000495,40.732338]],["Broadway-Lafayette St",[-73.996204,40.725297]],["2 Av",[-73.989938,40.723402]],["Delancey St",[-73.988114,40.718611]],["East Broadway",[-73.990173,40.713715]],["York St",[-73.986751,40.701397]],["Jay St - MetroTech",[-73.985942,40.69218]],["Bergen St",[-73.990862,40.686145]],["Carroll St",[-73.995048,40.680303]],["Smith - 9 Sts",[-73.995959,40.67358]],["4 Av",[-73.989779,40.670272]],["7 Av",[-73.980305,40.666271]],["15 St - Prospect Park",[-73.979493,40.660365]],["Fort Hamilton Pkwy",[-73.975776,40.650782]],["Church Av",[-73.979678,40.644041]],["Ditmas Av",[-73.978172,40.636119]],["18 Av",[-73.976971,40.629755]],["Avenue I",[-73.976127,40.625322]],["Bay Pkwy",[-73.975264,40.620769]],["Avenue N",[-73.974197,40.61514]],["Avenue P",[-73.973022,40.608944]],["Kings Hwy",[-73.972361,40.603217]],["Avenue U",[-73.973357,40.596063]],["Avenue X",[-73.97425,40.58962]],["Neptune Av",[-73.974574,40.581011]],["W 8 St - NY Aquarium",[-73.975939,40.576127]],["Coney Island - Stillwell Av",[-73.981233,40.577422]]],"lineName":"F","duration":89,"color":"#FF6319"},"M":{"vertices":[["Forest Hills - 71 Av",[-73.844521,40.721691]],["67 Av",[-73.852719,40.726523]],["63 Dr - Rego Park",[-73.861604,40.729846]],["Woodhaven Blvd",[-73.869229,40.733106]],["Grand Av - Newtown",[-73.877223,40.737015]],["Elmhurst Av",[-73.882017,40.742454]],["Jackson Hts - Roosevelt Av",[-73.891338,40.746644]],["65 St",[-73.898453,40.749669]],["Northern Blvd",[-73.906006,40.752885]],["46 St",[-73.913333,40.756312]],["Steinway St",[-73.92074,40.756879]],["36 St",[-73.928781,40.752039]],["Queens Plaza",[-73.937243,40.748973]],["Court Sq",[-73.946,40.747846]],["Lexington Av/53 St",[-73.969055,40.757552]],["5 Av/53 St",[-73.975224,40.760167]],["47-50 Sts - Rockefeller Ctr",[-73.981329,40.758663]],["42 St - Bryant Pk",[-73.984569,40.754222]],["34 St - Herald Sq",[-73.987823,40.749719]],["23 St",[-73.992821,40.742878]],["14 St",[-73.996209,40.738228]],["W 4 St",[-74.000495,40.732338]],["Broadway-Lafayette St",[-73.996204,40.725297]],["Essex St",[-73.987437,40.718315]],["Marcy Av",[-73.957757,40.708359]],["Hewes St",[-73.953431,40.70687]],["Lorimer St",[-73.947408,40.703869]],["Flushing Av",[-73.941126,40.70026]],["Myrtle Av",[-73.935657,40.697207]],["Central Av",[-73.927397,40.697857]],["Knickerbocker Av",[-73.919711,40.698664]],["Myrtle - Wyckoff Avs",[-73.912385,40.69943]],["Seneca Av",[-73.90774,40.702762]],["Forest Av",[-73.903077,40.704423]],["Fresh Pond Rd",[-73.895877,40.706186]],["Middle Village - Metropolitan Av",[-73.889601,40.711396]]],"lineName":"M","duration":70,"color":"#FF6319"},"G":{"vertices":[["Court Sq",[-73.943832,40.746554]],["21 St",[-73.949724,40.744065]],["Greenpoint Av",[-73.954449,40.731352]],["Nassau Av",[-73.951277,40.724635]],["Metropolitan Av",[-73.951418,40.712792]],["Broadway",[-73.950308,40.706092]],["Flushing Av",[-73.950234,40.700377]],["Myrtle - Willoughby Avs",[-73.949046,40.694568]],["Bedford - Nostrand Avs",[-73.953522,40.689627]],["Classon Av",[-73.96007,40.688873]],["Clinton - Washington Avs",[-73.966839,40.688089]],["Fulton St",[-73.975375,40.687119]],["Hoyt St",[-73.985065,40.690545]],["Bergen St",[-73.990862,40.686145]],["Carroll St",[-73.995048,40.680303]],["Smith - 9 Sts",[-73.995959,40.67358]],["4 Av",[-73.989779,40.670272]],["7 Av",[-73.980305,40.666271]],["15 St - Prospect Park",[-73.979493,40.660365]],["Fort Hamilton Pkwy",[-73.975776,40.650782]],["Church Av",[-73.979678,40.644041]]],"lineName":"G","duration":49,"color":"#6CBE45"},"J":{"vertices":[["Jamaica Center - Parsons/Archer",[-73.801109,40.702147]],["Sutphin Blvd - Archer Av - JFK Airport",[-73.807969,40.700486]],["121 St",[-73.828294,40.700492]],["111 St",[-73.836345,40.697418]],["104 St",[-73.84433,40.695178]],["Woodhaven Blvd",[-73.851576,40.693879]],["85 St - Forest Pkwy",[-73.86001,40.692435]],["75 St",[-73.867139,40.691324]],["Cypress Hills",[-73.87255,40.689941]],["Crescent St",[-73.873785,40.683194]],["Norwood Av",[-73.880039,40.68141]],["Cleveland St",[-73.884639,40.679947]],["Van Siclen Av",[-73.891688,40.678024]],["Alabama Av",[-73.898654,40.676992]],["Broadway Jct",[-73.904512,40.679498]],["Chauncey St",[-73.910456,40.682893]],["Halsey St",[-73.916559,40.68637]],["Gates Av",[-73.92227,40.68963]],["Kosciuszko St",[-73.928814,40.693342]],["Myrtle Av",[-73.935657,40.697207]],["Flushing Av",[-73.941126,40.70026]],["Lorimer St",[-73.947408,40.703869]],["Hewes St",[-73.953431,40.70687]],["Marcy Av",[-73.957757,40.708359]],["Essex St",[-73.987437,40.718315]],["Bowery",[-73.993915,40.72028]],["Canal St",[-73.999892,40.718092]],["Chambers St",[-74.003401,40.713243]],["Fulton St",[-74.007582,40.710374]],["Broad St",[-74.011056,40.706476]]],"lineName":"J","duration":53,"color":"#996633"},"Z":{"vertices":[["Jamaica Center - Parsons/Archer",[-73.801109,40.702147]],["Sutphin Blvd - Archer Av - JFK Airport",[-73.807969,40.700486]],["121 St",[-73.828294,40.700492]],["104 St",[-73.84433,40.695178]],["Woodhaven Blvd",[-73.851576,40.693879]],["75 St",[-73.867139,40.691324]],["Crescent St",[-73.873785,40.683194]],["Norwood Av",[-73.880039,40.68141]],["Van Siclen Av",[-73.891688,40.678024]],["Alabama Av",[-73.898654,40.676992]],["Broadway Jct",[-73.904512,40.679498]],["Gates Av",[-73.92227,40.68963]],["Myrtle Av",[-73.935657,40.697207]],["Marcy Av",[-73.957757,40.708359]],["Essex St",[-73.987437,40.718315]],["Bowery",[-73.993915,40.72028]],["Canal St",[-73.999892,40.718092]],["Chambers St",[-74.003401,40.713243]],["Fulton St",[-74.007582,40.710374]],["Broad St",[-74.011056,40.706476]]],"lineName":"Z","duration":43,"color":"#996633"},"L":{"vertices":[["8 Av",[-74.002578,40.739777]],["6 Av",[-73.996786,40.737335]],["Union Sq - 14 St",[-73.99073,40.734789]],["3 Av",[-73.986122,40.732849]],["1 Av",[-73.981628,40.730953]],["Bedford Av",[-73.956872,40.717304]],["Lorimer St",[-73.950275,40.714063]],["Graham Av",[-73.944053,40.714565]],["Grand St",[-73.94067,40.711926]],["Montrose Av",[-73.93985,40.707739]],["Morgan Av",[-73.933147,40.706152]],["Jefferson St",[-73.922913,40.706607]],["DeKalb Av",[-73.918425,40.703811]],["Myrtle - Wyckoff Avs",[-73.911586,40.699814]],["Halsey St",[-73.904084,40.695602]],["Wilson Av",[-73.904046,40.688764]],["Bushwick Av - Aberdeen St",[-73.905249,40.682829]],["Broadway Jct",[-73.90324,40.678856]],["Atlantic Av",[-73.903097,40.675345]],["Sutter Av",[-73.901975,40.669367]],["Livonia Av",[-73.900571,40.664038]],["New Lots Av",[-73.899232,40.658733]],["E 105 St",[-73.899485,40.650573]],["Canarsie - Rockaway Pkwy",[-73.90185,40.646654]]],"lineName":"L","duration":37,"color":"#A7A9AC"},"N":{"vertices":[["Astoria - Ditmars Blvd",[-73.912034,40.775036]],["Astoria Blvd",[-73.917843,40.770258]],["30 Av",[-73.921479,40.766779]],["Broadway",[-73.925508,40.76182]],["36 Av",[-73.929575,40.756804]],["39 Av",[-73.932755,40.752882]],["Queensboro Plaza",[-73.940202,40.750582]],["Lexington Av/59 St",[-73.967258,40.76266]],["5 Av/59 St",[-73.973347,40.764811]],["57 St - 7 Av",[-73.980658,40.764664]],["49 St",[-73.984139,40.759901]],["Times Sq - 42 St",[-73.986754,40.754672]],["34 St - Herald Sq",[-73.98795,40.749567]],["28 St",[-73.988691,40.745494]],["23 St",[-73.989344,40.741303]],["14 St - Union Sq",[-73.990568,40.735736]],["8 St - NYU",[-73.992629,40.730328]],["Prince St",[-73.997702,40.724329]],["Canal St",[-74.001775,40.719527]],["City Hall",[-74.006978,40.713282]],["Cortlandt St",[-74.011029,40.710668]],["Rector St",[-74.013342,40.70722]],["Whitehall St",[-74.012994,40.703087]],["Court St",[-73.991777,40.6941]],["Jay St - MetroTech",[-73.985942,40.69218]],["DeKalb Av",[-73.981824,40.690635]],["Atlantic Av - Barclays Ctr",[-73.97881,40.683666]],["Union St",[-73.98311,40.677316]],["9 St",[-73.988302,40.670847]],["Prospect Av",[-73.992872,40.665414]],["25 St",[-73.998091,40.660397]],["36 St",[-74.003549,40.655144]],["45 St",[-74.010006,40.648939]],["53 St",[-74.014034,40.645069]],["59 St",[-74.017881,40.641362]],["8 Av",[-74.011719,40.635064]],["Fort Hamilton Pkwy",[-74.005351,40.631386]],["New Utrecht Av",[-73.996353,40.624842]],["18 Av",[-73.990414,40.620671]],["20 Av",[-73.985026,40.61741]],["Bay Pkwy",[-73.981848,40.611815]],["Kings Hwy",[-73.980353,40.603923]],["Avenue U",[-73.979137,40.597473]],["86 St",[-73.97823,40.592721]],["S.B. Coney Island",[-73.981233,40.577422]]],"lineName":"N","duration":60,"color":"#FCCC0A"},"Q":{"vertices":[["96 St",[-73.947152,40.784318]],["86 St",[-73.951787,40.777891]],["72 St",[-73.958424,40.768799]],["Lexington Av/59 St",[-73.967258,40.76266]],["57 St - 7 Av",[-73.980658,40.764664]],["Times Sq - 42 St",[-73.986754,40.754672]],["34 St - Herald Sq",[-73.98795,40.749567]],["28 St",[-73.988691,40.745494]],["23 St",[-73.989344,40.741303]],["14 St - Union Sq",[-73.990568,40.735736]],["8 St - NYU",[-73.992629,40.730328]],["Prince St",[-73.997702,40.724329]],["Canal St",[-74.00046,40.718383]],["DeKalb Av",[-73.981824,40.690635]],["Atlantic Av - Barclays Ctr",[-73.97881,40.683666]],["7 Av",[-73.972367,40.67705]],["Prospect Park",[-73.962246,40.661614]],["Parkside Av",[-73.961495,40.655292]],["Church Av",[-73.962982,40.650527]],["Beverley Rd",[-73.964492,40.644031]],["Cortelyou Rd",[-73.963891,40.640927]],["Newkirk Plaza",[-73.962793,40.635082]],["Avenue H",[-73.961639,40.62927]],["Avenue J",[-73.960803,40.625039]],["Avenue M",[-73.959399,40.617618]],["Kings Hwy",[-73.957734,40.60867]],["Avenue U",[-73.955929,40.5993]],["Neck Rd",[-73.955161,40.595246]],["Sheepshead Bay",[-73.954155,40.586896]],["Brighton Beach",[-73.961376,40.577621]],["Ocean Pkwy",[-73.968501,40.576312]],["W 8 St - NY Aquarium",[-73.975939,40.576127]],["Coney Island - Stillwell Av",[-73.981233,40.577422]]],"lineName":"Q","duration":60,"color":"#FCCC0A"},"R":{"vertices":[["Forest Hills - 71 Av",[-73.844521,40.721691]],["67 Av",[-73.852719,40.726523]],["63 Dr - Rego Park",[-73.861604,40.729846]],["Woodhaven Blvd",[-73.869229,40.733106]],["Grand Av - Newtown",[-73.877223,40.737015]],["Elmhurst Av",[-73.882017,40.742454]],["Jackson Hts - Roosevelt Av",[-73.891338,40.746644]],["65 St",[-73.898453,40.749669]],["Northern Blvd",[-73.906006,40.752885]],["46 St",[-73.913333,40.756312]],["Steinway St",[-73.92074,40.756879]],["36 St",[-73.928781,40.752039]],["Queens Plaza",[-73.937243,40.748973]],["Lexington Av/59 St",[-73.967258,40.76266]],["5 Av/59 St",[-73.973347,40.764811]],["57 St - 7 Av",[-73.980658,40.764664]],["49 St",[-73.984139,40.759901]],["Times Sq - 42 St",[-73.986754,40.754672]],["34 St - Herald Sq",[-73.98795,40.749567]],["28 St",[-73.988691,40.745494]],["23 St",[-73.989344,40.741303]],["14 St - Union Sq",[-73.990568,40.735736]],["8 St - NYU",[-73.992629,40.730328]],["Prince St",[-73.997702,40.724329]],["Canal St",[-74.001775,40.719527]],["City Hall",[-74.006978,40.713282]],["Cortlandt St",[-74.011029,40.710668]],["Rector St",[-74.013342,40.70722]],["Whitehall St",[-74.012994,40.703087]],["Court St",[-73.991777,40.6941]],["Jay St - MetroTech",[-73.985942,40.69218]],["DeKalb Av",[-73.981824,40.690635]],["Atlantic Av - Barclays Ctr",[-73.97881,40.683666]],["Union St",[-73.98311,40.677316]],["9 St",[-73.988302,40.670847]],["Prospect Av",[-73.992872,40.665414]],["25 St",[-73.998091,40.660397]],["36 St",[-74.003549,40.655144]],["45 St",[-74.010006,40.648939]],["53 St",[-74.014034,40.645069]],["59 St",[-74.017881,40.641362]],["Bay Ridge Av",[-74.023377,40.634967]],["77 St",[-74.02551,40.629742]],["86 St",[-74.028398,40.622687]],["Bay Ridge - 95 St",[-74.030876,40.616622]]],"lineName":"R","duration":54,"color":"#FCCC0A"},"W":{"vertices":[["Astoria - Ditmars Blvd",[-73.912034,40.775036]],["Astoria Blvd",[-73.917843,40.770258]],["30 Av",[-73.921479,40.766779]],["Broadway",[-73.925508,40.76182]],["36 Av",[-73.929575,40.756804]],["39 Av",[-73.932755,40.752882]],["Queensboro Plaza",[-73.940202,40.750582]],["Lexington Av/59 St",[-73.967258,40.76266]],["5 Av/59 St",[-73.973347,40.764811]],["57 St - 7 Av",[-73.980658,40.764664]],["49 St",[-73.984139,40.759901]],["Times Sq - 42 St",[-73.986754,40.754672]],["34 St - Herald Sq",[-73.98795,40.749567]],["28 St",[-73.988691,40.745494]],["23 St",[-73.989344,40.741303]],["14 St - Union Sq",[-73.990568,40.735736]],["8 St - NYU",[-73.992629,40.730328]],["Prince St",[-73.997702,40.724329]],["Canal St",[-74.001775,40.719527]],["City Hall",[-74.006978,40.713282]],["Cortlandt St",[-74.011029,40.710668]],["Rector St",[-74.013342,40.70722]],["Whitehall St",[-74.012994,40.703087]]],"lineName":"W","duration":54,"color":"#FCCC0A"},"STATEN":{"vertices":[["Tottenville",[-74.251961,40.512764]],["Atlantic",[-74.245689,40.515401]],["Arthur Kill",[-74.242096,40.516578]],["Nassau",[-74.238373,40.517812]],["Richmond Valley",[-74.229141,40.519631]],["Pleasant Plains",[-74.217847,40.52241]],["Prince's Bay",[-74.200064,40.525507]],["Huguenot",[-74.191794,40.533674]],["Annadale",[-74.178217,40.54046]],["Eltingville",[-74.16457,40.544601]],["Great Kills",[-74.151399,40.551231]],["Bay Terrace",[-74.136907,40.5564]],["Oakwood Heights",[-74.12632,40.56511]],["New Dorp",[-74.11721,40.57348]],["Grant City",[-74.109704,40.578965]],["Jefferson Av",[-74.103338,40.583591]],["Dongan Hills",[-74.09609,40.588849]],["Old Town",[-74.087368,40.596612]],["Grasmere",[-74.084087,40.603117]],["Clifton",[-74.071402,40.621319]],["Stapleton",[-74.075162,40.627915]],["Tompkinsville",[-74.074835,40.636949]],["St George",[-74.073643,40.643748]]],"lineName":"I","duration":40,"color":"#808183"}};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map