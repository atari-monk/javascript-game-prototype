import { Timer } from "../../MyFramework/Timer.js";
import { Vector2 } from "../../MyFramework/Vector2.js";
import { InputHandlerEmpty } from "../../MyFramework/InputHandlerEmpty.js";
import { KeysInputHandler } from "../../MyFramework/KeysInputHandler.js";
import { BallV4 } from "../../MyFramework/Ball/BallV4.js";
import { BallRender } from "../../MyFramework/Ball/BallRender.js";
import { FloorCollision } from "../../MyFramework/WallCollision/FloorCollision.js";
import { Player } from "../../MyFramework/Player/Player.js";
import { PlayerKeysInput } from "../../MyFramework/Player/PlayerKeysInput.js";
import { RectCollision } from "../../MyFramework/BallCollision/RectCollision.js";
import { PointCount } from "../../MyFramework/Ball/PointCount.js";
import { PlayerRender } from "../../MyFramework/Player/PlayerRender.js";
import { Player2Render } from "../../MyFramework/Player/Player2Render.js";
import { Printer } from "../../MyFramework/Printer.js";
import { Bearing } from "../../MyFramework/Entity/Bearing.js";
import { Renderer } from "../../MyFramework/Entity/Renderer.js";
import { InfoRender } from "../../MyFramework/Entity/InfoRender.js";

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
      new PlayerKeysInput(this.input),
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
      new PlayerKeysInput(this.input),
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
