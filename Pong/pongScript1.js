import { Game } from '../Framework/Game.js';

const canvas = document.getElementById('canvas1');
canvas.width = 600;
canvas.height = 600;
const ctx = canvas.getContext('2d');

var game = new Game(ctx, canvas.width, canvas.height);

function animate(timestamp) {
    game.update(timestamp);
    game.draw();
    requestAnimationFrame(animate);
};

animate(0);