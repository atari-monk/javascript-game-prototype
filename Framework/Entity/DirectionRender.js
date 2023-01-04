import { Render } from "./Render.js";

export class DirectionRender extends Render {

  draw(ctx, entity) {
    // this.drawRect(ctx, entity.position.x, entity.position.y, 6, 'blue');
    // this.drawRect(ctx, entity.direction.x, entity.direction.y, entity.size.x, 'blue');
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(entity.position.x, entity.position.y);
    ctx.lineTo(entity.direction.x, entity.direction.y);
    ctx.stroke();
  }
}