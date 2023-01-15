import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { InputHandlerEmpty } from "../../Framework/InputHandlerEmpty.js";
import { KeysInputHandler } from "../../Framework/KeysInputHandler.js";
import { BallV4 } from "../../Framework/Ball/BallV4.js";
import { BallRender } from "../../Framework/Ball/BallRender.js";
import { FloorCollision } from "../../Framework/WallCollision/FloorCollision.js";
import { Player } from "../../Framework/Player/Player.js";
import { PlayerInputHandler } from "../../Framework/Player/PlayerInputHandler.js";
import { RectCollision } from "../../Framework/BallCollision/RectCollision.js";
import { PointCount } from "../../Framework/Ball/PointCount.js";
import { PlayerRender } from "../../Framework/Player/PlayerRender.js";
import { Player2Render } from "../../Framework/Player/Player2Render.js";
import { Printer } from "../../Framework/Printer.js";
import { Bearing } from "../../Framework/Entity/Bearing.js";
import { Renderer } from "../../Framework/Entity/Renderer.js";
import { InfoRender } from "../../Framework/Entity/InfoRender.js";


export class PongFactory {
  constructor(screen) {
    this.screen = screen;
    this.timer = new Timer();
    this.printer = new Printer(this.screen.textCtx);
    console.log(this.screen.textCtx);
    this.input = new KeysInputHandler();
    this.bearing = new Bearing();

    this.renderers = {
      'graphics': new Renderer(
        [new BallRender() //, new DirectionRender()
        ]),
      'text': new Renderer([new InfoRender()])
    };

    this.ball = new BallV4(
      this.screen.gameSize,
      new Vector2(this.screen.gameSize.x / 2, this.screen.gameSize.y / 2),
      new Vector2(10, 10),
      new Vector2(0, 0),
      new InputHandlerEmpty(),
      this.renderers,
      this.printer,
      new Vector2(0, 180),
      new FloorCollision(),
      this.bearing
    );

    this.player1 = new Player(
      this.screen.gameSize,
      new Vector2(10, this.screen.gameSize.y / 2),
      new Vector2(10, 100),
      new Vector2(0, 0),
      new PlayerInputHandler(this.input),
      new PlayerRender(),
      this.printer,
      new Vector2(0, 270),
      'Green'
    );

    this.player2 = new Player(
      this.screen.gameSize,
      new Vector2(this.screen.gameSize.x - 10, this.screen.gameSize.y / 2),
      new Vector2(10, 100),
      new Vector2(0, 0),
      new PlayerInputHandler(this.input),
      new Player2Render(),
      this.printer,
      new Vector2(0, 360),
      'Blue'
    );

    this.collisionLeft = new RectCollision();
    this.collisionRight = new RectCollision();
    this.pointCount = new PointCount(this.screen, this.ball);
  }
}
