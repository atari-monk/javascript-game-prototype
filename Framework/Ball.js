import { GameObject } from "./GameObject.js";

export class Ball extends GameObject {
    constructor(game, position, size, speed) {
        super(game, position, size, speed);
    }
    update(timer, input) {
        this.#handleInput(input);
        this.#setPosition(timer);
        this.#setConstraints();   
    }
    #handleInput(input) {
        if (input.keys.indexOf("ArrowLeft") > -1) {
            this.speed.x = .1;
        } else this.speed.x = 0;
    }
    #setPosition(timer) {
        this.position.x -= timer.deltaTime * this.speed.x;
    }
    #setConstraints() {
        if (this.position.y <= 0)
        {
            this.position.y = 0;
        }
        if (this.position.y >= this.game.height - this.size.y)
        {
            this.position.y = this.game.height - this.size.y;
        }
    }
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
