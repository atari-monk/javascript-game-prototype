'use strict';

import { Game2 } from '../engine/game-v2.js';
import { PongFactory } from './pong-factory.js';
import { MultiCanvasData } from '../engine/multi-canvas-data.js';
import { Menu } from './menu.js';

const box = document.querySelector(".box");
const pageX = document.getElementById("x");
const pageY = document.getElementById("y");
const btnOverlay = document.getElementById("btn-overlay");
const overlay = document.getElementById("overlay");

function updateDisplay(event) {
  pageX.innerText = event.pageX;
  pageY.innerText = event.pageY;
}

box.addEventListener("mousemove", updateDisplay, false);
box.addEventListener("mouseenter", updateDisplay, false);
box.addEventListener("mouseleave", updateDisplay, false);
btnOverlay.addEventListener("click", on, false);
overlay.addEventListener("click", off, false);

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

const menu = new Menu();
menu.setGameView();
const game = new Game2(new PongFactory(new MultiCanvasData()));

const btnStart = document.getElementById('btn-start');
btnStart.addEventListener("click", startGame, false);
const btnReset = document.getElementById('btn-reset');
btnReset.addEventListener("click", resetGame, false);

function startGame() {
  game.ball.start();
}
function resetGame() {
  game.player1.reset();
  game.player2.reset();
  game.ball.reset();
  game.pointCount.reset();
}

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);