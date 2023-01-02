import { Entity } from "../Entity/Entity.js";

export class Player extends Entity {
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
    this.name = 'Player';
  }
}