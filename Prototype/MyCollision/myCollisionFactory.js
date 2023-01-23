import { Timer } from "../../MyFramework/Timer.js";
import { Vector2 } from "../../MyFramework/Vector2.js";
import { InputHandlerEmpty } from "../../MyFramework/InputHandlerEmpty.js";
import { KeysInputHandler } from "../../MyFramework/KeysInputHandler.js";
import { Ball } from "../../MyFramework/Ball/Ball.js";
import { BallRender } from "../../MyFramework/Ball/BallRender.js";
import { WallCollision } from "../../MyFramework/WallCollision/WallCollision.js";
import { Player } from "../../MyFramework/Player/Player.js";
import { PlayerKeysInput } from "../../MyFramework/Player/PlayerKeysInput.js";
import { BallCollisionLeft } from "../../MyFramework/BallCollision/BallCollisionLeft.js";
import { BallCollisionRender } from "../../MyFramework/BallCollision/BallCollisionRender.js";
import { PlayerRender } from "../../MyFramework/Player/PlayerRender.js";
import { Printer } from "../../MyFramework/Printer.js";

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