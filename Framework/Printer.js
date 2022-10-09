export class Printer {
    constructor(ctx) {
        this.ctx = ctx;
        this.ctx.textAlign = 'left';
        this.ctx.font = '20px Arial';
    }

    setPrint(align, font) {
        this.ctx.textAlign = align;
        this.ctx.font = font;
    }

    print(text, x, y) {
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(text, x, y);
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(text, x, y + 2);
    }
}