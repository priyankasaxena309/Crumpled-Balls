
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options = {
		restitution:0.3,
		friction:0,	
		density:1.2,
		isStatic:false
	}
	ball = Bodies.circle(100, 50, 20, ball_options);
	World.add(world, ball);
	
	ground = new Ground(0, 520, 800, 15)

	wall_left = new Ground(500,440, 10, 80)

	wall_right = new Ground(580, 440, 10, 80)

	Engine.run(engine);
  
}*/

/*function draw() {
  background(0);
  ground.show();
  wall_left.show();
  wall_right.show();
  drawSprites();
  ellipse(ball.position.x, ball.position.y, 20);
  console.log(ball.position.x, ball.position.y)

  keydown();
  
}

function keydown(){
  if(keyCode == UP_ARROW){
	Matter.Body.applyForce(ball,ball.position, {x:3, y:-3})
  }
}*/


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 40;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);

	groundObj=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ellipse(ball.position.x,ball.position.y,radius,radius);

  groundObj.display();
  leftSide.display();  
  rightSide.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
    
  	}
}
