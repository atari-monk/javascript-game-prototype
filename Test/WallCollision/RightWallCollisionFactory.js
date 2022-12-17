import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { Ball } from "../../Framework/Ball/Ball.js";
import { BallRender2 } from "../../Framework/Ball/BallRender2.js";
import { WallCollision } from "../../Framework/WallCollision/WallCollision.js";
import { Printer } from "../../Framework/Printer.js";

export class RightWallCollisionFactory {
  constructor(gameCtx, gameSize, textCtx, textSize) {
    this.gameCtx = gameCtx;
    this.gameSize = gameSize;
    this.textCtx = textCtx;
    this.textSize = textSize;
    this.timer = new Timer();
    this.printer = new Printer(this.textCtx);

    const size = new Vector2(100, 100);
    const position = new Vector2(this.gameSize.x - (size.x/2 + 20), this.gameSize.y/2);
    const velocity = new Vector2(-0.01, 0.0);
    
    this.ball = new Ball(
      this.gameSize,
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