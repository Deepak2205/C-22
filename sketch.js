const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {

  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var object_options = {
    isStatic : true
  }
  object = Bodies.rectangle(200,100,50,50,object_options);
  World.add(world,object);

  var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,300,200,20,ground_options);
  World.add(world,ground);
  
  var ball_options = {
    restituition : 1.0
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0); 
  Engine.update(engine); 
  rectMode (CENTER);
  rect (ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}