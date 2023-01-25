
export class PrinterV2 {
  
  setPrint(ctx, align, font) {
    ctx.textAlign = align;
    ctx.font = font;
  }

  print(ctx, text, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }

  printInLines(ctx, infoArray, color, dy, x0, y0) {
    let y = y0;
    infoArray.forEach(element => {
      this.print(ctx, element, x0, y, color);
      y += dy;
    });
  }
}
