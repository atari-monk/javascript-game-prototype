import { EntityV3 } from "../entity/entity-v3.js";

export class BallV3 extends EntityV3 {
  constructor(
    gameSize,
    position,
    size,
    speed,
    inputHandler,
    renderers,
    printer,
    textPos,
    wallCollision
  ) {
    super(gameSize, position, size, speed, inputHandler, renderers['graphics'], printer, textPos, wallCollision);
    this.name = 'Ball';
    this.wallCollision = wallCollision;
    this.renderers = renderers;
  }

  update(timer) {
    this.inputHandler?.handleInput(this);
    this.#setPosition(timer);
    this.wallCollision?.calculateCollision(this);
  }

  #setPosition(timer) {
    this.position.x += timer.deltaTime * this.speed.x;
    this.position.y += timer.deltaTime * this.speed.y;
  }

  getInfo() {
    const info = super.getInfo();
    info[0][0] = info[0][0].concat(`, wall (${this.wallCollision.log})`); 
    return info;
  }
}