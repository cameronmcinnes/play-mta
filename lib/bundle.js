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

  debugger;
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

  scaleToScreen(height) {
    const scaledX = this.x * (height / 1200);
    const scaledY = this.y * (height / 1200);

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
  // TODO refactor for one controls evnt listener
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const canvasContainerEl = document.getElementsByClassName("canvas-container")[0];
  const muteBtnEl = document.getElementsByClassName("mute")[0];
  const trainCtrlEl = document.getElementsByClassName("train-controls")[0];
  const resetBtnEl = document.getElementsByClassName("reset")[0];
  const backgroundImageEl = document.getElementsByClassName("background-img-container")[0];
  const subwayBulletEl = document.getElementsByClassName("bullet-hidden")[0];

  const width = canvasContainerEl.clientHeight * .9;
  const height = canvasContainerEl.clientHeight * .9;
  canvasEl.width = width;
  canvasEl.height = height;
  backgroundImageEl.style.cssText = `height: ${height}`;

  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();

  const ctx = canvasEl.getContext("2d");
  ctx.translate(0.5, 0.5);
  ctx.lineCap = "round";

  const map = new _map__WEBPACK_IMPORTED_MODULE_0__["default"](width, height, audioCtx);

  // canvasEl.addEventListener('mousemove', (e) => map.handleMouseMove(e))
  canvasEl.addEventListener('click', e => map.handleClick(e));
  resetBtnEl.addEventListener('click', e => map.resetMap(e));
  trainCtrlEl.addEventListener('click', e => {
    const dir = parseInt(e.target.dataset.dir);
    map.startPaths(dir);
  })

  const mapView = new _map_view__WEBPACK_IMPORTED_MODULE_1__["default"](map, ctx, audioCtx);
  muteBtnEl.addEventListener('click', e => mapView.toggleCtxMute(muteBtnEl));
  document.addEventListener('keypress', e => mapView.handleKey(e, subwayBulletEl));
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
/* harmony import */ var _subway_data_cleaned_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../subway_data_cleaned.json */ "./subway_data_cleaned.json");
var _subway_data_cleaned_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/Object.assign({}, _subway_data_cleaned_json__WEBPACK_IMPORTED_MODULE_5__, {"default": _subway_data_cleaned_json__WEBPACK_IMPORTED_MODULE_5__});







const BG_COLOR = '#282828';
let MAP_DATA = Object.values(_subway_data_cleaned_json__WEBPACK_IMPORTED_MODULE_5__)

