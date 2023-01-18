import { Timer } from "../../MyFramework/Timer.js";
import { Vector2 } from "../../MyFramework/Vector2.js";
import { KeysInputHandler } from "../../MyFramework/KeysInputHandler.js";
import { Ball } from "../../MyFramework/Ball/Ball.js";
import { BallInputHandler2 } from "../../MyFramework/Ball/BallInputHandler2.js";
import { BallRender } from "../../MyFramework/Ball/BallRender.js";
import { WallCollision } from "../../MyFramework/WallCollision/WallCollision.js";
import { Printer } from "../../MyFramework/Printer.js";

export class WallFactory {
  constructor(screen) {
    this.screen = screen;
    this.timer = new Timer();
    this.printer = new Printer(this.screen.textCtx);
    this.input = new KeysInputHandler();
    this.ball = new Ball(
      this.screen.gameSize,
      new Vector2(45, this.screen.gameSize.y / 2),
      new Vector2(10, 10),
      new Vector2(.3, .3),
      new BallInputHandler2(this.input)
      , new BallRender()
      , this.printer
      , new Vector2(5, 30)
      , new WallCollision()
    );
  }
}