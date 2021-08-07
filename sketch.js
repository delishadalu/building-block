const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
const Constraint= Matter.Constraint


function preload(){
  backgroundImg= loadImage("1.jpg")
}

function setup() {

  createCanvas(800,800);
 engine=  Engine.create()
 world= engine.world                 
                     
 Engine.run(engine)            
 
 ground= new Ground
 jcb1=new jcb(0,0,150,150)
block1= new Box(100,100)
}

function draw() {
  background(backgroundImg);  
 //ground.display()
 jcb1.display()
 block1.display()
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    jcb1.moveLeft()
  }else 
  if (keyCode === RIGHT_ARROW){
    jcb1.moveRight()
  }
}