// e only has one point, so no segments
// '9' train is grand central shuttle
// 3 only has one stop listed
MAP_DATA = MAP_DATA.filter( line => !(line.lineName === 'STATEN'));

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
  220.00
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
      const path = new _path__WEBPACK_IMPORTED_MODULE_3__["default"](MAP_DATA[i], this);
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
      const startPoint = new _coord__WEBPACK_IMPORTED_MODULE_0__["default"](vertices[j][1][0], vertices[j][1][1]);
      const endPoint = new _coord__WEBPACK_IMPORTED_MODULE_0__["default"](vertices[j + 1][1][0], vertices[j + 1][1][1]);

      startPoint.scaleToScreen(this.cnvHeight);
      endPoint.scaleToScreen(this.cnvHeight);

      const segment = new _path_segment__WEBPACK_IMPORTED_MODULE_4__["default"](path, startPoint, endPoint, j, sounds[i], this.audioCtx);
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
    _background_map_mapV2_json__WEBPACK_IMPORTED_MODULE_2__.forEach( vertices => {
      ctx.fillStyle = '#000';
      ctx.beginPath();
      const first = new _coord__WEBPACK_IMPORTED_MODULE_0__["default"](vertices[0][0], vertices[0][1]);
      first.scaleToScreen(this.cnvHeight);
      ctx.moveTo(first.x, first.y);

      vertices.forEach( vertice => {
        const bgMapCoord = new _coord__WEBPACK_IMPORTED_MODULE_0__["default"]( vertice[0], vertice[1]);
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

/* harmony default export */ __webpack_exports__["default"] = (Map);

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

  handleKey(e, subwayBulletEl) {
    this.map.handleKey(e);
    const key = e.key.toUpperCase()
    subwayBulletEl.src = `/Users/cameronmcinnes/Documents/aA/projects/js_project/assets/subway_bullets/${key}.svg`;
    if (subwayBulletEl.classList.contains('subway-bullet')) {
      // BUG QUESTION waits for a second before going
      subwayBulletEl.classList.remove('subway-bullet');
      setTimeout( () => subwayBulletEl.classList.toggle('subway-bullet'), 10)
    } else {
      subwayBulletEl.classList.toggle('subway-bullet', true);
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

    this.trainOrigin
    this.trainDestination
    // angle of the thread from x axis toward y
    this.angle = startPos.angleBetween(endPos);
    this.backwardsAngle = endPos.angleBetween(startPos);

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
    this.train = null;

    // segments start out traced
    this.shouldBeDrawn = false;
    this.frequency = frequency;
    this.audioCtx = audioCtx;
  }

  receiveTrain(train) {
    this.train = train;
    this.shouldBeDrawn = true;

    this.trainOrigin = (this.train.dir > 0) ?
      this.startPos : this.endPos;

    this.trainDestination = (this.train.dir > 0) ?
      this.endPos : this.startPos;

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

  checkClicked(mousePos) {
    // get the line point nearest to the mouse position with helper method;
    const linePoint = mousePos.linePointNearest(this.startPos, this.endPos);
    // hacky to see if line point is on line
    if (((this.startPos.x > linePoint.x && linePoint.x > this.endPos.x) || (this.startPos.x < linePoint.x && linePoint.x < this.endPos.x)) &&
        ((this.startPos.y > linePoint.y && linePoint.y > this.endPos.y) || (this.startPos.y < linePoint.y && linePoint.y < this.endPos.y))) {
      if (linePoint.distBetween(mousePos) < 5) {
        this.toggleSelected();
        this.parentPath.muted = false;
        this.parentPath.map.togglePathsMute();
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
    // TODO
    // trains
    // this.shouldBeDrawn = false;
    // to fade out from back
    // this.fading = true;
    // then in draw decrement the length of the fade pos at the same speed
    // once it his a stoop

  	this.pos = this.trainDestination;
    // TEST
    // if (this.ord === this.parentPath.segments.length - 1) {
    //   this.parentPath.restartPath();
    // }
    this.playSound();
  }

  draw(ctx, color, traceColor, traceWidth) {
    // draw from prev station to active train
    // WHEN THERE ARE MULTIPLE TRAINS ON A SEGMENT;
    ctx.beginPath();
    ctx.moveTo(this.trainOrigin.x, this.trainOrigin.y);
    ctx.lineTo(this.pos.x, this.pos.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = this.parentPath.lineWidth;
    ctx.stroke();

    // draw trace from train to next station
    ctx.beginPath();
    ctx.moveTo(this.pos.x, this.pos.y);
    ctx.lineTo(this.trainDestination.x, this.trainDestination.y);
    ctx.strokeStyle = traceColor;
    ctx.lineWidth = traceWidth;
    ctx.stroke();


    this.drawStation(ctx);
  }

  drawStation(ctx) {
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
  constructor(path, dir, initialTrainPos, originSegment) {
    this.parentPath = path;
    this.speed = this.parentPath.getSpeed();

    this.dir = dir;

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
        this.removeSelf();
      }
    } else {
      this.currSegment.trainAdvanced(this);
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

/***/ "./subway_data_cleaned.json":
/*!**********************************!*\
  !*** ./subway_data_cleaned.json ***!
  \**********************************/
/*! exports provided: 1, 2, 3, 4, 5, 6, 7, S, A, C, E, B, D, F, M, G, J, Z, L, N, Q, R, W, STATEN, default */
/***/ (function(module) {

module.exports = {"1":{"vertices":[["Van Cortlandt Park - 242 St",[627.5082155535213,86.56812565150179]],["238 St",[618.8943606934149,102.6645896531945]],["231 St",[603.9641811282651,123.08295950995564]],["Marble Hill - 225 St",[585.1432660709572,138.1744925567203]],["215 St",[564.6236852760455,156.15432366272475]],["207 St",[551.2791781621482,173.10111385704118]],["Dyckman St",[525.991280684769,187.47232926129027]],["191 St",[511.39254809277753,206.11625809626548]],["181 St",[495.63375109465153,226.21487719462684]],["168 St - Washington Hts",[471.0125140064566,257.65937759871184]],["157 St",[453.0955452396927,280.55142365219206]],["145 St",[432.49310270147794,306.86937068833845]],["137 St - City College",[420.0035781207377,322.8323123953342]],["125 St",[402.3163623694907,345.4151489242059]],["116 St - Columbia University",[380.70451314016964,373.02966771689523]],["Cathedral Pkwy",[370.39575898532684,386.2237786809433]],["103 St",[364.62556849748825,402.1094180067619]],["96 St",[349.7707177898526,421.5298843977975]],["86 St",[335.10042278321475,440.06488715024693]],["79 St",[321.16835058051487,456.61462420501147]],["72 St",[313.43584335363914,475.8734583445652]],["66 St - Lincoln Center",[312.53566350601653,493.4878600124162]],["59 St - Columbus Circle",[313.5902675116421,511.7347357078395]],["50 St",[306.3586971873984,534.6408367397246]],["Times Sq - 42 St",[292.62624645722053,557.2623244591723]],["34 St - Penn Station",[279.2101769286768,574.5394066456549]],["28 St",[270.51722676813506,585.6358120849534]],["23 St",[261.8845396936367,596.6478876538723]],["18 St",[253.5456351635129,607.333184975239]],["14 St",[244.7698232596682,618.6263601119815]],["Christopher St - Sheridan Sq",[234.58159527691225,634.1008913198932]],["Houston St",[225.31237935611733,652.2704646341643]],["Canal St",[221.88491633791455,671.2341442275144]],["Franklin St",[219.5911526257191,683.6587451246796]],["Chambers St",[210.62701857800883,697.151524379545]],["Cortlandt St",[199.62147249087968,709.9520959486548]],["Rector St",[193.61399610173518,725.1385000995652]],["South Ferry Loop",[195.79100008476505,746.5793696342232]],["South Ferry",[194.06220280411267,744.2708394335996]]],"lineName":"1","duration":53,"color":"#EE352E"},"2":{"vertices":[["Wakefield - 241 St",[808.158115271958,37.80789187035819]],["Nereid Av",[794.0113558252652,54.48412373066707]],["233 St",[782.3466822346335,72.70640321391916]],["225 St",[771.5445240628407,90.87597652819026]],["219 St",[762.9118369883422,105.37720048254752]],["Gun Hill Rd",[749.2660144442815,126.61778657514756]],["Burke Av",[745.8460843118141,149.43604399208937]],["Allerton Av",[745.1379930509247,170.1460546504405]],["Pelham Pkwy",[744.1474185742101,199.20472247274972]],["Bronx Park East",[740.9760736715981,228.59368228722508]],["E 180 St",[722.0270995565218,252.95798732708508]],["West Farms Sq - E Tremont Av",[697.3154678392884,258.5764649386965]],["174 St",[668.3703543281358,269.14229494372114]],["Freeman St",[652.8111788024784,294.7750617833393]],["Simpson St",[648.2952137927339,315.5764298012475]],["Intervale Av",[634.4648355476753,322.22443457993313]],["Prospect Av",[615.5045621039424,331.3461155553629]],["Jackson Av",[592.7665464543492,342.2211550849712]],["3 Av - 149 St",[555.290439826393,343.559891776679]],["149 St - Grand Concourse",[521.5393452039355,335.474765457551]],["135 St",[468.6132898936986,350.16573162019984]],["125 St",[450.81684729902145,372.91722788975574]],["116 St",[435.2614382162317,392.79096733388803]],["Central Park North (110 St)",[426.9865632150189,403.41301725248246]],["96 St",[349.7707177898526,421.5298843977975]],["86 St",[335.10042278321475,440.06488715024693]],["79 St",[321.16835058051487,456.61462420501147]],["72 St",[313.43584335363914,475.8734583445652]],["66 St - Lincoln Center",[312.53566350601653,493.4878600124162]],["59 St - Columbus Circle",[313.5902675116421,511.7347357078395]],["50 St",[306.3586971873984,534.6408367397246]],["Times Sq - 42 St",[292.62624645722053,557.2623244591723]],["34 St - Penn Station",[279.2101769286768,574.5394066456549]],["28 St",[270.51722676813506,585.6358120849534]],["23 St",[261.8845396936367,596.6478876538723]],["18 St",[253.5456351635129,607.333184975239]],["14 St",[244.7698232596682,618.6263601119815]],["Christopher St - Sheridan Sq",[234.58159527691225,634.1008913198932]],["Houston St",[225.31237935611733,652.2704646341643]],["Canal St",[221.88491633791455,671.2341442275144]],["Franklin St",[219.5911526257191,683.6587451246796]],["Chambers St",[210.62701857800883,697.151524379545]],["Park Pl",[212.340750087137,705.6793825179536]],["Fulton St",[220.77758213203447,718.4518441303036]],["Wall St",[211.2522480955953,727.5700113611196]],["Clark St",[271.56806433083943,760.4410920718308]],["Borough Hall",[283.19883993560853,775.3639653779112]],["Hoyt St",[301.7787026487428,784.7597184319374]],["Nevins St",[319.00264592614155,792.8378172618629]],["Atlantic Av - Barclays Ctr",[329.6466134970638,806.4957425127989]],["Bergen St",[339.3188388056635,818.8992609423816]],["Grand Army Plaza",[354.5804653440252,838.5551482214623]],["Eastern Pkwy - Brooklyn Museum",[379.70640577771974,849.9677906745221]],["Franklin Av",[403.2240751029023,854.5532273744205]],["President St",[431.2765416521676,864.3881985031385]],["Sterling St",[430.64754569165996,882.4523594794974]],["Winthrop St",[433.09573356185837,903.8510640789906]],["Church Av",[435.44976036009723,924.2624064465492]],["Beverly Rd",[437.7698891724199,944.4488691598788]],["Newkirk Av",[439.8338998691519,962.4778926902505]],["Flatbush Av - Brooklyn College",[442.73029444167423,987.5344054158662]]],"lineName":"2","duration":94,"color":"#EE352E"},"3":{"vertices":[["Harlem - 148 St",[484.8089942655991,316.25458250857326]],["145 St",[485.6564439129672,328.4086250717309]],["135 St",[468.6132898936986,350.16573162019984]],["125 St",[450.81684729902145,372.91722788975574]],["116 St",[435.2614382162317,392.79096733388803]],["Central Park North (110 St)",[426.9865632150189,403.41301725248246]],["96 St",[349.7707177898526,421.5298843977975]],["72 St",[313.43584335363914,475.8734583445652]],["Times Sq - 42 St",[292.62624645722053,557.2623244591723]],["34 St - Penn Station",[279.2101769286768,574.5394066456549]],["14 St",[244.7698232596682,618.6263601119815]],["Chambers St",[210.62701857800883,697.151524379545]],["Park Pl",[212.340750087137,705.6793825179536]],["Fulton St",[220.77758213203447,718.4518441303036]],["Wall St",[211.2522480955953,727.5700113611196]],["Clark St",[271.56806433083943,760.4410920718308]],["Borough Hall",[283.19883993560853,775.3639653779112]],["Hoyt St",[301.7787026487428,784.7597184319374]],["Nevins St",[319.00264592614155,792.8378172618629]],["Atlantic Av - Barclays Ctr",[329.6466134970638,806.4957425127989]],["Bergen St",[339.3188388056635,818.8992609423816]],["Grand Army Plaza",[354.5804653440252,838.5551482214623]],["Eastern Pkwy - Brooklyn Museum",[379.70640577771974,849.9677906745221]],["Franklin Av",[403.2240751029023,854.5532273744205]],["Nostrand Av",[432.0938597564873,857.4872041134389]],["Kingston Av",[463.3741678515404,859.0613616931669]],["Crown Hts - Utica Av",[498.0970047363206,860.8252614811616]],["Sutter Av - Rutland Rd",[537.0118925433687,875.5127138991968]],["Saratoga Av",[560.6764531407653,886.9815762658262]],["Rockaway Av",[588.4765680172541,883.1305121868481]],["Junius St",[612.9546802761025,879.7362349055556]],["Pennsylvania Av",[641.3988568845697,875.800840956223]],["Van Siclen Av",[662.114292709136,872.9406528537431]],["New Lots Av",[682.1367030442298,870.1788496000228]]],"lineName":"3","duration":64,"color":"#EE352E"},"4":{"vertices":[["Woodlawn",[702.2043106938963,97.85075955445323]],["Mosholu Pkwy",[679.9672319469887,119.94167183967701]],["Bedford Park Blvd - Lehman College",[659.594542424291,142.21178509937624]],["Kingsbridge Rd",[632.8151335674582,162.07146956512858]],["Fordham Rd",[618.2766640615637,179.4891015355105]],["183 St",[607.5611340759415,194.93552278663734]],["Burnside Av",[593.229818928251,212.34261352322804]],["176 St",[577.7497387030288,229.8164654071797]],["Mt Eden Av",[566.8609523450652,244.03307604914943]],["170 St",[555.1623807685709,259.3494887501681]],["167 St",[541.5692884247647,275.29486173414523]],["161 St - Yankee Stadium",[524.8801800359677,301.79903723399457]],["149 St - Grand Concourse",[519.1551868626482,335.5977465184567]],["138 St - Grand Concourse",[509.7466125554281,353.6970449408031]],["125 St",[480.57551247162604,385.6229283547447]],["116 St",[465.4231127767482,404.980147343033]],["110 St",[455.50606868110725,417.66125159582583]],["103 St",[443.34799107352535,433.1920027173072]],["96 St",[429.81892825868374,450.50773609436584]],["86 St",[412.7983728966748,472.22267770764506]],["77 St",[396.65916516795,492.855385984844]],["68 St - Hunter College",[381.6084594307135,512.1071926351954]],["59 St",[366.1773429628782,531.8368685508145]],["51 St",[351.2885942693798,550.8778505253167]],["Grand Central - 42 St",[332.72756377058397,569.6096229752104]],["33 St",[313.0366004086485,589.6203984586533]],["28 St",[304.7956233934054,600.200283442058]],["23 St",[296.0009792751688,611.4653486220407]],["14 St - Union Sq",[283.37586275081753,629.7051968282614]],["Astor Pl",[279.16121317128994,645.935183124651]],["Bleecker St",[265.6434496850514,660.4785720141981]],["Spring St",[256.2951384638747,673.1772449899846]],["Canal St",[244.79995480271663,685.468323592453]],["Brooklyn Bridge - City Hall",[229.96770275234056,705.6301900935864]],["Fulton St",[209.71177295886193,715.1067592733534]],["Wall St",[200.84933286884657,724.983895337261]],["Bowling Green",[192.55185921037426,734.6115555347436]],["Borough Hall",[282.6225741754089,778.2276672249549]],["Hoyt St",[301.7787026487428,784.7597184319374]],["Nevins St",[319.00264592614155,792.8378172618629]],["Atlantic Av - Barclays Ctr",[329.6466134970638,806.4957425127989]],["Bergen St",[339.3188388056635,818.8992609423816]],["Grand Army Plaza",[354.5804653440252,838.5551482214623]],["Eastern Pkwy - Brooklyn Museum",[379.70640577771974,849.9677906745221]],["Franklin Av",[403.2240751029023,854.5532273744205]],["Nostrand Av",[432.24451747162254,820.2731350800517]],["Kingston - Throop Avs",[468.2818429204867,822.0897410370276]],["Crown Hts - Utica Av",[498.0970047363206,860.8252614811616]],["Sutter Av - Rutland Rd",[537.0118925433687,875.5127138991968]],["Saratoga Av",[560.6764531407653,886.9815762658262]],["Rockaway Av",[588.4765680172541,883.1305121868481]],["Junius St",[612.9546802761025,879.7362349055556]],["Pennsylvania Av",[641.3988568845697,875.800840956223]],["Van Siclen Av",[662.114292709136,872.9406528537431]],["New Lots Av",[682.1367030442298,870.1788496000228]]],"lineName":"4","duration":75,"color":"#00933C"},"5":{"vertices":[["Eastchester - Dyre Av",[882.6809540399917,89.89915553004708]],["Baychester Av",[853.4646566416704,123.76111221728142]],["Gun Hill Rd",[824.1127672997384,155.8661966057235]],["Pelham Pkwy",[790.3089424769728,192.90457840922377]],["Morris Park",[770.9644918597733,209.1415921948159]],["E 180 St",[722.0270995565218,252.95798732708508]],["West Farms Sq - E Tremont Av",[697.3154678392884,258.5764649386965]],["174 St",[668.3703543281358,269.14229494372114]],["Freeman St",[652.8111788024784,294.7750617833393]],["Simpson St",[648.2952137927339,315.5764298012475]],["Intervale Av",[634.4648355476753,322.22443457993313]],["Prospect Av",[615.5045621039424,331.3461155553629]],["Jackson Av",[592.7665464543492,342.2211550849712]],["3 Av - 149 St",[555.290439826393,343.559891776679]],["149 St - Grand Concourse",[521.5393452039355,335.474765457551]],["138 St - Grand Concourse",[509.7466125554281,353.6970449408031]],["125 St",[480.57551247162604,385.6229283547447]],["86 St",[412.7983728966748,472.22267770764506]],["59 St",[366.1773429628782,531.8368685508145]],["Grand Central - 42 St",[332.72756377058397,569.6096229752104]],["14 St - Union Sq",[283.37586275081753,629.7051968282614]],["Brooklyn Bridge - City Hall",[229.96770275234056,705.6301900935864]],["Fulton St",[209.71177295886193,715.1067592733534]],["Wall St",[200.84933286884657,724.983895337261]],["Bowling Green",[192.55185921037426,734.6115555347436]],["Borough Hall",[283.19883993560853,775.3639653779112]],["Nevins St",[319.00264592614155,792.8378172618629]],["Atlantic Av - Barclays Ctr",[329.6466134970638,806.4957425127989]],["Franklin Av",[403.2240751029023,854.5532273744205]],["President St",[431.2765416521676,864.3881985031385]],["Sterling St",[430.64754569165996,882.4523594794974]],["Winthrop St",[433.09573356185837,903.8510640789906]],["Church Av",[435.44976036009723,924.2624064465492]],["Beverly Rd",[437.7698891724199,944.4488691598788]],["Newkirk Av",[439.8338998691519,962.4778926902505]],["Flatbush Av - Brooklyn College",[442.73029444167423,987.5344054158662]]],"lineName":"5","duration":54,"color":"#00933C"},"6":{"vertices":[["Pelham Bay Park",[892.8993135657961,215.82473441946394]],["Buhre Av",[876.1461756480344,235.68441888521627]],["Middletown Rd",[862.0107155299982,246.03942421439186]],["Westchester Sq - E Tremont Av",[837.039199254253,259.99250401153154]],["Zerega Av",[821.6570465438047,271.9532906218088]],["Castle Hill Av",[805.8907166598898,279.79948230830286]],["Parkchester",[769.7554636961983,283.41512549923567]],["St Lawrence Av",[744.1361192456071,289.44822497336776]],["Morrison Av- Sound View",[718.1551962787555,296.433549233422]],["Elder Av",[700.6676019999773,299.7259279213912]],["Whitlock Av",[673.8354629428899,306.96072804789554]],["Hunts Point Av",[657.7678176288649,326.5568816687928]],["Longwood Av",[635.5985348537362,343.5774604996477]],["E 149 St",[606.736283085833,357.5832464657684]],["E 143 St - St Mary's St",[593.3315128859458,369.526464353052]],["Cypress Av",[569.2827751151364,381.3010224996762]],["Brook Av",[549.7048050394988,373.5778118741128]],["3 Av - 138 St",[523.7238820727007,363.3528150950455]],["125 St",[480.57551247162604,385.6229283547447]],["116 St",[465.4231127767482,404.980147343033]],["110 St",[455.50606868110725,417.66125159582583]],["103 St",[443.34799107352535,433.1920027173072]],["96 St",[429.81892825868374,450.50773609436584]],["86 St",[412.7983728966748,472.22267770764506]],["77 St",[396.65916516795,492.855385984844]],["68 St - Hunter College",[381.6084594307135,512.1071926351954]],["59 St",[366.1773429628782,531.8368685508145]],["51 St",[351.2885942693798,550.8778505253167]],["Grand Central - 42 St",[332.72756377058397,569.6096229752104]],["33 St",[313.0366004086485,589.6203984586533]],["28 St",[304.7956233934054,600.200283442058]],["23 St",[296.0009792751688,611.4653486220407]],["14 St - Union Sq",[283.37586275081753,629.7051968282614]],["Astor Pl",[279.16121317128994,645.935183124651]],["Bleecker St",[265.6434496850514,660.4785720141981]],["Spring St",[256.2951384638747,673.1772449899846]],["Canal St",[244.79995480271663,685.468323592453]],["Brooklyn Bridge - City Hall",[229.96770275234056,705.6301900935864]]],"lineName":"6","duration":66,"color":"#00933C"},"7":{"vertices":[["hewes - Main St",[885.7091741132574,542.1180852434517]],["Mets - Willets Point",[826.9714974435303,559.609505850397]],["111 St",[790.4031035489322,569.7712552266921]],["103 St - Corona Plaza",[762.6594853155657,576.324388901257]],["Junction Blvd",[736.9459797930149,578.8542850115458]],["90 St - Elmhurst Av",[710.256965565274,581.4439147799931]],["82 St - Jackson Hts",[683.5754842233218,584.0757094836052]],["74 St - Broadway",[654.5851733975965,586.925356352269]],["69 St",[635.7190610257694,588.7630447768271]],["Woodside - 61 St",[610.932100451022,591.2050972721726]],["52 St",[574.9060743307609,596.4089530212383]],["46 St",[552.7367915556321,599.9824312770063]],["40 St",[531.7162738580884,597.7020110331677]],["33 St",[505.4227361324168,594.8699328874726]],["Queensboro Plaza",[470.7526294479447,573.8050340247594]],["Court Sq",[451.6868956036492,586.3104510476903]],["Hunters Point Av",[437.9318462161582,603.201021328437]],["Vernon Blvd - Jackson Av",[420.3613901940769,601.760386043406]],["Grand Central - 42 St",[335.76708317250626,570.8218648613987]],["5 Av",[313.4622084538199,562.4240152730733]],["Times Sq - 42 St",[291.88802365328263,556.605254219429]],["34 St - 11 Av",[238.33297238259158,555.1821876573915]]],"lineName":"7","duration":38,"color":"#B933AD"},"S":{"vertices":[["Franklin Av",[411.9019594919198,819.7179634336317]],["Park Pl",[405.1336616416313,840.1820119701715]],["Botanic Garden",[399.0282577377131,855.7443867930016]]],"lineName":"S","duration":5,"color":"#808183"},"A":{"vertices":[["Inwood - 207 St",[547.2227191834378,160.97518125066844]],["Dyckman St",[519.4565022928116,170.0441560571172]],["190 St",[493.43414845436206,192.77456985909063]],["181 St",[479.16309639271486,218.51977652584827]],["175 St",[472.62831800075753,233.64293327398656]],["168 St",[473.1669193322269,257.0866372292981]],["163 St - Amsterdam Av",[471.92022673986816,273.62231930568265]],["155 St",[465.81105639308225,292.9303458696037]],["145 St",[455.63412773892935,313.081671136946]],["135 St",[442.70392934154694,337.28785766991297]],["125 St",[425.0242464760354,361.12861476475155]],["116 St",[415.4612480108659,382.2954122208131]],["Cathedral Pkwy (110 St)",[403.11108181655084,398.0440155073211]],["103 St",[390.7081854219812,413.8945173871774]],["96 St",[378.4973776141448,429.530680846571]],["86 St",[362.60298867246127,449.8190421532239]],["81 St - Museum of Natural History",[350.44867750774705,465.4024994436614]],["72 St",[334.3772657508011,485.9192541491571]],["59 St - Columbus Circle",[314.31719098692344,511.56256222256644]],["50 St",[298.3173416446238,532.0828306726509]],["42 St - Port Authority Bus Terminal",[284.189414412323,550.1715878611811]],["34 St - Penn Station",[270.4192992533078,567.814099485817]],["23 St",[252.90533987440222,590.2353037632319]],["14 St",[239.16158981556782,607.8497054310828]],["W 4 St",[243.66248905378808,637.9097904637065]],["Spring St",[231.44414836021633,659.382283699738]],["Canal St",[225.8321484731948,678.3670457606704]],["Chambers St",[213.1919661773728,701.9548132444701]],["Fulton St",[216.5591661095857,715.707609599552]],["High St",[281.1913258820523,753.8668759296836]],["Jay St - MetroTech",[293.2025122174201,778.4595743684113]],["Hoyt - Schermerhorn Sts",[302.0197549929164,792.0015460476191]],["Lafayette Av",[343.657781000199,800.3326344885835]],["Clinton - Washington Avs",[374.1960998483931,810.3468065918019]],["Franklin Av",[408.05642131433444,816.9631876691138]],["Nostrand Av",[432.24451747162254,820.2731350800517]],["Kingston - Throop Avs",[468.2818429204867,822.0897410370276]],["Utica Av",[506.4321428235232,824.0468967779026]],["Ralph Av",[543.881884351352,825.9513463498217]],["Rockaway Av",[577.1772393856968,827.6449712458668]],["Broadway Jct",[602.148755661442,827.6660537134492]],["Liberty Av",[635.1729268086183,840.9901732276054]],["Van Siclen Av",[658.4872082183575,847.427353330442]],["Shepherd Av",[694.6751913823568,842.4378360018391]],["Euclid Av",[727.2323236127637,838.056196488612]],["Grant Av",[753.8083445542068,832.1987842443666]],["80 St",[776.6254555041818,824.0223005657065]],["88 St",[804.956638826351,822.3638131156489]],["Rockaway Blvd",[833.6456342219128,820.3047587814503]],["104 St",[856.8845867741379,815.8001382072928]],["111 St",[877.6753514562183,806.5941273615334]],["Ozone Park - Lefferts Blvd",[901.6487603694601,800.9018611133836]],["Aqueduct Racetrack",[870.5379422039341,863.1548741493926]],["Aqueduct - N Conduit Av",[870.5379422039341,863.1548741493926]],["Howard Beach - JFK Airport",[884.6884680934944,890.4145047376948]],["Broad Channel",[938.8348508959629,1073.4595158060047]],["Beach 67 St",[1010.4010320053238,1134.7919277574151]],["Beach 60 St",[1042.0466850594514,1129.7075393246664]],["Beach 44 St",[1089.1611190101446,1127.7082186486264]],["Beach 36 St",[1118.6824982815504,1119.0819756614583]],["Beach 25 St",[1144.3771715897094,1102.6798158797956]],["Far Rockaway - Mott Av",[1166.779973823223,1088.8743133557577]],["Broad Channel",[938.4619730510994,1071.2388292202993]],["Beach 90 St",[947.4374064274127,1144.9571908783241]],["Beach 98 St",[921.3849210459147,1154.539172396028]],["Beach 105 St",[895.0160544627826,1161.9110085618431]],["Rockaway Park - Beach 116 St",[864.7602188303066,1170.0137036039398]]],"lineName":"A","duration":74,"color":"#0039A6"},"C":{"vertices":[["168 St",[473.1669193322269,257.0866372292981]],["163 St - Amsterdam Av",[471.92022673986816,273.62231930568265]],["155 St",[465.81105639308225,292.9303458696037]],["145 St",[455.63412773892935,313.081671136946]],["135 St",[442.70392934154694,337.28785766991297]],["125 St",[425.0242464760354,361.12861476475155]],["116 St",[415.4612480108659,382.2954122208131]],["Cathedral Pkwy (110 St)",[403.11108181655084,398.0440155073211]],["103 St",[390.7081854219812,413.8945173871774]],["96 St",[378.4973776141448,429.530680846571]],["86 St",[362.60298867246127,449.8190421532239]],["81 St - Museum of Natural History",[350.44867750774705,465.4024994436614]],["72 St",[334.3772657508011,485.9192541491571]],["59 St - Columbus Circle",[314.31719098692344,511.56256222256644]],["50 St",[298.3173416446238,532.0828306726509]],["42 St - Port Authority Bus Terminal",[284.189414412323,550.1715878611811]],["34 St - Penn Station",[270.4192992533078,567.814099485817]],["23 St",[252.90533987440222,590.2353037632319]],["14 St",[239.16158981556782,607.8497054310828]],["W 4 St",[243.66248905378808,637.9097904637065]],["Spring St",[231.44414836021633,659.382283699738]],["Canal St",[225.8321484731948,678.3670457606704]],["Chambers St",[213.1919661773728,701.9548132444701]],["Fulton St",[216.5591661095857,715.707609599552]],["High St",[281.1913258820523,753.8668759296836]],["Jay St - MetroTech",[293.2025122174201,778.4595743684113]],["Hoyt - Schermerhorn Sts",[302.0197549929164,792.0015460476191]],["Lafayette Av",[343.657781000199,800.3326344885835]],["Clinton - Washington Avs",[374.1960998483931,810.3468065918019]],["Franklin Av",[408.05642131433444,816.9631876691138]],["Nostrand Av",[432.24451747162254,820.2731350800517]],["Kingston - Throop Avs",[468.2818429204867,822.0897410370276]],["Utica Av",[506.4321428235232,824.0468967779026]],["Ralph Av",[543.881884351352,825.9513463498217]],["Rockaway Av",[577.1772393856968,827.6449712458668]],["Broadway Jct",[602.148755661442,827.6660537134492]],["Liberty Av",[635.1729268086183,840.9901732276054]],["Van Siclen Av",[658.4872082183575,847.427353330442]],["Shepherd Av",[694.6751913823568,842.4378360018391]],["Euclid Av",[727.2323236127637,838.056196488612]]],"lineName":"C","duration":54,"color":"#0039A6"},"E":{"vertices":[["Jamaica Center - Parsons/Archer",[994.6384685643301,743.9932536103896]],["Sutphin Blvd - Archer Av - JFK Airport",[968.8006704268249,749.8295833870276]],["Jamaica - Van Wyck",[935.3169932486682,742.5209946239848]],["Briarwood - Van Wyck Blvd",[921.3246579599249,719.2846015999337]],["Kew Gardens - Union Tpke",[882.0255929793568,700.7952775272627]],["75 Av",[858.2367397670592,687.1268110425356]],["Forest Hills - 71 Av",[831.1296503799357,675.3206291945377]],["67 Av",[800.2523516727945,658.3422152988476]],["63 Dr - Rego Park",[766.787506708976,646.6660420009579]],["Woodhaven Blvd",[738.0683797704193,635.2112346127334]],["Grand Av - Newtown",[707.9594354102107,621.4760069806453]],["Elmhurst Av",[689.903108256968,602.3647501141933]],["Jackson Hts - Roosevelt Av",[654.7960941987216,587.6421602501707]],["65 St",[627.9978531275503,577.013082842399]],["Northern Blvd",[599.549910076162,565.7128802164538]],["46 St",[571.9531831150629,553.6712774804107]],["Steinway St",[544.055140723747,551.6789842935732]],["36 St",[513.769173548276,568.6855081460233]],["Queens Plaza",[481.8975339215525,579.4586490823332]],["Court Sq",[448.9147936460277,583.418639243837]],["Lexington Av/53 St",[362.0794531125162,549.3142341793799]],["5 Av/53 St",[338.8442670031588,540.1257920565893]],["7 Av",[314.6900688317333,530.6562503660248]],["50 St",[298.3173416446238,532.0828306726509]],["42 St - Port Authority Bus Terminal",[284.189414412323,550.1715878611811]],["34 St - Penn Station",[270.4192992533078,567.814099485817]],["23 St",[252.90533987440222,590.2353037632319]],["14 St",[239.16158981556782,607.8497054310828]],["W 4 St",[243.66248905378808,637.9097904637065]],["Spring St",[231.44414836021633,659.382283699738]],["Canal St",[225.8321484731948,678.3670457606704]],["World Trade Center",[208.6873004962313,707.3273287342452]]],"lineName":"E","duration":60,"color":"#0039A6"},"B":{"vertices":[["Bedford Park Blvd",[670.6151542829444,142.80209419178362]],["Kingsbridge Rd",[646.6191467123895,164.819217840444]],["Fordham Rd",[630.6494289130849,184.7843146441084]],["182-183 Sts",[619.3802318245761,203.06632778551898]],["Tremont Av",[602.4839690775216,223.03493833379707]],["174-175 Sts",[583.9945009934256,238.88192646903968]],["170 St",[571.7008314422862,262.0515583457299]],["167 St",[552.7179593412402,281.50013469355036]],["161 St - Yankee Stadium",[525.5581397538622,302.1117605031669]],["155 St",[478.259150102171,294.27611005048897]],["145 St",[455.63412773892935,313.081671136946]],["125 St",[425.0242464760354,361.12861476475155]],["116 St",[415.4612480108659,382.2954122208131]],["Cathedral Pkwy (110 St)",[403.11108181655084,398.0440155073211]],["103 St",[390.7081854219812,413.8945173871774]],["96 St",[378.4973776141448,429.530680846571]],["86 St",[362.60298867246127,449.8190421532239]],["81 St - Museum of Natural History",[350.44867750774705,465.4024994436614]],["72 St",[334.3772657508011,485.9192541491571]],["59 St - Columbus Circle",[314.31719098692344,511.56256222256644]],["7 Av",[314.6900688317333,530.6562503660248]],["47-50 Sts - Rockefeller Ctr",[315.8501332379214,545.4104639314208]],["42 St - Bryant Pk",[303.6468583158739,561.0150036894407]],["34 St - Herald Sq",[291.39085319346475,576.8373956125122]],["23 St",[272.5661716932893,600.8749224048198]],["14 St",[259.80546322543404,617.2138347837353]],["W 4 St",[243.66248905378808,637.9097904637065]],["Broadway-Lafayette St",[259.8242954397724,662.650066175536]],["Grand St",[269.0558469317835,687.3516906967895]],["DeKalb Av",[313.98574401371155,784.4434814181511]],["Atlantic Av - Barclays Ctr",[325.33780284557673,808.9307675189418]],["7 Av",[349.60499430324666,832.1777017767843]],["Prospect Park",[387.7251626632882,886.415863385615]],["Church Av",[384.9530607056668,925.3727497394142]],["Newkirk Plaza",[385.6649184094239,979.6425350496185]],["Kings Hwy",[404.7193529251164,1072.447557361899]],["Sheepshead Bay",[418.1994519825712,1148.955832230404]],["Brighton Beach",[391.00196796640927,1181.5458133733164]]],"lineName":"B","duration":68,"color":"#FF6319"},"D":{"vertices":[["Norwood - 205 St",[701.8126006346411,137.29605640731168]],["Bedford Park Blvd",[670.6151542829444,142.80209419178362]],["Kingsbridge Rd",[646.6191467123895,164.819217840444]],["Fordham Rd",[630.6494289130849,184.7843146441084]],["182-183 Sts",[619.3802318245761,203.06632778551898]],["Tremont Av",[602.4839690775216,223.03493833379707]],["174-175 Sts",[583.9945009934256,238.88192646903968]],["170 St",[571.7008314422862,262.0515583457299]],["167 St",[552.7179593412402,281.50013469355036]],["161 St - Yankee Stadium",[525.5581397538622,302.1117605031669]],["155 St",[478.259150102171,294.27611005048897]],["145 St",[455.63412773892935,313.081671136946]],["125 St",[425.0242464760354,361.12861476475155]],["59 St - Columbus Circle",[314.31719098692344,511.56256222256644]],["7 Av",[314.6900688317333,530.6562503660248]],["47-50 Sts - Rockefeller Ctr",[315.8501332379214,545.4104639314208]],["42 St - Bryant Pk",[303.6468583158739,561.0150036894407]],["34 St - Herald Sq",[291.39085319346475,576.8373956125122]],["W 4 St",[243.66248905378808,637.9097904637065]],["Broadway-Lafayette St",[259.8242954397724,662.650066175536]],["Grand St",[269.0558469317835,687.3516906967895]],["DeKalb Av",[313.98574401371155,784.4434814181511]],["Atlantic Av - Barclays Ctr",[332.56937316976695,806.1408543084366]],["Union St",[309.1420984736763,831.2430457138308]],["9 St",[289.58672705529824,853.9734595158043]],["Prospect Av",[272.3740831065561,873.0636339146739]],["25 St",[252.71701773053667,890.6920905609048]],["36 St",[232.15977250684114,909.1497909322021]],["9 Av",[266.90520804888087,940.2534581103049]],["Fort Hamilton Pkwy",[266.9805369064485,959.150376556294]],["50 St",[265.14627922523357,975.5033439136143]],["55 St",[262.56626585439886,992.4571615971083]],["62 St",[257.22168341167816,1009.8958760350976]],["71 St",[249.8055573864901,1034.080980100507]],["79 St",[243.22934812293482,1055.4726572107977]],["18 Av",[238.9883334432265,1074.963398493783]],["20 Av",[252.42700162897629,1086.9031026364778]],["Bay Pkwy",[269.1500080036895,1096.3234519026998]],["25 Av",[295.13469741340873,1110.9792806193616]],["Bay 50 St",[306.67507838908597,1142.1215989880404]],["Coney Island - Stillwell Av",[316.2117117541282,1182.2450485482495]]],"lineName":"D","duration":91,"color":"#FF6319"},"F":{"vertices":[["Jamaica - 179 St",[1059.7677987966144,707.1024490799912]],["169 St",[1022.9056223575883,714.7483573244024]],["Parsons Blvd",[986.2882647056033,724.9592991250898]],["Sutphin Blvd",[958.4843833861933,732.3522177584622]],["Briarwood - Van Wyck Blvd",[921.3246579599249,719.2846015999337]],["Kew Gardens - Union Tpke",[882.0255929793568,700.7952775272627]],["75 Av",[858.2367397670592,687.1268110425356]],["Forest Hills - 71 Av",[831.1296503799357,675.3206291945377]],["Jackson Hts - Roosevelt Av",[654.7960941987216,587.6421602501707]],["21 St - Queensbridge",[460.8318189094361,561.0817648368018]],["Roosevelt Island",[421.57041835765176,543.7168390353759]],["Lexington Av/63 St",[373.16032805715946,524.4474636620308]],["57 St",[330.46016515851585,526.7559938626545]],["47-50 Sts - Rockefeller Ctr",[315.8501332379214,545.4104639314208]],["42 St - Bryant Pk",[303.6468583158739,561.0150036894407]],["34 St - Herald Sq",[291.39085319346475,576.8373956125122]],["23 St",[272.5661716932893,600.8749224048198]],["14 St",[259.80546322543404,617.2138347837353]],["W 4 St",[243.66248905378808,637.9097904637065]],["Broadway-Lafayette St",[259.8242954397724,662.650066175536]],["2 Av",[283.42482650825787,669.308612188013]],["Delancey St",[290.2948183162412,686.1429625551899]],["East Broadway",[282.53971243210594,703.346256105134]],["York St",[295.4284799578368,746.6285620585905]],["Jay St - MetroTech",[298.47553224549443,779.0147460148313]],["Bergen St",[279.9446332896935,800.2201946614441]],["Carroll St",[264.17830340583214,820.747490600731]],["Smith - 9 Sts",[260.7470739447082,844.370395530518]],["4 Av",[284.02369092571706,855.9938626594516]],["7 Av",[319.7069707441633,870.0523547945035]],["15 St - Prospect Park",[322.76532236042385,890.8045303880442]],["Fort Hamilton Pkwy",[336.7651905349561,924.476744867012]],["Church Av",[322.0685304281375,948.1628971995463]],["Ditmas Av",[327.74079340120244,975.9987819018759]],["18 Av",[332.2642912966823,998.3602525211072]],["Avenue I",[335.4431690850297,1013.9366823223672]],["Bay Pkwy",[338.6936092880771,1029.9347614753005]],["Avenue N",[342.7124038380037,1049.7136298153118]],["Avenue P",[347.13797421870987,1071.4847913421358]],["Kings Hwy",[349.6275929605062,1091.6080066526933]],["Avenue U",[345.8762158548804,1116.74533550405]],["Avenue X",[342.51278236553514,1139.3843919465162]],["Neptune Av",[341.2924548733036,1169.6342191874064]],["W 8 St - NY Aquarium",[336.1512603459727,1186.7953478021607]],["Coney Island - Stillwell Av",[316.2117117541282,1182.2450485482495]]],"lineName":"F","duration":89,"color":"#FF6319"},"M":{"vertices":[["Forest Hills - 71 Av",[831.1296503799357,675.3206291945377]],["67 Av",[800.2523516727945,658.3422152988476]],["63 Dr - Rego Park",[766.787506708976,646.6660420009579]],["Woodhaven Blvd",[738.0683797704193,635.2112346127334]],["Grand Av - Newtown",[707.9594354102107,621.4760069806453]],["Elmhurst Av",[689.903108256968,602.3647501141933]],["Jackson Hts - Roosevelt Av",[654.7960941987216,587.6421602501707]],["65 St",[627.9978531275503,577.013082842399]],["Northern Blvd",[599.549910076162,565.7128802164538]],["46 St",[571.9531831150629,553.6712774804107]],["Steinway St",[544.055140723747,551.6789842935732]],["36 St",[513.769173548276,568.6855081460233]],["Queens Plaza",[481.8975339215525,579.4586490823332]],["Court Sq",[448.9147936460277,583.418639243837]],["Lexington Av/53 St",[362.0794531125162,549.3142341793799]],["5 Av/53 St",[338.8442670031588,540.1257920565893]],["47-50 Sts - Rockefeller Ctr",[315.8501332379214,545.4104639314208]],["42 St - Bryant Pk",[303.6468583158739,561.0150036894407]],["34 St - Herald Sq",[291.39085319346475,576.8373956125122]],["23 St",[272.5661716932893,600.8749224048198]],["14 St",[259.80546322543404,617.2138347837353]],["W 4 St",[243.66248905378808,637.9097904637065]],["Broadway-Lafayette St",[259.8242954397724,662.650066175536]],["Essex St",[292.84470014408095,687.1830309561053]],["Marcy Av",[404.6327247389458,722.165872169971]],["Hewes St",[420.92635662567346,727.3978378758216]],["Lorimer St",[443.6116420749585,737.9425854132888]],["Flushing Av",[467.2724362294338,750.6236896660816]],["Myrtle Av",[487.87111232472733,761.3511519226131]],["Central Av",[518.9819304903069,759.0672179341606]],["Knickerbocker Av",[547.9308104443272,756.2316260438769]],["Myrtle - Wyckoff Avs",[575.523770962612,753.5400976821063]],["Seneca Av",[593.0188981271258,741.832300682843]],["Forest Av",[610.5818212634719,735.9959709062049]],["Fresh Pond Rd",[637.7002099791985,729.801239180591]],["Middle Village - Metropolitan Av",[661.3384054764142,711.4946298270092]]],"lineName":"M","duration":70,"color":"#FF6319"},"G":{"vertices":[["Court Sq",[457.08044180375674,587.958397263957]],["21 St",[434.88856037136827,596.7041075674421]],["Greenpoint Av",[417.0921177766911,641.3743426369488]],["Nassau Av",[429.03927458309437,664.9761650991533]],["Metropolitan Av",[428.5082061374139,706.589442368736]],["Broadway",[432.6889577310788,730.131531172782]],["Flushing Av",[432.9676745040362,750.2125815481497]],["Myrtle - Willoughby Avs",[437.44220864212923,770.6239239157334]],["Bedford - Nostrand Avs",[420.583610323805,787.9853359725455]],["Classon Av",[395.9209423640121,790.6346993991513]],["Clinton - Washington Avs",[370.42589052837536,793.3894751636942]],["Fulton St",[338.2755341286945,796.7978074233666]],["Hoyt St",[301.7787026487428,784.7597184319374]],["Bergen St",[339.3188388056635,818.8992609423816]],["Carroll St",[264.17830340583214,820.747490600731]],["Smith - 9 Sts",[260.7470739447082,844.370395530518]],["4 Av",[284.02369092571706,855.9938626594516]],["7 Av",[319.7069707441633,870.0523547945035]],["15 St - Prospect Park",[322.76532236042385,890.8045303880442]],["Fort Hamilton Pkwy",[336.7651905349561,924.476744867012]],["Church Av",[322.0685304281375,948.1628971995463]]],"lineName":"G","duration":49,"color":"#6CBE45"},"J":{"vertices":[["Jamaica Center - Parsons/Archer",[994.6384685643301,743.9932536103896]],["Sutphin Blvd - Archer Av - JFK Airport",[968.8006704268249,749.8295833870276]],["121 St",[892.2477189480288,749.8085009194452]],["111 St",[861.9240873438276,760.609751812515]],["104 St",[831.8490409694817,768.4805397111804]],["Woodhaven Blvd",[804.5573958814139,773.0448939434714]],["85 St - Forest Pkwy",[772.7912166551994,778.1187411424291]],["75 St",[745.9402453837736,782.0225113903881]],["Cypress Hills",[725.560022975287,786.8820201689078]],["Crescent St",[720.9084660219851,810.5892549690245]],["Norwood Av",[697.3531322680723,816.8577753311768]],["Cleveland St",[680.0274950329787,821.9983836774954]],["Van Siclen Av",[653.4778391917164,828.7553145387069]],["Alabama Av",[627.2407981092739,832.3814989634559]],["Broadway Jct",[605.1769757347076,823.5760550018122]],["Chauncey St",[582.7892392727184,811.6468920929086]],["Halsey St",[559.8026383932163,799.4296021270038]],["Gates Av",[538.2924831216436,787.9747947387543]],["Kosciuszko St",[513.6448809333215,774.9317747923969]],["Myrtle Av",[487.87111232472733,761.3511519226131]],["Flushing Av",[467.2724362294338,750.6236896660816]],["Lorimer St",[443.6116420749585,737.9425854132888]],["Hewes St",[420.92635662567346,727.3978378758216]],["Marcy Av",[404.6327247389458,722.165872169971]],["Essex St",[292.84470014408095,687.1830309561053]],["Bowery",[268.44568318566775,680.2785228217671]],["Canal St",[245.93365410872397,687.9665960013681]],["Chambers St",[232.71720605270235,705.0047435552167]],["Fulton St",[216.96970838317938,715.085676805771]],["Broad St",[203.8850858278476,728.7822532472829]]],"lineName":"J","duration":53,"color":"#996633"},"Z":{"vertices":[["Jamaica Center - Parsons/Archer",[994.6384685643301,743.9932536103896]],["Sutphin Blvd - Archer Av - JFK Airport",[968.8006704268249,749.8295833870276]],["121 St",[892.2477189480288,749.8085009194452]],["104 St",[831.8490409694817,768.4805397111804]],["Woodhaven Blvd",[804.5573958814139,773.0448939434714]],["75 St",[745.9402453837736,782.0225113903881]],["Crescent St",[720.9084660219851,810.5892549690245]],["Norwood Av",[697.3531322680723,816.8577753311768]],["Van Siclen Av",[653.4778391917164,828.7553145387069]],["Alabama Av",[627.2407981092739,832.3814989634559]],["Broadway Jct",[605.1769757347076,823.5760550018122]],["Gates Av",[538.2924831216436,787.9747947387543]],["Myrtle Av",[487.87111232472733,761.3511519226131]],["Marcy Av",[404.6327247389458,722.165872169971]],["Essex St",[292.84470014408095,687.1830309561053]],["Bowery",[268.44568318566775,680.2785228217671]],["Canal St",[245.93365410872397,687.9665960013681]],["Chambers St",[232.71720605270235,705.0047435552167]],["Fulton St",[216.96970838317938,715.085676805771]],["Broad St",[203.8850858278476,728.7822532472829]]],"lineName":"Z","duration":43,"color":"#996633"},"L":{"vertices":[["8 Av",[235.8169885406145,611.7710444020355]],["6 Av",[257.6322256852718,620.3516087094001]],["Union Sq - 14 St",[280.44180374951134,629.2976024549432]],["3 Av",[297.7975725275999,636.1142669743132]],["1 Av",[314.7239668176494,642.7763267314037]],["Bedford Av",[407.9660266852426,690.7354267442907]],["Lorimer St",[432.81325034603327,702.1234729851543]],["Graham Av",[456.24805792791284,700.3595731971596]],["Grand St",[468.98993418142965,709.6323451902799]],["Montrose Av",[472.07841734068523,724.3443938205113]],["Morgan Av",[497.32488394646657,729.920706496908]],["Jefferson St",[535.870660351626,728.3219527050087]],["DeKalb Av",[552.7744559844159,738.1463825999355]],["Myrtle - Wyckoff Avs",[578.5331588214858,752.1908197566072]],["Halsey St",[606.789013286141,766.9907120017818]],["Wilson Av",[606.9321381154873,791.0176975602983]],["Bushwick Av - Aberdeen St",[602.4011073342186,811.8717717471626]],["Broadway Jct",[609.9678910744883,825.8318790334797]],["Atlantic Av",[610.5064924059042,838.1686363157265]],["Sutter Av",[614.7324413141419,859.1738015202814]],["Livonia Av",[620.0205271136867,877.8985464809975]],["New Lots Av",[625.0637941262441,896.5389615713591]],["E 105 St",[624.1108840783135,925.2111174879075]],["Canarsie - Rockaway Pkwy",[615.2032466737788,938.981482565983]]],"lineName":"L","duration":37,"color":"#A7A9AC"},"N":{"vertices":[["Astoria - Ditmars Blvd",[576.8457924124849,487.879923634621]],["Astoria Blvd",[554.9665257389165,504.6685953220444]],["30 Av",[541.2717394374689,516.8929127771517]],["Broadway",[526.0967410853315,534.317572236736]],["36 Av",[510.7786179037941,551.9425151383783]],["39 Av",[498.8013295543424,565.7234214502449]],["Queensboro Plaza",[470.7526294479447,573.8050340247594]],["Lexington Av/59 St",[368.84775096280464,531.3660267747491]],["5 Av/59 St",[345.9138802836107,523.8079621452562]],["57 St - 7 Av",[318.3774164085016,524.3244826011002]],["49 St",[305.2664287530425,541.0604481195676]],["Times Sq - 42 St",[295.4171806291803,559.4338186205102]],["34 St - Herald Sq",[290.91251494809234,577.3714847913499]],["28 St",[288.12158077607904,591.6829665374405]],["23 St",[285.66209357727763,606.4090701460518]],["14 St - Union Sq",[281.0519674956271,625.9700863209866]],["8 St - NYU",[273.28932872575643,644.9724171049128]],["Prince St",[254.1821640097559,666.051370946031]],["Canal St",[238.8414421710125,682.9243725037841]],["City Hall",[219.24463988098296,704.867707515906]],["Cortlandt St",[203.9867797855425,714.052635894083]],["Rector St",[195.27499741060885,726.1680272666646]],["Whitehall St",[196.58571953182516,740.6903336886292]],["Court St",[276.4983380570988,772.268356387411]],["Jay St - MetroTech",[298.47553224549443,779.0147460148313]],["DeKalb Av",[313.98574401371155,784.4434814181511]],["Atlantic Av - Barclays Ctr",[325.33780284557673,808.9307675189418]],["Union St",[309.1420984736763,831.2430457138308]],["9 St",[289.58672705529824,853.9734595158043]],["Prospect Av",[272.3740831065561,873.0636339146739]],["25 St",[252.71701773053667,890.6920905609048]],["36 St",[232.15977250684114,909.1497909322021]],["45 St",[207.8398508488632,930.9525761604247]],["53 St",[192.66861893959336,944.5507677532022]],["59 St",[178.1791131910322,957.576218976566]],["8 Av",[201.3879342002624,979.7057824523657]],["Fort Hamilton Pkwy",[225.37264244216075,992.6293350824062]],["New Utrecht Av",[259.263095451097,1015.6232797292099]],["18 Av",[281.6319996986944,1030.2791084458713]],["20 Av",[301.9255939209568,1041.7374295787097]],["Bay Pkwy",[313.8953493846732,1061.3968306023792]],["Kings Hwy",[319.52618148608667,1089.1273029667716]],["Avenue U",[324.10617602474224,1111.7909556214092]],["86 St",[327.52233971434197,1128.4882699493005]],["S.B. Coney Island",[316.2117117541282,1182.2450485482495]]],"lineName":"N","duration":60,"color":"#FCCC0A"},"Q":{"vertices":[["96 St",[444.5758514514922,455.26534627953737]],["86 St",[427.1183887157623,477.848182808434]],["72 St",[402.12050733988985,509.79514868995807]],["Lexington Av/59 St",[368.84775096280464,531.3660267747491]],["57 St - 7 Av",[318.3774164085016,524.3244826011002]],["Times Sq - 42 St",[295.4171806291803,559.4338186205102]],["34 St - Herald Sq",[290.91251494809234,577.3714847913499]],["28 St",[288.12158077607904,591.6829665374405]],["23 St",[285.66209357727763,606.4090701460518]],["14 St - Union Sq",[281.0519674956271,625.9700863209866]],["8 St - NYU",[273.28932872575643,644.9724171049128]],["Prince St",[254.1821640097559,666.051370946031]],["Canal St",[243.79431455447792,686.9440963234463]],["DeKalb Av",[313.98574401371155,784.4434814181511]],["Atlantic Av - Barclays Ctr",[325.33780284557673,808.9307675189418]],["7 Av",[349.60499430324666,832.1777017767843]],["Prospect Park",[387.7251626632882,886.415863385615]],["Parkside Av",[390.5537612640318,908.6297567317444]],["Church Av",[384.9530607056668,925.3727497394142]],["Beverley Rd",[379.2657319610776,948.1980346455335]],["Cortelyou Rd",[381.5293641302781,959.1046978765405]],["Newkirk Plaza",[385.6649184094239,979.6425350496185]],["Avenue H",[390.0113934896948,1000.0644186509685]],["Avenue J",[393.16013973504727,1014.9310720434792]],["Avenue M",[398.44822553459227,1041.0065707024028]],["Kings Hwy",[404.7193529251164,1072.447557361899]],["Avenue U",[411.5177823184534,1105.3713442415662]],["Neck Rd",[414.410410448108,1119.616064840296]],["Sheepshead Bay",[418.1994519825712,1148.955832230404]],["Brighton Beach",[391.00196796640927,1181.5458133733164]],["Ocean Pkwy",[364.16606246645426,1186.145305051595]],["W 8 St - NY Aquarium",[336.1512603459727,1186.7953478021607]],["Coney Island - Stillwell Av",[316.2117117541282,1182.2450485482495]]],"lineName":"Q","duration":60,"color":"#FCCC0A"},"R":{"vertices":[["Forest Hills - 71 Av",[831.1296503799357,675.3206291945377]],["67 Av",[800.2523516727945,658.3422152988476]],["63 Dr - Rego Park",[766.787506708976,646.6660420009579]],["Woodhaven Blvd",[738.0683797704193,635.2112346127334]],["Grand Av - Newtown",[707.9594354102107,621.4760069806453]],["Elmhurst Av",[689.903108256968,602.3647501141933]],["Jackson Hts - Roosevelt Av",[654.7960941987216,587.6421602501707]],["65 St",[627.9978531275503,577.013082842399]],["Northern Blvd",[599.549910076162,565.7128802164538]],["46 St",[571.9531831150629,553.6712774804107]],["Steinway St",[544.055140723747,551.6789842935732]],["36 St",[513.769173548276,568.6855081460233]],["Queens Plaza",[481.8975339215525,579.4586490823332]],["Lexington Av/59 St",[368.84775096280464,531.3660267747491]],["5 Av/59 St",[345.9138802836107,523.8079621452562]],["57 St - 7 Av",[318.3774164085016,524.3244826011002]],["49 St",[305.2664287530425,541.0604481195676]],["Times Sq - 42 St",[295.4171806291803,559.4338186205102]],["34 St - Herald Sq",[290.91251494809234,577.3714847913499]],["28 St",[288.12158077607904,591.6829665374405]],["23 St",[285.66209357727763,606.4090701460518]],["14 St - Union Sq",[281.0519674956271,625.9700863209866]],["8 St - NYU",[273.28932872575643,644.9724171049128]],["Prince St",[254.1821640097559,666.051370946031]],["Canal St",[238.8414421710125,682.9243725037841]],["City Hall",[219.24463988098296,704.867707515906]],["Cortlandt St",[203.9867797855425,714.052635894083]],["Rector St",[195.27499741060885,726.1680272666646]],["Whitehall St",[196.58571953182516,740.6903336886292]],["Court St",[276.4983380570988,772.268356387411]],["Jay St - MetroTech",[298.47553224549443,779.0147460148313]],["DeKalb Av",[313.98574401371155,784.4434814181511]],["Atlantic Av - Barclays Ctr",[325.33780284557673,808.9307675189418]],["Union St",[309.1420984736763,831.2430457138308]],["9 St",[289.58672705529824,853.9734595158043]],["Prospect Av",[272.3740831065561,873.0636339146739]],["25 St",[252.71701773053667,890.6920905609048]],["36 St",[232.15977250684114,909.1497909322021]],["45 St",[207.8398508488632,930.9525761604247]],["53 St",[192.66861893959336,944.5507677532022]],["59 St",[178.1791131910322,957.576218976566]],["Bay Ridge Av",[157.4787431380438,980.046615678323]],["77 St",[149.44492048100466,998.4059312008857]],["86 St",[138.56743345169767,1023.1953993370826]],["Bay Ridge - 95 St",[129.2341880019917,1044.5062603216325]]],"lineName":"R","duration":54,"color":"#FCCC0A"},"W":{"vertices":[["Astoria - Ditmars Blvd",[576.8457924124849,487.879923634621]],["Astoria Blvd",[554.9665257389165,504.6685953220444]],["30 Av",[541.2717394374689,516.8929127771517]],["Broadway",[526.0967410853315,534.317572236736]],["36 Av",[510.7786179037941,551.9425151383783]],["39 Av",[498.8013295543424,565.7234214502449]],["Queensboro Plaza",[470.7526294479447,573.8050340247594]],["Lexington Av/59 St",[368.84775096280464,531.3660267747491]],["5 Av/59 St",[345.9138802836107,523.8079621452562]],["57 St - 7 Av",[318.3774164085016,524.3244826011002]],["49 St",[305.2664287530425,541.0604481195676]],["Times Sq - 42 St",[295.4171806291803,559.4338186205102]],["34 St - Herald Sq",[290.91251494809234,577.3714847913499]],["28 St",[288.12158077607904,591.6829665374405]],["23 St",[285.66209357727763,606.4090701460518]],["14 St - Union Sq",[281.0519674956271,625.9700863209866]],["8 St - NYU",[273.28932872575643,644.9724171049128]],["Prince St",[254.1821640097559,666.051370946031]],["Canal St",[238.8414421710125,682.9243725037841]],["City Hall",[219.24463988098296,704.867707515906]],["Cortlandt St",[203.9867797855425,714.052635894083]],["Rector St",[195.27499741060885,726.1680272666646]],["Whitehall St",[196.58571953182516,740.6903336886292]]],"lineName":"W","duration":54,"color":"#FCCC0A"},"STATEN":{"vertices":[["Tottenville",[-703.46983550054,1409.4367467410195]],["Atlantic",[-679.8467057748485,1400.1710022371017]],["Arthur Kill",[-666.3138765171392,1396.035324845686]],["Nassau",[-652.2914096853474,1391.699364012238]],["Richmond Valley",[-617.5196090431804,1385.3078625891796]],["Pleasant Plains",[-574.9814031882751,1375.5431663523866]],["Prince's Bay",[-508.0027495032515,1364.661099333576]],["Huguenot",[-476.85426690894167,1335.9643472048313]],["Annadale",[-425.7172719654006,1312.120076365379]],["Eltingville",[-374.3166260204263,1297.5696599866544]],["Great Kills",[-324.7088068850155,1274.2735333044448]],["Bay Terrace",[-270.12551670882624,1256.110987479376]],["Oakwood Heights",[-230.25018596811208,1225.5062720341239]],["New Dorp",[-195.93789135692558,1196.096229752041]],["Grant City",[-167.6669711207462,1176.8233406341324]],["Jefferson Av",[-143.6897957645832,1160.5687581255465]],["Dongan Hills",[-116.39061779077996,1142.0934890312556]],["Old Town",[-83.53970301594501,1114.8162897199597]],["Grasmere",[-71.18200393589457,1091.9593811124666]],["Clifton",[-23.40467603883106,1028.0022019466214]],["Stapleton",[-37.566501257048,1004.8255425807287]],["Tompkinsville",[-36.33487443615993,973.0823738858513]],["St George",[-31.845274526596214,949.1924243666455]]],"lineName":"STATEN","duration":5,"color":"#808183"}};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map