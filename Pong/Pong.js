'using strict'

import { Game } from '../../MyFramework/Game.js';
import { PongFactory } from './PongFactory.js';
import { ScreenSize } from '../../MyFramework/ScreenSize.js';

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

const screen = ver === 'laptop' ? new ScreenSize(800, 600, 650, 700) : new ScreenSize(300, 300, 500, 500);

var gameFactory = new PongFactory(screen);
var game = new Game(gameFactory);

game.ball.start();

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);