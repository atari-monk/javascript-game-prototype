import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { InputHandlerEmpty } from "../../Framework/InputHandlerEmpty.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { Ball } from "../../Framework/Ball/Ball.js";
import { BallRender } from "../../Framework/Ball/BallRender.js";
import { FloorCollision } from "../../Framework/WallCollision/FloorCollision.js";
import { Player } from "../../Framework/Player/Player.js";
import { PlayerInputHandler } from "../../Framework/Player/PlayerInputHandler.js";
import { RectCollision } from "../../Framework/BallCollision/RectCollision.js";
import { PointCount } from "../../Framework/Ball/PointCount.js";
import { PlayerRender } from "../../Framework/Player/PlayerRender.js";
import { Player2Render } from "../../Framework/Player/Player2Render.js";
import { Printer } from "../../Framework/Printer.js";

export class PongFactory {
  constructor(screen) {
    this.screen = screen;
    this.timer = new Timer();
    this.printer = new Printer(this.screen.textCtx);
    this.input = new InputHandler();

    this.ball = new Ball(
      this.screen.gameSize,
      new Vector2(this.screen.gameSize.x / 2, this.screen.gameSize.y / 2),
      new Vector2(10, 10),
      new Vector2(.2, 0),
      new InputHandlerEmpty()
      , new BallRender()
      , this.printer
      , new Vector2(5, 30)
      , new FloorCollision()
    );

    this.player1 = new Player(
      this.screen.gameSize,
      new Vector2(10, this.screen.gameSize.y / 2),
      new Vector2(10, 100),
      new Vector2(0, 0)
      , new PlayerInputHandler(this.input)
      , new PlayerRender()
      , this.printer
      , new Vector2(5, 45)
    );

    this.player2 = new Player(
      this.screen.gameSize,
      new Vector2(this.screen.gameSize.x - 10, this.screen.gameSize.y / 2),
      new Vector2(10, 100),
      new Vector2(0, 0)
      , new PlayerInputHandler(this.input)
      , new Player2Render()
      , this.printer
      , new Vector2(5, 60)
    );

    this.collisionLeft = new RectCollision();
    this.collisionRight = new RectCollision();
    this.pointCount = new PointCount(this.screen.textCtx, this.screen.textSize, this.ball);
  }
}