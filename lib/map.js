import Train from './train.js';

Map.TRAINS_VERTICES = [
  // array of train vertices
]

class Map {
  constructor() {
    this.trains = [];

    this.addTrains();
  }

  addTrains() {
    this.TRAINS_VERTICES.each((train_vertices) => {
      this.trains.push(new Train(train_vertices));
    });
  }

  checkIntersections() {
    // train heads
    // train paths
    for (let i = 0; i < this.trains; i++) {
      for (let j = 0; j < this.train_paths; j++) {
        const obj1 = allObjects[i];
        const obj2 = allObjects[j];

        if (obj1.isCollidedWith(obj2)) {
          const collision = obj1.collideWith(obj2);
          if (collision) return;
        }
      }
    }
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Map.DIM_X, Map.DIM_Y);
    ctx.fillStyle = Map.BG_COLOR;
    ctx.fillRect(0, 0, Map.DIM_X, Map.DIM_Y);

    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

  moveObjects(delta) {
    this.allObjects().forEach((object) => {
      object.move(delta);
    });
  }

  step(delta) {
    this.moveObjects(delta);
    this.checkCollisions();
  }
}

export default Map;
