import {Timer} from '../Framework/Timer.js';
import {InputHandler} from '../Framework/InputHandler.js';

const canvas = document.getElementById('canvas1');
canvas.width = 600;
canvas.height = 600;
const ctx = canvas.getContext('2d');

class Game {
    constructor(ctx, width, height){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.timer = new Timer();
        this.input = new InputHandler();
        this.player = new Player(
            this
            , new Vector2(10, this.height/2 - 50)
            , new Vector2(10, 100)
            , new Vector2(0, 0));
        this.ball = new Ball(this, new Vector2(width-10, this.height/2), new Vector2(10, 0));
    }
    update(timestamp){
        this.timer.set(timestamp);
        //this.timer.log();
        this.player.update(this.timer, this.input);
        this.ball.update(this.timer);
    }
    draw(){
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.player.draw(this.ctx);
        this.ball.draw(this.ctx);
    }
}

class Vector2 {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class GameObject {
    constructor(game, position, size, speed){
        this.game = game;
        this.position = position;
        this.size = size;
        this.speed = speed;
    }
}

class Player extends GameObject {
    constructor(game, position, size, speed){
        super(game, position, size, speed);
    }
    update(timer, input){
        if (input.keys.indexOf('ArrowUp') > -1) {
            this.speed.y = 1;
        } else if (input.keys.indexOf('ArrowDown') > -1) {
            this.speed.y = -1;
        }
        else this.speed.y = 0;
        this.position.y -= timer.deltaTime * this.speed.y;
    }
    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
}

class Ball extends GameObject {
    constructor(game, position, size){
        super(game, position, size);
    }
    update(timer){
    }
    draw(ctx){
        const circle = new Path2D();
        circle.arc(this.position.x, this.position.y, this.size.x, 0, 2 * Math.PI);
        ctx.fill(circle);
    }
}

var game = new Game(ctx, canvas.width, canvas.height);

function animate(timestamp){
    game.update(timestamp);
    game.draw();
    requestAnimationFrame(animate);
};

animate(0);