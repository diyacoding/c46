var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var door, doorImg, doorsGroup

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  snowImg = loadImage("snow.jpg");

}

function setup() {
  createCanvas(1200, 1000);
  tower = createSprite(600,500,width,height);
  tower.addImage("snow",snowImg);
  tower.velocityX= 1;
  doorsGroup = new Group()
  climbersGroup = new Group()

  ghost = createSprite(200,200,50,50)
  ghost.scale = .3
  ghost.addImage(ghostImg)
  
  
}

function draw() {
  background(800);
  
  if(tower.x > 400){
      tower.x = 300
      
    }


    if(keyDown("LEFT_ARROW")){
ghost.x = ghost.x -3
    }
    if(keyDown("RIGHT_ARROW")){
      ghost.x = ghost.x+ 3
          }

          if(keyDown("space")){
            ghost.velocityY = -5

          }
          ghost.velocityY += .8

if(climbersGroup.isTouching(ghost)){
ghost.velocityY = 0

}
    spawnDoors()
    drawSprites()
}
function spawnDoors(){
if(frameCount % 200 === 0){
  var door = createSprite(Math.round(random(120,400)),-50)
  door.velocityY = 1
  door.addImage(doorImg)


var climber = createSprite(door.x, 10)
climber.addImage(climberImg)
climber.velocityY = 1
  door.lifetime = 800
  doorsGroup.add(door)
  climber.lifetime = 800
  climbersGroup.add(climber)

ghost.depth = door.depth
ghost.depth+=1
}
}