import { Game2 } from '../../MyFramework/Game2.js';
import { RectFactory } from './rectFactory.js';
import { MultiCanvasData } from '../../MyFramework/MultiCanvasData.js';

const views = new MultiCanvasData();
const game = new Game2(new RectFactory(views));

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);