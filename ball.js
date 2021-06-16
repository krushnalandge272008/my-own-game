class ball {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 60,60, options);
      this.width = 60;
      this.height = 60;
      

      this.image= loadImage("b1.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX
      pos.y=mouseY

      push();
    translate(pos.x, pos.y);
   // rotate(angle)
      imageMode(CENTER);
      fill(255);
      image(this.image,0, 0,this.width, this.height);
      pop();
    }
  };
  