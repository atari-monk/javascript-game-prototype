import { BallV3 } from './Ball/BallV3.js';

export class Game {
  constructor(gameFactory) {
    this.gameFactory = gameFactory;
    this.screen = gameFactory.screen;
    this.timer = this.gameFactory.timer;
    this.input = this.gameFactory.input;
    this.ball = this.gameFactory.ball;
    this.player1 = this.gameFactory.player1;
    this.player2 = this.gameFactory.player2;
    this.collisionLeft = this.gameFactory.collisionLeft;
    this.collisionLeftRender = this.gameFactory.collisionLeftRender;
    this.collisionRight = this.gameFactory.collisionRight;
    this.collisionRightRender = this.gameFactory.collisionRightRender;
    this.printer = this.gameFactory.printer;
    this.pointCount = this.gameFactory.pointCount;
    this.name = 'Game';
  }

  update(timestamp) {
    this.timer.set(timestamp);
    if (false) this.timer.log();
    if (this.ball != null) this.ball.update(this.timer);
    if (this.player1 != null) this.player1.update(this.timer);
    if (this.player2 != null) this.player2.update(this.timer);
    if (this.collisionLeft != null && this.ball != null && this.player1 != null)
      this.collisionLeft.calculateCollision(this.player1, this.ball);
    if (
      this.collisionRight != null &&
      this.ball != null &&
      this.player2 != null
    )
      this.collisionRight.calculateCollision(this.player2, this.ball);
    this.pointCount?.update();
  }

  draw() {
    this._clearCtx();
    if (this.ball != null) this.ball.draw(this.screen.gameCtx);
    if (this.player1 != null) this.player1.draw(this.screen.gameCtx);
    if (this.player2 != null) this.player2.draw(this.screen.gameCtx);
    if (this.collisionLeftRender != null) this.collisionLeftRender.draw();
    if (this.collisionRightRender != null) this.collisionRightRender.draw();
    this.collisionLeft?.draw();
    this.collisionRight?.draw();
    this.pointCount?.draw();

    this._drawPoints(this.screen.gameCtx);
    if (this.ball instanceof BallV3) this.ball?.drawText(this.screen.textCtx);
    this._print();
  }

  _clearCtx() {
    this.screen.gameCtx.clearRect(0, 0, this.screen.gameSize.x, this.screen.gameSize.y);
    this.screen.textCtx.clearRect(0, 0, this.screen.textSize.x, this.screen.textSize.y);
  }

  _print() {
    const p = this.printer;
    p?.setPrint('left', 'bold 20px Arial');
    const data = this.getInfo();
    p?.print(`${this.name}:`, 0, 20, 'grey');
    for (let i = 0; i < data.length; i++) {
      p?.print(`${data[i].join('     ')}`
        , 0, 20 + (i + 1) * 40, this.infoColor);
    }
    p?.setPrint('left', 'normal 12px Arial');
  }

  getInfo() {
    return [
      [
        "   Game            Text    "
      ],
      [
        `(${this.screen.gameSize.x}, ${this.screen.gameSize.y})`,
        `(${this.screen.textSize.x}, ${this.screen.textSize.y})`
      ],
      [
        "    dim             vel                pos    "
      ]
    ];
  }

  _drawPoints(ctx, isOn = false) {
    if (!isOn) return;
    ctx.fillStyle = 'white';
    ctx.fillRect(this.screen.gameSize.x / 2 - .5, this.screen.gameSize.y / 2 - .5, 1, 1);
  }
}