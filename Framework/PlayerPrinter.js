import { Printer } from "./Printer.js";


export class PlayerPrinter extends Printer {
    constructor(ctx, player) {
        super(ctx);
        this.player = player;
    }

    printInfo() {
        this.print(this.#getInfo(), 10, 50);
    }

    #getInfo() {
        var info = 'player->size:'
            + this.player.size.x.toFixed(1)
            + ', ' + this.player.size.y.toFixed(1)
            + ' x: ' + this.player.position.x.toFixed(1)
            + ' y: ' + this.player.position.y.toFixed(1)
            + ' vx: ' + this.player.speed.x.toFixed(1)
            + ' vy: ' + this.player.speed.y.toFixed(1);
        return info;
    }
}
