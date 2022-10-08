import { GameObject } from "./GameObject.js";

export class Player extends GameObject {
    constructor(game, position, size, speed) {
        super(game, position, size, speed);
    }
    update(timer, input) {
        if (input.keys.indexOf("ArrowUp") > -1) {
            this.speed.y = 1;
        } else if (input.keys.indexOf("ArrowDown") > -1) {
            this.speed.y = -1;
        } else this.speed.y = 0;
        this.position.y -= timer.deltaTime * this.speed.y;
    }
    draw(ctx) {
        ctx.fillRect(
            this.position.x,
            this.position.y,
            this.size.x,
            this.size.y
        );
    }
}
