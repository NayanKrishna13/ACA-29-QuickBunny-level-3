var bunny;
var carrot;
var edges;
var snakeGroup;
function setup() {
  createCanvas(600,600);
    edges=createEdgeSprites();
bunny = createSprite(40,550,30,30); 
carrot = createSprite(300,40,30,30);
obs1 = createSprite(300,120,100,20);
obs1.velocityX = 5;
obs2 = createSprite(300,320,100,20);
obs2.velocityX = -5;
  obs3=createSprite(300,220,90,20);
  obs3.shapeColor="brown";
  obs4=createSprite(100,220,90,20);
  obs4.shapeColor="brown";
  obs5=createSprite(500,220,90,20);
  obs5.shapeColor="brown";
  obs6=createSprite(500,290,90,20);
  obs6.shapeColor="brown";
  obs7=createSprite(100,290,90,20);
  obs7.shapeColor="brown";
  obs8=createSprite(300,290,90,20);
  obs8.shapeColor="brown";
  obs9=createSprite(100,250,90,20);
  obs9.velocityX=5;
  obs9.shapeColor="brown";
  bunny.shapeColor="white";
carrot.shapeColor = "orange";
obs2.shapeColor = "red";
  obs1.shapeColor = "red";
  snakeGroup=new Group();
}



function draw() {
  background("green");
  
bunny.bounceOff(edges[0]);
bunny.bounceOff(edges[1]);
bunny.bounceOff(edges[2]);
bunny.bounceOff(edges[3]);
obs1.bounceOff(edges[1]);
obs1.bounceOff(edges[0]);
obs2.bounceOff(edges[1]);
obs2.bounceOff(edges[0]);
  obs9.bounceOff(edges[0]);
  obs9.bounceOff(edges[1]);
  

  
  if(keyDown("up")){
    bunny.y=bunny.y-3;
  }
  if(keyDown("down")){
    bunny.y=bunny.y+3;
  }
  if(keyDown("left")){
    bunny.x=bunny.x-3;
  }
  if(keyDown("right")){
    bunny.x=bunny.x+3;
  }
  if(bunny.isTouching(carrot)){
    
  text("YOU WIN!",200,200);
  }
if(bunny.isTouching(obs1)){
  obs1.velocityX=0;
  bunny.x=40;
  bunny.y=550;

  text("YOU LOSE!START AGAIN",200,200);
}
if(bunny.isTouching(obs2)){
  obs2.velocityX=0
  bunny.x=40;
  bunny.y=550;
  text("YOU LOSE,START AGAIN",200,200);
}
  if(bunny.isTouching(obs3)){
  obs3.velocityX=0
  bunny.x=40;
  bunny.y=550;
  text("YOU LOSE,START AGAIN",200,200);
}
  if(bunny.isTouching(obs4)){
  obs4.velocityX=0
  bunny.x=40;
  bunny.y=550;
  text("YOU LOSE,START AGAIN",200,200);
}
  if(bunny.isTouching(obs5)){
  obs5.velocityX=0
  bunny.x=40;
  bunny.y=550;
  text("YOU LOSE,START AGAIN",200,200);
}
  if(bunny.isTouching(obs6)){
  obs6.velocityX=0
  bunny.x=40;
  bunny.y=550;
  text("YOU LOSE,START AGAIN",200,200);
}
  if(bunny.isTouching(obs7)){
  obs7.velocityX=0
  bunny.x=40;
  bunny.y=550;
  text("YOU LOSE,START AGAIN",200,200);
}
  if(bunny.isTouching(obs8)){
  obs8.velocityX=0
  bunny.x=40;
  bunny.y=550;
  text("YOU LOSE,START AGAIN",200,200);
}
  if(bunny.isTouching(obs9)){
     text("YOU LOSE,START AGAIN",200,200);
  obs9.velocityX=0;
    
  bunny.x=40;
  bunny.y=550;
 
}
  generatesnakes();
  
  
  for(var i=0;i<=(snakeGroup).length;i++){
    var temp=(snakeGroup).get(i);
    if(bunny.isTouching(temp)){
      bunny.x=40;
      bunny.y=550;

  text("YOU LOSE!START AGAIN",200,200);
}
  }
  
  drawSprites();
   
}
function generatesnakes(){
  if(frameCount % 30===0){
    console.log(frameCount);
var snakes=createSprite(600,random(70,250),random(30,120),5);
  snakes.shapeColor="yellow"
    snakes.velocityX=random(-4,4);
    snakes.velocityY=random(-4,4);
    snakeGroup.add(snakes);
 
  }
}