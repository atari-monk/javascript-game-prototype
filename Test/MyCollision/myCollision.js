'use stric';

import { Game2 } from '../../MyFramework/Game2.js';
import { LeftFactory } from './leftFactory.js';
import { RightFactory } from './rightFactory.js';
import { MultiCanvasData } from '../../MyFramework/MultiCanvasData.js';
import { Menu } from './menu.js';

let game, factory;
const views = new MultiCanvasData();
const menu = new Menu(onControlsChange);
menu.setMyCollisionView();

function onControlsChange(value) {
  switch (value) {
    case 'left':
      factory = new LeftFactory(views);
      break;
    case 'right':
      factory = new RightFactory(views);
      break;
    default:
      break;
  }
  game = new Game2(factory);
}

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);