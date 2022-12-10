import { Game } from '../../Framework/Game.js';
import { Vector2 } from '../../Framework/Vector2.js';
import { SecondPlayerFactory } from './SecondPlayerFactory.js';

const gameCanvas = document.getElementById('gameCanvas');
gameCanvas.width = 680;
gameCanvas.height = 680;
const gameCtx = gameCanvas.getContext('2d');

const infoCanvas = document.getElementById('infoCanvas');
infoCanvas.width = 400;
infoCanvas.height = 200;
const infoCtx = infoCanvas.getContext('2d');

var gameFactory = new SecondPlayerFactory(infoCtx, gameCtx
    , new Vector2(gameCanvas.width, gameCanvas.height));
var game = new Game(infoCtx
    , new Vector2(infoCanvas.width, infoCanvas.height)
    , gameCtx
    , new Vector2(gameCanvas.width, gameCanvas.height)
    , gameFactory);

function animate(timestamp) {
    game.update(timestamp);
    game.draw();
    requestAnimationFrame(animate);
};

animate(0);