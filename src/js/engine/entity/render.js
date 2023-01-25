
export class Render {

  drawRect(ctx, x, y, size, col) {
    ctx.fillStyle = col;
    ctx.fillRect(
      x - size / 2,
      y - size / 2,
      size,
      size
    );
  }
}