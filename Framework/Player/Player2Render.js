
export class Player2Render {

    draw(ctx, player) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(
            player.position.x - player.size.x / 2,
            player.position.y - player.size.y / 2,
            player.size.x,
            player.size.y
        );
    }
}