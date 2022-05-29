
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{
  if (keyDown("right")){
    background("red");
  }
  
  if (keyDown("left")) 
  {
    background("pink");
  }
 
    if (keyDown("up")) 
  {
    background("blue");
  }

  if (keyDown("down")) 
  {
    background("purple");
  }
  drawSprites();
}

