
export class GameInfo {
    constructor(ctx, size, gameFactory) {
        this.ctx = ctx;
        this.size = size;
        this.gameFactory = gameFactory;

        this.ballPrinter = this.gameFactory.ballPrinter;
        this.wallCollisionPrinter = this.gameFactory.wallCollisionPrinter;
        this.player1Printer = this.gameFactory.player1Printer;
        this.player2Printer = this.gameFactory.player2Printer;
        this.collisionLeftPrinter = this.gameFactory.collisionLeftPrinter;
        this.collisionRightPrinter = this.gameFactory.collisionRightPrinter;
    }
    draw() {
        this.ctx.clearRect(0, 0,
            this.size.x, this.size.y);

        if (this.player1Printer != null)
            this.player1Printer.printInfo();
        if (this.player2Printer != null)
            this.player2Printer.printInfo();

        if (this.ballPrinter != null)
            this.ballPrinter.printInfo();
        if (this.wallCollisionPrinter != null)
            this.wallCollisionPrinter.printInfo();

        if (this.collisionLeftPrinter != null)
            this.collisionLeftPrinter.printInfo(this);

        if (this.collisionRightPrinter != null)
            this.collisionRightPrinter.printInfo(this);

        if (this.pointCount != null)
            this.pointCount.draw();
    }
}
