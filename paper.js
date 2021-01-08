class Paper{
    constructor(x, y,radius) {
        var options = {
           isStatic:true,
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        ellipseMode(CENTER);
        fill("blue");
        ellipse(this.body.position.x,this.body.position.y, this.radius,this.radius);
      }
}