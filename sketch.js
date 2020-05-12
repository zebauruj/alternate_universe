var sunimg,mercuryimg,venusimg,earthing,marsimg,jupiterimg,saturnimg,uranusimg,neptuneimg,
galaxyimg;
var sun,mercy,venus,earth,mars,jupiter,saturn,uranus,neptune,galaxy;
var c;
function preload() {
  sunimg= loadImage("planet/sun1.jpg");
  mercuryimg= loadImage("planet/mercury.jpg");
  venusimg= loadImage("planet/venus.jpg");
  earthimg= loadImage("planet/earth.jpg");
  marsimg= loadImage("planet/mars2.jpg");
  jupiterimg= loadImage("planet/jupiter.jpg");
  saturnimg= loadImage("planet/sat3.jpg");
  uranusimg= loadImage("planet/ura2.jpg");
  neptuneimg= loadImage("planet/nep.jpg");
  galaxyimg= loadImage("planet/gal.jpg");
}
function setup() {
  createCanvas(800,800);
  sun = createSprite(400, 400,10,10);
 mrcy = createSprite(400, 360,10,10);
 venus = createSprite(400, 320,10,10);
 earth = createSprite(400, 280,10,10);
 mars = createSprite(400, 240,10,10);
 jupiter = createSprite(400, 200,10,10);
 saturn = createSprite(400, 160,10,10);
 uranus  = createSprite(400, 120,10,10);
 neptune = createSprite(400, 80,10,10);
 sun.addImage(sunimg);
 mrcy.addImage(mercuryimg);
 venus.addImage(venusimg);

 earth.addImage(earthimg);

 mars.addImage(marsimg);

 jupiter.addImage(jupiterimg);

 saturn.addImage(saturnimg);
 uranus.addImage(uranusimg);

 neptune.addImage(neptuneimg);


mrcy.rotateToDirection=true;
mrcy.rotation=400;
mrcy.velocityX=3;

venus.rotateToDirection=true;
venus.rotation=400;
venus.velocityX=3;

earth.rotateToDirection=true;
earth.rotation=400;
earth.velocityX=3;

mars.rotateToDirection=true;
mars.rotation=400;
mars.velocityX=3;

jupiter.rotateToDirection=true;
jupiter.rotation=400;
jupiter.velocityX=3;

saturn.rotateToDirection=true;
saturn.rotation=400;
saturn.velocityX=3;

uranus.rotateToDirection=true;
uranus.rotation=400;
uranus.velocityX=3;

neptune.rotateToDirection=true;
neptune.rotation=400;
neptune.velocityX=3;

 c=0;
 sun.scale=0.08;
mrcy.scale=0.1;
venus.scale=0.1;
earth.scale=0.2;
mars.scale=0.08;
jupiter.scale=0.1;
saturn.scale=0.1;
uranus.scale=0.2;
neptune.scale=0.08;
}
function draw() {
  
  background("black");
  sun.addImage(sunimg);
  mrcy.rotation=mrcy.rotation+1.3;
  venus.rotation=venus.rotation+1.2;
  earth.rotation=earth.rotation+1.1;  
  mars.rotation=mars.rotation+1;
  jupiter.rotation=jupiter.rotation+0.9;
  saturn.rotation=saturn.rotation+0.8; 
  uranus.rotation=uranus.rotation+0.7;
  neptune.rotation=neptune.rotation+0.6;
   if(World.frameCount%60==0){
     sun.scale+=0.04;
   }
   if(sun.isTouching(mrcy)){
     mrcy.destroy();
     c+=1;
   }
    if(sun.isTouching(venus)){
     venus.destroy();
     c+=1;
   }
    if(sun.isTouching(earth)){
     earth.destroy();
     c+=1;
   }
    if(sun.isTouching(mars)){
     mars.destroy();
     c+=1;
   }
    if(sun.isTouching(jupiter)){
    jupiter .destroy();
     c+=1;
   }
    if(sun.isTouching(saturn)){
     saturn.destroy();
     c+=1;
   }
    if(sun.isTouching(uranus)){
     uranus.destroy();
     c+=1;
   }
    if(sun.isTouching(neptune)){
     neptune.destroy();
     c+=1;
   }
   if(c==8){
     sun.visible=false;
    
     background(galaxyimg);
     
   
   
   }
  drawSprites();
      
  }