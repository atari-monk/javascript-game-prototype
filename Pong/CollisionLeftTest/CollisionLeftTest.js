import { Game } from '../../Framework/Game.js';
import { Vector2 } from '../../Framework/Vector2.js';
import { CollisionLeftTestFactory } from './CollisionLeftTestFactory.js';

const gameCanvas = document.getElementById('gameCanvas');
gameCanvas.width = 680;
gameCanvas.height = 680;
const gameCtx = gameCanvas.getContext('2d');

const infoCanvas = document.getElementById('infoCanvas');
infoCanvas.width = 400;
infoCanvas.height = 200;
const infoCtx = infoCanvas.getContext('2d');

var gameFactory = new CollisionLeftTestFactory(
  gameCtx
  , new Vector2(gameCanvas.width, gameCanvas.height)
  , infoCtx
  , new Vector2(infoCanvas.width, infoCanvas.height));
var game = new Game(gameFactory);

// var infoFactory = new CollisionLeftTestInfoFactory(infoCtx
//   , new Vector2(infoCanvas.width, infoCanvas.height)
//   , gameFactory);
// var info = new GameInfo(infoCtx
//   , new Vector2(infoCanvas.width, infoCanvas.height)
//   , infoFactory);

function animate(timestamp) {
  game.update(timestamp);
  //info.update();
  game.draw();
  //info.draw();
  requestAnimationFrame(animate);
};

animate(0);