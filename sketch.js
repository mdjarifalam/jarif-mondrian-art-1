let w = 500;
let h = 500;

function setup() {
  createCanvas(w, h);
  strokeWeight(5);
  stroke(30);
  noLoop();
}

function draw() {
  mondr(0,0,w,h,4);
}

function mondr(x,y,wid,ht,iterations){
  if (iterations > 0){
    
    if (random(1) < 0.50) {
      let r = random(0.3,0.50);
      mondr(x,y,wid*r,ht, iterations-1);
      mondr(x+wid*r,y,wid*(1-r),ht, iterations-1);
    }
    else {
      let r = random(0.3,0.50);
      mondr(x,y,wid,ht*r, iterations-1);
      mondr(x,y+ht*r,wid, (1-r)*ht,  iterations-1);
    }
  }
  else {
    fill(255);
    let colors = [[245,15,15], [13,127,190], [250,227,23],[0,0,0]];
    if (random(1) < 0.56){
      fill(random(colors));
    }
    rect (x,y,wid,ht);
  }
}
