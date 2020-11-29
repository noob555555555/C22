const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world

var ground, ball

function setup() {
  createCanvas(800,400);

  engine = Engine.create()
  world = engine.world

  option = {
    isStatic:true
  }

  option2 = {
    restitution:1
  }

  ground = Bodies.rectangle(50, 370, 200, 10, option)

  World.add(world, ground)

  ball = Bodies.circle(100, 30, 40, option2)

  World.add(world, ball)

  ballX = ball.position.x

  ballY = ball.position.y

}

function draw() {
  background(0);  

  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 800, 20)

  circle(ball.position.x, ball.position.y, 40)

  

}