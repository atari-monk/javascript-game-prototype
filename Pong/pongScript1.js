import {Timer} from './Timer.js';

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
        this.player = new Player(this, new Vector2(10, this.height/2 - 50), new Vector2(10, 100));
        this.ball = new Ball(this, new Vector2(width-10, this.height/2), new Vector2(10, 0));
    }
    update(timestamp){
        this.timer.set(timestamp);
        //this.timer.log();
        this.player.update(this.timer.deltaTime);
        this.ball.update(this.timer.deltaTime);
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
    constructor(game, position, size){
        this.game = game;
        this.position = position;
        this.size = size;
    }
    update(deltaTime){
    }
    draw(ctx){
    }
}

class Player extends GameObject {
    constructor(game, position, size){
        super(game, position, size);
    }
    update(deltaTime){
    }
    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
}

class Ball extends GameObject {
    constructor(game, position, size){
        super(game, position, size);
    }
    update(deltaTime){
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