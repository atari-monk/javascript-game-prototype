'using strict'

import { Game2 } from '../../Framework/Game2.js';
import { MouseFactory } from './MouseFactory.js';
import { MultiCanvasData } from '../../Framework/MultiCanvasData.js';
import { Menu } from './Menu.js';

const menu = new Menu();
menu.setPlayerMenu();
const game = new Game2(
  new MouseFactory(
    new MultiCanvasData())
  , false);

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);