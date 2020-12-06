class Box {
  constructor(x, y, width, height){
    var options={
      restitution:0.8,
      friction:1.0,
      density:1.0,
      isStatic:false
    }
    this.visiblity=255
    this.width=width
    this.height=height
    this.body=Matter.Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body)
  }
  display(){
    if (this.body.speed<=3){
        push();
        fill("blue")
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
   }else{
     push()
     fill("blue")
     this.visiblity=this.visiblity-5
     tint(255,this.visiblity)
     World.remove(world,this.body)
     pop()
   }
  }
  SCore(){
    if(this.visiblity<0 && this.visiblity>-1005){
      score++
    }
  }
};
