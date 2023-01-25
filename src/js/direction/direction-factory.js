import { Timer } from "../engine/timer.js";
import { Vector2 } from "../engine/vector-2.js";
import { KeysInputHandler } from "../engine/keys-input-handler.js";
import { BallV4 } from "../engine/ball/ball-v4.js";
import { BallInputHandler2 } from "../engine/ball/ball-input-handler-v2.js";
import { FloorCollision } from "../engine/wall-collision/floor-collision.js";
import { BallRender } from "../engine/ball/ball-render.js";
import { DirectionRender } from "../engine/Entity/direction-render.js";
import { Printer } from "../engine/printer.js";
import { Renderer } from "../engine/entity/renderer.js";
import { InfoRender } from "../engine/Entity/info-render.js";
import { Bearing } from "../engine/entity/bearing.js";

export class DirectionFactory {
  constructor(views) {
    this.views = views;
    this.infoCanvas = views.get('info');
    this.gameCanvas = views.get('game');
    this.timer = new Timer();
    this.printer = new Printer(this.infoCanvas.ctx);
    this.input = new KeysInputHandler();

    this.renderers = {
      'graphics': new Renderer(
        [new BallRender()//, new DirectionRender()
        ]),
      'text': new Renderer([new InfoRender()])
    };

    const size = new Vector2(20, 20);
    const pos = new Vector2(
      this.gameCanvas.size.x / 2
      , this.gameCanvas.size.y / 2);
    const speed = new Vector2(0, 0);
    const textPos = new Vector2(5, 5);

    this.bearing = new Bearing();

    this.ball = new BallV4(
      this.gameCanvas.size
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