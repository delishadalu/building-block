class Box{

    constructor(x,y)
    {
      var options={
        isStatic:false,
        density:5,
        
        friction:10
      }
     this.body=Bodies.rectangle(x,y,50,20,options)
     World.add(world,this.body)
      
   rand=random([1,2,3,4])
   switch(rand){
     case 1: this.image=loadImage("brickImg1.png");break;
     case 2: this.image=loadImage("brickImg2.png");break;
     case 3: this.image=loadImage("brickImg3.png");break;
     case 4: this.image=loadImage("brickImg4.png");break;
   }
    
     
    }
    display()
    {
        push ()

       

        imageMode(CENTER)

            image(this.image,this.body.position.x,this.body.position.y,100,40);
        
     
     pop ()
     this.body.debug=true
  
    }

   
  
  }
  