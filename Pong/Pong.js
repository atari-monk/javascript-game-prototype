'using strict'

import { Game } from '../../Framework/Game.js';
import { PongFactory } from './PongFactory.js';
import { ScreenSize } from '../../Framework/ScreenSize.js';

const screen = new ScreenSize(300, 300, 500, 500);

var gameFactory = new PongFactory(screen);
var game = new Game(gameFactory);

game.ball.bearing.getBallDir();
game.ball.setBearingSpeed();

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);