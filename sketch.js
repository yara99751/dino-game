var trex ,trex_running;
var ground,groundImage;
var invisibleGround;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running)
  trex.scale = 0.5;
  
  edges = createEdgeSprites();

  //creating the ground sprite
  ground = createSprite(200,180,400,10)
  ground.addImage("ground",groundImage);
  ground.x = ground.width/2;

  //invisible ground to align trex on ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible=false;
}

function draw(){
  background("white");

  //console.log(ground.x)

  //jump when space is pressed
  if(keyDown("space") && trex.y>=100){
    trex.velocityY = -10
  }

  //gravity effect
  trex.velocityY = trex.velocityY+0.5;
  //prevent trex from falling off bottom edge
  trex.collide(invisibleGround);

  //trex collide top edge to stay in canvas
 // trex.collide(edges[2]);
  ground.velocityX = -2;
  if(ground.x<0){
    ground.x=ground.width/2
  }
  drawSprites();

}
