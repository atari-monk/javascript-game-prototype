import { LeftFactory } from './leftFactory.js';
import { RightFactory } from './rightFactory.js';
import { BottomFactory } from './bottomFactory.js';
import { TopFactory } from './topFactory.js';
import { Game2 } from '../../MyFramework/Game2.js';
import { MultiCanvasData } from '../../MyFramework/MultiCanvasData.js';
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