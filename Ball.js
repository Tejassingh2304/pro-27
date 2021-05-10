class Ball {
    constructor(x,y,r ) {
      var options = {
          isStatic: false,
          restitution:1,
          density:0.5,
          friction:0

      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angles=this.body.angle;
      push ()
      translate(pos.x, pos.y)
      rotate (angles)
      ellipseMode(CENTER);
      fill("purple");
      ellipse(0, 0, this.r, this.r);
      pop ()
    }
  };
