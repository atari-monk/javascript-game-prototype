const canvas = document.getElementById('canvas1');
const WIDTH = canvas.width = 600;
const HEIGHT = canvas.height = 600;
const ctx = canvas.getContext('2d');
let x = 0;

function animate(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillRect(x,50,100,100);
    x++;
    requestAnimationFrame(animate);
};

animate();