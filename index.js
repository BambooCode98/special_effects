canvas = document.querySelector('.canvas');
ctx = canvas.getContext('2d');
let particleArray = [];

window.addEventListener('load',() => {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.shadowBlur = 15;
  ctx.shadowColor = 'lightblue';
  animate()
  
})

function createParticle(x,y) {
  let gravity = 0.01;
  let wind = 1;
  return {
    x: x,
    y: y,
    gravity,
    wind,
    update() {
      gravity += 0.01;
      y += gravity;
      x += wind;
      if(gravity >= 20) {
        gravity = 0.01;
        y=10;
      }
      if(x > canvas.width || y > Math.random()*canvas.height*10) {
        x = Math.random()*canvas.width;
        y = 10;
      }
    },
    draw() {
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    },
  }
}

function particles() {
  for(let i=0; i<50; i++) {
    particleArray.push(createParticle(Math.random()*canvas.width,Math.random()*canvas.height))
  }

}
// let part1 = createParticle(canvas.width/2,canvas.height/2);
// let part2 = createParticle(canvas.width/3,canvas.height/3);
particles();
console.log(particleArray);

function animate() {
  // let [x2,y2] = [Math.random()*window.innerWidth,Math.random()*innerHeight];
  ctx.fillStyle = 'rgba(0,0,255,0.02)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'black';
  
  
  particleArray.forEach(particle => {
    particle.update();
    particle.draw();
  })
  // ctx.rotate(2);
  // ctx.translate(100,100)
  requestAnimationFrame(animate)
  
}
