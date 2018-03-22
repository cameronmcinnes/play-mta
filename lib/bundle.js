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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/entry.js");
/******/ })
/************************************************************************/
/******/ ({

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
  const width = 1200;
  const height = 1200;
  canvasEl.width = width;
  canvasEl.height = height;

  const ctx = canvasEl.getContext("2d");
  ctx.lineCap = "round";

  const map = new _map__WEBPACK_IMPORTED_MODULE_0__["default"](width, height);
  new _map_view__WEBPACK_IMPORTED_MODULE_1__["default"](map, ctx).start();
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
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path */ "./lib/path.js");
/* harmony import */ var _path_segment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./path_segment */ "./lib/path_segment.js");






const TRAINS_DATA = [
  {
    color: "#ffffff",
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
    color: "#eeeeee",
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
    color: "#F2BBA5",
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
      const path = new _path__WEBPACK_IMPORTED_MODULE_2__["default"](TRAINS_DATA[i], this);
      this.paths.push(path);
      this.addSegments(path, TRAINS_DATA[i].vertices);
    }
  }

  addSegments(path, vertices) {
    for (let j = 0; j < vertices.length - 1; j++) {
      const startPoint = new _coord__WEBPACK_IMPORTED_MODULE_0__["default"](vertices[j][0], vertices[j][1]);
      const endPoint = new _coord__WEBPACK_IMPORTED_MODULE_0__["default"](vertices[j + 1][0], vertices[j + 1][1]);

      const segment = new _path_segment__WEBPACK_IMPORTED_MODULE_3__["default"](path, startPoint, endPoint, j);
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
      train.move(delta);
    });
  }

  step(delta) {
    this.moveTrains(delta);
    // this.checkIntersections();
  }
}


/* harmony default export */ __webpack_exports__["default"] = (Map);


/***/ }),

/***/ "./lib/map_view.js":
/*!*************************!*\
  !*** ./lib/map_view.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class MapView {
  constructor(map, ctx) {
    this.ctx = ctx;
    this.map = map;
  }

  start() {
    this.lastTime = 0;
    // start the animation
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
    this.startPos = options.startPos;
    this.endPos = options.endPos;
    this.vertices = options.vertices;
    this.vel = options.vel;
    this.color = options.color;
    this.map = map;
    this.segments = [];
    this.durationMins = options.durationMins;
    this.totalLength = 0;
  }

  getSpeed() {
    return this.totalLength / (this.durationMins * 60)
  }

  addTrain() {
    const train = new _train__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    this.map.trains.push(train);
    const firstSegment = this.segments[0];

    firstSegment.shouldBeDrawn = true;
    firstSegment.receiveTrain(train);
  }

  startPath() {
    this.addTrain();
  }

  draw(ctx) {
    debugger;
    this.segments.forEach(segment => {
      if (segment.shouldBeDrawn) segment.draw(ctx);
    });
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
class PathSegment {
  constructor(path, startPos, endPos, j) {
    this.parentPath = path;
    // the start and end of the segment on the fully drawn map
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
    this.shouldBeDrawn = false;
  }

  receiveTrain(train) {
    this.train = train;
    this.shouldBeDrawn = true;
    // this.parentPath.drawnSegments.push(this);
    this.pos = train.pos;
  }

  trainAdvanced(train) {
    this.pos = train.pos;
  }

  releaseTrain() {
    this.train = null;
  	// finished traveling segment, set position to the original end point
  	this.pos = this.endPos;
  }

  draw(ctx) {
    ctx.moveTo(this.startPos.x, this.startPos.y);
    ctx.lineTo(this.pos.x, this.pos.y);
    ctx.strokeStyle = this.parentPath.color;
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
class TrainCar {
  constructor(path) {
    this.parentPath = path;
    this.speed = this.parentPath.getSpeed();
    this.color = this.parentPath.color;

    this.currSegment = this.parentPath.segments[0];
    this.pos = this.currSegment.startPos;
  }

  draw(ctx) {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.xp1, this.radius, 5, 0, Math.PI*2, false);
    this.ctx.closePath();
    this.ctx.fill();
  }

  move(timeDelta) {
    const { startPos, endPos, angle, totalLength, ord } = this.currSegment;
    const speedScale = timeDelta / NORMAL_FRAME_TIME_DELTA
    const speed = this.speed * speedScale;

    this.pos = this.pos.addVectorDiffs(speed, angle);
    const trainTravelDist = startPos.distBetween(this.pos);
    debugger;
    if ( trainTravelDist > totalLength ) {
      this.currSegment.releaseTrain();
      // reset the trains current seg to next seg
      // add train to next seg
      const nextSegment = this.parentPath.segments[ord + 1]
      this.currSegment = nextSegment;
      nextSegment.receiveTrain(this);
    } else {
      this.currSegment.trainAdvanced(this);
    }
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

/* harmony default export */ __webpack_exports__["default"] = (TrainCar);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map