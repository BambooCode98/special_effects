canvas = document.querySelector('.canvas');
ctx = canvas.getContext('2d');
let rotation = 0;
let [dx, dy, x, y] = [1,1,50,50];
let sides = 0;
let scaleX = 0;
let scaleY = 0;

window.addEventListener('load', () => {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.lineWidth = 20;
  ctx.lineCap='round';
  ctx.strokeStyle = 'yellow';
  ctx.save();
  ctx.translate(canvas.width/2,canvas.height/2);
  ctx.scale(2,2);
  
  // ctx.rotate(0);

  // lineFractals()
  
})

let rotateStuff = setInterval( () => {
  sides++;
  scaleX += 0.1;
  if(sides === 1000) {
    clearInterval(rotateStuff)
  }
  // if(scaleX >= 1) {
  //   scaleX =- 0.1
  // }
  // if(scaleY >= 1) {
  //   scaleY =- 0.1
  // }
  console.log(sides, scaleX);
  
  // for(let i = 0; i < sides; i++) {
    // ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.beginPath();
    ctx.moveTo(0,0);
    // if(x + dx < 0 || x + dx > canvas.width) {
    //   dx = -dx;
    // }
    // if(y + dy < 0 || y + dy > canvas.height) {
    //   dy = -dy
    // }
    // x += dx;
    // y += dy;
    ctx.lineTo(10,10);
    ctx.stroke();
  
    ctx.rotate((Math.PI*2)/sides/0.5);
    ctx.scale(1,0.99);
    ctx.translate(25,25)
    // ctx.restore();
  // }
},10)

rotateStuff()

function lineFractals() {
  // lineFractals()

}