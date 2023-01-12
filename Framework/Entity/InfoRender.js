import { PrinterV2 } from '../PrinterV2.js'

export class InfoRender extends PrinterV2 {

  draw(ctx, entity) {
    const data = entity.getInfo();
    this.print(ctx, `${entity.name}:`, entity.textPos.x, entity.textPos.y, entity.infoColor);
    for (let i = 0; i < data.length; i++) {
      this.print(ctx, `${data[i].join('   ')}`
        , entity.textPos.x, entity.textPos.y + (i * 40) + 40, entity.infoColor);
    }
  }
}
