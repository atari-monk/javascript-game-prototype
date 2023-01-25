import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Game2 } from '../engine/game-v2.js';
import { CollisionFactory } from './collision-factory.js';
import { MultiCanvasData } from '../engine/multi-canvas-data.js';

const views = new MultiCanvasData();
const game = new Game2(new CollisionFactory(views));

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);