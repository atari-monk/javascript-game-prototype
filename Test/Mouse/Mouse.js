'using strict'

import { Game2 } from '../../Framework/Game2.js';
import { MouseFactory } from './MouseFactory.js';
import { MultiCanvasData } from '../../Framework/MultiCanvasData.js';
import { CanvasData } from '../../Framework/CanvasData.js';
import { Vector2 } from '../../Framework/Vector2.js';

const me = document.querySelector('script[data-name="myDynScript"]');
const ver = me.getAttribute('ver');

const views = new MultiCanvasData();
views.key = ver;
views.add('laptop-game'
  , new CanvasData(
    'gameCanvas'
    , new Vector2(800, 600)));
views.add('laptop-info'
  , new CanvasData(
    'infoCanvas'
    , new Vector2(650, 500)));
views.add('laptop-points'
  , new CanvasData(
    'pointsCanvas'
    , new Vector2(800, 90)));

views.get('game').setCanvas();
views.get('info').setCanvas();
views.get('points').setCanvas();

const game = new Game2(new MouseFactory(views), false);

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);