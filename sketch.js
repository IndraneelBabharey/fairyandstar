var fairy,fairyImg,fairy,fairy1,fairy2;
var star,starImg,starBG;




function preload()
{
  fairyImg = loadImage("images/fairy.png")
  fairy1 = loadImage("images/fairy1.png")
  fairy2 = loadImage("images/fairy2.png")
  starImg = loadImage("images/star.png")
  starBG = loadImage("images/starnight.png")
}

function setup() {
  createCanvas(800, 750);
  
  background = createSprite(200, 180, 400, 10)
  background.addImage(starBG)

  fairy = createSprite(100, 600, 1, 1)
  fairy.addImage(fairyImg)
  fairy.scale = 0.2

  star = createSprite(700,100,2,2)
  star.addImage(starImg)
  star.scale = 0.2

}


function draw() {
  //background("black");
drawSprites()


if(keyDown("left") ){
  fairy.velocityX = -2
}

if(keyDown("right") ){
  fairy.velocityX = 2
}

if(keyDown("down") ){
  star.velocityY = 2
}





}



