import { Game } from '../../Framework/Game.js';
import { LeftWallCollisionFactory } from './LeftWallCollisionFactory.js';
import { ScreenSize } from '../../Framework/ScreenSize.js';

const screen = new ScreenSize(600, 600, 800, 1000);
var gameFactory = new LeftWallCollisionFactory(screen);
var game = new Game(gameFactory);

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);