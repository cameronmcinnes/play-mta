import Map from "./map";
import MapView from "./map_view";

document.addEventListener("DOMContentLoaded", () => {
  const canvasContainerEl = document.getElementsByClassName("canvas-container")[0];
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const muteBtnEl = document.getElementsByClassName("mute")[0];
  const backgroundImageEl = document.getElementsByClassName("background-img-container")[0];
  const subwayBulletEls = document.getElementsByClassName("bullet-hidden");
  const ctrlNav = document.getElementsByClassName('controls')[0];
  const ctrlToggle = document.getElementsByClassName('controls-toggle')[0];
  const modalScreen = document.getElementsByClassName('modal-screen')[0];
  const modalContent = document.getElementsByClassName('modal-content')[0];
  const arrowTabEl = document.getElementsByClassName('arrow-tab')[0];
  const leftNavEl = document.getElementsByClassName('left-nav')[0];

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

  const map = new Map(width, height, audioCtx);

  // modalScreen.addEventListener('click', e => {
  //   e.stopPropagation();
  //   if (e.target != e.currentTarget) {return null;}
  //   modalScreen.classList.add('hidden');
  //   modalContent.classList.add('hidden');
  // });

  arrowTabEl.addEventListener('click', e => {
    e.stopPropagation()
    modalContent.classList.toggle('hidden');
    // modalScreen.classList.toggle('hidden');
  });

  canvasEl.addEventListener('mouseup', e => map.handleClick(e, ctx));
  canvasEl.addEventListener('mousemove', e => {
    if (map.handleHover(e, ctx)) {
      canvasEl.style.cssText = 'cursor:pointer;';
    } else {
      canvasEl.style.cssText = 'cursor:inherit;';
    }
  });

  const mapView = new MapView(map, ctx, audioCtx);
  canvasEl.addEventListener('mousedown', e => mapView.handleDragStart(e, canvasEl), true);

  canvasEl.addEventListener('wheel', e => mapView.handleScroll(e));
  canvasEl.addEventListener('DOMMouseScroll', e => mapView.handleScroll(e));

  leftNavEl.addEventListener('click', e => mapView.handleClick(e, muteBtnEl, ctrlNav, ctrlToggle));
  document.addEventListener('keypress', e => mapView.handleKey(e, subwayBulletEls, modalContent));
  window.addEventListener('resize', e => mapView.handleResize(e, canvasContainerEl));
  mapView.start();

});
