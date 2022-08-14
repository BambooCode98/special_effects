canvas = document.querySelector('.canvas');
ctx = canvas.getContext('2d');
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

function createParticle(x,y,size,g,w,nx) {
  let gravity = g;
  let wind = w;
  return {
    x: x,
    y: y,
    gravity,
    wind,
    size,
    update() {
      y += gravity;
      x += wind;
      // gravity = grav;
      // if(x < boxX + boxW &&
      //    x + size > boxX &&
      //    y < boxY + boxH &&
      //    y + size > boxY       
      // ) {
      //   y -= gravity;
      // }
        // console.log(y);
      // if(y > 200) {
      //   this.y -= 4;
        
      // }
      if(x > canvas.width || y > canvas.height || x < 0 || y < 0) {
        x = Math.random()*canvas.width;
        y = 10;
      }
      // if(x + size >= canvas.width || x + size <= 0) {
      //   // x -= nx;
      //   // console.log(x);
      //   // y = 10;
      // }
    },
    draw() {
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    },
  }
}

function particles() {
  for(let i=0; i<50; i++) {
    particleArray.push(createParticle(Math.random()*canvas.width*10,Math.random()*canvas.height*10,Math.random()*10,Math.random()*10,Math.sin((Math.random()*2)-1),5))
  }

}
// let part1 = createParticle(canvas.width/2,canvas.height/2);
// let part2 = createParticle(canvas.width/3,canvas.height/3);
particles();
console.log(particleArray);

function animate() {
  // let [x2,y2] = [Math.random()*window.innerWidth,Math.random()*innerHeight];
  // ctx.fillStyle = 'rgba(255,255,255,0.02)'; //leaves trails behind
  // ctx.fillStyle = 'white';
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'red';
  // ctx.fillRect(boxX,boxY,boxW,boxH)
  
  particleArray.forEach(particle => {
    particle.update();
    particle.draw();
  })
  // ctx.rotate(2);
  // ctx.translate(100,100)
  requestAnimationFrame(animate)
  
}
