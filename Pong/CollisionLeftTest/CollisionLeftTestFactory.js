import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { InputHandlerEmpty } from "../../Framework/InputHandlerEmpty.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { Ball } from "../../Framework/Ball/Ball.js";
import { BallInputHandler } from "../../Framework/Ball/BallInputHandler.js";
import { BallRender2 } from "../../Framework/Ball/BallRender2.js";
import { WallCollision } from "../../Framework/WallCollision/WallCollision.js";
import { Player } from "../../Framework/Player/Player.js";
import { BallCollisionLeft } from "../../Framework/BallCollision/BallCollisionLeft.js";
import { BallCollisionRender } from "../../Framework/BallCollision/BallCollisionRender.js";
import { PlayerRender } from "../../Framework/Player/PlayerRender.js";
import { Printer } from "../../Framework/Printer.js";

export class CollisionLeftTestFactory {
  constructor(gameCtx, gameSize, textCtx, textSize) {
    this.gameCtx = gameCtx;
    this.gameSize = gameSize;
    this.textCtx = textCtx;
    this.textSize = textSize;
    this.timer = new Timer();
    this.input = new InputHandler();
    this.printer = new Printer(this.textCtx);

    this.ball = new Ball(
      this,
      new Vector2(this.gameSize.x / 2 + 70, this.gameSize.y / 2),
      new Vector2(40, 40),
      new Vector2(0, 0),
      new BallInputHandler(this.input)
      , new WallCollision()
      , new BallRender2()
      , this.printer
    );

    this.player1 = new Player(
      this,
      new Vector2(this.gameSize.x / 2, this.gameSize.y / 2),
      new Vector2(40, 200),
      new Vector2(0, 0)
      , new InputHandlerEmpty()
      , new PlayerRender()
      , this.printer
    );
    this.collisionLeft = new BallCollisionLeft();
    this.collisionLeftRender =
      new BallCollisionRender(
        this.gameCtx
        , this.collisionLeft);
  }
}