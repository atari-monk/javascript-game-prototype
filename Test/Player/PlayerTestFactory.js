import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { Player } from "../../Framework/Player/Player.js";
import { PlayerInputHandler } from "../../Framework/Player/PlayerInputHandler.js";
import { PlayerRender } from "../../Framework/Player/PlayerRender.js";

export class PlayerTestFactory {
  constructor(gameCtx, gameSize, textCtx, textSize) {
    this.gameCtx = gameCtx;
    this.gameSize = gameSize;
    this.textCtx = textCtx;
    this.textSize = textSize;
    this.timer = new Timer();
    this.input = new InputHandler();

    this.player1 = new Player(
      this.gameSize,
      new Vector2(this.gameSize.x / 2, this.gameSize.y / 2),
      new Vector2(40, 200),
      new Vector2(0, 0),
      new PlayerInputHandler(this.input),
      new PlayerRender()
    );
  }
}
