class Ground{

    constructor(){

       this.body = Bodies.rectangle( 400,780,800,10,{isStatic:true})
       World.add(world, this.body)
    }

    display(){

        rectMode(CENTER)
        rect ( this.body.position.x, this.body.position.y,800,10)
    }
}