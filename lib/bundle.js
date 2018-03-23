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
  const R = parseInt(color.substring(1,3), 16);
  const G = parseInt(color.substring(1,3), 16);
  const B = parseInt(color.substring(1,3), 16);

  hexComponents = [R, G, B]

  R = ( (R * (100 + percent)) / 100);
  G = ( (G * (100 + percent)) / 100);
  B = ( (B * (100 + percent)) / 100);

  hexStr = hexComponents.map( hexComp => {
    subStr = hexComp.toString(16).length === 1
    return (subStr.length === 1) ? `${0}` :subStr
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
  const muteBtnEl = document.getElementsByClassName("mute")[0];
  const trainCtrlEl = document.getElementsByClassName("train-controls")[0];

  // use canvasEl.clientHeight and canvasEl.clientWidth but then have
  // to make data point relative
  const width = 1200;
  const height = 1200;
  canvasEl.width = width;
  canvasEl.height = height;

  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();

  const ctx = canvasEl.getContext("2d");
  ctx.lineCap = "round";

  const map = new _map__WEBPACK_IMPORTED_MODULE_0__["default"](width, height, audioCtx);

  // canvasEl.addEventListener('mousemove', (e) => map.handleMouseMove(e))
  canvasEl.addEventListener('click', e => map.handleClick(e));
  trainCtrlEl.addEventListener('click', e => {
    const dir = parseInt(e.target.dataset.dir);
    map.startPaths(dir);
  })

  const mapView = new _map_view__WEBPACK_IMPORTED_MODULE_1__["default"](map, ctx, audioCtx);
  muteBtnEl.addEventListener('click', e => mapView.toggleCtxMute());
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
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path */ "./lib/path.js");
/* harmony import */ var _path_segment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./path_segment */ "./lib/path_segment.js");
/* harmony import */ var _subway_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subway_data.json */ "./subway_data.json");
var _subway_data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/Object.assign({}, _subway_data_json__WEBPACK_IMPORTED_MODULE_4__, {"default": _subway_data_json__WEBPACK_IMPORTED_MODULE_4__});






