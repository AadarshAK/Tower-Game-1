const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
 
}

function setup(){
   
   createCanvas(800,800);

   engine = Engine.create();
   world = engine.world;

   shooter=new Shooter(25,315,30,30);
   chain=new SlingShot(shooter.body,{x:106,y:280});
   block8=new Box(330,235,30,40);
   block9=new Box(360,235,30,40);
   block10=new Box(390,235,30,40);
   block11=new Box(420,235,30,40);
   block12=new Box(450,235,30,40);

   block13=new Box(360,195,30,40);
   block14=new Box(390,195,30,40);
   block15=new Box(420,195,30,40);

   block16=new Box(390,155,30,40);

   ground=new Ground(380,305,180,30);
}

function draw(){
  background(255);
  Engine.update(engine);

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  
  ground.display();

  shooter.display();
  chain.display();
}

function mouseDragged(){
 
  Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  chain.fly();

}