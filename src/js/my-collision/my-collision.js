'use stric';

import { Game2 } from '../engine/game-v2.js';
import { LeftFactory } from './left-factory.js';
import { RightFactory } from './right-factory.js';
import { MultiCanvasData } from '../engine/multi-canvas-data.js';
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