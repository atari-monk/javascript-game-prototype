import { Game } from './game.js';
import { BallV3 } from './ball/ball-v3.js';

export class Game2 extends Game {

  #print;

  constructor(gameFactory, print = true) {
    super(gameFactory);
    this.#print = print;
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
    if (this.input?.draw) this.input?.draw();
    this.#print ? this._print() : {};
  }

  getInfo() {
    return [
      [
        `${this.name} - game-canvas (${this.gameCanvas.size.x}, ${this.gameCanvas.size.y}), info-canvas (${this.infoCanvas.size.x}, ${this.infoCanvas.size.y}), points-canvas (${this.pointsCanvas.size.x}, ${this.pointsCanvas.size.y})`
      ]
    ];
  }

  _clearCtx() {
    this.gameCanvas.ctx.clearRect(0, 0, this.gameCanvas.size.x, this.gameCanvas.size.y);
    this.infoCanvas.ctx.clearRect(0, 0, this.infoCanvas.size.x, this.infoCanvas.size.y);
    this.pointsCanvas.ctx.clearRect(0, 0, this.pointsCanvas.size.x, this.pointsCanvas.size.y);
  }
}