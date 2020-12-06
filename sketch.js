const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
const Body = Matter.Body;

var stand1,stand2
var sling1
var box1,box2,box3,box4,box5
var Box1,Box2,Box3
var BOX1
var bOx1,bOx2,box3
var boX1

var score=0

function setup() {
  createCanvas(800,500);
  engine=Engine.create()
  world=engine.world
  stroke(255)

  stand1=new STANd(400,350,150,20)
  stand2=new STANd(600,300,60,20)
  ground=new STANd(400,480,800,20)

  poll=new Poly(100,400,30)

  sling1=new SlingShot(poll.body,{x:100,y:400})

  box1=new Box(400,325,30,50)
  box2=new Box(370,325,30,50)
  box3=new Box(340,325,30,50)
  box4=new Box(430,325,30,50)
  box5=new Box(460,325,30,50)

  Box1=new Box(400,275,30,50)
  Box2=new Box(430,275,30,50)
  Box3=new Box(370,275,30,50)

  BOX1=new Box(400,200,30,50)

  bOx1=new Box(600,275,20,50)
  bOx2=new Box(620,275,20,50)
  bOx3=new Box(580,275,20,50)

  boX1=new Box(600,225,20,50)

 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  Engine.run(engine);
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(125);  
  
  stand1.display()
  stand2.display()
  ground.display()

  sling1.display()

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()

  box1.SCore()
  box2.SCore()
  box3.SCore()
  box4.SCore()
  box5.SCore()

  Box1.display()
  Box2.display()
  Box3.display()

  Box1.SCore()
  Box2.SCore()
  Box3.SCore()

  BOX1.display()

  BOX1.SCore()

  bOx1.display()
  bOx2.display()
  bOx3.display()

  bOx1.SCore()
  bOx2.SCore()
  bOx3.SCore()

  boX1.display()

  boX1.SCore()

  poll.display()

  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();

 text("Score:"+score,700,40)
}

function mouseDragged(){
	Matter.Body.setPosition(poll.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	sling1.fly()
}

function keyPressed ()
{
if(keyCode === 32)
  {
    sling1.attach(poll.body)
  }
} 