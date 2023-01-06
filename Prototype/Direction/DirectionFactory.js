import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { BallV4 } from "../../Framework/Ball/BallV4.js";
import { BallInputHandler2 } from "../../Framework/Ball/BallInputHandler2.js";
import { FloorCollision } from "../../Framework/WallCollision/FloorCollision.js";
import { BallRender } from "../../Framework/Ball/BallRender.js";
import { DirectionRender } from "../../Framework/Entity/DirectionRender.js";
import { Printer } from "../../Framework/Printer.js";
import { Renderer } from "../../Framework/Entity/Renderer.js";
import { InfoRender } from "../../Framework/Entity/InfoRender.js";
import { Bearing } from "../../Framework/Entity/Bearing.js";

export class DirectionFactory {
  constructor(screen) {
    this.screen = screen;
    this.timer = new Timer();
    this.printer = new Printer(this.screen.textCtx);
    this.input = new InputHandler();

    this.renderers = {
      'graphics': new Renderer(
        [new BallRender()//, new DirectionRender()
        ]),
      'text': new Renderer([new InfoRender()])
    };

    const size = new Vector2(20, 20);
    const pos = new Vector2(
      this.screen.gameSize.x / 2
      , this.screen.gameSize.y / 2);
    const speed = new Vector2(0, 0);
    const textPos = new Vector2(5, 30);

    this.bearing = new Bearing();

    this.ball = new BallV4(
      this.screen.gameSize
      , pos
      , size
      , speed
      , new BallInputHandler2(this.input)
      , this.renderers
      , this.printer
      , textPos
      , new FloorCollision()//new WallCollision()
      , this.bearing
    );
  }
}