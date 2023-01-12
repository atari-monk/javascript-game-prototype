
export class Entity {
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
    this.gameSize = gameSize;
    this.position = position;
    this.size = size;
    this.speed = speed;
    this.inputHandler = inputHandler;
    this.render = render;
    this.printer = printer;
    this.textPos = textPos;
    this.color = "green";
    this.infoColor = "white";
  }

  update(timer) {
    this.inputHandler.handleInput(this);
    this.position.y -= timer.deltaTime * this.speed.y;
    this.#setConstraints();
  }

  reverseXSpeed() {
    this.speed.x *= -1;
  }

  reverseYSpeed() {
    this.speed.y *= -1;
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
    this.render.draw(ctx, this);
    this.drawInfo();
  }

  drawInfo() {
    const p = this.printer;
    const data = this.getInfo();
    p?.print(`${this.name}:`, this.textPos.x, this.textPos.y, this.infoColor);
    for (let i = 0; i < data.length; i++) {
      p?.print(`${data[i].join('   ')}`
        , this.textPos.x, this.textPos.y + (i * 40) + 40, this.infoColor);
    }
  }

  getInfo() {
    return [
      [
        `(${this.size.x.toFixed(0)}, ${this.size.y.toFixed(0)})`,
        ` (${this.speed.x.toFixed(2)}, ${this.speed.y.toFixed(2)}) `,
        `(${this.position.x.toFixed(0)}, ${this.position.y.toFixed(0)})`
      ]
    ];
  }
}