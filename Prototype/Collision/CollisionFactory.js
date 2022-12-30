import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { InputHandlerEmpty } from "../../Framework/InputHandlerEmpty.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { Ball } from "../../Framework/Ball/Ball.js";
import { BallRender } from "../../Framework/Ball/BallRender.js";
import { WallCollision } from "../../Framework/WallCollision/WallCollision.js";
import { Player } from "../../Framework/Player/Player.js";
import { PlayerInputHandler } from "../../Framework/Player/PlayerInputHandler.js";
import { BallCollisionLeft } from "../../Framework/BallCollision/BallCollisionLeft.js";
import { BallCollisionRender } from "../../Framework/BallCollision/BallCollisionRender.js";
import { PlayerRender } from "../../Framework/Player/PlayerRender.js";
import { Printer } from "../../Framework/Printer.js";

export class CollisionFactory {
  constructor(screen) {
    this.screen = screen;
    this.timer = new Timer();
    this.printer = new Printer(this.screen.textCtx);
    this.input = new InputHandler();
    this.ball = new Ball(
      this.screen.gameSize,
      new Vector2(this.screen.gameSize.x - 45, this.screen.gameSize.y / 2),
      new Vector2(10, 10),
      new Vector2(.05, .05),
      new InputHandlerEmpty()
      , new WallCollision()
      , new BallRender()
      , this.printer
      , new Vector2(5, 30)
    );
    this.player1 = new Player(
      this.screen.gameSize,
      new Vector2(this.screen.gameSize.x / 2 - 100, this.screen.gameSize.y / 2),
      new Vector2(10, 100),
      new Vector2(0, 0)
      , new PlayerInputHandler(this.input)
      , new PlayerRender()
      , this.printer
      , new Vector2(5, 45)
    );
    this.collisionLeft = new BallCollisionLeft(this.printer);
    this.collisionLeftRender =
      new BallCollisionRender(
        this.screen.gameCtx
        , this.collisionLeft);
  }
}