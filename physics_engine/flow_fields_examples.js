// example 1

let canvas = document.querySelector(".canvas"),
    ctx = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    opacity = document.querySelector(".opacity"),
    totals = document.querySelector('.totals'),
    disappear = document.querySelector('.dissipate'),
    dValue = disappear.value;


// console.log(totals);

ctx.lineWidth = 0.5;
let points = [];
console.log(dValue);

//the setTimeouts functions allow for the dissipation of the particles to appear seamless, does not work with setInterval
let dis = function () {
  dValue = disappear.value;
  points.shift();
  setTimeout(dis, dValue)
}
setTimeout(dis, dValue)

canvas.addEventListener('touchstart', (e) => {
  points.push({
    x: e.touches[0].clientX,
    y: e.touches[0].clientY, 
    vx: 0,
    vy: 0
  })
})

canvas.addEventListener('touchmove', (e) => {
  points.push({
    x: e.touches[0].clientX,
    y: e.touches[0].clientY, 
    vx: 0,
    vy: 0
  })
})

canvas.addEventListener('mousemove', (e) => {
  points.push({
    x: e.clientX,
    y: e.clientY, 
    vx: 0,
    vy: 0
  })
})

console.log(points);

// random attractor params
let a = Math.random() * 4 - 2;
let b = Math.random() * 4 - 2;
let c = Math.random() * 4 - 2;
let d = Math.random() * 4 - 2;

render();

function render() {

  ctx.fillStyle = `rgba(255,255,255,${opacity.value})`;
  ctx.fillRect(0,0,canvas.width,canvas.height);
  totals.textContent = `Current Particles: ${points.length}`;
  
  
  for(var i = 0; i < points.length; i++) {
    // get each point and do what we did before with a single point
    var p = points[i];
    var value = getValue(p.x, p.y);
    // console.log(value);
    p.vx += Math.cos(value) * 0.3;
    p.vy += Math.sin(value) * 0.3;
    
    // move to current position
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    
    // add velocity to position and line to new position
    p.x += p.vx;
    p.y += p.vy;
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    
    // apply some friction so point doesn't speed up too much
    p.vx *= 0.99;
    p.vy *= 0.99;
    
    // wrap around edges of screen
    if(p.x > width) p.x = 0;
    if(p.y > height) p.y = 0;
    if(p.x < 0) p.x = width;
    if(p.y < 0) p.y = height;
  }
  
  // call this function again in one frame tick
  requestAnimationFrame(render);
}

function getValue(x, y) {
  // clifford attractor
  // http://paulbourke.net/fractals/clifford/
  
  // scale down x and y
  let scale = 0.01;
  x = (x - width / 2) * scale;
  y = (y - height / 2)  * scale;

  // attactor gives new x, y for old one. 
  var x1 = Math.sin(a * y) + c * Math.cos(a * x);
  var y1 = Math.sin(b * x) + d * Math.cos(b * y);

  // find angle from old to new. that's the value.
  return Math.atan2(y1 - y, x1 - x);
}