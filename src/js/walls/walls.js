import { LeftFactory } from './left-factory.js';
import { RightFactory } from './right-factory.js';
import { BottomFactory } from './bottom-factory.js';
import { TopFactory } from './top-factory.js';
import { Game2 } from '../engine/game-v2.js';
import { MultiCanvasData } from '../engine/multi-canvas-data.js';
import './delay.js'

const views = new MultiCanvasData();
let game, stop;

const animate = (timestamp) => {
  game?.update(timestamp);
  game?.draw();
  stop = requestAnimationFrame(animate);
};

const setGame = (newGame) => {
  game = newGame;
  animate(0);
}

const cancel = () => cancelAnimationFrame(stop);

const setCycle = (delay = 3500) =>
  Promise.delay(() => setGame(new Game2(new LeftFactory(views))))
    .delay(cancel, delay)
    .delay(() => setGame(new Game2(new TopFactory(views))))
    .delay(cancel, delay)
    .delay(() => setGame(new Game2(new RightFactory(views))))
    .delay(cancel, delay)
    .delay(() => setGame(new Game2(new BottomFactory(views))))
    .delay(cancel, delay);

setCycle();
setInterval(() => {
  setCycle();
}, 14000);