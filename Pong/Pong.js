'using strict'

import { Game } from '../../Framework/Game.js';
import { PongFactory } from './PongFactory.js';
import { ScreenSize } from '../../Framework/ScreenSize.js';

var me = document.querySelector('script[data-name="myDynScript"]');
const ver = me.getAttribute('ver');

if (ver === "Laptop") {
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

const screen = ver === 'Laptop' ? new ScreenSize(800, 600, 1500, 700) : new ScreenSize(300, 300, 500, 500);

var gameFactory = new PongFactory(screen);
var game = new Game(gameFactory);

game.ball.bearing.getBallDir();
game.ball.setBearingSpeed();

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);