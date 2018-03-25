import Map from "./map";
import MapView from "./map_view";

document.addEventListener("DOMContentLoaded", () => {
  // TODO refactor for one controls evnt listener
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const canvasContainerEl = document.getElementsByClassName("canvas-container")[0];
  const muteBtnEl = document.getElementsByClassName("mute")[0];
  const trainCtrlEl = document.getElementsByClassName("train-controls")[0];
  const resetBtnEl = document.getElementsByClassName("reset")[0];

  // use canvasEl.clientHeight and canvasEl.clientWidth but then have
  // to make data point relative
  const width = canvasContainerEl.clientHeight;
  const height = canvasContainerEl.clientHeight;
  canvasEl.width = width;
  canvasEl.height = height;

  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();

  const ctx = canvasEl.getContext("2d");
  // ctx.translate(0.5, 0.5);
  ctx.lineCap = "round";

  const map = new Map(width, height, audioCtx);

  // canvasEl.addEventListener('mousemove', (e) => map.handleMouseMove(e))
  canvasEl.addEventListener('click', e => map.handleClick(e));
  resetBtnEl.addEventListener('click', e => map.resetMap(e));
  document.addEventListener('keypress', e => map.handleKey(e));
  trainCtrlEl.addEventListener('click', e => {
    const dir = parseInt(e.target.dataset.dir);
    map.startPaths(dir);
  })

  // ctx.translate(0.5, 0.5)
  const mapView = new MapView(map, ctx, audioCtx);
  muteBtnEl.addEventListener('click', e => mapView.toggleCtxMute());
  mapView.start();
});
