var helicopterIMG, helicopterSprite;
var packageSprite,packageSprite2,packageSprite3;
var package1IMG,package2IMG,package3IMG;
var packageBody,packageBody2,packageBody3;
var ground,groundSprite;
var b1,b2,b3; 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	package1IMG=loadImage("package1.png")
	package2IMG=loadImage("package2.png");
	package3IMG=loadImage("package3.png");

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(package1IMG)
	packageSprite.scale=0.2

	packageSprite2=createSprite(width/2, 80, 10,10);
	packageSprite2.addImage(package2IMG)
	packageSprite2.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	line1=createSprite(width/2,height-50,200,20);
	line1.shapeColor=color("red");

	line2=createSprite(510,610,20,100);
	line2.shapeColor=color("red");

	line3=createSprite(310,610,20,100);
	line3.shapeColor=color("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 10 , { isStatic:true});
	World.add(world, packageBody);

	packageBody2 = Bodies.circle(width/2 , 200 , 10 , { isStatic:true});
	World.add(world, packageBody2);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  packageSprite2.x= packageBody2.position.x 
  packageSprite2.y= packageBody2.position.y 

  packageSprite.collide(line1);
  packageSprite.collide(line2);
  packageSprite.collide(line3);

  packageSprite2.collide(line1);
  packageSprite2.collide(line2);
  packageSprite2.collide(line3);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.setStatic(packageBody,false);

	 }

	 if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody2,false);
 
	  }

	}

