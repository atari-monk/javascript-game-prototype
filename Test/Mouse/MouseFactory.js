import { Timer } from "../../Framework/Timer.js";
import { MouseInputHandler } from "../../Framework/MouseInputHandler.js";
import { Printer } from "../../Framework/Printer.js";

export class MouseFactory {
  constructor(views) {
    this.views = views;
    this.infoCanvas = views.get('info');
    this.gameCanvas = views.get('game');
    this.timer = new Timer();
    this.printer = new Printer(this.infoCanvas.ctx);
    this.input = new MouseInputHandler(this.printer, true);
  }
}