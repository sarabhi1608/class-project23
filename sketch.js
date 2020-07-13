const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(500,780,1000,20);
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  fill(0,255,0) 
  rect(200,472,200,300);
  rect(600,472,200,300);
  rect(200,200,100,200);
  rect(700,200,100,200);
  fill(147,0,249)
  circle(500,620,200);
  fill(255,87,51)
  rect(400,620,200,150);
  fill(249,0,0)
  rect(200,400,600,100);
  drawSprites();
  ground.display();
}