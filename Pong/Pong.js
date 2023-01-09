'using strict'

import { Game } from '../../Framework/Game.js';
import { PongFactory } from './PongFactory.js';
import { ScreenSize } from '../../Framework/ScreenSize.js';

var me = document.querySelector('script[data-name="myDynScript"]');
const ver = me.getAttribute('ver');
const screen = ver === 'Laptop' ? new ScreenSize(600, 600, 1500, 700) : new ScreenSize(300, 300, 500, 500);

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