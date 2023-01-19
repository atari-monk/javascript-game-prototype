import { LeftFactory } from './LeftFactory.js';
import { RightFactory } from './RightFactory.js';
import { Game2 } from '../../MyFramework/Game2.js';
import { MultiCanvasData } from '../../MyFramework/MultiCanvasData.js';
import { Menu } from '../../Pong/Laptop/Menu.js';

// utility function for returning a promise that resolves after a delay
function delay(t) {
  return new Promise(function (resolve) {
    setInterval(resolve, t);
  });
}

Promise.delay = function (fn, t) {
  // fn is an optional argument
  if (!t) {
    t = fn;
    fn = function () { };
  }
  return delay(t).then(fn);
}

Promise.prototype.delay = function (fn, t) {
  // return chained promise
  return this.then(function () {
    return Promise.delay(fn, t);
  });
}
//////////////////////////////////////////////////////////
new Menu().hide();
const views = new MultiCanvasData();
await views.init(true);
let game = new Game2(new LeftFactory(views));
let stop;

Promise.delay(() => { animate(0); }, 1)
  .delay(() => cancelAnimationFrame(stop), 3000)
  .delay(() => { game = new Game2(new RightFactory(views)); animate(0); }, 1000)
  .delay(() => cancelAnimationFrame(stop), 3000);

setInterval(() => {
  Promise.delay(() => { game = new Game2(new LeftFactory(views)); animate(0); }, 1000)
    .delay(() => cancelAnimationFrame(stop), 3000)
    .delay(() => { game = new Game2(new RightFactory(views)); animate(0); }, 1000)
    .delay(() => cancelAnimationFrame(stop), 3000);
}, 9000);

function animate(timestamp) {
  game?.update(timestamp);
  game?.draw();
  stop = requestAnimationFrame(animate);
  //console.log(stop);
  //console.log(timestamp);
};