import { Game } from '../../Framework/Game.js';
import { DirectionFactory } from './DirectionFactory.js';
import { ScreenSize } from '../../Framework/ScreenSize.js';

const screen = new ScreenSize(300, 300, 500, 500);

let value = 0;
window.addEventListener('load', function () {
  const slider = document.getElementById('slider1');
  slider.value = value;
  const label = document.getElementById('value1');
  label.innerHTML = value;
  slider.addEventListener('change', function (e) {
    value = e.target.value;
    label.innerHTML = value;
    //rotate(polar, value);
  })

  const rotate = function (polar, angle) {
    game.ball.bearing.angle = angle;
    if (polar) {
      game.ball.bearing.rotatePolar();
    } else {
      game.ball.bearing.rotate();
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
    rotate(polar, value);
  })

  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const btn2 = document.getElementById('pongDir');
  btn2.addEventListener('click', function (e) {
    const side = randomInt(0, 1);
    if(side === 0) {
      const angle = randomInt(-30, 30);
      game.ball.bearing.angle = 0;
      game.ball.bearing.rotatePolar();
      game.ball.bearing.angle = angle;
      game.ball.bearing.rotate();
      game.ball.setBearingSpeed();
    }
    else {
      const angle = randomInt(-150, -210);
      game.ball.bearing.angle = 0;
      game.ball.bearing.rotatePolar();
      game.ball.bearing.angle = angle;
      game.ball.bearing.rotate();
      game.ball.setBearingSpeed();
    }
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