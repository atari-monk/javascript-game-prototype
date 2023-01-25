import { Entity } from "./entity.js";

export class EntityV2 extends Entity {
  constructor(
    gameSize,
    position,
    size,
    speed,
    inputHandler,
    renders,
    printer,
    textPos
  ) {
    super(gameSize, position, size, speed, inputHandler, renders[0], printer, textPos);
    this.renders = renders;
  }

  draw(ctx) {
    this.renders.forEach(element => {
      element.draw(ctx, this);
    });
    this.drawInfo();
  }
}