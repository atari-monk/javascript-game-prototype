import { Timer } from "../engine/timer.js";
import { Printer } from "../engine/printer.js";
import { Player } from "../engine/player/player.js";
import { PlayerRender } from "../engine/player/player-render.js";
import { Vector2 } from "../engine/vector-2.js";
import { KeysInputHandler } from "../engine/keys-input-handler.js";
import { PlayerKeysInput } from "../engine/Player/player-keys-input.js";

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
      , new Vector2(5, 5));
  }
}
