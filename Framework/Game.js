export class Game {
  constructor(gameFactory) {
    this.gameFactory = gameFactory;
    this.gameCtx = gameFactory.gameCtx;
    this.gameSize = gameFactory.gameSize;
    this.textCtx = gameFactory.textCtx;
    this.textSize = gameFactory.textSize;
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
  }

  draw() {
    this.#clearCtx();
    if (this.ball != null) this.ball.draw(this.gameCtx);
    if (this.player1 != null) this.player1.draw(this.gameCtx);
    if (this.player2 != null) this.player2.draw(this.gameCtx);
    if (this.collisionLeftRender != null) this.collisionLeftRender.draw();
    if (this.collisionRightRender != null) this.collisionRightRender.draw();
  }
  
  #clearCtx() {
    this.gameCtx.clearRect(0, 0, this.gameSize.x, this.gameSize.y);
    this.textCtx.clearRect(0, 0, this.textSize.x, this.textSize.y);
  }
}
