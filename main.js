function preload() {

}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(150, 150);
 
 

}

function draw() {
  image(video, 50, 60, 530, 360);

  
  
}

function take_snapshot(){    
  save('student_name.png');
}