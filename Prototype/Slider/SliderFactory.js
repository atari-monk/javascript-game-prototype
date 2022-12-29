import { Timer } from "../../Framework/Timer.js";

export class SliderFactory {
  constructor(screen) {
    this.screen = screen;
    this.timer = new Timer();
  }
}