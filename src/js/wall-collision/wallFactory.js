import { Timer } from "../../../MyFramework/Timer.js";
import { Vector2 } from "../../../MyFramework/Vector2.js";
import { KeysInputHandler } from "../../../MyFramework/KeysInputHandler.js";
import { Ball } from "../../../MyFramework/Ball/Ball.js";
import { BallInputHandler2 } from "../../../MyFramework/Ball/BallInputHandler2.js";
import { BallRender } from "../../../MyFramework/Ball/BallRender.js";
import { WallCollision } from "../../../MyFramework/WallCollision/WallCollision.js";
import { Printer } from "../../../MyFramework/Printer.js";

export class WallFactory {
  constructor(views) {
    this.views = views;
    this.infoCanvas = views.get('info');
    this.gameCanvas = views.get('game');
    this.timer = new Timer();
    this.printer = new Printer(this.infoCanvas.ctx);
    this.input = new KeysInputHandler();
    this.ball = new Ball(
      this.gameCanvas.size,
      new Vector2(45, this.gameCanvas.size.y / 2),
      new Vector2(10, 10),
      new Vector2(.8, .8),
      new BallInputHandler2(this.input)
      , new BallRender()
      , this.printer
      , new Vector2(5, 5)
      , new WallCollision()
    );
  }
}