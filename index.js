'use strict';

let canvas = document.querySelector('.canvas');
let ctx = canvas.getContext('2d');
let particleArray = [];
let boxX = 200;
let boxY = 200;
let [boxW,boxH] = [200,200]

window.addEventListener('load',() => {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  // ctx.shadowBlur = 15;
  // ctx.shadowColor = 'lightblue';
  animate()
  
})

function Particle(x,y,size,g,w,color) {
  this.x = x;
  this.y = y;
  this.gravity = g;
  this.wind = w;
  this.size = size;
  this.color = color;
  this.radians = 0;


  this.update = function() {
    this.y += this.gravity;
    this.x += this.wind;
    this.radians += 0.8;
    //can be this.x+=Math.etc
    this.x = this.x + Math.sin(this.radians);
    this.y = this.y + Math.cos(this.radians);

    if(this.x + this.size > canvas.width || this.x + this.size < 1 + this.size || this.y + this.size > canvas.height || this.y + this.size < 0) 
      {
      this.boom(this.x,this.y,1)
      // this.x = Math.random()*canvas.width;
      // this.y = 10;
      // particleArray.shift();
    }

  };

  this.draw = function() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    // ctx.fillRect(0,0,innerWidth,innerHeight)
    ctx.closePath();
    ctx.fill();
  };

  this.boom = function(startx,starty,size) {
    ctx.beginPath();
    ctx.save();
    ctx.fillStyle = `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, ${Math.random()})`;
    // console.log(size);
    // ctx.rotate(angle*Math.PI/180)
    ctx.arc(startx, starty, size, 0, Math.PI * 2)
    ctx.closePath();
    ctx.fill();

    if(size > 25){
      ctx.restore();
      return;
    }
    ctx.restore();
    this.boom(startx, starty, size*1.5);
    // this.boom(startx+2,starty+2,size*2)
  }
}

function particles() {
  // for(let i=0; i<75; i++) {
  //   let x = Math.cos(0);
  //   let y = Math.sin(0);
  //   particleArray.push(new Particle(Math.random()*innerWidth,Math.random()*innerHeight,Math.random()*15,Math.random()*2,Math.sin((Math.random()*2)-1),'black'))
  // }

  //touch method
  canvas.addEventListener('touchmove',(e) => {
    particleArray.push(new Particle(e.touches[0].clientX,e.touches[0].clientY,Math.random()*15,Math.random()*2,Math.sin((Math.random()*2)-1),'black'))
  })

}


particles();

function animate() {
  // let [x2,y2] = [Math.random()*window.innerWidth,Math.random()*innerHeight];  //particle flash effect
  // ctx.fillStyle = 'rgba(255,255,255,0.02)'; //leaves trails behind
  // ctx.fillStyle = 'red';
  
  ctx.fillStyle = 'rgba(255,255,255,0.09)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  
  particleArray.forEach(particle => {
    particle.update();
    particle.draw();
  })
  
  requestAnimationFrame(animate)
  
}
