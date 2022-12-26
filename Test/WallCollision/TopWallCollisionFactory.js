import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { Ball } from "../../Framework/Ball/Ball.js";
import { BallRender2 } from "../../Framework/Ball/BallRender2.js";
import { WallCollision } from "../../Framework/WallCollision/WallCollision.js";
import { Printer } from "../../Framework/Printer.js";

export class TopWallCollisionFactory {
  constructor(screen) {
    this.screen = screen;
    this.timer = new Timer();
    this.printer = new Printer(this.screen.textCtx);

    const size = new Vector2(100, 100);
    const position = new Vector2(this.screen.gameSize.x / 2, size.x/2 + 20);
    const velocity = new Vector2(0.0, 0.01);
    
    this.ball = new Ball(
      this.screen.gameSize,
      position,
      size,
      velocity,
      null
      , new WallCollision()
      , new BallRender2()
      , this.printer
    );
  }
}