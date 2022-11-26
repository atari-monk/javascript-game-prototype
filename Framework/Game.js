export class Game {
    constructor(ctx, size, gameFactory) {
        this.ctx = ctx;
        this.size = size;

        this.gameFactory = gameFactory;

        this.timer = this.gameFactory.timer;
        this.input = this.gameFactory.input;

        this.ball = this.gameFactory.ball;
        this.ballPrinter = this.gameFactory.ballPrinter;

        // this.wallCollisionPrinter = this.gameFactory.wallCollisionPrinter;

        this.player1 = this.gameFactory.player1;
        // this.player1Printer = this.gameFactory.player1Printer;

        this.player2 = this.gameFactory.player2;
        // this.player2Printer = this.gameFactory.player2Printer;

        this.collisionLeft = this.gameFactory.collisionLeft;
        // this.collisionLeftPrinter = this.gameFactory.collisionLeftPrinter;
        this.collisionLeftRender = this.gameFactory.collisionLeftRender;

        this.collisionRight = this.gameFactory.collisionRight;
        // this.collisionRightPrinter = this.gameFactory.collisionRightPrinter;
        this.collisionRightRender = this.gameFactory.collisionRightRender;

        this.pointCount = this.gameFactory.pointCount;
    }
    update(timestamp) {
        this.timer.set(timestamp);
        if(false)
            this.timer.log();

        if(this.ball != null)
            this.ball.update(this.timer, this.input);

        if(this.player1 != null)
            this.player1.update(this.timer, this.input);

        if(this.player2 != null)
            this.player2.update(this.timer, this.input);

        if(this.collisionLeft != null && this.ball != null && this.player1 != null)
            this.collisionLeft.calculateCollision(this.player1, this.ball);

        if(this.collisionRight != null && this.ball != null && this.player2 != null)
            this.collisionRight.calculateCollision(this.player2, this.ball);

        if(this.pointCount != null)
            this.pointCount.update();
    }
    draw() {
        this.ctx.clearRect(0, 0, 
            this.size.x, this.size.y);

        if(this.ball != null)
            this.ball.draw(this.ctx);

        if(this.player1 != null)
            this.player1.draw(this.ctx);
        if(this.player2 != null)
            this.player2.draw(this.ctx);

        // if(this.player1Printer != null)
        //     this.player1Printer.printInfo();
        // if(this.player2Printer != null)
        //     this.player2Printer.printInfo();
        
        // if(this.ballPrinter != null)
        //     this.ballPrinter.printInfo();
        // if(this.wallCollisionPrinter != null)
        //     this.wallCollisionPrinter.printInfo();

        // if(this.collisionLeftPrinter != null)
        //     this.collisionLeftPrinter.printInfo(this);
        if(this.collisionLeftRender != null)
            this.collisionLeftRender.draw();
            
        // if(this.collisionRightPrinter != null)
        //     this.collisionRightPrinter.printInfo(this);
        if(this.collisionRightRender != null)
            this.collisionRightRender.draw();
        
        if(this.pointCount != null)
            this.pointCount.draw();
    }
}