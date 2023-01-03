import { Entity } from "./Entity.js";

export class EntityV3 extends Entity {
  constructor(
    gameSize,
    position,
    size,
    speed,
    inputHandler,
    render,
    printer,
    textPos
  ) {
    super(gameSize, position, size, speed, inputHandler, render, printer, textPos);
  }

  draw(ctx) {
    this.render.draw(ctx, this);
  }
}