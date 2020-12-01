
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Body=Matter.Body;

var mango1, mango2, mango3, mango4, mango5, mango6, mango7,mango8,mango9,mango10,mango1IMG
var ground
var slingshot
var tree, treeIMG
var stone, stoneIMG
var boy, boyIMG
var world;
//var launchingforce=100;

function preload()
{
	boyIMG=loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1=new Mango(1100,100,30);
  mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,30);
	mango8=new Mango(1140,150,30);
	mango9=new Mango(1100,230,30);
	mango10=new Mango(1200,200,30);
	mango11=new Mango(1120,50,30);
	mango12=new Mango(900,160,30);
	tree = new Tree(1050,580);
	ground = new Ground(width/2,600,width,20);
	stone = new Stone(100,550,25);
	//stone1 = new Stone(100,1050,40);

	//boy = new Boy(150,700,100,70);
	slingshot = new SlingShot(stone.body,{x:90, y:520});

	boy = createSprite(150,540);
	boy.addImage(boyIMG);
	boy.scale=0.08;

	
	//boy = Bodies.rectangle(80,530);
	//World.add(world,boy);



	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  //Engine.update(engine);
  fill("red")
  textSize(32);
  text("Press Space To Play Again!!!",400,100)

  slingshot.display();
  stone.display();
  ground.display();
  //boy.display();
  //stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  //slingshot.display();


  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3); 
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  drawSprites(); 
 
}

function mouseDragged(){
	//console.log("mouse.X", mouseX);
	Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
	slingshot.fly();
}

function keyPressed(){
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body,{x:90, y:520})
		slingshot.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
	// console.log("lmango",lmango);
	stoneBodyPosition=lstone.body.position;
	mangoBodyPosition=lmango.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}



