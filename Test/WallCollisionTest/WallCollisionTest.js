import { Game } from '../../Framework/Game.js';
import { GameInfo } from '../../Framework/GameInfo.js';
import { Vector2 } from '../../Framework/Vector2.js';
import { WallCollisionTestFactory } from './WallCollisionTestFactory.js';

const infoCanvas = document.getElementById('infoCanvas');
infoCanvas.width = 400;
infoCanvas.height = 200;
const gameCanvas = document.getElementById('gameCanvas');
gameCanvas.width = 400;
gameCanvas.height = 400;
const infoCtx = infoCanvas.getContext('2d');
const gameCtx = gameCanvas.getContext('2d');

var gameFactory = new WallCollisionTestFactory(infoCtx, gameCtx
    , new Vector2(gameCanvas.width, gameCanvas.height));
var game = new Game(gameCtx
    , new Vector2(gameCanvas.width, gameCanvas.height)
    , gameFactory);
var gameInfo = new GameInfo(infoCtx
    , new Vector2(infoCanvas.width, infoCanvas.height)
    , gameFactory);

function animate(timestamp) {
    game.update(timestamp);
    game.draw();
    gameInfo.draw();
    requestAnimationFrame(animate);
};

animate(0);