import { Game } from '../../MyFramework/Game.js';
import { BottomFactory } from './BottomFactory.js';
import { ScreenSize } from '../../MyFramework/ScreenSize.js';

const screen = new ScreenSize(300, 300, 500, 500);
const gameFactory = new BottomFactory(screen);
const game = new Game(gameFactory);

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);