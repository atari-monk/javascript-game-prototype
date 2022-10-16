export class Game {
    constructor(ctx, size, gameFactory) {
        this.ctx = ctx;
        this.size = size;
        this.gameFactory = gameFactory;
        this.timer = this.gameFactory.timer;
        this.input = this.gameFactory.input;
        this.ball = this.gameFactory.ball;
        this.ballPrinter = this.gameFactory.ballPrinter;
        this.wallCollisionPrinter = this.gameFactory.wallCollisionPrinter;
        this.player = this.gameFactory.player;
        this.playerPrinter = this.gameFactory.playerPrinter;
        this.player2 = this.gameFactory.player2;
        this.playerPrinter2 = this.gameFactory.playerPrinter2;
        this.pongCollision1 = this.gameFactory.pongCollision1;
        this.pongCollisionPrinter1 = this.gameFactory.pongCollisionPrinter1;
        this.pongCollisionRender1 = this.gameFactory.pongCollisionRender1;
        this.pongCollision2 = this.gameFactory.pongCollision2;
        this.pongCollisionPrinter2 = this.gameFactory.pongCollisionPrinter2;
        this.pongCollisionRender2 = this.gameFactory.pongCollisionRender2;
    }
    update(timestamp) {
        this.timer.set(timestamp);
        if(false)
            this.timer.log();
        if(this.ball != null)
            this.ball.update(this.timer, this.input);
        if(this.player != null)
            this.player.update(this.timer, this.input);
        if(this.player2 != null)
            this.player2.update(this.timer, this.input);
        if(this.pongCollision1 != null && this.ball != null && this.player != null){
            this.pongCollision1.calculateCollision(this.player, this.ball);
        }
        if(this.pongCollision2 != null && this.ball != null && this.player2 != null){
            this.pongCollision2.calculateCollision(this.player2, this.ball);
        }
    }
    draw() {
        this.ctx.clearRect(0, 0, 
            this.size.x, this.size.y);
        if(this.ball != null)
            this.ball.draw(this.ctx);
        if(this.ballPrinter != null)
            this.ballPrinter.printInfo();
        if(this.wallCollisionPrinter != null)
            this.wallCollisionPrinter.printInfo(); 
        if(this.player != null)
            this.player.draw(this.ctx);
        if(this.player2 != null)
            this.player2.draw(this.ctx);
        if(this.playerPrinter != null)
            this.playerPrinter.printInfo();
        if(this.playerPrinter2 != null)
            this.playerPrinter2.printInfo();
        if(this.pongCollisionPrinter1 != null)
            this.pongCollisionPrinter1.printInfo(this);
        if(this.pongCollisionRender1 != null)
            this.pongCollisionRender1.draw();
        if(this.pongCollisionPrinter2 != null)
            this.pongCollisionPrinter2.printInfo(this);
        if(this.pongCollisionRender2 != null)
            this.pongCollisionRender2.draw();
    }
}