class Platform
{
    constructor(x, y)
    {
        var options =
        {
            'isStatic': true
        }
        
        this.body = Bodies.rectangle(x, y, 250, 20, options);
        this.width = 250;
        this.height = 20
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(0);
        rect(0, 0, this.width, this.height);
        pop();
    }
}