import { Printer } from "../Printer.js";

export class PlayerPrinter extends Printer {
  constructor(ctx, player) {
    super(ctx);
    this.player = player;
  }

  printInfo() {
    const dy = 30;
    let y = 25;
    this.player.getInfo().forEach(element => {
      this.print(element, 10, y, 'green');
      y += dy;
    });
  }
}