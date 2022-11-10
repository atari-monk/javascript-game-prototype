import { Vector2 } from '../Vector2.js';

export class RectCollisionTest3 {

    constructor() {
        this.playerLeftTop = new Vector2(0, 0);
        this.ballLeftTop = new Vector2(0, 0);
    }

    //efficient version of rect collision math
    calculateCollision(player, ball) {
        this.playerLeftTop = new Vector2(
            player.position.x - player.size.x / 2,
            player.position.y - player.size.y / 2);
        this.ballLeftTop = new Vector2(
            ball.position.x - ball.size.x / 2,
            ball.position.y - ball.size.y / 2);

        if (this.playerLeftTop.x > this.ballLeftTop.x + ball.size.x
            || this.playerLeftTop.x + player.size.x < this.ballLeftTop.x
            || this.playerLeftTop.y > this.ballLeftTop.y + ball.size.y
            || this.playerLeftTop.y + player.size.y < this.ballLeftTop.y) {
            player.color = 'yellow';
        } else {
            player.color = 'red';
        }
    }
}