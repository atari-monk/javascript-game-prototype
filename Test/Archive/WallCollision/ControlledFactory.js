import { Timer } from "../../MyFramework/Timer.js";
import { Vector2 } from "../../MyFramework/Vector2.js";
import { KeysInputHandler } from "../../MyFramework/KeysInputHandler.js";
import { Ball } from "../../MyFramework/Ball/Ball.js";
import { BallRender2 } from "../../MyFramework/Ball/BallRender2.js";
import { BallInputHandler2 } from "../../MyFramework/Ball/BallInputHandler2.js";
import { WallCollision } from "../../MyFramework/WallCollision/WallCollision.js";
import { Printer } from "../../MyFramework/Printer.js";

export class ControlledFactory {
  constructor(screen) {
    this.screen = screen;
    this.timer = new Timer();
    this.input = new KeysInputHandler();
    this.printer = new Printer(this.screen.textCtx);

    const size = new Vector2(100, 100);
    const position = new Vector2(this.screen.gameSize.x / 2, this.screen.gameSize.y/2);
    const velocity = new Vector2(0.1, 0.1);
    
    this.ball = new Ball(
      this.screen.gameSize,
      position,
      size,
      velocity,
      new BallInputHandler2(this.input)
      , new BallRender2()
      , this.printer
      , new Vector2(5, 30)
      , new WallCollision()
    );
  }
}