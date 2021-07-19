const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground,log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(700,320,70,70);   
    box2=new Box(920,320,70,70);
    pig1=new Pig(810,320,50,50);
    log1 = new Log(810,300,20,300,PI/2)
    ground=new Ground(600,height,1200,30);    
    box3 = new Box(700,300,70,70)
    box4=new Box(920,290,70,70);
    log2 = new Log(810,250,20,300,PI/2)
    box5 = new Box(820,230,70,70)
    log3 = new Log(720,230,20,140,PI/7)
    log4 = new Log(900,230,20,140,-PI/7)
    pig2=new Pig(810,300,50,50);
    bird=new Bird(902,100,20,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display()
    box4.display()
    log2.display()
    box5.display()
    log3.display()
    log4.display()
    pig2.display();
    bird.display()
}

