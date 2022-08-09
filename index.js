canvas = document.querySelector('.canvas');
ctx = canvas.getContext('2d');
// cyx.fillStyle = 'black';
// ctx.fillRect(0,0,window.innerWidth,window.innerHeight);

window.addEventListener('load',() => {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  // animate()
  requestAnimationFrame(animate)
  
})

function createParticle(x,y) {
  return {
    x: x,
    y: y,
    isMoving() {
      console.log('ball is moving');
    },
    location() {
      console.log(`x:${x},y:${y}`);
    }
  }
}

// let ball1 = createParticle(4,3);
// ball1.isMoving();
// ball1.location();

let [x,y] = [canvas.width/2,canvas.height/2];
let gravity = 1;
function animate() {
  let [x2,y2] = [Math.random()*window.innerWidth,Math.random()*innerHeight];
  // ctx.clearRect(0,0,canvas.width,canvas.height);
  // ctx.save();
  ctx.fillStyle = 'rgba(0,0,255,0.02)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'red';
  
  ctx.beginPath();
  gravity += 0.01;
  if(gravity >= 12) {
    gravity = 1;
    y=10
  }
  y += gravity;
  x += 0.5;
  if(x > canvas.width || y > Math.random()*canvas.height*10) {
    x = Math.random()*canvas.width;
    y = 10;
  }
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  // ctx.arc(x2, y2, 5, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  // if(y >= canvas.height) {
  //   y = 100;
  // }
  // ctx.restore();
  requestAnimationFrame(animate)
  
}
