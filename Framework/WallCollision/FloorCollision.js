
export class FloorCollision {

    constructor() {
        this.debugCondition = false;
    }

    calculateCollision(ball) {
        if (ball.size.x != ball.size.y)
            throw 'This collider works only for rectangles!';
        var rectSize = ball.size.x;
        if (ball.position.y <= rectSize / 2) {
            ball.position.y = rectSize / 2;
            //this.debugCondition = true;
            ball.reverseYSpeed();
        }
        if (ball.position.y >= ball.game.size.y - rectSize / 2) {
            ball.position.y = ball.game.size.y - rectSize / 2;
            //this.debugCondition = true;
            ball.reverseYSpeed();
        }
    }
}
