import Map from "./map";
import MapView from "./map_view";

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const width = 1200;
  const height = 1200;
  canvasEl.width = width;
  canvasEl.height = height;

  const ctx = canvasEl.getContext("2d");
  ctx.lineCap = "round";

  const map = new Map(width, height);
  new MapView(map, ctx).start();
});
