import { Timer } from "../../MyFramework/Timer.js";
import { Vector2 } from "../../MyFramework/Vector2.js";
import { KeysInputHandler } from "../../MyFramework/KeysInputHandler.js";
import { BallV4 } from "../../MyFramework/Ball/BallV4.js";
import { BallInputHandler2 } from "../../MyFramework/Ball/BallInputHandler2.js";
import { FloorCollision } from "../../MyFramework/WallCollision/FloorCollision.js";
import { BallRender } from "../../MyFramework/Ball/BallRender.js";
import { DirectionRender } from "../../MyFramework/Entity/DirectionRender.js";
import { Printer } from "../../MyFramework/Printer.js";
import { Renderer } from "../../MyFramework/Entity/Renderer.js";
import { InfoRender } from "../../MyFramework/Entity/InfoRender.js";
import { Bearing } from "../../MyFramework/Entity/Bearing.js";

export class DirectionFactory {
  constructor(screen) {
    this.screen = screen;
    this.timer = new Timer();
    this.printer = new Printer(this.screen.textCtx);
    this.input = new KeysInputHandler();

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
      , true
    );
  }
}