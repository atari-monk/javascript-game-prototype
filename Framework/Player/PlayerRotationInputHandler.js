
export class PlayerRotationInputHandler {
    constructor(input) {
        this.input = input;
    }

    handleInput(player) {
        if (this.input.keys.indexOf("ArrowLeft") > -1) {
            player.angle += .001;
            player.direction.x = player.position.x + 100 * Math.cos(player.angle * Math.PI);
            player.direction.y = player.position.y + 100 * Math.sin(player.angle * Math.PI);
            //console.log();
        } else if (this.input.keys.indexOf("ArrowRight") > -1) {
            player.angle -= .001;
            player.direction.x = player.position.x + 100 * Math.cos(player.angle * Math.PI);
            player.direction.y = player.position.y + 100 * Math.sin(player.angle * Math.PI);
        }
    }
}
