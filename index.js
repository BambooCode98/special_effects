canvas = document.querySelector('.canvas');
ctx = canvas.getContext('2d');
let particleArray = [];

window.addEventListener('load',() => {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  // ctx.shadowBlur = 15;
  // ctx.shadowColor = 'lightblue';
  animate()
  
})

function createParticle(x,y,size,grav,winds) {
  let gravity = grav;
  let wind = winds;
  return {
    x: x,
    y: y,
    gravity,
    wind,
    size,
    update() {
      // gravity = grav;
      y += gravity;
      x += wind;
      // if(x + this.size >= size && y + this.size >= size&& x + this.size <= size && y + this.size <= size) {
      //   -y;
      // }
      if(x >= canvas.width || y >= canvas.height) {
        x = Math.random()*canvas.width;
        y = 10;
      }
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
    particleArray.push(createParticle(Math.random()*canvas.width*10,Math.random()*canvas.height*10,Math.random()*10,Math.random()*10,Math.sin((Math.random()*2)-1)))
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
  
  
  particleArray.forEach(particle => {
    particle.update();
    particle.draw();
  })
  // ctx.rotate(2);
  // ctx.translate(100,100)
  requestAnimationFrame(animate)
  
}
