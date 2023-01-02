import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { InputHandlerEmpty } from "../../Framework/InputHandlerEmpty.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { Ball } from "../../Framework/Ball/Ball.js";
import { BallInputHandler3 } from "../../Framework/Ball/BallInputHandler3.js";
import { BallRender2 } from "../../Framework/Ball/BallRender2.js";
import { WallCollision } from "../../Framework/WallCollision/WallCollision.js";
import { Player } from "../../Framework/Player/Player.js";
import { BallCollisionLeft } from "../../Framework/BallCollision/BallCollisionLeft.js";
import { BallCollisionRender } from "../../Framework/BallCollision/BallCollisionRender.js";
import { PlayerRender } from "../../Framework/Player/PlayerRender.js";
import { Printer } from "../../Framework/Printer.js";

export class LeftFactory {
  constructor(screen) {
    this.screen = screen;
    this.timer = new Timer();
    this.input = new InputHandler();
    this.printer = new Printer(this.screen.textCtx);

    this.ball = new Ball(
      this.screen.gameSize,
      new Vector2(this.screen.gameSize.x / 2 + 70, this.screen.gameSize.y / 2),
      new Vector2(40, 40),
      new Vector2(0, 0),
      new BallInputHandler3(this.input)
      , new BallRender2()
      , this.printer
      , new Vector2(5, 30)
      , new WallCollision());

    this.player1 = new Player(
      this.screen.gameSize,
      new Vector2(this.screen.gameSize.x / 2, this.screen.gameSize.y / 2),
      new Vector2(40, 200),
      new Vector2(0, 0)
      , new InputHandlerEmpty()
      , new PlayerRender()
      , this.printer
      , new Vector2(5, 45));

    this.collisionLeft = new BallCollisionLeft(this.printer);
    this.collisionLeftRender = new BallCollisionRender(
      this.screen.gameCtx
      , this.collisionLeft);
  }
}