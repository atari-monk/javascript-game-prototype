import { BallPrinter } from "../../Framework/Ball/BallPrinter.js";
import { PlayerPrinter } from "../../Framework/Player/PlayerPrinter.js";
import { BallCollisionPrinter } from "../../Framework/BallCollision/BallCollisionPrinter.js";
import { PointCount } from "../../Framework/Ball/PointCount.js";

export class CollisionLeftTestInfoFactory {
  constructor(infoCtx, infoSize, gameFactory) {
    this.infoCtx = infoCtx;
    this.infoSize = infoSize;
    this.gameFactory = gameFactory;
    this.ballPrinter = new BallPrinter(this.infoCtx, this.gameFactory.ball);
    this.player1Printer = new PlayerPrinter(this.infoCtx,
      this.gameFactory.player1);
    this.collisionLeftPrinter =
      new BallCollisionPrinter(
        this.infoCtx,
        this.gameFactory.collisionLeft);
    this.pointCount = new PointCount(this.infoCtx, this.infoSize, this.gameFactory.ball);
  }
}