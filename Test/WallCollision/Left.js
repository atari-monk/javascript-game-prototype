import { LeftFactory } from './LeftFactory.js';
import { Game2 } from '../../MyFramework/Game2.js';
import { MultiCanvasData } from '../../MyFramework/MultiCanvasData.js';
import { Menu } from '../../Pong/Laptop/Menu.js';

var me = document.querySelector('script[data-name="myDynScript"]');
const ver = me.getAttribute('ver');

const menu = new Menu();
menu.hide();

const views = new MultiCanvasData();
const game = new Game2(new LeftFactory(views), false);

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);