import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { Player } from "../../Framework/Player/Player.js";
import { PlayerInputHandler } from "../../Framework/Player/PlayerInputHandler.js";
import { PlayerRender } from "../../Framework/Player/PlayerRender.js";
import { Printer } from "../../Framework/Printer.js";

export class PlayerFactory {
  constructor(screen) {
    this.screen = screen;
    this.timer = new Timer();
    this.input = new InputHandler();
    this.printer = new Printer(this.screen.textCtx);

    this.player1 = new Player(
      this.screen.gameSize,
      new Vector2(this.screen.gameSize.x / 2, this.screen.gameSize.y / 2),
      new Vector2(40, 200),
      new Vector2(0, 0),
      new PlayerInputHandler(this.input),
      new PlayerRender(),
      this.printer);
  }
}
