import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Game2 } from '../engine/game-v2.js';
import { BallFactory } from './ball-factory.js';
import { MultiCanvasData } from '../engine/multi-canvas-data.js';
import { Menu } from './Menu.js';

new Menu().hide();
const views = new MultiCanvasData();
const game = new Game2(new BallFactory(views));

function animate(timestamp) {
  game?.update(timestamp);
  game?.draw();
  requestAnimationFrame(animate);
};

animate(0);