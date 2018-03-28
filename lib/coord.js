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

  scaleToScreen(width, height) {
    let scaledX
    let scaledY

    if (width > height) {
      scaledX = this.x * (width / 1200);
      scaledY = this.y * (width / 1200);
    } else {
      scaledX = this.x * (height / 1200);
      scaledY = this.y * (height / 1200);
    }

    this.x = scaledX;
    this.y = scaledY;
  }
}

export default Coord;
