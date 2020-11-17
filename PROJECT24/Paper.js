class Paper {
    constructor(x,y,width,height,angle){
        var options = {
            isStatic: false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/crumpled paper.png");
    World.add(world, this.body);
    
  }
  display(){
    keyPressed();
    ellipseMode(RADIUS);
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("White");
    pop();
  }
    }