
export class WallCollision {

    calculateCollision(ball) {
        if (ball.position.x >= ball.game.size.x - ball.radius) {
            ball.position.x = ball.game.size.x - ball.radius;
            ball.reverseXSpeed();
        }
        if (ball.position.x <= ball.radius) {
            ball.position.x = ball.radius;
            ball.reverseXSpeed();
        }
        if (ball.position.y >= ball.game.size.y - ball.radius) {
            ball.position.y = ball.game.size.y - ball.radius;
            ball.reverseYSpeed();
        }
        if (ball.position.y <= ball.radius) {
            ball.position.y = ball.radius;
            ball.reverseYSpeed();
        }
    }
}