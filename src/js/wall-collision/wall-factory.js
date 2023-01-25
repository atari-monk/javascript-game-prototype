import { Timer } from "../engine/timer.js";
import { Vector2 } from "../engine/vector-2.js";
import { KeysInputHandler } from "../engine/keys-input-handler.js";
import { Ball } from "../engine/ball/ball.js";
import { BallInputHandler2 } from "../engine/ball/ball-input-handler-v2.js";
import { BallRender } from "../engine/ball/ball-render.js";
import { WallCollision } from "../engine/wall-collision/wall-collision.js";
import { Printer } from "../engine/printer.js";

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