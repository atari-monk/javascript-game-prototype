import { Vector2 } from "./Vector2.js";

export class ScreenSize {
  constructor(gameX, gameY, textX, textY) {
    this.gameX = gameX;
    this.gameY = gameY;
    this.textX = textX;
    this.textY = textY;

    this.gameCanvas = document.getElementById('gameCanvas');
    this.gameCanvas.width = this.gameX;
    this.gameCanvas.height = this.gameY;
    this.gameCtx = this.gameCanvas.getContext('2d');
    this.gameSize = new Vector2(this.gameCanvas.width, this.gameCanvas.height);

    this.textCanvas = document.getElementById('infoCanvas');
    this.textCanvas.width = this.textX;
    this.textCanvas.height = this.textY;
    this.textCtx = this.textCanvas.getContext('2d');
    this.textSize = new Vector2(this.textCanvas.width, this.textCanvas.height);
  }
}
