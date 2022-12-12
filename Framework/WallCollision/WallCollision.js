
export class WallCollision {

  constructor() {
    this.debugCondition = false;
  }

  calculateCollision(ball) {
    if (ball.size.x != ball.size.y)
      throw 'This collider works only for rectangles!';
    var rectSize = ball.size.x;
    if (ball.position.x <= rectSize / 2) {
      ball.position.x = rectSize / 2;
      //this.debugCondition = true;
      ball.reverseXSpeed();
    }
    if (ball.position.x >= ball.gameSize.x - rectSize / 2) {
      ball.position.x = ball.gameSize.x - rectSize / 2;
      //this.debugCondition = true;
      ball.reverseXSpeed();
    }
    if (ball.position.y <= rectSize / 2) {
      ball.position.y = rectSize / 2;
      //this.debugCondition = true;
      ball.reverseYSpeed();
    }
    if (ball.position.y >= ball.gameSize.y - rectSize / 2) {
      ball.position.y = ball.gameSize.y - rectSize / 2;
      //this.debugCondition = true;
      ball.reverseYSpeed();
    }
  }
}