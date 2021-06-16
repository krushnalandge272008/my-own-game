var carcreatesprite =(200,200,30,30)
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;
function preload()
{
	bg=loadImage("bg.jpg");
}

function setup() {
	createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;
	g1=new Ground(0,400,20000,30)

	b1=new ball(200,200,10,10);
    b1.scale=1.25
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	
	
  background(bg);
  b1.display();
  g1.display();
  
  drawSprites();

}



