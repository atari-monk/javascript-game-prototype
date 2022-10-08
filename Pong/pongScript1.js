const canvas = document.getElementById('canvas1');
const WIDTH = canvas.width = 600;
const HEIGHT = canvas.height = 600;
const ctx = canvas.getContext('2d');

class timer {
    timer() {
        this.deltaTime = 0;
        this.lastTime = 0;
    }
    
    set(timestamp)
    {
        this.deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;
    }

    log()
    {
        console.log(this.deltaTime);
    }
}

var frameTimer = new timer();

function animate(timestamp){
    frameTimer.set(timestamp);
    //frameTimer.log();
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillRect(0,50,100,100);
    requestAnimationFrame(animate);
};

animate(0);