let note; 
let noteMoved = false; 
let yPos; // yposition 
let w = 250; 
let h = 600; 

function preload() {
  note = loadImage("note.png"); 
}

function setup() {
  createCanvas(w,h);
  background(220);
  swipes = new Swipeing();
}

function draw() {
  background(0);
  image(note,0,0,w,h); 
  
  if (noteMoved) {
    yPos = height-mouseY/2; 
    // console.log(yPos); 
    image(note,0,mouseY-height,w,h); 


  } else {
    // yPos ++; 
  }
  
    swipes.doStuff();


}


function mousePressed() {
  swipes.pressed();
  noteMoved = true; 
}

function mouseReleased() {
  swipes.released();
  noteMoved = false; 

}

