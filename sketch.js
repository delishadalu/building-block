const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
const Constraint= Matter.Constraint
var jcbSpt;
var boxes=[]
var vX=3;

var rand=4


function preload(){
  backgroundImg= loadImage("1.jpg")
  brick1Img=loadImage("brickImg1.png")
  brick2Img=loadImage("brickImg2.png")
  brick3Img=loadImage("brickImg3.png")
  brick4Img=loadImage("brickImg4.png")
}

function setup() {

  createCanvas(800,800);
 engine=  Engine.create()
 world= engine.world                 
                     
 Engine.run(engine)  
  
 ground= new Ground()
 jcb1=new jcb(120,50,150,150)
 box1=new Box(100,200)
 boxes.push(box1)
 connector1=new Connector(box1.body,jcb1.body)


 
}

function draw() {
  background(backgroundImg); 


console.log(ground.body.position.y)
  
  
 
 //ground.display()
 jcb1.display()
 
 connector1.display()

 for(var i=0;i<boxes.length;i++) {
  boxes[i].display()
}

if (frameCount%200 === 0){
  vX=-vX
   Matter.Body.setVelocity(jcb1.body,{x:vX,y:0})
}

}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    jcb1.moveLeft()
  }else 
  if (keyCode === RIGHT_ARROW){
    jcb1.moveRight()
  }
  if (keyCode === 32){
    connector1.release()
    box1=new Box(100,200)
    boxes.push(box1)
    connector1=new Connector(box1.body,jcb1.body)
  }
}

