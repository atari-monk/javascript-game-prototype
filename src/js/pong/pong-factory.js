import { Timer } from "../engine/timer.js";
import { Vector2 } from "../engine/vector-2.js";
import { InputHandlerEmpty } from "../engine/input-handler-empty.js";
import { KeysInputHandler } from "../engine/keys-input-handler.js";
import { BallV4 } from "../engine/ball/ball-v4.js";
import { BallRender } from "../engine/ball/ball-render.js";
import { FloorCollision } from "../engine/wall-collision/floor-collision.js";
import { Player } from "../engine/player/player.js";
import { PlayerKeysInput } from "../engine/player/player-keys-input.js";
import { RectCollision } from "../engine/ball-collision/rect-collision.js";
import { PointCount2 } from "../engine/ball/point-count-v2.js";
import { PlayerRender } from "../engine/player/player-render.js";
import { Player2Render } from "../engine/player/player-render-v2.js";
import { Printer } from "../engine/printer.js";
import { Bearing } from "../engine/entity/bearing.js";
import { Renderer } from "../engine/entity/renderer.js";
import { InfoRender } from "../engine/entity/info-render.js";
import { PlayerMouseInput } from "../engine/player/player-mouse-input.js";
import { MouseInputHandler } from "../engine/mouse-input-handler.js";

export class PongFactory {
  constructor(views) {
    this.views = views;
    this.infoCanvas = views.get('info');
    this.gameCanvas = views.get('game');
    this.timer = new Timer();
    this.printer = new Printer(this.infoCanvas.ctx);
    this.input = new KeysInputHandler();
    this.mouseInput = new MouseInputHandler(this.printer);
    this.bearing = new Bearing();

    this.renderers = {
      'graphics': new Renderer(
        [new BallRender()//, new DirectionRender()
        ]),
      'text': new Renderer([new InfoRender()])
    };

    this.ball = new BallV4(
      this.gameCanvas.size,
      new Vector2(this.gameCanvas.size.x / 2, this.gameCanvas.size.y / 2),
      new Vector2(10, 10),
      new Vector2(0, 0),
      new InputHandlerEmpty()
      , this.renderers
      , this.printer
      , new Vector2(5, 5)
      , new FloorCollision()
      , this.bearing
    );

    this.player1 = new Player(
      this.gameCanvas.size,
      new Vector2(10, this.gameCanvas.size.y / 2),
      new Vector2(10, 100),
      new Vector2(0, 0)
      , new PlayerKeysInput(this.input)
      , new PlayerRender()
      , this.printer
      , new Vector2(5, 30)
      , 'Green'
    );

    this.player2 = new Player(
      this.gameCanvas.size,
      new Vector2(this.gameCanvas.size.x - 10, this.gameCanvas.size.y / 2),
      new Vector2(10, 100),
      new Vector2(0, 0)
      , new PlayerMouseInput(this.mouseInput)
      , new Player2Render()
      , this.printer
      , new Vector2(5, 55)
      , 'Blue'
    );

    this.collisionLeft = new RectCollision();
    this.collisionRight = new RectCollision();
    this.pointCount = new PointCount2(this.views, this.ball);
  }
}