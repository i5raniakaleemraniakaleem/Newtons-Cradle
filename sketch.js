
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,ball2;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(230,200,20,20);
	ball2 = new Ball(210,200,20,20);

   ground = new Ground(10,690,800,10);

	chain = new Chain(ball1.body,ball2.body)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball1.display();
  ball2.display();
  ground.display();
  
  drawSprites();
 
}