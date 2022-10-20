import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { Player } from "../../Framework/Player/Player.js";
import { PlayerRotationInputHandler } from "../../Framework/Player/PlayerRotationInputHandler.js";
import { PlayerPrinter } from "../../Framework/Player/PlayerPrinter.js";
import { PlayerDirectionRender } from "../../Framework/Player/PlayerDirectionRender.js";

export class DirectionFactory {
    constructor(ctx, size) {
        this.ctx = ctx;
        this.size = size;
        this.timer = new Timer();
        this.input = new InputHandler();
        this.player1 = new Player(
            this,
            new Vector2(this.size.x / 2, this.size.y / 2),
            new Vector2(10, 100),
            new Vector2(0, 0)
            , new PlayerRotationInputHandler(this.input)
            , new PlayerDirectionRender()
        );
        this.player1Printer = new PlayerPrinter(this.ctx, this.player1);
    }
}