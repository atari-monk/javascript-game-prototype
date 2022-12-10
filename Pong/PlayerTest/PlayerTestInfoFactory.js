import { PlayerPrinter } from "../../Framework/Player/PlayerPrinter.js";

export class PlayerTestInfoFactory {
    constructor(ctx, size, gameFactory) {
        this.ctx = ctx;
        this.size = size;
        this.player1Printer = new PlayerPrinter(this.ctx, gameFactory.player1);
    }
}
