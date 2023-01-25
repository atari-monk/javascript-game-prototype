import { Game2 } from '../../../MyFramework/Game2.js';
import { DirectionFactory } from './directionFactory.js';
import { MultiCanvasData } from '../../../MyFramework/MultiCanvasData.js';

const views = new MultiCanvasData();

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

  const btn = document.getElementById('btn-rotate');
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

  const btn2 = document.getElementById('btn-start');
  btn2.addEventListener('click', function (e) {
    game.ball.start(0);
    setTimeout(
      () => {
        game.ball.reset();
        game.ball.bearing.rotatePolar(0);
      },
      2000
    );
  })
})

const game = new Game2(new DirectionFactory(views));

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);