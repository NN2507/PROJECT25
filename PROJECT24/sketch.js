
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper;
//var wall1,wall2,wall3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
  paper= new Paper(200,100);
 dustbin = new  Dustbin(700,340,100,100);
 
	var paper_options={
        restitution:1.0
    }

    paper= Bodies.circle(200,100,20,paper_options);
    World.add(world,paper);
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin.display();
  ellipseMode(RADIUS); 
  ellipse(paper.position.x,paper.position.y,20,20);
  drawSprites();
 
}



function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:305,y:-305});
  }
}