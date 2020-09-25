var fixedRect, movingRect;
var object1, object2, object3, object4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
    movingRect = createSprite(400, 200, 80, 30);
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
    object1 = createSprite(200, 100, 50, 50);
    object2 = createSprite(400, 100, 50, 50);
    object3 = createSprite(600, 100, 50, 50);
    object4 = createSprite(750, 100, 50, 50);
    object1.shapeColor = "green";
    object2.shapeColor = "green";
    object3.shapeColor = "green";
    object4.shapeColor = "green";
    movingRect.velocityX = 3;
    movingRect.velocityY = 5;
    fixedRect.velocityX = 3;
    fixedRect.velocityY = 5;
        }

function draw() {

 background(255, 255, 255);  
 /*movingRect.x = World.mouseX;
 movingRect.y = World.mouseY;
    console.log(movingRect.x - fixedRect.x);
    if (isTouching(movingRect, object2) ||
        isTouching(movingRect, object1) ||
        isTouching(movingRect, object3) ||
        isTouching(movingRect, fixedRect) ||
        isTouching(movingRect, object4)) {
        movingRect.shapeColor = "red";


    }
    else {
        movingRect.shapeColor = "green";
    }
    if (isTouching(movingRect, object2)) {
        object2.shapeColor = "red";

    }
    else{

        object2.shapeColor = "green";

    }
    if (isTouching(movingRect, object1)) {
        object1.shapeColor = "red";

    } else {
        object1.shapeColor = "green";

    }
    if (isTouching(movingRect, object3)) {
        object3.shapeColor = "red";

    } else {
        object3.shapeColor = "green";

    }

    if (isTouching(movingRect, fixedRect)) {
        fixedRect.shapeColor = "red";

    } else {
        fixedRect.shapeColor = "green";

    }

    if (isTouching(movingRect, object4)) {
        object4.shapeColor = "red";

    } else {
        object4.shapeColor = "green";


    }
    */
    bounceOff(movingRect, fixedRect);
    drawSprites();
}