const BG_COLOR = '#282828';
let MAP_DATA = Object.values(_subway_data_json__WEBPACK_IMPORTED_MODULE_4__)

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
    // QUESTION
    // right now i don't delete trains i just say they're not moving
    // when live there will be LOTS of trains => have to iterate through
    // each animation frame
    // can solve by deleting trains from array when they finish a path
    // BUT then have to iterate through all trains every time we get to terminus

    // will this be a perfomance issue?
    // does this need to be an object to speed deletion once live implementaion ??
    // or some other type of data structure ? linked list ?
    this.trains = [];
    this.cnvWidth = width;
    this.cnvHeight = height;
    this.audioCtx = audioCtx;
    this.setupMap();
    // to make trains go to schedule have to change where this is called
    // and construct clock
    // this.startPaths();
  }

  startPaths(dir) {
    // determine dir based on mta api
    // const dir = 1;
    this.paths.forEach( path => path.startPath(dir));
  }

  setupMap() {
    for (let i = 0; i < MAP_DATA.length; i++) {
      const path = new _path__WEBPACK_IMPORTED_MODULE_2__["default"](MAP_DATA[i], this);
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
    const mousePos = new _coord__WEBPACK_IMPORTED_MODULE_0__["default"](parseInt(e.offsetX), parseInt(e.offsetY));
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
      const startPoint = new _coord__WEBPACK_IMPORTED_MODULE_0__["default"](vertices[j][0], vertices[j][1]);
      const endPoint = new _coord__WEBPACK_IMPORTED_MODULE_0__["default"](vertices[j + 1][0], vertices[j + 1][1]);

      const segment = new _path_segment__WEBPACK_IMPORTED_MODULE_3__["default"](path, startPoint, endPoint, j, sounds[i], this.audioCtx);
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
  constructor(map, ctx, audioCtx) {
    this.map = map;
    this.ctx = ctx;
    this.audioCtx = audioCtx;
  }

  toggleCtxMute() {
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume()
    } else if (this.audioCtx.state === 'running') {
      this.audioCtx.suspend()
    }
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
    const train = new _train__WEBPACK_IMPORTED_MODULE_0__["default"](this, dir);
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

  startPath(dir) {
    // TEST
    this.addTrain(dir);
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
    // the start and end of the segment on the fully drawn map
    this.startPos = startPos;
    this.endPos = endPos;
    // trains default to forwrd
    this.trainOrigin = startPos;
    this.trainDestination = endPos;
    // angle of the thread from x axis toward y
    this.angle = startPos.angleBetween(endPos);
    this.backwardsAngle = endPos.angleBetween(startPos);
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
    this.frequency = frequency;
    this.audioCtx = audioCtx;

    //TESTO
    // this.lineWidth = this.parentPath.lineWidth;
  }

  receiveTrain(train) {
    this.train = train;
    this.shouldBeDrawn = true;

    this.trainOrigin = (this.train.dir > 0) ?
      this.startPos : this.endPos;

    this.trainDestination = (this.train.dir > 0) ?
      this.endPos : this.startPos;
    // debugger;

    // this.trainOrigin = this.startPos
    this.pos = train.pos;
    // set timeout?
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

  checkClicked(mousePos) {
    // debugger;
    // if (!this.shouldBeDrawn) { return null }
    // get the line point nearest to the mouse position with helper method;
    const linePoint = mousePos.linePointNearest(this.startPos, this.pos);
    // debugger;
    // hacky to see if line point is on line
    if (((this.startPos.x > linePoint.x && linePoint.x > this.endPos.x) || (this.startPos.x < linePoint.x && linePoint.x < this.endPos.x)) &&
        ((this.startPos.y > linePoint.y && linePoint.y > this.endPos.y) || (this.startPos.y < linePoint.y && linePoint.y < this.endPos.y))) {
      if (linePoint.distBetween(mousePos) < 5) {
        // this.parentPath.selected = true;
        this.toggleSelected();
        this.parentPath.muted = false;

        this.parentPath.map.togglePathsMute();
        // better to do this or return true back up the chain so map can call this?
      }
    }
  }

  toggleSelected() {
    this.parentPath.selected = !(this.parentPath.selected);
  }

  trainAdvanced(train) {
    this.pos = train.pos;
  }

  releaseTrain() {
    this.train = null;
  	// finished traveling segment, set position to the train destination
    // TODO

  	this.pos = this.trainDestination;
    // TEST
    // if (this.ord === this.parentPath.segments.length - 1) {
    //   this.parentPath.restartPath();
    // }
    this.playSound();
  }

  draw(ctx, color) {
    // const color = (this.parentPath.muted) ? '#fff' : this.parentPath.color;

    ctx.beginPath();
    ctx.moveTo(this.trainOrigin.x, this.trainOrigin.y);
    ctx.lineTo(this.pos.x, this.pos.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = this.parentPath.lineWidth;
    ctx.stroke();

    // draw subway station REFACTOR to helper method
    ctx.beginPath();
    ctx.fillStyle = '#ffffff';
    ctx.arc(this.trainOrigin.x, this.trainOrigin.y, 2, 0, Math.PI*2, false);
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
  constructor(path, dir) {
    this.parentPath = path;
    this.speed = this.parentPath.getSpeed();

    this.dir = dir;
    debugger;

    this.currSegment = (dir > 0) ?
      this.parentPath.segments[0] : this.parentPath.segments[this.parentPath.segments.length - 1]

    // this.currSegment = this.parentPath.segments[0];
    this.pos = this.currSegment.trainOrigin;
    this.isMoving = true;

    this.pulsing = false;
    // to start pulsing fast then slow
    // this.pulseDampen = .95
    this.pulseAngle = 0;
  }

  draw(ctx) {
    const color = (this.parentPath.muted) ? '#fff' : this.parentPath.color;

    ctx.beginPath();
    ctx.fillStyle = color;
    let rad = 4
    let baseRad = 3
    if (this.parentPath.selected) { rad = 7; baseRad = 6 }
    if (this.pulsing) {
      rad = baseRad + 2 * Math.abs(Math.cos(this.pulseAngle));
      this.pulseAngle += Math.PI / 64;

      // once train has shrunk down to size it was stop pulsing and
      // reset pulse angle to 0 so it will grow next time again
      if (rad < baseRad + 1) {this.pulsing = false; this.pulseAngle = 0};
    }
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

    this.pos = this.pos.addVectorDiffs(speed, trainAngle);
    const trainTravelDist = trainOrigin.distBetween(this.pos);
    if ( trainTravelDist > totalLength ) {
      this.currSegment.releaseTrain();
      // reset the trains current seg to next seg
      // add train to next seg
      const nextOrd = (this.dir > 0) ? ord + 1 : ord - 1
      const nextSegment = this.parentPath.segments[nextOrd]

      if (nextSegment) {
        this.currSegment = nextSegment;
        nextSegment.receiveTrain(this);
        this.pulsing = true;
      } else {
        // or would it be better to remove it from trains array to
        // save on iterating?
        this.isMoving = false;
        return null;
      }
    } else {
      this.currSegment.trainAdvanced(this);
    }
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

/* harmony default export */ __webpack_exports__["default"] = (TrainCar);


/***/ }),

/***/ "./subway_data.json":
/*!**************************!*\
  !*** ./subway_data.json ***!
  \**************************/
/*! exports provided: 1, 2, 3, 4, 5, 6, 7, 9, A, B, D, E, F, G, J, L, M, N, Q, R, S, default */
/***/ (function(module) {

module.exports = {"1":{"vertices":[[627.5082155535213,86.56812565150179],[618.8943606934149,102.6645896531945],[603.9641811282651,123.08295950995564],[585.1432660709572,138.1744925567203],[564.6236852760455,156.15432366272475],[551.2791781621482,173.10111385704118],[525.991280684769,187.47232926129027],[511.39254809277753,206.11625809626548],[495.63375109465153,226.21487719462684],[471.0125140064566,257.65937759871184],[453.0955452396927,280.55142365219206],[432.49310270147794,306.86937068833845],[420.0035781207377,322.8323123953342],[402.3163623694907,345.4151489242059],[380.70451314016964,373.02966771689523],[370.39575898532684,386.2237786809433],[364.62556849748825,402.1094180067619],[349.7707177898526,421.5298843977975],[335.10042278321475,440.06488715024693],[321.16835058051487,456.61462420501147],[313.43584335363914,475.8734583445652],[312.53566350601653,493.4878600124162],[313.5902675116421,511.7347357078395],[306.3586971873984,534.6408367397246],[292.62624645722053,557.2623244591723],[279.2101769286768,574.5394066456549],[270.51722676813506,585.6358120849534],[261.8845396936367,596.6478876538723],[253.5456351635129,607.333184975239],[244.7698232596682,618.6263601119815],[234.58159527691225,634.1008913198932],[225.31237935611733,652.2704646341643],[221.88491633791455,671.2341442275144],[219.5911526257191,683.6587451246796],[210.62701857800883,697.151524379545],[199.62147249087968,709.9520959486548],[193.61399610173518,725.1385000995652],[195.79100008476505,746.5793696342232],[194.06220280411267,744.2708394335996]],"lineName":"1","duration":53,"color":"#EE352E"},"2":{"vertices":[[808.158115271958,37.80789187035819],[794.0113558252652,54.48412373066707],[782.3466822346335,72.70640321391916],[771.5445240628407,90.87597652819026],[762.9118369883422,105.37720048254752],[749.2660144442815,126.61778657514756],[745.8460843118141,149.43604399208937],[745.1379930509247,170.1460546504405],[744.1474185742101,199.20472247274972],[740.9760736715981,228.59368228722508],[722.0270995565218,252.95798732708508],[697.3154678392884,258.5764649386965],[668.3703543281358,269.14229494372114],[652.8111788024784,294.7750617833393],[648.2952137927339,315.5764298012475],[634.4648355476753,322.22443457993313],[615.5045621039424,331.3461155553629],[592.7665464543492,342.2211550849712],[555.290439826393,343.559891776679],[521.5393452039355,335.474765457551],[468.6132898936986,350.16573162019984],[450.81684729902145,372.91722788975574],[435.2614382162317,392.79096733388803],[426.9865632150189,403.41301725248246],[212.340750087137,705.6793825179536],[220.77758213203447,718.4518441303036],[211.2522480955953,727.5700113611196],[271.56806433083943,760.4410920718308],[283.19883993560853,775.3639653779112],[301.7787026487428,784.7597184319374],[319.00264592614155,792.8378172618629],[329.6466134970638,806.4957425127989],[339.3188388056635,818.8992609423816],[354.5804653440252,838.5551482214623],[379.70640577771974,849.9677906745221],[403.2240751029023,854.5532273744205],[431.2765416521676,864.3881985031385],[430.64754569165996,882.4523594794974],[433.09573356185837,903.8510640789906],[435.44976036009723,924.2624064465492],[437.7698891724199,944.4488691598788],[439.8338998691519,962.4778926902505],[442.73029444167423,987.5344054158662],[432.0938597564873,857.4872041134389],[463.3741678515404,859.0613616931669],[498.0970047363206,860.8252614811616],[537.0118925433687,875.5127138991968],[560.6764531407653,886.9815762658262],[588.4765680172541,883.1305121868481],[612.9546802761025,879.7362349055556],[641.3988568845697,875.800840956223],[662.114292709136,872.9406528537431],[682.1367030442298,870.1788496000228]],"lineName":"2","duration":94,"color":"#EE352E"},"3":{"vertices":[[484.8089942655991,316.25458250857326],[485.6564439129672,328.4086250717309]],"lineName":"3","duration":64,"color":"#EE352E"},"4":{"vertices":[[702.2043106938963,97.85075955445323],[679.9672319469887,119.94167183967701],[659.594542424291,142.21178509937624],[632.8151335674582,162.07146956512858],[618.2766640615637,179.4891015355105],[607.5611340759415,194.93552278663734],[593.229818928251,212.34261352322804],[577.7497387030288,229.8164654071797],[566.8609523450652,244.03307604914943],[555.1623807685709,259.3494887501681],[541.5692884247647,275.29486173414523],[524.8801800359677,301.79903723399457],[519.1551868626482,335.5977465184567],[509.7466125554281,353.6970449408031],[209.71177295886193,715.1067592733534],[200.84933286884657,724.983895337261],[192.55185921037426,734.6115555347436],[282.6225741754089,778.2276672249549]],"lineName":"4","duration":75,"color":"#00933C"},"5":{"vertices":[[882.6809540399917,89.89915553004708],[853.4646566416704,123.76111221728142],[824.1127672997384,155.8661966057235],[790.3089424769728,192.90457840922377],[770.9644918597733,209.1415921948159]],"lineName":"5","duration":54,"color":"#00933C"},"6":{"vertices":[[892.8993135657961,215.82473441946394],[876.1461756480344,235.68441888521627],[862.0107155299982,246.03942421439186],[837.039199254253,259.99250401153154],[821.6570465438047,271.9532906218088],[805.8907166598898,279.79948230830286],[769.7554636961983,283.41512549923567],[744.1361192456071,289.44822497336776],[718.1551962787555,296.433549233422],[700.6676019999773,299.7259279213912],[673.8354629428899,306.96072804789554],[657.7678176288649,326.5568816687928],[635.5985348537362,343.5774604996477],[606.736283085833,357.5832464657684],[593.3315128859458,369.526464353052],[569.2827751151364,381.3010224996762],[549.7048050394988,373.5778118741128],[523.7238820727007,363.3528150950455],[480.57551247162604,385.6229283547447],[465.4231127767482,404.980147343033],[455.50606868110725,417.66125159582583],[443.34799107352535,433.1920027173072],[429.81892825868374,450.50773609436584],[412.7983728966748,472.22267770764506],[396.65916516795,492.855385984844],[381.6084594307135,512.1071926351954],[366.1773429628782,531.8368685508145],[351.2885942693798,550.8778505253167],[332.72756377058397,569.6096229752104],[313.0366004086485,589.6203984586533],[304.7956233934054,600.200283442058],[296.0009792751688,611.4653486220407],[283.37586275081753,629.7051968282614],[279.16121317128994,645.935183124651],[265.6434496850514,660.4785720141981],[256.2951384638747,673.1772449899846],[244.79995480271663,685.468323592453],[229.96770275234056,705.6301900935864]],"lineName":"6","duration":66,"color":"#00933C"},"7":{"vertices":[[885.7091741132574,542.1180852434517],[826.9714974435303,559.609505850397],[790.4031035489322,569.7712552266921],[762.6594853155657,576.324388901257],[736.9459797930149,578.8542850115458],[710.256965565274,581.4439147799931],[683.5754842233218,584.0757094836052],[654.5851733975965,586.925356352269],[635.7190610257694,588.7630447768271],[610.932100451022,591.2050972721726],[574.9060743307609,596.4089530212383],[552.7367915556321,599.9824312770063],[531.7162738580884,597.7020110331677],[505.4227361324168,594.8699328874726],[470.7526294479447,573.8050340247594],[451.6868956036492,586.3104510476903],[437.9318462161582,603.201021328437],[420.3613901940769,601.760386043406],[335.76708317250626,570.8218648613987],[313.4622084538199,562.4240152730733],[291.88802365328263,556.605254219429],[238.33297238259158,555.1821876573915]],"lineName":"7","duration":38,"color":"#B933AD"},"9":{"vertices":[[323.91032099508783,566.120474589772],[297.3945631397416,554.8272994530294]],"lineName":"9","duration":null,"color":null},"A":{"vertices":[[547.2227191834378,160.97518125066844],[519.4565022928116,170.0441560571172],[493.43414845436206,192.77456985909063],[479.16309639271486,218.51977652584827],[472.62831800075753,233.64293327398656],[473.1669193322269,257.0866372292981],[471.92022673986816,273.62231930568265],[465.81105639308225,292.9303458696037],[455.63412773892935,313.081671136946],[442.70392934154694,337.28785766991297],[425.0242464760354,361.12861476475155],[415.4612480108659,382.2954122208131],[403.11108181655084,398.0440155073211],[390.7081854219812,413.8945173871774],[378.4973776141448,429.530680846571],[362.60298867246127,449.8190421532239],[350.44867750774705,465.4024994436614],[334.3772657508011,485.9192541491571],[314.31719098692344,511.56256222256644],[298.3173416446238,532.0828306726509],[284.189414412323,550.1715878611811],[270.4192992533078,567.814099485817],[252.90533987440222,590.2353037632319],[239.16158981556782,607.8497054310828],[243.66248905378808,637.9097904637065],[231.44414836021633,659.382283699738],[225.8321484731948,678.3670457606704],[213.1919661773728,701.9548132444701],[216.5591661095857,715.707609599552],[281.1913258820523,753.8668759296836],[293.2025122174201,778.4595743684113],[302.0197549929164,792.0015460476191],[343.657781000199,800.3326344885835],[374.1960998483931,810.3468065918019],[408.05642131433444,816.9631876691138],[432.24451747162254,820.2731350800517],[468.2818429204867,822.0897410370276],[506.4321428235232,824.0468967779026],[543.881884351352,825.9513463498217],[577.1772393856968,827.6449712458668],[602.148755661442,827.6660537134492],[635.1729268086183,840.9901732276054],[658.4872082183575,847.427353330442],[694.6751913823568,842.4378360018391],[727.2323236127637,838.056196488612],[753.8083445542068,832.1987842443666],[776.6254555041818,824.0223005657065],[804.956638826351,822.3638131156489],[833.6456342219128,820.3047587814503],[856.8845867741379,815.8001382072928],[877.6753514562183,806.5941273615334],[901.6487603694601,800.9018611133836],[870.5379422039341,863.1548741493926],[870.5379422039341,863.1548741493926],[884.6884680934944,890.4145047376948],[938.8348508959629,1073.4595158060047],[1010.4010320053238,1134.7919277574151],[1042.0466850594514,1129.7075393246664],[1089.1611190101446,1127.7082186486264],[1118.6824982815504,1119.0819756614583],[1144.3771715897094,1102.6798158797956],[1166.779973823223,1088.8743133557577],[947.4374064274127,1144.9571908783241],[921.3849210459147,1154.539172396028],[895.0160544627826,1161.9110085618431],[864.7602188303066,1170.0137036039398],[938.4619730510994,1071.2388292202993]],"lineName":"A","duration":74,"color":"#0039A6"},"B":{"vertices":[[460.8318189094361,561.0817648368018],[421.57041835765176,543.7168390353759],[373.16032805715946,524.4474636620308],[330.46016515851585,526.7559938626545],[266.90520804888087,940.2534581103049],[266.9805369064485,959.150376556294],[265.14627922523357,975.5033439136143],[262.56626585439886,992.4571615971083],[257.22168341167816,1009.8958760350976],[249.8055573864901,1034.080980100507],[243.22934812293482,1055.4726572107977],[238.9883334432265,1074.963398493783],[252.42700162897629,1086.9031026364778],[269.1500080036895,1096.3234519026998],[295.13469741340873,1110.9792806193616],[306.67507838908597,1142.1215989880404]],"lineName":"B","duration":68,"color":"#FF6319"},"D":{"vertices":[[701.8126006346411,137.29605640731168],[670.6151542829444,142.80209419178362],[646.6191467123895,164.819217840444],[630.6494289130849,184.7843146441084],[619.3802318245761,203.06632778551898],[602.4839690775216,223.03493833379707],[583.9945009934256,238.88192646903968],[571.7008314422862,262.0515583457299],[552.7179593412402,281.50013469355036],[525.5581397538622,302.1117605031669],[478.259150102171,294.27611005048897],[455.63412773892935,313.081671136946],[314.6900688317333,530.6562503660248],[315.8501332379214,545.4104639314208],[303.6468583158739,561.0150036894407],[291.39085319346475,576.8373956125122],[272.5661716932893,600.8749224048198],[259.80546322543404,617.2138347837353],[243.66248905378808,637.9097904637065],[259.8242954397724,662.650066175536],[269.0558469317835,687.3516906967895],[332.56937316976695,806.1408543084366],[349.60499430324666,832.1777017767843],[387.7251626632882,886.415863385615],[390.5537612640318,908.6297567317444],[384.9530607056668,925.3727497394142],[379.2657319610776,948.1980346455335],[381.5293641302781,959.1046978765405],[385.6649184094239,979.6425350496185],[390.0113934896948,1000.0644186509685],[393.16013973504727,1014.9310720434792],[398.44822553459227,1041.0065707024028],[404.7193529251164,1072.447557361899],[411.5177823184534,1105.3713442415662],[414.410410448108,1119.616064840296],[418.1994519825712,1148.955832230404],[391.00196796640927,1181.5458133733164],[364.16606246645426,1186.145305051595],[336.1512603459727,1186.7953478021607],[316.2117117541282,1182.2450485482495]],"lineName":"D","duration":91,"color":"#FF6319"},"E":{"vertices":[[208.6873004962313,707.3273287342452]],"lineName":"E","duration":5,"color":"#0039A6"},"F":{"vertices":[[1059.7677987966144,707.1024490799912],[1022.9056223575883,714.7483573244024],[986.2882647056033,724.9592991250898],[958.4843833861933,732.3522177584622],[921.3246579599249,719.2846015999337],[882.0255929793568,700.7952775272627],[858.2367397670592,687.1268110425356],[448.9147936460277,583.418639243837],[362.0794531125162,549.3142341793799],[338.8442670031588,540.1257920565893],[283.42482650825787,669.308612188013],[290.2948183162412,686.1429625551899],[282.53971243210594,703.346256105134],[295.4284799578368,746.6285620585905],[279.9446332896935,800.2201946614441],[264.17830340583214,820.747490600731],[260.7470739447082,844.370395530518],[284.02369092571706,855.9938626594516],[319.7069707441633,870.0523547945035],[322.76532236042385,890.8045303880442],[336.7651905349561,924.476744867012],[322.0685304281375,948.1628971995463],[327.74079340120244,975.9987819018759],[332.2642912966823,998.3602525211072],[335.4431690850297,1013.9366823223672],[338.6936092880771,1029.9347614753005],[342.7124038380037,1049.7136298153118],[347.13797421870987,1071.4847913421358],[349.6275929605062,1091.6080066526933],[345.8762158548804,1116.74533550405],[342.51278236553514,1139.3843919465162],[341.2924548733036,1169.6342191874064]],"lineName":"F","duration":89,"color":"#FF6319"},"G":{"vertices":[[994.6384685643301,743.9932536103896],[968.8006704268249,749.8295833870276],[935.3169932486682,742.5209946239848],[831.1296503799357,675.3206291945377],[800.2523516727945,658.3422152988476],[766.787506708976,646.6660420009579],[738.0683797704193,635.2112346127334],[707.9594354102107,621.4760069806453],[689.903108256968,602.3647501141933],[654.7960941987216,587.6421602501707],[627.9978531275503,577.013082842399],[599.549910076162,565.7128802164538],[571.9531831150629,553.6712774804107],[544.055140723747,551.6789842935732],[513.769173548276,568.6855081460233],[481.8975339215525,579.4586490823332],[457.08044180375674,587.958397263957],[434.88856037136827,596.7041075674421],[417.0921177766911,641.3743426369488],[429.03927458309437,664.9761650991533],[428.5082061374139,706.589442368736],[432.6889577310788,730.131531172782],[432.9676745040362,750.2125815481497],[437.44220864212923,770.6239239157334],[420.583610323805,787.9853359725455],[395.9209423640121,790.6346993991513],[370.42589052837536,793.3894751636942],[338.2755341286945,796.7978074233666]],"lineName":"G","duration":49,"color":"#6CBE45"},"J":{"vertices":[[892.2477189480288,749.8085009194452],[861.9240873438276,760.609751812515],[831.8490409694817,768.4805397111804],[804.5573958814139,773.0448939434714],[772.7912166551994,778.1187411424291],[745.9402453837736,782.0225113903881],[725.560022975287,786.8820201689078],[720.9084660219851,810.5892549690245],[697.3531322680723,816.8577753311768],[680.0274950329787,821.9983836774954],[653.4778391917164,828.7553145387069],[627.2407981092739,832.3814989634559],[605.1769757347076,823.5760550018122],[582.7892392727184,811.6468920929086],[559.8026383932163,799.4296021270038],[538.2924831216436,787.9747947387543],[513.6448809333215,774.9317747923969]],"lineName":"J","duration":53,"color":"#996633"},"L":{"vertices":[[235.8169885406145,611.7710444020355],[257.6322256852718,620.3516087094001],[280.44180374951134,629.2976024549432],[297.7975725275999,636.1142669743132],[314.7239668176494,642.7763267314037],[407.9660266852426,690.7354267442907],[432.81325034603327,702.1234729851543],[456.24805792791284,700.3595731971596],[468.98993418142965,709.6323451902799],[472.07841734068523,724.3443938205113],[497.32488394646657,729.920706496908],[535.870660351626,728.3219527050087],[552.7744559844159,738.1463825999355],[578.5331588214858,752.1908197566072],[606.789013286141,766.9907120017818],[606.9321381154873,791.0176975602983],[602.4011073342186,811.8717717471626],[609.9678910744883,825.8318790334797],[610.5064924059042,838.1686363157265],[614.7324413141419,859.1738015202814],[620.0205271136867,877.8985464809975],[625.0637941262441,896.5389615713591],[624.1108840783135,925.2111174879075],[615.2032466737788,938.981482565983]],"lineName":"L","duration":37,"color":"#A7A9AC"},"M":{"vertices":[[661.3384054764142,711.4946298270092],[637.7002099791985,729.801239180591],[610.5818212634719,735.9959709062049],[593.0188981271258,741.832300682843],[575.523770962612,753.5400976821063],[547.9308104443272,756.2316260438769],[518.9819304903069,759.0672179341606],[487.87111232472733,761.3511519226131],[467.2724362294338,750.6236896660816],[443.6116420749585,737.9425854132888],[420.92635662567346,727.3978378758216],[404.6327247389458,722.165872169971],[292.84470014408095,687.1830309561053],[268.44568318566775,680.2785228217671],[245.93365410872397,687.9665960013681],[232.71720605270235,705.0047435552167],[216.96970838317938,715.085676805771],[203.8850858278476,728.7822532472829]],"lineName":"M","duration":70,"color":"#FF6319"},"N":{"vertices":[[201.3879342002624,979.7057824523657],[225.37264244216075,992.6293350824062],[259.263095451097,1015.6232797292099],[281.6319996986944,1030.2791084458713],[301.9255939209568,1041.7374295787097],[313.8953493846732,1061.3968306023792],[319.52618148608667,1089.1273029667716],[324.10617602474224,1111.7909556214092],[327.52233971434197,1128.4882699493005],[316.2117117541282,1182.2450485482495]],"lineName":"N","duration":60,"color":"#FCCC0A"},"Q":{"vertices":[[243.79431455447792,686.9440963234463],[402.12050733988985,509.79514868995807],[427.1183887157623,477.848182808434],[444.5758514514922,455.26534627953737]],"lineName":"Q","duration":60,"color":"#FCCC0A"},"R":{"vertices":[[576.8457924124849,487.879923634621],[554.9665257389165,504.6685953220444],[541.2717394374689,516.8929127771517],[526.0967410853315,534.317572236736],[510.7786179037941,551.9425151383783],[498.8013295543424,565.7234214502449],[470.7526294479447,573.8050340247594],[368.84775096280464,531.3660267747491],[345.9138802836107,523.8079621452562],[318.3774164085016,524.3244826011002],[305.2664287530425,541.0604481195676],[295.4171806291803,559.4338186205102],[290.91251494809234,577.3714847913499],[288.12158077607904,591.6829665374405],[285.66209357727763,606.4090701460518],[281.0519674956271,625.9700863209866],[273.28932872575643,644.9724171049128],[254.1821640097559,666.051370946031],[238.8414421710125,682.9243725037841],[219.24463988098296,704.867707515906],[203.9867797855425,714.052635894083],[195.27499741060885,726.1680272666646],[196.58571953182516,740.6903336886292],[276.4983380570988,772.268356387411],[298.47553224549443,779.0147460148313],[313.98574401371155,784.4434814181511],[325.33780284557673,808.9307675189418],[309.1420984736763,831.2430457138308],[289.58672705529824,853.9734595158043],[272.3740831065561,873.0636339146739],[252.71701773053667,890.6920905609048],[232.15977250684114,909.1497909322021],[207.8398508488632,930.9525761604247],[192.66861893959336,944.5507677532022],[178.1791131910322,957.576218976566],[157.4787431380438,980.046615678323],[149.44492048100466,998.4059312008857],[138.56743345169767,1023.1953993370826],[129.2341880019917,1044.5062603216325]],"lineName":"R","duration":54,"color":"#FCCC0A"},"S":{"vertices":[[411.9019594919198,819.7179634336317],[405.1336616416313,840.1820119701715],[399.0282577377131,855.7443867930016],[-703.46983550054,1409.4367467410195],[-679.8467057748485,1400.1710022371017],[-666.3138765171392,1396.035324845686],[-652.2914096853474,1391.699364012238],[-617.5196090431804,1385.3078625891796],[-574.9814031882751,1375.5431663523866],[-508.0027495032515,1364.661099333576],[-476.85426690894167,1335.9643472048313],[-425.7172719654006,1312.120076365379],[-374.3166260204263,1297.5696599866544],[-324.7088068850155,1274.2735333044448],[-270.12551670882624,1256.110987479376],[-230.25018596811208,1225.5062720341239],[-195.93789135692558,1196.096229752041],[-167.6669711207462,1176.8233406341324],[-143.6897957645832,1160.5687581255465],[-116.39061779077996,1142.0934890312556],[-83.53970301594501,1114.8162897199597],[-71.18200393589457,1091.9593811124666],[-23.40467603883106,1028.0022019466214],[-37.566501257048,1004.8255425807287],[-36.33487443615993,973.0823738858513],[-31.845274526596214,949.1924243666455]],"lineName":"S","duration":5,"color":"#808183"}};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map