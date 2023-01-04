import { Game } from '../../Framework/Game.js';
import { DirectionFactory } from './DirectionFactory.js';
import { ScreenSize } from '../../Framework/ScreenSize.js';

const screen = new ScreenSize(300, 300, 500, 500);

let prevValue = 0;
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
    if(polar) {
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
})

const gameFactory = new DirectionFactory(screen);
const game = new Game(gameFactory);

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);