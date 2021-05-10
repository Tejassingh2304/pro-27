
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1, ball2, ball3, ball4, ball5, rope1,rope2,rope3,rope4,rope5, roof

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof= new Roof (width/2, height/4,width/7, 20)
	ballDiameter=40;
	startBallposx=width/2;
	startBallposy=height/4+500;
	ball1= new Ball(startBallposx-ballDiameter*2,startBallposy,ballDiameter)
	ball2= new Ball(startBallposx-ballDiameter,startBallposy,ballDiameter)
	ball3= new Ball(startBallposx,startBallposy,ballDiameter)
	ball4= new Ball(startBallposx+ballDiameter,startBallposy,ballDiameter)
	ball5= new Ball(startBallposx+ballDiameter*2,startBallposy,ballDiameter)

	rope1= new Rope(ball1.body,roof.body, -ballDiameter*2,0)
	rope2= new Rope(ball2.body,roof.body, -ballDiameter,0)
    rope3= new Rope(ball3.body,roof.body, 0,0)
	rope4= new Rope(ball4.body,roof.body, +ballDiameter,0)
	rope5= new Rope(ball5.body,roof.body, ballDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
 

 
}

function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:-95})
	}
}


