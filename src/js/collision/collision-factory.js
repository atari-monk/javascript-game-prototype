import { Timer } from "../engine/timer.js";
import { Vector2 } from "../engine/vector-2.js";
import { InputHandlerEmpty } from "../engine/input-handler-empty.js";
import { KeysInputHandler } from "../engine/keys-input-handler.js";
import { Ball } from "../engine/ball/ball.js";
import { BallInputHandler3 } from "../engine/ball/ball-input-handler-v3.js";
import { BallRender2 } from "../engine/ball/ball-render-v2.js";
import { WallCollision } from "../engine/wall-collision/wall-collision.js";
import { Player } from "../engine/player/player.js";
import { RectCollision } from "../engine/ball-collision/rect-collision.js";
import { PlayerDebugRender } from "../engine/player/player-debug-render.js";
import { RectCollisionRender } from "../engine/ball-collision/rect-collision-render.js";

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