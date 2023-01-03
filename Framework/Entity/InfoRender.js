import { PrinterV2 } from '../PrinterV2.js'

export class InfoRender extends PrinterV2 {

  draw(ctx, entity) {
    this.print(ctx,
      `${entity.name}: ${entity.getInfo()[0].join(', ')}`
      , entity.textPos.x, entity.textPos.y, entity.infoColor);
    this.print(ctx,
      `${entity.name}: ${entity.getInfo()[1].join(', ')}`
      , entity.textPos.x, entity.textPos.y + 15, entity.infoColor);
  }
}
