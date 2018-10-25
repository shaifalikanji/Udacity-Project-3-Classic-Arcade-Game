/*canvas screen starts at 0/0 at the top left of the screen, to increase/decrease positions within game board, estimate
various different pixels sizing in order for enemy and player to remain on game screen canvas*/
/*note all numbers for positions are in PIXELS for the enemy and player objects*/
//Player can not move off screen
//Vehicles cross the screen
//Vehicle-player collisions happen logically (not too early or too late)
//Vehicle-player collision resets the game
//Something happens when player wins// Enemies our player must avoid - congratulations alert!


                                // STEP#1  ***** GAME START VARIABLE ***** //          

var gameStart = true; //starts game when code runs

                                        


                                //STEP#2 ***** ENEMY OBJECT ******//
                                //includes: enemy object, functions: update, render and collision b/w player/enemy //


var Enemy = function(x,y) {  // Variables applied to each of our instances go here,
    this.width = 55;//of enemy (bugs) image size
    this. height = 75;
    this.x = x; //this object: posiion of enemy on game board screen x axis horizontal at start point and during game
    this.y = y; // this object: position of enemy on game board screen y axis vertical at start point and during game
    this.sprite = 'images/enemy-bug.png'; // The image/sprite for our enemies, this uses helper provided to easily load images
    this.collisions = false; //currently the collision is false - nothing happening yet
};

//https://discussions.udacity.com/t/i-dont-understand-how-to-code-classic-arcade-game/527836/2?u=solittletime
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
//updates game after every loop
//dt makes the animation of the bugs walking on the canvas at speeds we can see

Enemy.prototype.update = function(dt) { // multiply any movement by dt parameter ensures game runs at same speed for all computers.
    this.x = this.x + 120 * dt; //enemies are not rendering until this is defined, for every loop iteration, bugs move at this position

    
    if (this.x > ctx.canvas.width + this.width){ // every time enemy (bug) loops off the canvas it will loop right back on
        this.x = -190 * Math.floor(Math.random() * 3) + 7;
    } else {
        this.x += 140 * dt;
    }

//Collision between player and enemy when both end up on the same canvas square with
//is there a collision or not (true or false)
//https://stackoverflow.com/questions/13916966/adding-collision-detection-to-images-drawn-on-canvas
//https://stackoverflow.com/questions/13916966/adding-collision-detection-to-images-drawn-on-canvas
//https://www.youtube.com/watch?v=XEVnMgYblGc&index=3&list=PLKC17wty6rS1XVZbRlWjYU0WVsIoJyO3s
//https://discussions.udacity.com/t/i-dont-understand-how-to-code-classic-arcade-game/527836/2?u=solittletime



    if (collisions(this.x, this.y, this.width, this.height, player.x, player.y, player.width, player.height)) {
        this.collisions = true; //if the collision is true - replace the position of the player

        if (player) { //if the player and enemy collide and a collision happens, replace the original position of the player
            player.x = 300;
            player.y = 408;


        }
    
    } else { 
        this.collisions = false; //if the enemy and player don collide, there is no collision
    }



};


