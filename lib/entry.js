const Map = require("./map");
const MapView = require("./map_view");

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = Map.DIM_X;
  canvasEl.height = Map.DIM_Y;

  const ctx = canvasEl.getContext("2d");
  const map = new Map();
  new MapView(map, ctx).start();
});
