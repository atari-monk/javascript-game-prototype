import { Game } from "../../Framework/Game.js";
import { PlayerTestFactory } from "./PlayerTestFactory.js";
import { ScreenSize } from '../../Framework/ScreenSize.js';

const screen = new ScreenSize(300, 300, 500, 500);
var gameFactory = new PlayerTestFactory(screen);
var game = new Game(gameFactory);

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
}

animate(0);
