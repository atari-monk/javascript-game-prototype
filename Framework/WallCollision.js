
export class WallCollision {

    calculateCollision(ball) {
        if(ball.size.x != ball.size.y)
            throw 'This collider works only for rectangles!';
        var rectSize = ball.size.x;
        if (ball.position.x >= ball.game.size.x - rectSize/2) {
            ball.position.x = ball.game.size.x - rectSize/2;
            ball.reverseXSpeed();
        }
        if (ball.position.x <= rectSize) {
            ball.position.x = rectSize;
            ball.reverseXSpeed();
        }
        if (ball.position.y >= ball.game.size.y - rectSize) {
            ball.position.y = ball.game.size.y - rectSize;
            ball.reverseYSpeed();
        }
        if (ball.position.y <= rectSize) {
            ball.position.y = rectSize;
            ball.reverseYSpeed();
        }
    }
}