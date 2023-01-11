'using strict'

import { Game2 } from '../../Framework/Game2.js';
import { PongFactory2 } from './PongFactory2.js';
import { MultiCanvasData } from '../Framework/MultiCanvasData.js';
import { CanvasData } from '../Framework/CanvasData.js';
import { Vector2 } from '../Framework/Vector2.js';

var me = document.querySelector('script[data-name="myDynScript"]');
const ver = me.getAttribute('ver');

if (ver === "laptop") {
  const box = document.querySelector(".box");
  const pageX = document.getElementById("x");
  const pageY = document.getElementById("y");
  const btn1 = document.getElementById("btn1");
  const overlay = document.getElementById("overlay");

  function updateDisplay(event) {
    pageX.innerText = event.pageX;
    pageY.innerText = event.pageY;
  }

  box.addEventListener("mousemove", updateDisplay, false);
  box.addEventListener("mouseenter", updateDisplay, false);
  box.addEventListener("mouseleave", updateDisplay, false);
  btn1.addEventListener("click", on, false);
  overlay.addEventListener("click", off, false);

  function on() {
    document.getElementById("overlay").style.display = "block";
  }

  function off() {
    document.getElementById("overlay").style.display = "none";
  }
}

const views = new MultiCanvasData();
views.key = ver;
views.add('laptop-game'
  , new CanvasData(
    'gameCanvas'
    , new Vector2(800, 600)));
views.add('laptop-info'
  , new CanvasData(
    'infoCanvas'
    , new Vector2(650, 500)));
views.add('laptop-points'
  , new CanvasData(
    'pointsCanvas'
    , new Vector2(800, 90)));

views.add('phone-game'
  , new CanvasData(
    'gameCanvas'
    , new Vector2(300, 300)));
views.add('phone-info'
  , new CanvasData(
    'infoCanvas'
    , new Vector2(500, 500)));
views.add('phone-points'
  , new CanvasData(
    'pointsCanvas'
    , new Vector2(300, 90)));

views.get('game').setCanvas();
views.get('info').setCanvas();
views.get('points').setCanvas();

var game = new Game2(new PongFactory2(views));
game.ball.bearing.getBallDir();
game.ball.setBearingSpeed();

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);