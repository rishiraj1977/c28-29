class SlingShot
{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 2
        }
         this.sling1 = loadImage("animations/image(1).jpg"); 
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly()
    {
        this.sling.bodyA = null;
    }

    display()
    {
        push();
        if(this.sling.bodyA)
        {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        pop();
        image(this.sling1, 150, 450);
    }
    
}