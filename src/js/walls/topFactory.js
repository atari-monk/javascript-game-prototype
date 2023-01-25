import { Timer } from "../../../MyFramework/Timer.js";
import { Vector2 } from "../../../MyFramework/Vector2.js";
import { Ball } from "../../../MyFramework/Ball/Ball.js";
import { BallRender2 } from "../../../MyFramework/Ball/BallRender2.js";
import { WallCollision } from "../../../MyFramework/WallCollision/WallCollision.js";
import { Printer } from "../../../MyFramework/Printer.js";

export class TopFactory {
  constructor(views) {
    this.views = views;
    this.infoCanvas = views.get('info');
    this.gameCanvas = views.get('game');
    this.timer = new Timer();
    this.printer = new Printer(this.infoCanvas.ctx);

    const size = new Vector2(100, 100);
    const position = new Vector2(this.gameCanvas.size.x / 2, size.x / 2 + 20);
    const velocity = new Vector2(0.0, -0.01);

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