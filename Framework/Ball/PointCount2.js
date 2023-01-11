import { Printer } from "../Printer.js";

export class PointCount2 extends Printer {
  #mid;

  constructor(views, ball) {
    super(views.get('points').ctx);
    this.#mid = views.get('points').size.x / 2;
    this.size = views.get('game').size;
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
    this.print(this.player1Points, this.#mid - 80, 60, 'green');
    this.print('-', this.#mid, 60, 'white');
    this.print(this.player2Points, this.#mid + 65, 60, 'blue');
    this.setPrint('left', 'normal 12px Arial');
  }
}