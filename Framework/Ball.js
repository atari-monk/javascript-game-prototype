import { GameObject } from "./GameObject.js";

export class Ball extends GameObject {
    constructor(game, position, size) {
        super(game, position, size);
    }
    update(timer) { }
    draw(ctx) {
        const circle = new Path2D();
        circle.arc(
            this.position.x,
            this.position.y,
            this.size.x,
            0,
            2 * Math.PI
        );
        ctx.fill(circle);
    }
}
