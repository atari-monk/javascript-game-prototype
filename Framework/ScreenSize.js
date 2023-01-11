import { Vector2 } from "./Vector2.js";

export class ScreenSize {

  constructor(gameX, gameY, textX, textY) {
    this.gameCanvas = document.getElementById('gameCanvas');
    this.gameCanvas.width = gameX;
    this.gameCanvas.height = gameY;
    this.gameCtx = this.gameCanvas.getContext('2d');
    this.gameSize = new Vector2(gameX, gameY);

    this.textCanvas = document.getElementById('infoCanvas');
    this.textCanvas.width = textX;
    this.textCanvas.height = textY;
    this.textCtx = this.textCanvas.getContext('2d');
    this.textSize = new Vector2(textX, textY);
  }
}