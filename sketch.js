const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var divisions = [];
var divisionHeight = 300;
var particle = [];
var plinkos = [];

function preload() {

}


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,750,800,20);

  for (var i = 0; i<=width; i = i+80) {
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j=75; j<=width; j = j+50) {
    plinkos.push(new Plinko(j,75));
  }

  for (var j=50;  j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

  for (var j=75; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }

  Engine.run(engine);

}

function draw() {
  background("black");  
  Engine.update(engine);
  drawSprites();

  for (var n = 0; n<divisions.length; n++) {
    divisions[n].display();
  }

  for (var h = 0; h<particle.length; h++) {
    particle[h].display();
  }

  if (frameCount %60 === 0) {
    particle.push(new Particle(random(width/2-30,width/2+30),10,10));

  }


  for (var j = 0; j<plinkos.length; j++) {
    plinkos[j].display();
  }

  ground.display();

}