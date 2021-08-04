var fixedRect, movingRect, object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(400,200,50,40);
  object1.shapeColor = "green";
  object2 = createSprite(300,250,50,60);
  object2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if(x(object2,movingRect)){
  movingRect.shapeColor = "red";
  object2.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  object2.shapeColor = "green";
 }
  drawSprites();
}
