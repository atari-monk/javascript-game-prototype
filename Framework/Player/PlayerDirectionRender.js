
export class PlayerDirectionRender {

    draw(ctx, player) {
        // ctx.fillStyle = 'green';
        // ctx.fillRect(
        //     player.position.x - player.size.x/2,
        //     player.position.y - player.size.y/2,
        //     player.size.x,
        //     player.size.y
        // );
        
        ctx.fillStyle = 'red';
        ctx.fillRect(
            player.position.x,
            player.position.y,
            5,
            5
        );

        ctx.fillRect(
            player.direction.x,
            player.direction.y,
            5,
            5
        );

        // ctx.beginPath();
        // ctx.moveTo(player.position.x, player.position.y);   // Move pen to bottom-left corner
        // ctx.lineTo(player.direction.x + 10, player.direction.y + 10);   // Line to top corner
        // //ctx.closePath();       // Line to bottom-left corner
        // ctx.fill();
    }
}
