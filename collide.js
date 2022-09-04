'use strict';



let canvas = document.querySelector('.canvas');
let ctx = canvas.getContext('2d');

window.addEventListener('load',() => {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  // ctx.shadowBlur = 15;
  // ctx.shadowColor = 'lightblue';
  animate()
  
})

const circle1 = {x: 30, y: 30, radius: 20, dx: 4, dy: 4};
const circle2 = {x: 200, y: 200, radius: 40, dx: 1, dy: 1};


function update() {
  // circle1.dx = Math.random();

  circle1.x += circle1.dx;
  circle1.y += circle1.dy;
  circle2.x += circle2.dx;
  circle2.y += circle2.dy;
}

function collisions(x1,y1,r1,x2,y2,r2) {
  let distance = ((x1-x2)*(x1-x2))+((y1-y2)*(y1-y2));
  let radiiTotal = ((r1+r2)*(r1+r2));

  if(distance < radiiTotal) {
    circle1.x -= 0.5;
    circle2.x += 2;
  } else if( distance === radiiTotal) {
    circle1.x -= 0.5;
    circle2.x += 2;
  }

  if(x1 + r1 >= canvas.width || x1<= 0 + r1) {
    circle1.dx = -circle1.dx;
  }
  if(y1 + r1 >= canvas.height || y1 <= 0 + r1) {
    circle1.dy = -circle1.dy;
  }
  if(x2 + r2 >= canvas.width || x2 <= 0 + r2 && y2 + r2 >= canvas.height || y2 <= 0 + r2) {
    circle2.dx = -circle2.dx;
    circle2.dy = -circle2.dy;
  }
}




function animate() {
  ctx.beginPath();
  ctx.fillStyle = 'black';
  update();
  ctx.clearRect(0,0,canvas.width,canvas.height);
  collisions(circle1.x,circle1.y,circle1.radius,circle2.x,circle2.y,circle2.radius);
  ctx.arc(circle1.x,circle1.y,circle1.radius,0,Math.PI*2)
  ctx.arc(circle2.x,circle2.y,circle2.radius,0,Math.PI*2)
  ctx.fill();
  ctx.closePath();
  requestAnimationFrame(animate)
}

function tree(plant) {
  if(plant === "tall") {
    return true;
  }
}

module.exports = tree;
