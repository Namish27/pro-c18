  var path,Jake,left_boundary,right_boundary,pathImg,JakeImg;
  function preload()
{
  pathImg=loadImage("path.png");
  JakeImg=loadImage("Jake1.png","Jake2.png","Jake3.png","Jake   4.png","Jake5.png");
  //pre-load images
}

  function setup()
{
  createCanvas(windowWidth,windowHeight);
  
  path=createSprite(width/2,200)
  path.addImage(pathImg);
  path.velocityY= 7;
 // path.scale=1.2;
  
  Jake=createSprite(width/2,height-20,20,20)
  Jake.addImage("JakeRunning",JakeImg);
  
  left_boundary=createSprite(0,0,100,800)
  left_boundary.visible=false;
 
  right_boundary=createSprite(410,0,100,800)
  right_boundary.visible=false;
  
 
  //create sprites here
}


function draw()
{
  
  Jake.x=World.mouseX;
  
  edges=createEdgeSprites()
  Jake.collide(left_boundary);
  Jake.collide(right_boundary);
  Jake.collide(edges[3]);  
  
  
  background(0);
  path.velocityY= 4;
  
// if(path.y>400)
//{
 // path.y= height/2;
//}
 
  if(path.y>height)
    {
      path.y=height/2;
    }
 drawSprites();
}
