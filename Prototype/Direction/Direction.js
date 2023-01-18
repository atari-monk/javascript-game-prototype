import { Game } from '../../MyFramework/Game.js';
import { DirectionFactory } from './DirectionFactory.js';
import { ScreenSize } from '../../MyFramework/ScreenSize.js';

const screen = new ScreenSize(300, 300, 500, 500);

let angle = 0;
window.addEventListener('load', function () {
  const slider = document.getElementById('slider1');
  slider.value = angle;
  const label = document.getElementById('value1');
  label.innerHTML = angle;
  slider.addEventListener('change', function (e) {
    angle = e.target.value;
    label.innerHTML = angle;
    //rotate(polar, value);
  })

  const rotate = function (polar, angle) {
    if (polar) {
      game.ball.bearing.rotatePolar(angle);
    } else {
      game.ball.bearing.rotate(angle);
    }
  }

  const btn = document.getElementById('rotate');
  const polarEl = document.getElementById('polar');
  const matrixEl = document.getElementById('matrix');
  let polar = true;
  polarEl.addEventListener('change', function (e) {
    polar = e.target.checked;
  })
  matrixEl.addEventListener('change', function (e) {
    polar = !e.target.checked;
  })
  btn.addEventListener('click', function (e) {
    rotate(polar, angle);
  })

  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const btn2 = document.getElementById('pongDir');
  btn2.addEventListener('click', function (e) {
    game.ball.bearing.getBallDir();
    game.ball.setBearingSpeed();
    setTimeout(
      () => {
        game.ball.reset();
        game.ball.bearing.rotatePolar(0);
      },
      700
    );
  })
})

const gameFactory = new DirectionFactory(screen);
const game = new Game(gameFactory);

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);