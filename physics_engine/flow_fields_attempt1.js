'use strict';
let canvas = document.querySelector(".canvas"),
  ctx = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight,
  previousPageX = null,
  previousPageY= null;



let grid = [];
ctx.lineWidth = 1;
let xt = 0;
let yt = 0;

canvas.addEventListener('mousemove', (e) => {
  // xt = e.movementX;
  // yt = e.movementY;
  if(e.movementX < 0 && e.movementY < 0) {
    xt += -1;
    yt += -1;
  } else if(e.movementX === 0 && e.movementY > 0 ) {
    yt += 1;
  }  else if(e.movementX > 0 && e.movementY === 0 ) {
    xt += 1;
  } else if(e.movementX > 0 && e.movementY > 0 ) {
    xt += 1;
    yt += 1;
  } else if(e.movementX === 0 && e.movementY < 0 ) {
    yt += -1;
  } else if(e.movementX < 0 && e.movementY === 0 ) {
    xt += -1;
  } else if(e.movementX > 0 && e.movementY < 0 ) {
    xt += 1
    yt += -1;
  } else if(e.movementX < 0 && e.movementY > 0 ) {
    xt += -1;
    yt += 1;
  }
  // console.log(e.movementX,e.movementY)
})
canvas.addEventListener('touchmove', (e) => {
  e.movementX = (e.touches[0].pageX - previousPageX)*0.1;
  e.movementY = (e.touches[0].pageY - previousPageY)*0.1;
  console.log(e.movementX,e.movementY);
  if(e.movementX < 0 && e.movementY < 0) {
    xt += -0.1;
    yt += -0.1;
  } else if(e.movementX === 0 && e.movementY > 0 ) {
    yt += 0.1;
  }  else if(e.movementX > 0 && e.movementY === 0 ) {
    xt += 0.1;
  } else if(e.movementX > 0 && e.movementY > 0 ) {
    xt += 0.1;
    yt += 0.1;
  } else if(e.movementX === 0 && e.movementY < 0 ) {
    yt += -0.1;
  } else if(e.movementX < 0 && e.movementY === 0 ) {
    xt += -0.1;
  } else if(e.movementX > 0 && e.movementY < 0 ) {
    xt += 0.1;
    yt += -0.1;
  } else if(e.movementX < 0 && e.movementY > 0 ) {
    xt += -0.1;
    yt += 0.1;
  }
  // console.log(e);
})

canvas.addEventListener('touchend', (e) => {
  previousPageX = e.changedTouches[0].pageX;
  previousPageY = e.changedTouches[0].pageY;
  // console.log(previousPageX,previousPageY,'end');
})


class GridPoints{
  vel;
  constructor(x,y) {
    this.x = x;
    this.y = y;
    //velocity tells the direction and magnitude of grid point
    //applying a force to the velocity will simulate forces/accel
  }

  getInitVelocity(vx,vy) {
    this.vel = new Vector(vx,vy);
    return this.vel;
  }

  updateVel(nx,ny) {
    // console.log(this.vel.x+1)
    //this function updates the velocity vector only
    this.vel.x = nx;
    this.vel.y = ny;
  }

  showMag() {
    console.log(this.vel.magnitude());
  }

  showDir() {
    console.log(this.vel.direction());
  }

  drawLength() {
    let finalx,finaly;
    ctx.beginPath();
    ctx.moveTo(this.x,this.y);
    // console.log(this.x,this.y,"init",this.vel.x);
    finalx = this.x+(this.vel.magnitude()*this.vel.direction().dirx);
    finaly = this.y+(this.vel.magnitude()*this.vel.direction().diry);
    // console.log(finalx,finaly);
    ctx.lineTo(finalx, finaly);
    ctx.stroke();

    if(this.vel.magnitude) {
      ctx.fillRect(finalx, finaly,5,5)
      ctx.fillStyle = 'red';
    }
  }


}

class Vector{
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  //calling a class in itself?
  add(v) {
    return new Vector(this.x+v.x, this.y+v.y);
  }

  magnitude() {
    // console.log(this.x);
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
    // return Math.atan(this.y/this.x);
    return {dirx,diry}
  }

}

// console.log(Math.random()*10);

function CreateGrid() {
  for( let i=0; i < canvas.width; i += 50) {
    for(let j=0; j < canvas.height; j += 50) {
    grid.push(new GridPoints(i,j))
    }
  }
}
CreateGrid();




function animate() {
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  // t+=0.1;
  // console.log(t);
  grid.forEach(point => {
    // console.log(point.x,point.y);
    ctx.fillRect(point.x,point.y,1,1);
    
    point.getInitVelocity(1,1);
    point.updateVel(xt,yt);
    // point.showMag();
    // point.showDir();
    point.drawLength();
  
  })
  
  requestAnimationFrame(animate)
  
}

animate();