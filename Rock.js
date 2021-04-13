class Rock{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      this.image= loadImage("images/rock1.png");
      this.width = width;
      this.height = height;
      World.add(myWorld,this.body);
      
    }
    show()
    {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }