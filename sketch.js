
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	box1= new Box(600,650,200,20);
	 box2 = new Box(500,610,20,100);
	 box3 = new Box(700,610,20,100);
	 paper=new Paper(150,650,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display(); 
  box2.display(); 
  box3.display();
  paper.display(); 
  drawSprites();
 
}



