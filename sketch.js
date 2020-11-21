var movingrect, fixedrect;
var gameObj1,gameObj2,gameOb3,gameObj4;



function setup() {
  createCanvas(800,400);
  movingrect = createSprite(500, 200, 50, 50);
  movingrect.shapeColor = "blue"
  fixedrect = createSprite(300,200,70,50);
  fixedrect.shapeColor = "orange";
  //movingrect.velocityX = -3;
 // fixedrect.velocityX = 3;

 gameObj1 = createSprite(100,100,50,50);
 gameObj2 = createSprite(100,200,50,50);
 gameObj3 = createSprite(100,300,50,50);
 gameObj4 = createSprite(400,300,50,50);
  
 gameObj3.velocityX = 3
 gameObj4.velocityX = -3

 gameObj3.shapeColor = "green";
 gameObj4.shapeColor = "yellow";
}

function draw() {
  background(255,255,255);  
  
movingrect.x = mouseX
movingrect.y = mouseY

if(isTouching(gameObj2,movingrect)){
  gameObj2.shapeColor = "blue";
  movingrect.shapeColor = "blue";
} 
else{
  gameObj2.shapeColor = "green";
  movingrect.shapeColor = "green";
}

  bounceOff(gameObj3,gameObj4);


  drawSprites();
}

