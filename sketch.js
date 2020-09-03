const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
   world = engine.world;
  base1 = new Base(600,150,200,10);
  base2 = new Base(400,350,200,10);

  block1 = new Block(550,150,30,30);
  
}

function draw() {
  background(0,0,0); 
  Engine.update(engine); 
  base1.display();
  base2.display();

  block1.display();

  drawSprites();
}