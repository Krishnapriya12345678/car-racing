var form,game ,player
var gameState=0
var playerCount=0
function setup(){

    createCanvas(400,400);

 database= firebase.database()
 console.log("start")
 game=new Game()
 game.getState()
 game.start()
}

function draw(){











}
