
export class Ball {
    
    constructor(game, position, size, speed, inputHandler
        , wallCollision
        , ballRender) {
        this.game = game;
        this.position = position;
        this.size = size;
        this.speed = speed;
        this.inputHandler = inputHandler;
        this.wallCollision = wallCollision;
        this.ballRender = ballRender;
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
        this.position.x -= timer.deltaTime * this.speed.x;
        this.position.y -= timer.deltaTime * this.speed.y;
    }

    #setConstraints() {
        this.#setWallConstraints();
    }

    #setWallConstraints() {
        this.wallCollision.calculateCollision(this);
    }

    reverseXSpeed() {
        this.speed.x *= -1;
    }

    reverseYSpeed() {
        this.speed.y *= -1;
    }
    
    draw(ctx) {
        this.ballRender.draw(ctx, this);
    }
}