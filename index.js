canvas = document.querySelector('.canvas');
ctx = canvas.getContext('2d');
let [w1,h1] = [10,10];
let [w2,h2] = [10,10];

window.addEventListener('load', (e) => {
  e.preventDefault();
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.strokeStyle = 'black';

  draw()
})


function draw() {
  setInterval( () => {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    w1++;
    h1++;
    w2--;
    h2--;
    console.log(w1,h2);
    ctx.strokeRect(500,500,w1,h1);
    ctx.strokeRect(500,500,w2,h2);
    // return w,h;
  },100)
  
}

// draw()