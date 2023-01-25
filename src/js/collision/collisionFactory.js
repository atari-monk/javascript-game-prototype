import { Timer } from "../../../MyFramework/Timer.js";
import { Vector2 } from "../../../MyFramework/Vector2.js";
import { InputHandlerEmpty } from "../../../MyFramework/InputHandlerEmpty.js";
import { KeysInputHandler } from "../../../MyFramework/KeysInputHandler.js";
import { Ball } from "../../../MyFramework/Ball/Ball.js";
import { BallInputHandler3 } from "../../../MyFramework/Ball/BallInputHandler3.js";
import { BallRender2 } from "../../../MyFramework/Ball/BallRender2.js";
import { WallCollision } from "../../../MyFramework/WallCollision/WallCollision.js";
import { Player } from "../../../MyFramework/Player/Player.js";
import { RectCollision } from "../../../MyFramework/BallCollision/RectCollision.js";
import { PlayerDebugRender } from "../../../MyFramework/Player/PlayerDebugRender.js";
import { RectCollisionRender } from "../../../MyFramework/BallCollision/RectCollisionRender.js";

export class CollisionFactory {
  constructor(views) {
    this.views = views;
    this.infoCanvas = views.get('info');
    this.gameCanvas = views.get('game');
    this.timer = new Timer();
    this.input = new KeysInputHandler();

    this.ball = new Ball(
      this.gameCanvas.size,
      new Vector2(this.gameCanvas.size.x / 2 + 70, this.gameCanvas.size.y / 2),
      new Vector2(40, 40),
      new Vector2(0, 0),
      new BallInputHandler3(this.input)
      , new BallRender2()
      , this.printer
      , new Vector2(5, 30)
      , new WallCollision()
    );

    this.player1 = new Player(
      this.gameCanvas.size,
      new Vector2(this.gameCanvas.size.x / 2, this.gameCanvas.size.y / 2),
      new Vector2(40, 40),
      new Vector2(0, 0)
      , new InputHandlerEmpty()
      , new PlayerDebugRender()
      , this.printer
      , new Vector2(5, 45)
    );

    this.collisionLeft = new RectCollision();
    this.collisionLeftRender = new RectCollisionRender(
      this.gameCanvas.ctx
      , this.collisionLeft);
  }
}