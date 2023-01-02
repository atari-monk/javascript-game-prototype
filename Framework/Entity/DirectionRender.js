
export class DirectionRender {

  draw(ctx, entity) {
    ctx.fillStyle = 'red';
    ctx.fillRect(
      entity.position.x,
      entity.position.y,
      entity.size.x,
      entity.size.y
    );
    ctx.fillRect(
      entity.direction.x,
      entity.direction.y,
      entity.size.x,
      entity.size.y
    );
  }
}