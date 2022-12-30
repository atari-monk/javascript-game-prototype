import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { Player } from "../../Framework/Player/Player.js";
import { PlayerRotationInputHandler } from "../../Framework/Player/PlayerRotationInputHandler.js";
import { PlayerDirectionRender } from "../../Framework/Player/PlayerDirectionRender.js";
import { Printer } from "../../Framework/Printer.js";

export class DirectionFactory {
  constructor(screen) {
    this.screen = screen;
    this.timer = new Timer();
    this.printer = new Printer(this.screen.textCtx);
    this.input = new InputHandler();
    this.player1 = new Player(
      this.screen.gameSize,
      new Vector2(this.screen.gameSize.x / 2, this.screen.gameSize.y / 2),
      new Vector2(10, 100),
      new Vector2(0, 0)
      , new PlayerRotationInputHandler(this.input)
      , new PlayerDirectionRender()
      , this.printer
      , new Vector2(5, 30)
    );
  }
}