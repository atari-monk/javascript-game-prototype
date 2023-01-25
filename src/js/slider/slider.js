import { Game2 } from '../engine/game-v2.js';
import { Slider } from '../engine/slider.js';
import { SliderFactory } from './slider-factory.js';
import { MultiCanvasData } from '../engine/multi-canvas-data.js';

let value = 15;
window.addEventListener('load', function () {
  const slider = document.getElementById('slider1');
  slider.value = value;
  const label = document.getElementById('value1');
  label.innerHTML = value;
  slider.addEventListener('change', function (e) {
    value = e.target.value;
    label.innerHTML = value;
    console.log(value);
  })
});

const slider2 = document.getElementById('slider2');
const label2 = document.getElementById('value2');
const range2 = new Slider(35, slider2, label2);
window.addEventListener('load', function () {
  range2.onLoad();
  slider2.addEventListener('change', function (e) {
    range2.value = e.target.value;
    slider2.value = e.target.value;
    label2.innerHTML = slider2.value;
    console.log(range2.value);
  })
});

const views = new MultiCanvasData();
const game = new Game2(new SliderFactory(views));

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);