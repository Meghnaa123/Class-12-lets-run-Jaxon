
var runner,runner_running
var pathImg, invisibleGround1,invisibleGround2
function preload(){
  //pre-load images
runner_running=loadAnimation("Runner-1.png","Runner-2.png")
pathImg=loadImage("path.png")


}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200)
path.addImage(pathImg)
path.velocityY=4
path.scale=1.2

runner=createSprite(390,340,10,10)
runner.addAnimation("Running",runner_running)
runner.scale=0.08

invisibleGround1= createSprite(0,200,60,400)
invisibleGround1.visible=false

invisibleGround2= createSprite(400,200,60,400)
invisibleGround2.visible=false

}

function draw() {
  background(0);

if (path.y>400) {
  path.y=height/2
}

runner.x=mouseX





runner.collide(invisibleGround1)
runner.collide(invisibleGround2)
  drawSprites();
}
