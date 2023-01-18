import { Timer } from "../../MyFramework/Timer.js";

export class SliderFactory {
  constructor(screen) {
    this.screen = screen;
    this.timer = new Timer();
  }
}