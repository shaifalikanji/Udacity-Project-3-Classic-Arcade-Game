# Front-End-Nanodegree-Arcade-Game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).


# **Classic Arcade Game Information**

•	 this game you have a Player and Enemies (Bugs). The goal of the player is to reach the water, without colliding into any  one of the enemies. 
•	 player can move left, right, up and down. 
•	The enemies move in varying speeds on the paved block portion of the scene. 
•	Once the player collides with an enemy, the game is reset and the player moves back to the start square.
•	Once the player reaches the water the game is won. 
•	Your goal is to make this game functional and error free.
Source: Udacity Project Rubric.

## **Required knowledge and understanding of basics JavaScript concepts**:

1.	Plain (Vanilla) JavaScript language
2.	Object Oriented Programming using JavaScript
3.	Understanding of: objects, constructs, prototypes (prototypal inheritance) and (“this” keyword).

## **Startup summary**:

•	Plan your code first: so, your code is structured, clean, precise and easy to understand.
•	Please note: when creating objects focus on the properties (characteristics of the object) and methods (using functions define what exactly does your object do). Please choose either Plain JavaScript/ES6 JavaScript features to code your game.
•	If you choose to use ES6, create one object class and constructor. Then use the “new” keyword and create new objects for the (player) and (enemy). The new objects will inherit properties and methods(functions) from the original object class. Then create additional functions(methods)/properties for each “new object” defined.


## **Coding requirements for the game**:

*Step 1*

1. Open the html.index file, right click and select “inspect source” – you will notice a list of  “Uncaught reference errors” for functions/variables/arrays that are not defined. Start with defining them first until all errors are removed.

*Step 2: The Player* 

1.	define player – create class and instantiate player
2.	Sprite - this is the URL of the image you will use in the game
3.	This. X = x axis = horizontal position
4.	This. Y = y axis = vertical position
5.	You want the player to cross the road without colliding with the enemy
6.	moves with user input (handle Input () function) – allows you to use the arrow keys (up, down, left, right) to play the game. 
7.	Anything above 0, the player will fall off the game board. This can’t happen
8.	player should move up or down by changing the value of its y property
9.	can use a “switch statement” with different values for the player to move around but remain on the board game throughout the game while using up, down, left and right arrow keys( defined in event listeners)
10.	Check collisions: create a collisions function ():  checks the colliding numbers on the player and enemy, if they end up colliding a collision happens(when enemy/player position on the game board overlap. Function can be used on player or enemy or both. If the player collides with the enemy or the enemy collides with the player a collision happens. 
11.	When the collision happens, the player gets bumped back down to its original position on the green grass.
12.	Check who won: create an update () function and alert () indicating player is not out of bounds, has reached the top of the game board without colliding and with an enemy and “won” the game.
13.	Reset your game board: create a reset function () which re-sets the entire game board including the player and enemies.


*Step 3: The Enemy*

1.	define enemy – create class and instantiate enemy
2.	Sprite - this is the URL of the image you will use in the game
3.	This. X = x axis = horizontal position
4.	This. Y = y axis = vertical position
5.	Anything above 0, the enemy will fall off the game, but enemy must keep appear again immediately within the loop of the game board.
6.	You can change the speed of your enemy: each enemy: so, the move at different speeds
Choose random speeds for start of the game, and repeated looping of the enemy
7.	objects move on their own (update () function) causes the enemy to move
8.	check for collisions function ():  checks the colliding numbers on the player and enemy, if they end up colliding a collision happens. Function can be used on player or enemy or both. If the player collides with the enemy or the enemy collides with the player a collision happens. 
9.	


*Step 4: Both (Player && Enemy)* 

1.	move left and right by changing the x property
2.	get player and enemy moving


# **References used for the project**

•	https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
•	https://lowrey.me/modals-in-pure-es6-javascript/
•	https://css-tricks.com/snippets/javascript/javascript-keycodes/
•	https://stackoverflow.com/questions/13916966/adding-collision-detection-to-images-drawn-on-canvas
•	http://blog.sklambert.com/html5-canvas-game-2d-collision-detection#d-collision-detection
•	https://www.youtube.com/watch?v=XEVnMgYblGc&index=3&list=PLKC17wty6rS1XVZbRlWjYU0WVsIoJyO3s
•	https://knowledge.udacity.com/?nanodegree=5ccda402-496f-11e8-b4ff-439352d5243c&page=1&project=982bdd8a-83f2-11e8-9974-9f9e5c0319d8
•	https://discussions.udacity.com/t/i-dont-understand-how-to-code-classic-arcade-game/527836/2?u=solittletime
•	https://zoom.us/recording/play/aulotDlzKFegQFIJTaTzKgWvNkVsYtlwO454vL1UPE1Cm6lOUBQCtfVurPOIAGAS?startTime=1529542978000
•	https://www.youtube.com/watch?v=xSnuyxF54iQ&feature=youtu.be&t=2h51m2s
•	https://www.youtube.com/watch?v=oz7pHJ65TEk&feature=youtu.be
•	https://www.youtube.com/watch?v=JcQYGbg0IkQ
•	https://www.youtube.com/playlist?list=PLdUdGSe4kmWbEQDQ2g8A0zPx1EM9DJZpp
•	https://matthewcranford.com/arcade-game-walkthrough-part-1-starter-code-breakdown/
•	https://matthewcranford.com/arcade-game-walkthrough-part-2-pseudo-code/
•	https://matthewcranford.com/arcade-game-walkthrough-part-3-creating-a-hero/
•	https://matthewcranford.com/arcade-game-walkthrough-part-4-heros-first-steps/
•	https://matthewcranford.com/arcade-game-walkthrough-part-5-adding-enemies/
•	https://matthewcranford.com/arcade-game-walkthrough-part-6-collisions-win-conditions-and-game-resets/
•	https://help.github.com/articles/basic-writing-and-formatting-syntax/#headings

## **Classic Arcade Game Image Screen Shot**
<img width="883" alt="screen shot 2018-10-25 at 1 49 06 pm" src="https://user-images.githubusercontent.com/38163931/47530026-4f137200-d85e-11e8-85ff-c2380ef92c0d.png">
