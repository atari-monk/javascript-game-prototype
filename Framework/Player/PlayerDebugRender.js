
export class PlayerDebugRender {

    draw(ctx, player) {
        ctx.fillStyle = player.color;
        ctx.fillRect(
            player.position.x - player.size.x / 2,
            player.position.y - player.size.y / 2,
            player.size.x,
            player.size.y
        );
        ctx.fillStyle = "orange";
        ctx.fillRect(
            player.position.x - player.size.x/2 - 5/2,
            player.position.y - player.size.y/2 - 5/2,
            5,
            5
        );
    }
}