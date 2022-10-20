export class PlayerRender {

    draw(ctx, player) {
        ctx.fillStyle = 'green';
        ctx.fillRect(
            player.position.x - player.size.x/2,
            player.position.y - player.size.y/2,
            player.size.x,
            player.size.y
        );
    }
}