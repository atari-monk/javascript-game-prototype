export class Printer {
    constructor(ctx) {
        this.ctx = ctx;
        this.ctx.textAlign = 'left';
        this.ctx.font = 'bold 18px Arial';
    }

    setPrint(align, font) {
        this.ctx.textAlign = align;
        this.ctx.font = font;
    }

    print(text, x, y) {
        this.ctx.fillStyle = 'yellow';
        this.ctx.fillText(text, x, y);
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(text, x, y + 2);
    }

     print(text, x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, x, y);
        // this.ctx.fillStyle = shadow;
        // this.ctx.fillText(text, x - 1, y - 2);
    }
}