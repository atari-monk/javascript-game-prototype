
export class GameInfo {
    constructor(ctx, size, infoFactory, game) {
        this.ctx = ctx;
        this.size = size;
        this.infoFactory = infoFactory;
        this.game = game;
        this.ballPrinter = this.infoFactory.ballPrinter;
        this.wallCollisionPrinter = this.infoFactory.wallCollisionPrinter;
        this.player1Printer = this.infoFactory.player1Printer;
        this.player2Printer = this.infoFactory.player2Printer;
        this.collisionLeftPrinter = this.infoFactory.collisionLeftPrinter;
        this.collisionRightPrinter = this.infoFactory.collisionRightPrinter;
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
            this.collisionLeftPrinter.printInfo(this.game);
        if (this.collisionRightPrinter != null)
            this.collisionRightPrinter.printInfo(this.game);
        if (this.pointCount != null)
            this.pointCount.draw();
    }
}
