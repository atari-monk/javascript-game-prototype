import { Timer } from "../../Framework/Timer.js";

export class DirectionFactory {
    constructor(ctx, size) {
        this.ctx = ctx;
        this.size = size;
        this.timer = new Timer();
    }
}