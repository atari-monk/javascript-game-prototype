export class Printer {
  constructor(ctx) {
    this.ctx = ctx;
    this.setPrint('left', 'bold 18px Arial');
  }

  setPrint(align, font) {
    this.ctx.textAlign = align;
    this.ctx.font = font;
  }

  print(text, x, y, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillText(text, x, y);
  }

  printInfo(infoArray, color, dy, x0, y0) {
    let y = y0;
    infoArray.forEach(element => {
      this.print(element, x0, y, color);
      y += dy;
    });
  }
}