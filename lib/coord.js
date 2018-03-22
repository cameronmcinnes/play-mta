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

export default Coord;
