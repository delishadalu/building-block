class Connector{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.1,
            length:150
        }

        this.connector=Constraint.create(options)

        this.bodyA=bodyA
        this.bodyB=bodyB

        World.add(world,this.connector)
    }
    display(){
     if (this.connector.bodyA){
         push()
        stroke("red")
        line(this.connector.bodyA.position.x,this.connector.bodyA.position.y,this.connector.bodyB.position.x,this.connector.bodyB.position.y)
        pop()   
    }
}

    release(){
     this.connector.bodyA=null;
    }
}