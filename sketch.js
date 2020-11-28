var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var survivalTime = 0;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  background("blue");
  createCanvas(400,400)
  
  monkey = createSprite(60,315,20,20)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background("black")
 
  stroke("black")
  fill("white")
  textSize(25)
  text("Score:"+score,300,50)
  
  stroke("white")
  textSize(25)
 survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,35,50)
  
    monkey.collide(ground)
    if (ground.x < 0){
    ground.x = ground.width/2;} 
  
  if(keyWentDown("space") && monkey.y>200){
    monkey.velocityY=-12
  }
  

  
  monkey.velocityY+=0.5
  
  food();
  obstacle();
  drawSprites();
}
  function food(){
    if(World.frameCount%80===0){
      var bananas=createSprite(300,200,20,20);
      bananas.y=random(100,200);
      bananas.addAnimation("banana",bananaImage);
      bananas.scale=0.1;
      bananas.velocityX=-5;
      bananas.lifetime=80;
      bananaGroup.add(bananas);
    }
      
  }
  function obstacle(){
    if(World.frameCount%300===0){
      var obstacles=createSprite(300,320,20,20);
      obstacles.scale=0.2;
      obstacles.addAnimation("obstacle",obstacleImage);
      obstacles.lifetime=80;
      obstacles.velocityX=-5;
      obstacleGroup.add(obstacles);
    }
  }