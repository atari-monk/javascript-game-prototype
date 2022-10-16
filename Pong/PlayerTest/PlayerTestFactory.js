import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { Player } from "../../Framework/Player/Player.js";
import { PlayerInputHandler } from "../../Framework/Player/PlayerInputHandler.js";
import { PlayerPrinter } from "../../Framework/Player/PlayerPrinter.js";

export class PlayerTestFactory {
    constructor(ctx, size) {
        this.ctx = ctx;
        this.size = size;
        this.timer = new Timer();
        this.input = new InputHandler();
        this.player = new Player(
            this,
            new Vector2(this.size.x / 2, this.size.y / 2),
            new Vector2(40, 200),
            new Vector2(0, 0)
            , new PlayerInputHandler(this.input)
        );
        this.playerPrinter = new PlayerPrinter(this.ctx, this.player);
    }
}