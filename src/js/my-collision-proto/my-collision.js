import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Game2 } from '../engine/game-v2.js';
import { MyCollisionFactory } from './my-collision-factory.js';
import { MultiCanvasData } from '../engine/multi-canvas-data.js';

const views = new MultiCanvasData();
var game = new Game2(new MyCollisionFactory(views));

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);