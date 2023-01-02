import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { Ball } from "../../Framework/Ball/Ball.js";
import { BallInputHandler2 } from "../../Framework/Ball/BallInputHandler2.js";
import { WallCollision } from "../../Framework/WallCollision/WallCollision.js";
import { DirectionRender } from "../../Framework/Entity/DirectionRender.js";
import { Printer } from "../../Framework/Printer.js";

export class DirectionFactory {
  constructor(screen) {
    this.screen = screen;
    this.timer = new Timer();
    this.printer = new Printer(this.screen.textCtx);
    this.input = new InputHandler();
    this.ball = new Ball(
      this.screen.gameSize
      , new Vector2(this.screen.gameSize.x / 2, this.screen.gameSize.y / 2)
      , new Vector2(5, 5)
      , new Vector2(0, 0)
      , new BallInputHandler2(this.input)
      , new DirectionRender()
      , this.printer
      , new Vector2(5, 30)
      , new WallCollision()
    );
  }
}