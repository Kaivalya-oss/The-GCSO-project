var car
var wall;
var speed , weight
var deformation;
function setup() {
  createCanvas(900,300);

  wall = createSprite(20,160,20,height/2);
  wall.shapeColor = "white";
  car = createSprite(600, 200, 50, 50);
  car.shapeColor = "white"
}

function draw() {
  background("green");  
  // for the random of the speed & the weight
  speed = random(55,90);
  weight = random(400,1500);

// for the velocity of the car
   car.velocityX =  -speed;
// console.log(car.x);
  if(car.isTouching(wall)){
 if(wall.x-car.x<(car.width +wall.width)/2){
    car.velocityX = 0;
     deformation = weight*speed* speed/22509;
    
     if(deformation>180)
    {
      car.shapeColor=color(0,255,0);
      
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor = color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor= color(255,0,0);
    }
  }    
  }

  drawSprites();

}
