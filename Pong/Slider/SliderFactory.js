import { Timer } from "../../Framework/Timer.js";

export class SliderFactory {
    constructor(ctx, size) {
        this.ctx = ctx;
        this.size = size;
        this.timer = new Timer();
    }
}