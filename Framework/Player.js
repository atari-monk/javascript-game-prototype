
export class Player {
    constructor(game, position, size, speed, inputHandler) {
        this.game = game;
        this.position = position;
        this.size = size;
        this.speed = speed;
        this.inputHandler = inputHandler;
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
        if (this.position.y <= 0)
        {
            this.position.y = 0;
        }
        if (this.position.y >= this.game.size.y - this.size.y)
        {
            this.position.y = this.game.size.y - this.size.y;
        }
    }
    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(
            this.position.x - this.size.x/2,
            this.position.y - this.size.y/2,
            this.size.x,
            this.size.y
        );
    }
}