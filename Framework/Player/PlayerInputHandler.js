
export class PlayerInputHandler {
    constructor(input) {
        this.input = input;
    }

    handleInput(player) {
        if (this.input.keys.indexOf("ArrowUp") > -1) {
            player.speed.y = 1;
        } else if (this.input.keys.indexOf("ArrowDown") > -1) {
            player.speed.y = -1;
        } else
            player.speed.y = 0;
    }
}