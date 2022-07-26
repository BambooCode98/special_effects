canvas = document.querySelector('.canvas');
ctx = canvas.getContext('2d');
let rotation = 0;
let [dx, dy, x, y] = [1,1,50,50];
let sides = 0;

window.addEventListener('load', () => {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.lineWidth = 15;
  ctx.lineCap='round';
  ctx.strokeStyle = 'yellow';
  ctx.save();
  // ctx.translate(canvas.width/2,canvas.height/2);
  // ctx.scale(2,2);
  
  // ctx.rotate(0);
  // draw(canvas.width/2,canvas.height-100,120,0,1)

  // lineFractals()
  
})

let rotateStuff = setInterval( () => {
  sides++;
  if(sides === 500) {
    clearInterval(rotateStuff)
  }
  console.log(sides);
  draw(canvas.width/2,canvas.height-100,sides,0,1)
  
},1000)


function lineFractals() {
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

  ctx.rotate((Math.PI*4)/sides);
  ctx.scale(0.99,0.99);
  ctx.translate(25,25)
  // lineFractals()
}


function draw(x,y,length,angle, branchWidth) {
  ctx.beginPath();
  ctx.save();
  ctx.lineWidth = branchWidth;
  ctx.strokeStyle = "black";
  ctx.shadowBlur = 15;
  ctx.shadowColor = 'white';
  ctx.translate(x,y);
  ctx.rotate(angle*Math.PI/180);
  ctx.moveTo(0,0);
  ctx.lineTo(0,-length);
  ctx.stroke();

  if (length < 8) {
    // ctx.beginPath();
    // ctx.fillRect(x,y,10,5);
    ctx.restore(); 
    return;
  }

  draw(0,-length,length*0.8,+20, branchWidth/0.9)
  draw(0,-length,length*0.8,-20, branchWidth/0.9)

  ctx.restore();
}
