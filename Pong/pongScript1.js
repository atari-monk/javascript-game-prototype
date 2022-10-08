import {Timer} from './Timer.js';

const canvas = document.getElementById('canvas1');
const WIDTH = canvas.width = 600;
const HEIGHT = canvas.height = 600;
const ctx = canvas.getContext('2d');

var timer = new Timer();

function animate(timestamp){
    timer.set(timestamp);
    //timer.log();
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillRect(0,50,100,100);
    requestAnimationFrame(animate);
};

animate(0);