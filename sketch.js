var database;
var gameState = 0
var playerCount = 0
var player, game, form
var allPlayers
var cars,car1,car2,car3,car4


function setup(){
    database = firebase.database()
    createCanvas(displayWidth-20,displayHeight-30);
    game = new Game()
    game.getState()
    game.start()
    
}

function preload(){
    car1_i = loadImage("assets/car1.png")
    car2_i = loadImage("assets/car2.png")
    car3_i = loadImage("assets/car3.png")
    car4_i = loadImage("assets/car4.png")
    track = loadImage("assets/track.jpeg")

}

function draw(){
    background("white");

    if(playerCount == 4){
        game.update(1)
    }

    if(gameState == 1){
        clear()
        game.play()
    }
    if(gameState == 2){
        game.end()
    }
   
    drawSprites();
}













