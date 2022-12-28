import { Vector2 } from "../Vector2.js";

export class Player {
  constructor(
    gameSize,
    position,
    size,
    speed,
    inputHandler,
    playerRender,
    printer
  ) {
    this.gameSize = gameSize;
    this.position = position;
    this.size = size;
    this.speed = speed;
    this.inputHandler = inputHandler;
    this.playerRender = playerRender;
    this.angle = 0;
    this.direction = new Vector2(this.position.x, this.position.y + 100);
    this.color = "green";
    this.printer = printer;
  }

  update(timer) {
    this.#handleInput();
    this.#setPosition(timer);
    this.#setConstraints();
  }

  #handleInput() {
    this.inputHandler.handleInput(this);
  }

  #setPosition(timer) {
    this.position.y -= timer.deltaTime * this.speed.y;
  }

  #setConstraints() {
    if (this.position.y <= this.size.y / 2) {
      this.position.y = this.size.y / 2;
    }
    if (this.position.y >= this.gameSize.y - this.size.y / 2) {
      this.position.y = this.gameSize.y - this.size.y / 2;
    }
  }

  draw(ctx) {
    this.playerRender.draw(ctx, this);
    this.printer?.print('Player: ' + this.getInfo().join(', '), 10, 60, "yellowgreen");
  }

  getInfo() {
    return [
      `position (${this.position.x.toFixed(1)}, ${this.position.y.toFixed(1)})`,
      `speed (${this.speed.x.toFixed(1)}, ${this.speed.y.toFixed(1)})`,
      `size (${this.size.x.toFixed(1)}, ${this.size.y.toFixed(1)})`,
    ];
  }
}
