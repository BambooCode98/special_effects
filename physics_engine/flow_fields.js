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
    my = 0,
    tx = 0,
    ty = 0,
    radians = 0,
    time = 0,
    grid = [],
    range = 0,
    total_cols = (right_x - left_x),
    total_rows = (bottom_y - top_y),
    default_angle = Math.PI;

// console.log(scale);

canvas.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
})
canvas.addEventListener('touchmove', e => {
  tx = e.touches[0].clientX
  ty = e.touches[0].clientY;
})


class Particle{
  constructor(x,y,radius) {
    this.pos = new Vector(x,y);
    this.r = radius;

  }


  draw() {
    // let [red,blue] = [0,0];
    // ctx.fillStyle = `rgba(${red+=1},${blue+=1},150,0.9)`
    ctx.fillStyle='blue'
    ctx.beginPath();
    ctx.arc(this.pos.x,this.pos.y,this.r,0,Math.PI*2)
    ctx.fill();
    ctx.closePath();
  }
  
  update(t) {
    // console.log(t);
    this.pos.x += Math.cos(t);
    this.pos.y += Math.sin(t);
    // console.log(this.pos.x,this.pos.y);

    if(this.pos.x > width) this.pos.x = 0;
    if(this.pos.x < 0) this.pos.x = width;
    if(this.pos.y < 0) this.pos.y = height;
    if(this.pos.y > height-10) this.pos.y = 0;
  }
}


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

  dot() {

  }

}

let part = new Particle(width/2,height/2,7)
let part2 = new Particle(width/2.5,height/3,7)

for(let i=0; i < width; i+=scale) {
  for(let j=0; j < height; j+=scale) {
    grid.push(new Vector(i,j))    
  }
}


function fade(n) {
  return ((6*n-15)*n+10)*n*n*n
}

function lerp(l1,l2,d) {
  return l1 + d*(l2-l1)
}

function smoothstep(d) {
  let l1 = d * d;
  let l2 = 1.0 - (1.0-d) * (1.0-d)
  return lerp(l1,l2,d)
}

let colorgrid = [];
function noiset(a,b) {
  for(let x=0; x<width;x+=8) {
    for(let y=0; y<height;y+=8) {
      //the y/x times a number is how the pattern is scaled
      let [x2,y2]=[x-a,y-b];
      let mag1 = Math.sqrt(x*x+y*y)
      let mag2 = Math.sqrt(x2*x2+y2*y2)
      let dot = mag1*mag2*Math.cos(mag1-mag2)
      let ux = fade(x);
      let uy = fade(y);
      let f = smoothstep(dot)
      //range is the result of the noise funtion here, so would return base value
      //number in the sine is the frequency
      //amplitude is in front
      range = (Math.sin(f*50000));
      // let range = (Math.sin(y)*Math.cos(x));
      range+=1;
      range/=2;
      
      let c1 = Math.round(Math.random()*range*255);
      let c2 = Math.round(Math.random()*range*255);
      let c3 = Math.round(Math.random()*range*255);
      colorgrid.push({
        x: x,
        y: y,
        color: `rgb(${c1},${c2},${c3})`,
        width: 2,
      })
      // return range;
    }
  }
}

noiset(5,5)

function animate() {
  // ctx.fillStyle = 'rgba(255,255,255,1)'
  ctx.fillRect(0,0,canvas.width,canvas.height)
  // console.log(mx*0.005);
  colorgrid.forEach(pixel => {
    // ctx.fillStyle = pixel.color;
    // ctx.fillRect(pixel.x,pixel.y,1,1)
    // ctx.lineWidth = pixel.width;
    ctx.strokeStyle = pixel.color;
    // ctx.shadowColor = 'red';
    // ctx.shadowBlur = 10;
    ctx.lineWidth = 4;
    // ctx.lineCap = 'round'
    let vx = Math.cos(Math.random()*8)
    let vy = Math.sin(Math.random()*8)
    let max = (vx*vx)/(mx/4)
    let may = (vy*vy)/(my/8)
    let tvx = Math.cos(Math.random()*8)
    let tvy = Math.sin(Math.random()*8)
    let tax = (tvx*tvx)/(tx*0.01)
    let tay = (tvy*tvy)/(ty*0.01)
    ctx.beginPath()
    ctx.moveTo(pixel.x,pixel.y);
    // console.log(mx,my);
    // pixel.x += max;
    // pixel.y += may;
    if(my && mx) {
      pixel.x += max;
      pixel.y += may;
    }
    if(tx && ty) {

      pixel.x += tax;
      pixel.y += tay;
    }
    ctx.lineTo(pixel.x,pixel.y)
    ctx.stroke()
    if(pixel.x > width) pixel.x = 0;
    if(pixel.y > height) pixel.y = 0;
    if(pixel.x < 0) pixel.x = width;
    if(pixel.y < 0) pixel.y = height;
    // tx = 0;
    // ty = 0;
  })
  // console.log(range);
  
  // grid.forEach(point => {
  //   angleX = 0.0005;
  //   angleY = 0.0005;
  //   let px1 = point.x;
  //   let py1 = point.y;
  //   // console.log(angleX);
  //   let pX = point.x + 10 * Math.cos(angleX);
  //   let pY = point.y + 10 * Math.sin(angleY);
  //   // console.log(px1,pX);
  //   ctx.beginPath();
  //   ctx.moveTo(px1,py1);
  //   ctx.lineTo(pX,pY);
  //   ctx.stroke();
    
  //   // ctx.fillRect(pX,pY,5,5)
  //   ctx.beginPath()
  //   ctx.arc(pX,pY,2,0,Math.PI*2)
  //   ctx.fillStyle = 'red'
  //   ctx.fill();
  // })

  


  requestAnimationFrame(animate)
}

animate()