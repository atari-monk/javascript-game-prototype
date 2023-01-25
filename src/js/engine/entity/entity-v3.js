import { Entity } from "./entity.js";

export class EntityV3 extends Entity {
  constructor(
    gameSize,
    position,
    size,
    speed,
    inputHandler,
    renderers,
    printer,
    textPos
  ) {
    super(gameSize, position, size, speed, inputHandler, renderers['graphics'], printer, textPos);
  }

  draw(ctx) {
    this.renderers['graphics'].draw(ctx, this);
  }

  drawText(ctx) {
    this.renderers['text'].draw(ctx, this);
  }
}