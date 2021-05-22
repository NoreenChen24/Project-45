var zebra, zebraImg;
var cage, cageImg;
var bg, bgImg;
var boy, boyImg, girl, girlImg;
var obstacleGroup;
// var survivalTime, score;

function preload(){
  zebraImg = loadImage('Images45/zebra.png');
  cageImg = loadImage('Images45/cage.png')
  boyImg = loadImage('Images45/boy.png');
  girlImg = loadImage('Images45/girl.png');
  bgImg = loadImage('Images45/zooBackground.jpeg');
}

function setup() {
  createCanvas(400,400);
  //background
  bg = createSprite(200,200);
  bg.addImage("bg", bgImg);
  bg.scale = 0.8;

  zebra = createSprite(80,315,20,20);
  zebra.addImage("zebra", zebraImg);
  zebra.scale = 0.2;
  
  //creates ground sprite
  ground = createSprite(0,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  ground.visible = false;
  
  obstacleGroup = new Group();
  
  // score = 0;
}

function draw() {
  background("white");
  
  //calls the function for obstacles
  obstacles();
  
  zebra.collide(ground);
  
  //resets ground
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  //if space key is pressed, zebra will jump
  if(keyDown("space")) {
    zebra.velocityY = -15;
    } 
  
  zebra.velocityY = zebra.velocityY + 0.8;
    
  //displays score
  // survivalTime = Math.ceil(frameCount/frameRate())
  // stroke("black");
  // textSize(20);
  // fill("black");
  // text("Survival Time: "+ survivalTime, 100,50);
  
  drawSprites();
}

function obstacles(){
  if (frameCount % 100 === 0){
    var cage = createSprite(350,320,10,40);
    cage.velocityX = -5;
    cage.lifetime = 200;
    cage.addImage(cageImg);
    cage.scale = 0.25;
    obstacleGroup.add(cage);
  }

  if (frameCount % 250 === 0){
    var boy = createSprite(400,310,10,40);
    boy.velocityX = -5;
    boy.lifetime = 200;
    boy.addImage(boyImg);
    boy.scale = 0.15;
    obstacleGroup.add(boy);
  }

  if (frameCount % 350 === 0){
    var girl = createSprite(400,310,10,40);
    girl.velocityX = -5;
    girl.lifetime = 200;
    girl.addImage(girlImg);
    girl.scale = 0.15;
    obstacleGroup.add(girl);
  }
}
