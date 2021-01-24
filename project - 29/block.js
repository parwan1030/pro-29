class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
        }
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        console.log(this.body.speed);
    if(this.body.speed>3){
      World.remove(world, this.body);
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity)
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,this.width, this.height);
      pop();
    } else{
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,this.width, this.height);
       }
      }
}