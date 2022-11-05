'use strict';
let canvas = document.querySelector(".canvas"),
    ctx = canvas.getContext("2d"),
    width = ctx.canvas.width = window.innerWidth,
    height = ctx.canvas.height = window.innerHeight,
    left_x = width * -0.5,
    right_x = width * 0.5,
    top_y = height * -0.5,
    bottom_y = height * 0.5,
    scale = width*0.09,
    angleX = 0,
    angleY = 0,
    mousePush,
    mx = 0,
    my = 0;
let grid = [];
let total_cols = (right_x - left_x);
let total_rows = (bottom_y - top_y);
let default_angle = Math.PI;

console.log(scale);
canvas.addEventListener('click', e => {
  mousePush = new Vector(e.clientX, e.clientY)
  mx = mousePush.magnitude()/100;
  my = mousePush.magnitude()/100;
  angleX += mx;
})
canvas.addEventListener('touchmove', e => {
  mousePush = new Vector(e.touches[0].clientX, e.touches[0].clientY)
  mx = mousePush.magnitude()/100;
  my = mousePush.magnitude()/100;
  // console.log();
})
// console.log(mx);

class Vector{
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  add(v) {
    return new Vector(this.x+v.x, this.y+v.y);
  }

  magnitude() {
    return Math.sqrt(this.x**2 + this.y**2);
  }

  direction() {
    //needed to normalize the direction vector
    //then take the x and y positions and return them
    //found the endpoint of vector with given length and start point
    let dirx,diry;
    let dir = Math.sqrt(this.x**2 + this.y**2);
    dirx = this.x/dir;
    diry = this.y/dir;
    return {dirx,diry}
  }

  angle() {
    return Math.sin(0)
  }

}


for(let i=0; i < width; i+=scale) {
  for(let j=0; j < height; j+=scale) {
    grid.push(new Vector(i,j))
    // angle = -2 * Math.PI ;
    
  }
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  
  grid.forEach(point => {
    // let pointX = point[0]+angle;
    // let pointY = point[1]+angle;
    // console.log();
    let pMag = point.magnitude()/100;
    angleX += mx;
    angleY += my;
    // let [px1,py1] = [point.x,point.y];
    let px1 = point.x;
    let py1 = point.y;
    // console.log(angleX);
    let pX = point.x + pMag * Math.cos(angleX) + mx;
    let pY = point.y + pMag * Math.sin(angleY) + my;
    // console.log(px1,pX);
    ctx.beginPath();
    ctx.moveTo(px1,py1);
    ctx.lineTo(pX,pY);
    ctx.stroke();
    
    // ctx.fillRect(pX,pY,5,5)
    ctx.beginPath()
    ctx.arc(pX,pY,2,0,Math.PI*2)
    ctx.fillStyle = 'red'
    ctx.fill();
  })

  // console.log(angleX,angleY);
  requestAnimationFrame(animate)
}

animate()