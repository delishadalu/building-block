class Box{

    constructor(x,y)
    {
     this.body=Bodies.rectangle(x,y,100,10)
     World.add(world,this.body)
      
  
    }
    display()
    {
        push ()
       rectMode(CENTER)
       rectMode(this.body.position.x,this.body.position.y,100,10)
     pop ()
  
    }
  
  
  }
  