const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polyimg, sling;
var floor1, floor2;
var block1, block2, block3, block4, block5, block6;
var block7, block8, block9, block10, block11;
var block12, block13, block14, block15;
var block16, block17, block18;

var block19, block20, block21, block22;
var block23, block24, block25;
var block26, block27, block28;

function preload() {
polyimg=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);  

    engine = Engine.create();
    world = engine.world;

    polygon=Bodies.circle(100,100,20);
    World.add(world,polygon);

    floor1 = new Ground(480,370,320,20);
    floor2 = new Ground(900,300,250,20);
  
// First Platform
    block1 = new Block(355,280,50,50,"blue");  
    block2 = new Block(405,280,50,50,"blue");
    block3 = new Block(455,280,50,50,"blue");
    block4 = new Block(505,280,50,50,"blue");
    block5 = new Block(555,280,50,50,"blue");
    block6 = new Block(605,280,50,50,"blue");

    block7 = new Block(380,230,50,50,"cyan");
    block8 = new Block(430,230,50,50,"cyan");
    block9 = new Block(480,230,50,50,"cyan");
    block10 = new Block(530,230,50,50,"cyan");
    block11 = new Block(580,230,50,50,"cyan");

    block12 = new Block(405,180,50,50,"pink");
    block13 = new Block(455,180,50,50,"pink");
    block14 = new Block(505,180,50,50,"pink");
    block15 = new Block(555,180,50,50,"pink");

    block16 = new Block(430,130,50,50,"orange");
    block17 = new Block(480,130,50,50,"orange");
    block18 = new Block(530,130,50,50,"orange");

//Second Platfrom
    block19 = new Block(820,210,50,50,"blue");
    block20 = new Block(870,210,50,50,"blue");
    block21 = new Block(920,210,50,50,"blue");
    block22 = new Block(970,210,50,50,"blue");

    block23 = new Block(845,160,50,50,"cyan");
    block24 = new Block(895,160,50,50,"cyan");
    block25 = new Block(945,160,50,50,"cyan");

    block26 = new Block(870,110,50,50,"pink");
    block27 = new Block(920,110,50,50,"pink");
  
    block28 = new Block(895,60,50,50,"orange");

    sling = new Slingshot(this.polygon, {x:100,y:100});
}

function draw(){
    background("gray")
    Engine.update(engine);

    floor1.display();
    floor2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();

    block12.display();
    block13.display();
    block14.display();
    block15.display();

    block16.display();
    block17.display();
    block18.display();


    block19.display();
    block20.display();
    block21.display();
    block22.display();

    block23.display();
    block24.display();
    block25.display();

    block26.display();
    block27.display();

    block28.display();

    imageMode(CENTER);
    image(polyimg, polygon.position.x, polygon.position.y, 40, 40);

    sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    sling.fly();
}