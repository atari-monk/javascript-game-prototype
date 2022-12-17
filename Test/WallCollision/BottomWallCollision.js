import { Game } from '../../Framework/Game.js';
import { Vector2 } from '../../Framework/Vector2.js';
import { BottomWallCollisionFactory } from './BottomWallCollisionFactory.js';

const gameCanvas = document.getElementById('gameCanvas');
gameCanvas.width = 400;
gameCanvas.height = 400;
const gameCtx = gameCanvas.getContext('2d');

const textCanvas = document.getElementById('infoCanvas');
textCanvas.width = 400;
textCanvas.height = 200;
const textCtx = textCanvas.getContext('2d');

var gameFactory = new BottomWallCollisionFactory(
  gameCtx
  , new Vector2(gameCanvas.width, gameCanvas.height)
  , textCtx
  , new Vector2(textCanvas.width, textCanvas.height));
var game = new Game(gameFactory);

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);