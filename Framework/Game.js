export class Game {
    constructor(ctx, size, gameFactory) {
        this.ctx = ctx;
        this.size = size;
        this.gameFactory = gameFactory;
        this.timer = this.gameFactory.timer;
        this.input = this.gameFactory.input;
        this.player = this.gameFactory.player;
        this.ball = this.gameFactory.ball;
        this.ballPrinter = this.gameFactory.ballPrinter;
        this.playerPrinter = this.gameFactory.playerPrinter;
        this.ballPlayerCollision = this.gameFactory.ballPlayerCollision;
        this.ballPlayerCollisionPrinter = this.gameFactory.ballPlayerCollisionPrinter;
    }
    update(timestamp) {
        this.timer.set(timestamp);
        //this.timer.log();
        this.player.update(this.timer, this.input);
        this.ball.update(this.timer, this.input);
        this.ballPlayerCollision.calculateCollision();
    }
    draw() {
        this.ctx.clearRect(0, 0, 
            this.size.x, this.size.y);
        this.player.draw(this.ctx);
        this.ball.draw(this.ctx);
        this.ballPrinter.printInfo();
        this.playerPrinter.printInfo();
        this.ballPlayerCollisionPrinter.printInfo();    
    }
}