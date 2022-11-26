export class Printer {
    constructor(ctx) {
        this.ctx = ctx;
        this.ctx.textAlign = 'left';
        this.ctx.font = '16px Arial';
    }

    setPrint(align, font) {
        this.ctx.textAlign = align;
        this.ctx.font = font;
    }

    print(text, x, y) {
        this.ctx.fillStyle = 'green';
        this.ctx.fillText(text, x, y);
        this.ctx.fillStyle = 'yellow';
        this.ctx.fillText(text, x, y + 2);
    }
}