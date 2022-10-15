export class Game {
    constructor(ctx, size, gameFactory) {
        this.ctx = ctx;
        this.size = size;
        this.gameFactory = gameFactory;
        this.timer = this.gameFactory.timer;
        this.input = this.gameFactory.input;
        this.player = this.gameFactory.player;
        this.player2 = this.gameFactory.player2;
        this.ball = this.gameFactory.ball;
        this.ballPrinter = this.gameFactory.ballPrinter;
        this.wallCollisionPrinter = this.gameFactory.wallCollisionPrinter;
        this.playerPrinter = this.gameFactory.playerPrinter;
        this.ballPlayerCollision = this.gameFactory.ballPlayerCollision;
        this.ballPlayerCollisionPrinter = this.gameFactory.ballPlayerCollisionPrinter;
    }
    update(timestamp) {
        this.timer.set(timestamp);
        if(false)
            this.timer.log();
        if(this.player != null)
            this.player.update(this.timer, this.input);
        if(this.player2 != null)
            this.player2.update(this.timer, this.input);
        this.ball.update(this.timer, this.input);
        if(this.ballPlayerCollision != null){
            this.ballPlayerCollision.calculateCollision(this.player);
            this.ballPlayerCollision.calculateCollision(this.player2);
        }
    }
    draw() {
        this.ctx.clearRect(0, 0, 
            this.size.x, this.size.y);
        if(this.player != null)
            this.player.draw(this.ctx);
        if(this.player2 != null)
            this.player2.draw(this.ctx);
        this.ball.draw(this.ctx);
        if(this.ballPrinter != null)
            this.ballPrinter.printInfo();
        if(this.wallCollisionPrinter != null)
            this.wallCollisionPrinter.printInfo();    
        if(this.playerPrinter != null)
            this.playerPrinter.printInfo();
        if(this.ballPlayerCollisionPrinter != null)
            this.ballPlayerCollisionPrinter.printInfo();
    }
}