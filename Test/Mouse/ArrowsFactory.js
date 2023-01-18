import { Timer } from "../../MyFramework/Timer.js";
import { Vector2 } from "../../MyFramework/Vector2.js";
import { KeysInputHandler } from "../../MyFramework/KeysInputHandler.js";
import { Player } from "../../MyFramework/Player/Player.js";
import { PlayerKeysInput } from "../../MyFramework/Player/PlayerKeysInput.js";
import { PlayerRender } from "../../MyFramework/Player/PlayerRender.js";
import { Printer } from "../../MyFramework/Printer.js";

export class ArrowsFactory {
  constructor(views) {
    this.views = views;
    this.infoCanvas = views.get('info');
    this.gameCanvas = views.get('game');
    this.timer = new Timer();
    this.printer = new Printer(this.infoCanvas.ctx);
    this.input = new KeysInputHandler();

    this.player1 = new Player(
      this.gameCanvas.size,
      new Vector2(this.gameCanvas.size.x / 2, this.gameCanvas.size.y / 2),
      new Vector2(40, 200),
      new Vector2(0, 0),
      new PlayerKeysInput(this.input),
      new PlayerRender(),
      this.printer
      , new Vector2(5, 30));
  }
}
