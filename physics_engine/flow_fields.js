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
    radians = 0,
    time = 0,
    grid = [],
    total_cols = (right_x - left_x),
    total_rows = (bottom_y - top_y),
    default_angle = Math.PI;

// console.log(scale);

canvas.addEventListener('mousemove', e => {
  mousePush = new Vector(e.clientX, e.clientY)
  mx = mousePush.magnitude()/1000;
  my = mousePush.magnitude()/1000;
})
canvas.addEventListener('touchmove', e => {
  mousePush = new Vector(e.touches[0].clientX, e.touches[0].clientY)
  mx = mousePush.magnitude()/10000;
  my = mousePush.magnitude()/10000;
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


}


for(let i=0; i < width; i+=scale) {
  for(let j=0; j < height; j+=scale) {
    grid.push(new Vector(i,j))    
  }
}



function genNoise(t) {
  //generates a value between 0-1 per unit of "time"
  let noiseArray = [];
  let rndnum;
  for(let n=0; n<1; n+=0.001) {
    // noiseArray.push(n%t*2);
    // noiseArray.push({x: Math.cos(t+n), y: Math.sin(t*n)});
    //if x or y here have cos/sin with t+n as a function then it makse the graph of sin/cos
    noiseArray.push({x: t+n, y: t+n});
  }
  rndnum = noiseArray[Math.floor(Math.random()*noiseArray.length)];
  // console.log(noiseArray);
  return rndnum;
}
let colorgrid = [];
function noiset(a,b) {
  // console.log(Math.atan2(Math.sin(1),Math.cos(1)));
  // console.log(range+=1.0);
  // console.log(range);
  for(let x=0; x<1000;x++) {
    for(let y=0; y<1000;y++) {
      let range = (Math.sin(y*x));
      // let range = (Math.sin(y)*Math.cos(x));
      range+=1;
      range/=2;
      let c = Math.round(range*255);
      colorgrid.push({
        x: x,
        y: y,
        color: ctx.fillStyle=`rgb(${c},${c},${c})`,
      })
      ctx.fillRect(colorgrid[x].x,colorgrid[y].y,width,1);
    }
    // ctx.fillStyle = colorgrid[x].color
  }
  // console.log(colorgrid);
}
noiset()
let part = new Particle(width/2,height/2,7)
let part2 = new Particle(width/2.5,height/3,7)
let [a,b] = [0,0];

function animate() {
  ctx.fillStyle = 'rgba(255,255,255,0.009)';
  ctx.fillRect(0,0,canvas.width,canvas.height)
  time += 0.05;
  let noise = genNoise(time);
  // console.log(`time: ${time}`,`noiseX: ${noise.x}`,`noiseY: ${noise.y}` );
  // console.log(noise.x*width);
  part.update(noise.x,noise.y)
  part2.update(noise.x+9,noise.y)
  part.draw()
  part2.draw()
  
 
  // noiset()
  
  grid.forEach(point => {
    angleX = 0.0005;
    angleY = 0.0005;
    let px1 = point.x;
    let py1 = point.y;
    // console.log(angleX);
    let pX = point.x + 10 * Math.cos(angleX);
    let pY = point.y + 10 * Math.sin(angleY);
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

  
  if (mx > 0 && my > 0) {
    mx -= 0.001;
    my -= 0.001;
  }

  // requestAnimationFrame(animate)
}

animate()