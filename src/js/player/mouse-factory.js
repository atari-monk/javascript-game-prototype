import { Timer } from "../engine/timer.js";
import { MouseInputHandler } from "../engine/mouse-input-handler.js";
import { Printer } from "../engine/printer.js";
import { Player } from "../engine/player/player.js";
import { PlayerMouseInput } from "../engine/player/player-mouse-input.js";
import { PlayerRender } from "../engine/player/player-render.js";
import { Vector2 } from "../engine/vector-2.js";

export class MouseFactory {

  constructor(views) {
    this.views = views;
    this.infoCanvas = views.get('info');
    this.gameCanvas = views.get('game');
    this.timer = new Timer();
    this.printer = new Printer(this.infoCanvas.ctx);
    this.input = new MouseInputHandler(this.printer, true, new Vector2(5, 70));

    this.player1 = new Player(
      this.gameCanvas.size,
      new Vector2(this.gameCanvas.size.x / 2, this.gameCanvas.size.y / 2),
      new Vector2(40, 200),
      new Vector2(0, 0),
      new PlayerMouseInput(this.input),
      new PlayerRender(),
      this.printer
      , new Vector2(5, 5));
  }
}