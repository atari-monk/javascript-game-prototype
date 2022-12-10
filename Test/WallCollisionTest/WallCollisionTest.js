import { Game } from '../../Framework/Game.js';
import { GameInfo } from '../../Framework/GameInfo.js';
import { Vector2 } from '../../Framework/Vector2.js';
import { WallCollisionTestInfoFactory } from './WallCollisionTestInfoFactory.js';
import { WallCollisionTestFactory } from './WallCollisionTestFactory.js';

const infoCanvas = document.getElementById('infoCanvas');
infoCanvas.width = 400;
infoCanvas.height = 200;
const gameCanvas = document.getElementById('gameCanvas');
gameCanvas.width = 400;
gameCanvas.height = 400;
const infoCtx = infoCanvas.getContext('2d');
const gameCtx = gameCanvas.getContext('2d');

var gameFactory = new WallCollisionTestFactory(gameCtx
    , new Vector2(gameCanvas.width, gameCanvas.height));
var game = new Game(infoCtx
    , new Vector2(infoCanvas.width, infoCanvas.height)
    , gameCtx
    , new Vector2(gameCanvas.width, gameCanvas.height)
    , gameFactory);
    
var infoFactory = new WallCollisionTestInfoFactory(infoCtx
    , new Vector2(infoCanvas.width, infoCanvas.height), game);
var gameInfo = new GameInfo(infoCtx
    , new Vector2(infoCanvas.width, infoCanvas.height)
    , infoFactory, game);

function animate(timestamp) {
    game.update(timestamp);
    game.draw();
    gameInfo.draw();
    requestAnimationFrame(animate);
};

animate(0);