
let canvas = document.querySelector(".canvas"),
  ctx = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight,
  startX = canvas.width/Math.random()*10,
  startY = canvas.height/Math.random()*10;



let grid = [];

class GridPoints{
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

}

let g1 = new GridPoints(startX, startY)
console.log(g1);