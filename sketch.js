var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var particle,turn=0;
var divisionHeight=300;
var score =0;
var gameState
var count
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 text("score="+score,60,60)
  text("500",30,530)
  text("500",100,530)
  text("500",200,530)
  text("100",250,530)
  text("100",350,530)
  text("100",420,530)
  text("100",520,530)
  text("200",570,530)
  text("200",670,530)
  text("200",750,530)
  for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

   }
   if(particle!=null)
   {
     particle.display();

     if (particle.body.position.x<300)
     {
       score=score+500;
       particle=null;
       if( count>= 5) gameState ="end";
     }
   }
}
function mousePressed(){
  if(gameState!=="end")
{
  count++;
  particle=new Particle(mouseX,10,10,10);
}
}