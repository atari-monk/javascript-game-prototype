import { Game } from '../../Framework/Game.js';
import { Slider } from '../../Framework/Slider.js';
import { DirectionFactory } from './DirectionFactory.js';
import { ScreenSize } from '../../Framework/ScreenSize.js';

const screen = new ScreenSize(300, 300, 500, 500);

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
})

const slider2 = document.getElementById('slider2');
const label2 = document.getElementById('value2');
var range2 = new Slider(35, slider2, label2);
window.addEventListener('load', function () {
    range2.onLoad();
    slider2.addEventListener('change', function (e) {
        range2.value = e.target.value;
        slider2.value = e.target.value;
        label2.innerHTML = slider2.value;
        console.log(range2.value);
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