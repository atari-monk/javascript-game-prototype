
export class Ball {
    
    constructor(game, position, size, speed, inputHandler
        , wallCollision) {
        this.game = game;
        this.position = position;
        this.size = size;
        this.speed = speed;
        this.inputHandler = inputHandler;
        this.wallCollision = wallCollision;
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
        ctx.fillStyle = 'white';
        ctx.fillRect(
            this.position.x - this.size.x/2,
            this.position.y - this.size.y/2,
            this.size.x,
            this.size.y
        );
        // const circle = new Path2D();
        // circle.arc(
        //     this.position.x,
        //     this.position.y,
        //     this.radius,
        //     0,
        //     2 * Math.PI
        // );
        // ctx.fill(circle);
    }
}