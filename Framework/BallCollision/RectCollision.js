import { Vector2 } from '../../Framework/Vector2.js'

export class RectCollision {

    constructor() {
        this.playerLeftTop = new Vector2(0, 0);
        this.ballLeftTop = new Vector2(0, 0);
    }

    calculateCollision(player, ball) {
        this.playerLeftTop = new Vector2(
            player.position.x - player.size.x / 2
            , player.position.y - player.size.y / 2);
        this.ballLeftTop = new Vector2(
            ball.position.x - ball.size.x / 2
            , ball.position.y - ball.size.y / 2);
        //detects collison from left side of player
        if (this.playerLeftTop.x < this.ballLeftTop.x + ball.size.x) 
        {
            player.color = 'red';
        } else {
            player.color = 'yellow';
        }
    }
}