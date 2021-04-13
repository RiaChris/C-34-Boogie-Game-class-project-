const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3, boogie4, boogie5, boogie6;
var slingshot1,slingshot2, slingshot3, slingshot4, slingshot5, rock;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
  
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  boggie1 = new Boggie(50,170,50,50);
  boggie2 = new Boggie(150,170,50,50);
  boggie3 = new Boggie(250,170,50,50);
  boggie4 = new Boggie(350,170,50,50);
  boggie5 = new Boggie(450,170,50,50);
  boggie6 = new Boggie(550,170,50,50);
  slingshot1 = new Slingshot(boggie1.body, boggie2.body);
  slingshot2 = new Slingshot(boggie2.body, boggie3.body);
  slingshot3 = new Slingshot(boggie3.body, boggie4.body);
  slingshot4 = new Slingshot(boggie4.body, boggie5.body);
  slingshot5 = new Slingshot(boggie5.body, boggie6.body);
  rock = new Rock(1000,200,100,100);

}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  slingshot1.show();
  slingshot2.show();
  slingshot3.show();
  slingshot4.show();
  slingshot5.show();
  
  boggie1.show();
  boggie2.show();
  boggie3.show();
  boggie4.show();
  boggie5.show();
  boggie6.show();
  var collision = Matter.SAT.collides(boggie6.body, rock.body);
 if (collision.collided){
   flag=1;
 }
 if(flag===1){
   textSize(30);
   stroke(3);
   fill("magenta");
   text("CRASH!!",500,200);
   crashSound.play();
 }
  

  rock.show();
 
  }
 
  function keyPressed() {
  if (keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(boggie6.body,{x:boggie6.body.position.x, y:boggie6.body.position.y}, 
      {x:0.5, y:0});
      trainSound.play();
  }
}
