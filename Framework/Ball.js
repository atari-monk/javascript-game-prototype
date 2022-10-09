import { SphericalObject } from "./SphericalObject.js";

export class Ball extends SphericalObject {
    constructor(game, position, radius, speed) {
        super(game, position, radius, speed);
    }
    update(timer, input) {
        this.#handleInput(input);
        this.#setPosition(timer);
        this.#setConstraints();
    }
    #handleInput(input) {
        if (input.keys.indexOf("ArrowLeft") > -1) {
            this.speed.x = .1;
        }
        else if (input.keys.indexOf("ArrowRight") > -1) {
            this.speed.x = -.1;
        }
        else if (input.keys.indexOf("ArrowUp") > -1) {
            this.speed.y = .1;
        }
        else if (input.keys.indexOf("ArrowDown") > -1) {
            this.speed.y = -.1;
        }
        else {
            this.speed.x = 0;
            this.speed.y = 0;
        }
    }
    #setPosition(timer) {
        this.position.x -= timer.deltaTime * this.speed.x;
        this.position.y -= timer.deltaTime * this.speed.y;
    }
    #setConstraints() {
        this.#setWallConstraints();
        this.#setPlayerCollision();
    }
    #setWallConstraints() {
        if (this.position.x >= this.game.size.x - this.radius) {
            this.position.x = this.game.size.x - this.radius;
            this.#reverseXSpeed();
        }
        if (this.position.x <= this.radius) {
            this.position.x = this.radius;
            this.#reverseXSpeed();
        }
        if (this.position.y >= this.game.size.y - this.radius) {
            this.position.y = this.game.size.y - this.radius;
            this.#reverseYSpeed();
        }
        if (this.position.y <= this.radius) {
            this.position.y = this.radius;
            this.#reverseYSpeed();
        }
    }
    #reverseXSpeed() {
        this.speed.x *= -1;
    }
    #reverseYSpeed() {
        this.speed.y *= -1;
    }
    #setPlayerCollision() {
        if (this.isBallPlayerXCollision() && this.isBallPlayerYCollision()) {
            console.log('x1,y1: ' + this.position.x + ',' + this.position.y);
            console.log('x2,y2: ' + this.game.player.position.x + ',' + this.game.player.position.y);
            //this.#reverseXSpeed();
        }
    }
    isBallPlayerYCollision() {
        return (this.position.y + this.radius >= this.game.player.position.y - this.game.player.size.y / 2)
            && (this.position.y - this.radius <= this.game.player.position.y + this.game.player.size.y / 2);
    }
    isBallPlayerXCollision() {
        return this.position.x <= this.game.player.position.x + this.radius * 2;
    }
    draw(ctx) {
        const circle = new Path2D();
        circle.arc(
            this.position.x,
            this.position.y,
            this.radius,
            0,
            2 * Math.PI
        );
        ctx.fill(circle);
    }
}