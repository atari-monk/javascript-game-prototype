import { Timer } from "../engine/timer.js";
import { Vector2 } from "../engine/vector-2.js";
import { InputHandlerEmpty } from "../engine/input-handler-empty.js";
import { KeysInputHandler } from "../engine/keys-input-handler.js";
import { Ball } from "../engine/ball/ball.js";
import { BallInputHandler3 } from "../engine/ball/ball-input-handler-v3.js";
import { BallRender2 } from "../engine/ball/ball-render-v2.js";
import { WallCollision } from "../engine/wall-collision/wall-collision.js";
import { Player } from "../engine/player/player.js";
import { BallCollisionRender } from "../engine/ball-collision/ball-collision-render.js";
import { PlayerRender } from "../engine/player/player-render.js";
import { Printer } from "../engine/printer.js";
import { BallCollisionLeft } from "../engine/ball-collision/ball-collision-left.js";

export class LeftFactory {
  constructor(views) {
    this.views = views;
    this.infoCanvas = views.get('info');
    this.gameCanvas = views.get('game');
    this.timer = new Timer();
    this.input = new KeysInputHandler();
    this.printer = new Printer(this.infoCanvas.ctx);

    this.ball = new Ball(
      this.gameCanvas.size,
      new Vector2(this.gameCanvas.size.x / 2 + 70, this.gameCanvas.size.y / 2),
      new Vector2(40, 40),
      new Vector2(0, 0),
      new BallInputHandler3(this.input)
      , new BallRender2()
      , this.printer
      , new Vector2(5, 5)
      , new WallCollision());

    this.player1 = new Player(
      this.gameCanvas.size,
      new Vector2(this.gameCanvas.size.x / 2, this.gameCanvas.size.y / 2),
      new Vector2(40, 200),
      new Vector2(0, 0)
      , new InputHandlerEmpty()
      , new PlayerRender()
      , this.printer
      , new Vector2(5, 30));

    this.collisionLeft = new BallCollisionLeft(this.printer);
    this.collisionLeftRender = new BallCollisionRender(
      this.gameCanvas.ctx
      , this.collisionLeft);
  }
}