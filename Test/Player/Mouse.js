'using strict'

import { Game2 } from '../../MyFramework/Game2.js';
import { MultiCanvasData } from '../../MyFramework/MultiCanvasData.js';
import { Menu } from './Menu.js';
import { ArrowsFactory } from './ArrowsFactory.js';
import { MouseFactory } from './MouseFactory.js';

let factory;
let game;
const canvasData = new MultiCanvasData();
const menu = new Menu(onControlsChange);
menu.setPlayerView();

function onControlsChange(value) {
  switch (value) {
    case 'kyeboard-set1':
      factory = new ArrowsFactory(canvasData);
      break;
    case 'kyeboard-set2':
      factory = new ArrowsFactory(canvasData);
      break;
    case 'mouse':
      factory = new MouseFactory(canvasData);
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