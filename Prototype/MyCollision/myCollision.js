import { Game2 } from '../../MyFramework/Game2.js';
import { MyCollisionFactory } from './myCollisionFactory.js';
import { MultiCanvasData } from '../../MyFramework/MultiCanvasData.js';

const views = new MultiCanvasData();
var game = new Game2(new MyCollisionFactory(views));

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);