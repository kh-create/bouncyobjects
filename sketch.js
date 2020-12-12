const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1,box2;

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(200,100,50,100);
    ground = new Ground(300,390,500,40);
    console.log(ground);
    console.log(box1);
}

function draw(){
    background("yellow");
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
   // rectMode(CENTER);
   // fill("blue");
   // rect(ground.position.x,ground.position.y,400,20);

    //ellipseMode(RADIUS);
    //ellipse(ball.position.x, ball.position.y, 20, 20);
}