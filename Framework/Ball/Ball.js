import { Entity } from "../Entity/Entity.js";

export class Ball extends Entity {
  constructor(
    gameSize,
    position,
    size,
    speed,
    inputHandler,
    render,
    printer,
    textPos,
    wallCollision
  ) {
    super(gameSize, position, size, speed, inputHandler, render, printer, textPos);
    this.name = 'Ball';
    this.wallCollision = wallCollision;
  }

  update(timer) {
    this.inputHandler?.handleInput(this);
    this.#setPosition(timer);
    this.wallCollision.calculateCollision(this);
  }

  #setPosition(timer) {
    this.position.x += timer.deltaTime * this.speed.x;
    this.position.y += timer.deltaTime * this.speed.y;
  }

  getInfo() {
    let info = super.getInfo();
    info[1].push(`wall coll (${this.wallCollision.log})`);
    return info;
  }
}