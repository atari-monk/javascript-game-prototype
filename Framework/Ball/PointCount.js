import { Printer } from "../Printer.js";

export class PointCount extends Printer {
  constructor(screen, ball) {
    super(screen.textCtx);
    this.size = screen.gameSize;
    this.ball = ball;
    this.inGame = true;
    this.player1Points = 0;
    this.player2Points = 0;
  }

  update() {
    if (this.ball.position.x <= 0 && this.inGame) {
      this.inGame = false;
      this.player2Points += 1;
    } else if (this.ball.position.x >= this.size.x && this.inGame) {
      this.inGame = false;
      this.player1Points += 1;
    } else if (this.inGame === false) {
      this.ball.position.x = this.size.x / 2;
      this.ball.position.y = this.size.y / 2;
      this.ball.bearing.getBallDir();
      this.ball.setBearingSpeed();
      this.inGame = true;
    }
  }

  draw() {
    this.setPrint('left', 'bold 46px Arial');
    this.print(this.player1Points, 700, 60, 'green');
    this.print(this.player2Points, 1400, 60, 'blue');
    this.setPrint('left', 'normal 12px Arial');
  }
}