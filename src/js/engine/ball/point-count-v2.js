import { Printer } from "../printer.js";

export class PointCount2 extends Printer {
  #mid;
  #inGame;
  #size;
  #ball;
  #player1Points;
  #player2Points;

  constructor(views, ball) {
    super(views.get('points').ctx);
    this.#mid = views.get('points').size.x / 2;
    this.#size = views.get('game').size;
    this.#ball = ball;
    this.reset();
  }

  update() {
    if (this.#isPlayer2Score()) {
      this.#scorePlayer2();
    } else if (this.#isPlayer1Score()) {
      this.#scorePlayer1();
    } else if (this.#isGameOff()) {
      this.#restart();
    }
  }

  #isPlayer1Score() {
    return this.#ball.position.x >= this.#size.x && this.#inGame;
  }

  #scorePlayer1() {
    this.#inGame = false;
    this.#player1Points += 1;
  }

  #isPlayer2Score() {
    return this.#ball.position.x <= 0 && this.#inGame;
  }

  #scorePlayer2() {
    this.#inGame = false;
    this.#player2Points += 1;
  }

  #isGameOff() {
    return this.#inGame === false;
  }

  #restart() {
    this.#inGame = true;
    this.#ball.restart();
  }

  draw() {
    this.#setFont();
    this.#printPlayer1Points();
    this.#printDivider();
    this.#printPlayer2Points();
    this.#resetFont();
  }

  #setFont() {
    this.setPrint('left', 'bold 46px Arial');
  }

  #printPlayer1Points() {
    this.print(this.#player1Points, this.#mid - 80, 60, 'green');
  }

  #printDivider() {
    this.print('-', this.#mid, 60, 'white');
  }

  #printPlayer2Points() {
    this.print(this.#player2Points, this.#mid + 65, 60, 'blue');
  }

  #resetFont() {
    this.setPrint('left', 'normal 12px Arial');
  }  

  reset() {
    this.#ball.clearStart();
    this.#inGame = true;
    this.#player1Points = 0;
    this.#player2Points = 0;
  }
}