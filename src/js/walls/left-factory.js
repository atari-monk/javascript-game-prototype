import { Timer } from "../engine/timer.js";
import { Vector2 } from "../engine/vector-2.js";
import { Ball } from "../engine/ball/ball.js";
import { BallRender2 } from "../engine/ball/ball-render-v2.js";
import { WallCollision } from "../engine/wall-collision/wall-collision.js";
import { Printer } from "../engine/printer.js";

export class LeftFactory {
  constructor(views) {
    this.views = views;
    this.infoCanvas = views.get('info');
    this.gameCanvas = views.get('game');
    this.timer = new Timer();
    this.printer = new Printer(this.infoCanvas.ctx);

    const size = new Vector2(100, 100);
    const position = new Vector2(size.x / 2 + 20, this.gameCanvas.size.y / 2);
    const velocity = new Vector2(-0.01, 0.0);

    this.ball = new Ball(
      this.gameCanvas.size,
      position,
      size,
      velocity,
      null
      , new BallRender2()
      , this.printer
      , new Vector2(5, 5)
      , new WallCollision()
    );
  }
}