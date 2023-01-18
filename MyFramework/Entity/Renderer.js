
export class Renderer {
  constructor(
    renders,
    printer,
    textPos
  ) {
    this.renders = renders;
    this.printer = printer;
    this.textPos = textPos;
  }

  draw(ctx, entity) {
    this.renders.forEach(element => {
      element.draw(ctx, entity);
    });
  }
}