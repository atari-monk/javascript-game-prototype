import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { Ball } from "../../Framework/Ball/Ball.js";
import { BallRender2 } from "../../Framework/Ball/BallRender2.js";
import { BallInputHandler2 } from "../../Framework/Ball/BallInputHandler2.js";
import { WallCollision } from "../../Framework/WallCollision/WallCollision.js";
import { Printer } from "../../Framework/Printer.js";

export class WallCollisionTestFactory {
  constructor(gameCtx, gameSize, textCtx, textSize) {
    this.gameCtx = gameCtx;
    this.gameSize = gameSize;
    this.textCtx = textCtx;
    this.textSize = textSize;
    this.timer = new Timer();
    this.input = new InputHandler();
    var testMinX = true;
    var testMaxX = false;
    var testMinY = false;
    var testMaxY = false;
    var positionForMinX = new Vector2(60, this.gameSize.y - 60);
    var velocityForMinX = new Vector2(0.01, 0.0);
    var positionForMaxX = new Vector2(this.gameSize.x - 60, 60);
    var velocityForMaxX = new Vector2(-0.01, 0);
    var positionForMinY = new Vector2(this.gameSize.x - 60, 60);
    var velocityForMinY = new Vector2(0, 0.01);
    var positionForMaxY = new Vector2(60, this.gameSize.y - 60);
    var velocityForMaxY = new Vector2(0, -0.01);
    var position = new Vector2(this.gameSize.x / 2, this.gameSize.y / 2);
    var velocity = new Vector2(0, 0);
    if (testMinX) {
      position = positionForMinX;
      velocity = velocityForMinX;
    }
    if (testMaxX) {
      position = positionForMaxX;
      velocity = velocityForMaxX;
    }
    if (testMinY) {
      position = positionForMinY;
      velocity = velocityForMinY;
    }
    if (testMaxY) {
      position = positionForMaxY;
      velocity = velocityForMaxY;
    }
    this.printer = new Printer(this.textCtx);
    this.ball = new Ball(
      this.gameSize,
      position,
      new Vector2(100, 100),
      velocity,
      new BallInputHandler2(this.input)
      , new WallCollision()
      , new BallRender2()
      , this.printer
    );
  }
}