
export class PlayerMouseInput {

  constructor(input) {
    this.input = input;
  }

  handleInput(player) {
    if (this.input.movingUp) {
      player.speed.y = 1;
    } else if (this.input.movingDown) {
      player.speed.y = -1;
    } else if (this.input.still) {
      player.speed.y = 0;
    }
    //player.position.y = this.input.coords.y/2;
  }
}
