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
    game.player1.angle = value;
    // game.player1.deltaAngle = value - prevValue;
    // console.log(game.player1.deltaAngle); 
    // prevValue = value;
    // if(polar) {
    //   game.player1.setAngleRad();
    //   game.player1.getDirectionPolar();
    // } else {
    //   game.player1.setDeltaAngleRad();
    //   game.player1.getDirectionMatrix();
    // }
  })
  const btn = document.getElementById('recreate');
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
    game.player1.setAngleRad();
    if (polar) {
      game.player1.logDirection();
      game.player1.getDirectionPolar();
    }
    else {
      game.player1.logDirection();
      game.player1.getDirectionMatrix(); 
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