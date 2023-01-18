import { Game } from '../../MyFramework/Game.js';
import { WallFactory } from './WallFactory.js';
import { ScreenSize } from '../../MyFramework/ScreenSize.js';

const screen = new ScreenSize(300, 300, 500, 500);

var gameFactory = new WallFactory(screen);
var game = new Game(gameFactory);

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);