import { Timer } from "../../../MyFramework/Timer.js";
import { MouseInputHandler } from "../../../MyFramework/MouseInputHandler.js";
import { Printer } from "../../../MyFramework/Printer.js";
import { Player } from "../../../MyFramework/Player/Player.js";
import { PlayerMouseInput } from "../../../MyFramework/Player/PlayerMouseInput.js";
import { PlayerRender } from "../../../MyFramework/Player/PlayerRender.js";
import { Vector2 } from "../../../MyFramework/Vector2.js";

export class MouseFactory {

  constructor(views) {
    this.views = views;
    this.infoCanvas = views.get('info');
    this.gameCanvas = views.get('game');
    this.timer = new Timer();
    this.printer = new Printer(this.infoCanvas.ctx);
    this.input = new MouseInputHandler(this.printer, true);

    this.player1 = new Player(
      this.gameCanvas.size,
      new Vector2(this.gameCanvas.size.x / 2, this.gameCanvas.size.y / 2),
      new Vector2(40, 200),
      new Vector2(0, 0),
      new PlayerMouseInput(this.input),
      new PlayerRender(),
      this.printer
      , new Vector2(5, 120));
  }
}