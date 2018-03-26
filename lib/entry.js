import Map from "./map";
import MapView from "./map_view";

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const canvasContainerEl = document.getElementsByClassName("canvas-container")[0];
  const muteBtnEl = document.getElementsByClassName("mute")[0];
  const backgroundImageEl = document.getElementsByClassName("background-img-container")[0];
  const subwayBulletEls = document.getElementsByClassName("bullet-hidden");
  const controlNav = document.getElementsByClassName('controls')[0];

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

  const map = new Map(width, height, audioCtx);

  // canvasEl.addEventListener('mousemove', (e) => map.handleMouseMove(e))

  canvasEl.addEventListener('mouseup', e => map.handleClick(e));

  const mapView = new MapView(map, ctx, audioCtx);
  canvasEl.addEventListener('mousedown', e => mapView.handleDragStart(e, canvasEl), true);
  canvasEl.addEventListener('DOMMouseScroll', e => mapView.handleScroll(e));
  canvasEl.addEventListener('mousewheel', e => mapView.handleScroll(e));
  controlNav.addEventListener('click', e => mapView.handleClick(e, muteBtnEl));
  document.addEventListener('keypress', e => mapView.handleKey(e, subwayBulletEls));
  mapView.start();

});
