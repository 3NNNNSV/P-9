var box;

function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{
  

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("aquamarine");

  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    background("seagreen");
  
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("turquoise");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("aqua");
  }


  drawSprites();
}
