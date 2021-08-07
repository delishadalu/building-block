class jcb{
    constructor(x,y,width,height){
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.image=loadImage("crane2.png")
        var options={
            isStatic:false
        }
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
    }

    display(){
        rectMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }

    
    moveLeft(){
        this.body.position.x-=15
    }

    moveRight(){
        this.body.position.x+=15
    }
}
