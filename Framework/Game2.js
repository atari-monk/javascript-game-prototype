import { Game } from './Game.js';
import { BallV3 } from './Ball/BallV3.js';

export class Game2 extends Game {

  constructor(gameFactory) {
    super(gameFactory);
    this.views = gameFactory.views;
    this.infoCanvas = this.views.get('info');
    this.gameCanvas = this.views.get('game');
    this.pointsCanvas = this.views.get('points');
  }

  draw() {
    this._clearCtx();
    if (this.ball != null) this.ball.draw(this.gameCanvas.ctx);
    if (this.player1 != null) this.player1.draw(this.gameCanvas.ctx);
    if (this.player2 != null) this.player2.draw(this.gameCanvas.ctx);
    if (this.collisionLeftRender != null) this.collisionLeftRender.draw();
    if (this.collisionRightRender != null) this.collisionRightRender.draw();
    this.collisionLeft?.draw();
    this.collisionRight?.draw();
    this.pointCount?.draw();

    this._drawPoints(this.gameCanvas.ctx);
    if (this.ball instanceof BallV3) this.ball?.drawText(this.infoCanvas.ctx);
    this._print();
  }

  getInfo() {
    return [
      [
        "   Game            Text    "
      ],
      [
        `(${this.gameCanvas.size.x}, ${this.gameCanvas.size.y})`,
        `(${this.infoCanvas.size.x}, ${this.infoCanvas.size.y})`
      ],
      [
        "    dim             vel                pos    "
      ]
    ];
  }

  _clearCtx() {
    this.gameCanvas.ctx.clearRect(0, 0, this.gameCanvas.size.x, this.gameCanvas.size.y);
    this.infoCanvas.ctx.clearRect(0, 0, this.infoCanvas.size.x, this.infoCanvas.size.y);
    this.pointsCanvas.ctx.clearRect(0, 0, this.pointsCanvas.size.x, this.pointsCanvas.size.y);
  }
}