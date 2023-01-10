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
    textPos,
    name = 'Player'
  ) {
    super(gameSize, position, size, speed, inputHandler, render, printer, textPos);
    this.name = name;
  }
}