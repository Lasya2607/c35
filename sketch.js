var ball;
var position;
var database;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var positionloc = database.ref("ball/position");
    positionloc.on("value",read,showerr)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    // ball.x = ball.x + x;
   // ball.y = ball.y + y;
   database.ref("ball/position").set({
       x:position.x+x,
       y:position.y+y
   })
   
}

function read(data) {
position = data.val();
ball.x = position.x;
ball.y = position.y;
}

function showerr() {
    console.log("error")
}
