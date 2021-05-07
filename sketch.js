const Constraint = Matter.Constraint;
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var ground, count=0,Play =0,End =1,gamestate = Play;

//var particles = [];
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight=630;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  for(var k =0;k<=width;k=k+80){
    divisions.push(new Divisions(k,divisionHeight,10,height =divisionHeight/2 ))
  }
  for(var j=40;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  } 
  for(var j=40;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  } 
    
}
 


function draw() {
  background(0,0,0);
  textSize(20)
 
  Engine.update(engine);


  for(var k=0;k<divisions.length;k++){
   divisions[k].display();
   
  } 
  for(var j=0;j<plinkos.length;j++) { 
   plinkos[j].display(); 
  }
  if(particle !=null){
    particle.display();
    if(particle.body.position.y>600){
    if(particle.body.position.x<320){
  score+=500;
  particle = null;
  console.log("500"+score);
    }
  else if(particle.body.position.x<640){
  score+=200;
  particle = null;
  }
  else if(particle.body.position.x>640){
  score+=100;
  particle = null;
  }
}
  }
  if(count<2)
  gamestate = Play;
  else {
    gamestate = End;
  }
  
  ground.display();
  fill("white");
  text("Score : "+score,20,30);
   
  if(gamestate === End)
{
  textSize(30);
  fill("white");
  text("Game Over",400,150);

}
   for(var k =0,i=0;k<=width;k=k+80,i++){
    textSize(30);
     if(i<=3)
    text("500",k+10,divisionHeight-150);
    if(i>3 && i<=7)
    text("200",k+10,divisionHeight-150);
    else if(i>7)
    text("100",k+10,divisionHeight-150);
  }
  


}
function mousePressed (){
   particle = new Particle(mouseX,10,10,10);
   count++;
   console.log("mousePressed");
}