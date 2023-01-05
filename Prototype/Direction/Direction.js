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
    game.ball.angle = value;
    game.ball.setAngleRad();
    if (polar) {
      game.ball.getDirectionPolar();
    } else {
      game.ball.getDirectionMatrix();
    }
  })

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
    game.ball.setAngleRad();
    if (polar) {
      game.ball.logDirection();
      game.ball.getDirectionPolar();
    }
    else {
      game.ball.logDirection();
      game.ball.getDirectionMatrix();
    }
  })

  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const btn2 = document.getElementById('pongDir');
  btn2.addEventListener('click', function (e) {
    const angle = randomInt(-30, 30);
    game.ball.angle = 0;
    game.ball.setAngleRad();
    game.ball.getDirectionPolar();

    game.ball.angle = angle;
    game.ball.setAngleRad();
    game.ball.getDirectionMatrix();
    if(angle > 0)
    {
      game.ball.speed.x = game.ball.direction.x * -.0005;
      game.ball.speed.y = game.ball.direction.y * -.0005;
    } else 
    {
      game.ball.speed.x = game.ball.direction.x * -.0005;
      game.ball.speed.y = game.ball.direction.y * .0005;
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