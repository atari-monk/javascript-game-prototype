import { Timer } from "../../../MyFramework/Timer.js";
import { Vector2 } from "../../../MyFramework/Vector2.js";
import { KeysInputHandler } from "../../../MyFramework/KeysInputHandler.js";
import { Player } from "../../../MyFramework/Player/Player.js";
import { PlayerKeysInput } from "../../../MyFramework/Player/PlayerKeysInput.js";
import { PlayerRender } from "../../../MyFramework/Player/PlayerRender.js";
import { Printer } from "../../../MyFramework/Printer.js";

export class PlayerFactory {
  constructor(screen) {
    this.screen = screen;
    this.timer = new Timer();
    this.input = new KeysInputHandler();
    this.printer = new Printer(this.screen.textCtx);

    this.player1 = new Player(
      this.screen.gameSize,
      new Vector2(this.screen.gameSize.x / 2, this.screen.gameSize.y / 2),
      new Vector2(40, 200),
      new Vector2(0, 0),
      new PlayerKeysInput(this.input),
      new PlayerRender(),
      this.printer
      , new Vector2(5, 30));
  }
}