Enemy.prototype.render = function() { // Draw the enemy on the screen, required method for game
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

                                        
                                       

                                        

                                //STEP#3 ***** PLAYER OBJECT ******//
                    //includes: player object, functions: render, update, handleInput //


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
//https://discussions.udacity.com/t/i-dont-understand-how-to-code-classic-arcade-game/527836/2?u=solittletime

var Player = function(x,y) { //we passed x, y parameters here 
    this.width = 75; //of player image size 
    this.height = 85;
    this.x = x; //this object: posiion of player on game board screen x axis horizontal at start point and during game
    this.y = y; //this object: position of enemy on game board screen y axis vertical at start point and during game
    this.sprite = 'images/char-pink-girl.png';
    
    

}

Player.prototype.render = function() { // Draw the player on the screen, required method for game
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Update the players position, required method for game
// Parameter: dt, a time delta between ticks
//when player is at the top of the y axis (blue water lake) 
Player.prototype.update = function(dt) { // multiply any movement by dt parameter ensures game runs at same speed for all computers.
    if (gameStart && player.y < 10) {
        gameStart = false;
        congratulations(); //function for alert that congrats player for winning and reaching the top
        reset();
        
        //player.x = 300;//when player wins the game, it is moved back to its orginal position on the bottom of the game canvas
        //player.y = 408;



    }

};

                              

Player.prototype.handleInput = function(walk){ //this function will allow the player to move on the game canvas
//work with various different numbers until player fits into each cube on the canvas and doesnt fall off canvas
//this function is called below at the event listener based on which arrow keys the user is clicking (up/down/right/left)
    
    const xAxisHorizontal = 101; // on engine.js file line (#141)each column defined on the canvas is 101 pixels
          yAxisVertical = 83; // on engine.js file line (#141) each row is 83 pixels
                            //so we need to make sure each square on the canvas is 83, 101 for x axis and y axis 
                            //so the player remains within the square and does not fall out either up, down, left or right 
                            //of the canvas  
                            //you add or minus - + to the current position of the player on the canvas 
                            //eg: at players current position - walk left - 101 >= 0 - 100
                            //ctx is the canvas object, which defines the width(505px) and height(606px) of the canvas 




    if (walk === 'left' && this.x - xAxisHorizontal >= 0 - 100){ // player walks left on the x axis
        this.x -= xAxisHorizontal; // if player is going left and x axis greater than 0 - 100 so player doesnt go off canvas

    } else if (walk === 'right' && this.x + xAxisHorizontal < ctx.canvas.width - 100){ //player walks right on the x axis
        this.x += xAxisHorizontal; // if player is going right and x axis must be less than canvas width so player doesnt go off canvas


    } else if (walk === 'down' && this.y + yAxisVertical < ctx.canvas.height - 190){ // player walk down on the y axis
        this.y += yAxisVertical; // if player walks down y axis must be less than canvas height, player doesnt go off canvas


    } else if (walk === 'up' && this.y - yAxisVertical > 0 - player.height) { // player walks up on the y axis 
        this.y -= yAxisVertical; // if player walks up y axis must be less than player height so player doesnt go off canvas

    }

}

//https://www.youtube.com/watch?v=oz7pHJ65TEk&feature=youtu.be
//https://matthewcranford.com/arcade-game-walkthrough-part-4-heros-first-steps/
////https://zoom.us/recording/play/aulotDlzKFegQFIJTaTzKgWvNkVsYtlwO454vL1UPE1Cm6lOUBQCtfVurPOIAGAS?startTime=1529542978000
                                
                                //STEP#4  ***** INSTANTIATE YOUR OBJECTS *****//
                        //***** includes: enemy array, player variable, enemy loop using map *****//


// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//this loads the player on the game screen

const enemyPositionOnCanvas = [57, 143, 233]; //array holds positions of the " 3 bugs" on the (y axis) on game canvas
                                              //y axis numbers show up under console.log(allEnemies);
const player = new Player(300, 408); //declaring player variable - call the Player function line # 39 and create a Player object
                                     // 300px, 408px is the size of the image that fits in the canvas squares.

var allEnemies = [new Enemy(-190, 57), new Enemy(-380, 143), new Enemy(-570, 233)];
 // 3 enemies, each will start at a different position on the game screen
// - 190, - 380, -570 pixel positions for each bug on the (x axis)
//the bugs are at a negative position so they are not on the canvas here
//on line (#31 update method) each bug walks at different positions on the canvas

//map function can also be used in es6 (new feature )
//declaring variable with array which holds all the 3 enemies on our game board, the bugs from the
//array will be used to loop through each of the different positions of the bugs.
//the engine.js file uses the enemies(bugs) from this allEnemies variable, map creates new allEnemies array and loops over
////https://discussions.udacity.com/t/i-dont-understand-how-to-code-classic-arcade-game/527836/2?u=solittletime
//https://matthewcranford.com/arcade-game-walkthrough-part-4-heros-first-steps/

function congratulations() {
    reset();
    alert("Congratulations Game Over!")
    window.alert = function () { //removes the alert box, once player selects "ok"
   

    }
}

function reset() {
    allEnemies = [];
    //player.x = 300;//when player wins the game, it is moved back to its orginal position on the bottom of the game canvas
    //player.y = 408;



    


}   


//https://stackoverflow.com/questions/13916966/adding-collision-detection-to-images-drawn-on-canvas
//https://www.youtube.com/watch?v=oz7pHJ65TEk&feature=youtu.be                                          
//https://stackoverflow.com/questions/13916966/adding-collision-detection-to-images-drawn-on-canvas
function collisions(ex, ey, ew, eh, px, py, pw, ph) { //take the enemy and player x,y positions, height, width details for the collision
    return (Math.abs(px - ex) * 2 < pw + ew) && (Math.abs(py - ey) * 2 < ph + eh);
}

//console.log(allEnemies); //ok making sure we have 3 enemies array

                                          
                                          // STEP#5 ***** EVENT LISTENER *****//
        //***** includes: event listener function every time up, down, right, left arrows are clicked *****//



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


function refreshGame(){
    window.location.reload();
    
} 










