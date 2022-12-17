
export class WallCollision {

  constructor() {
    this.log = '';
  }

  calculateCollision(ball) {
    if (ball.size.x != ball.size.y)
      throw 'This collider works only for rectangles!';

    const ballSize = ball.size.x / 2;
    const gameSize = ball.gameSize;

    if (ball.position.x <= ballSize) {
      ball.position.x = ballSize;
      this.log = 'left';
      ball.reverseXSpeed();
    }
    if (ball.position.x >= gameSize.x - ballSize) {
      ball.position.x = gameSize.x - ballSize;
      this.log = 'right';
      ball.reverseXSpeed();
    }
    if (ball.position.y <= ballSize) {
      ball.position.y = ballSize;
      this.log = 'top';
      ball.reverseYSpeed();
    }
    if (ball.position.y >= gameSize.y - ballSize) {
      ball.position.y = gameSize.y - ballSize;
      this.log = 'bottom';
      ball.reverseYSpeed();
    }
  }
}