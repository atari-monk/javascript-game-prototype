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
        console.log(value);
        game.player1.angle = value;
        game.player1.setAngleRad();
        game.player1.getDirectionPolar();
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