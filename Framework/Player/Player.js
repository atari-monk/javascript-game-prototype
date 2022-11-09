import { Vector2 } from "../Vector2.js";

export class Player {
    constructor(game, position, size, speed
        , inputHandler, playerRender) {
        this.game = game;
        this.position = position;
        this.size = size;
        this.speed = speed;
        this.inputHandler = inputHandler;
        this.playerRender = playerRender;
        this.angle = 0;
        this.direction = new Vector2(
            this.position.x
            , this.position.y + 100);
        this.color = 'green';
    }
    update(timer, input) {
        this.#handleInput(input);
        this.#setPosition(timer);
        this.#setConstraints();   
    }
    #handleInput(input) {
        this.inputHandler.handleInput(this);
    }
    #setPosition(timer) {
        this.position.y -= timer.deltaTime * this.speed.y;
    }
    #setConstraints() {
        if (this.position.y <= this.size.y/2)
        {
            this.position.y = this.size.y/2;
        }
        if (this.position.y >= this.game.size.y - this.size.y/2)
        {
            this.position.y = this.game.size.y - this.size.y/2;
        }
    }
    draw(ctx) {
        this.playerRender.draw(ctx, this);
    }
}