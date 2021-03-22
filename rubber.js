class Rubber {
    constructor(x, y,r) {
      var options = {
        'density':1,
        'friction': 5.0,
        'restitution':0.3
      };
      this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
      this.x = x;
      this.y = y;
      this.r=r;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4); stroke("black"); fill("darkblue"); ellipse(0,0,this.r, this.r);

      pop();
    };
  };
  