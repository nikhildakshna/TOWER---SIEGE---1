class block{
    constructor(x,y){
    
    var options = {
    'restitution': 0.1,
    'friction': 0.01,
    'density': 0.01
    }

    this.body = Bodies.rectangle(x,y,30,50,options);
    this.width = 30;
    this.height = 50;

    World.add(world, this.body);

    }

    display(r,g,b){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill(rgb(r,g,b));
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }
}