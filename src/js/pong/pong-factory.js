import { Timer } from "../../../MyFramework/Timer.js";
import { Vector2 } from "../../../MyFramework/vector-2.js";
import { InputHandlerEmpty } from "../../../MyFramework/InputHandlerEmpty.js";
import { KeysInputHandler } from "../../../MyFramework/KeysInputHandler.js";
import { BallV4 } from "../../../MyFramework/Ball/BallV4.js";
import { BallRender } from "../../../MyFramework/Ball/BallRender.js";
import { FloorCollision } from "../../../MyFramework/WallCollision/FloorCollision.js";
import { Player } from "../../../MyFramework/Player/Player.js";
import { PlayerKeysInput } from "../../../MyFramework/Player/PlayerKeysInput.js";
import { RectCollision } from "../../../MyFramework/BallCollision/RectCollision.js";
import { PointCount2 } from "../../../MyFramework/Ball/PointCount2.js";
import { PlayerRender } from "../../../MyFramework/Player/PlayerRender.js";
import { Player2Render } from "../../../MyFramework/Player/Player2Render.js";
import { Printer } from "../../../MyFramework/Printer.js";
import { Bearing } from "../../../MyFramework/Entity/Bearing.js";
import { Renderer } from "../../../MyFramework/Entity/Renderer.js";
import { InfoRender } from "../../../MyFramework/Entity/InfoRender.js";
import { PlayerMouseInput } from "../../../MyFramework/Player/PlayerMouseInput.js";
import { MouseInputHandler } from "../../../MyFramework/MouseInputHandler.js";

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