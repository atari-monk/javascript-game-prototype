import { Timer } from "../engine/timer.js";
import { Vector2 } from "../engine/vector-2.js";
import { InputHandlerEmpty } from "../engine/input-handler-empty.js";
import { KeysInputHandler } from "../engine/keys-input-handler.js";
import { Ball } from "../engine/ball/ball.js";
import { BallRender } from "../engine/ball/ball-render.js";
import { WallCollision } from "../engine/wall-collision/wall-collision.js";
import { Player } from "../engine/player/player.js";
import { PlayerKeysInput } from "../engine/player/player-keys-input.js";
import { BallCollisionLeft } from "../engine/ball-collision/ball-collision-left.js";
import { BallCollisionRender } from "../engine/ball-collision/ball-collision-render.js";
import { PlayerRender } from "../engine/player/player-render.js";
import { Printer } from "../engine/printer.js";

export class MyCollisionFactory {
  constructor(views) {
    this.views = views;
    this.infoCanvas = views.get('info');
    this.gameCanvas = views.get('game');
    this.timer = new Timer();
    this.printer = new Printer(this.infoCanvas.ctx);
    this.input = new KeysInputHandler();
    this.ball = new Ball(
      this.gameCanvas.size,
      new Vector2(this.gameCanvas.size.x - 45, this.gameCanvas.size.y / 2),
      new Vector2(10, 10),
      new Vector2(.3, .3),
      new InputHandlerEmpty()
      , new BallRender()
      , this.printer
      , new Vector2(5, 5)
      , new WallCollision()
    );
    this.player1 = new Player(
      this.gameCanvas.size,
      new Vector2(this.gameCanvas.size.x / 2 - 100, this.gameCanvas.size.y / 2),
      new Vector2(10, 100),
      new Vector2(0, 0)
      , new PlayerKeysInput(this.input)
      , new PlayerRender()
      , this.printer
      , new Vector2(5, 30)
    );
    this.collisionLeft = new BallCollisionLeft(this.printer);
    this.collisionLeftRender =
      new BallCollisionRender(
        this.gameCanvas.ctx
        , this.collisionLeft);
  }
}