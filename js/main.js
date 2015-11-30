/**
 * Created by ddubreui on 2015-11-26.
 */

var score = 0;
var scoretext;
var time = 0;
var timertext;
var stage;
var animation;
var TargetXPos = 100;
var targetYPos = 100;
var targetXSpeed = 1.5;
var targetYSpeed = 1.75;
WIDTH = 1000;
HEIGHT = 1000;
function keepTargetFitted()
{

    if(targetXPos < WIDTH && targetXPos > 0)
    {
        targetXPos += targetXSpeed;
    } else
    {
        targetXSpeed = targetXSpeed * (-1);
        targetXPos +=targetXSpeed;
    }
    if(targetYPos < HEIGHT && targetYPos > 0)
    {
        targetYPos += targetYSpeed;
    } else
    {
        targetYSpeed = targetYSpeed * (-1);
        targetYPos += targetYSpeed;
    }

    animation.x = targetXPos;
    animation.y = targetYPos;


}

var target = new Object();
target.element = 'target';
target.y = 250;
target.x = 450;


document.getElementById("container").addEventListener('click' , function() {
    var innerDiv = document.getElementById("target");
    console.log(innerDiv.style.left.length);
    if (innerDiv.style.left == "") {
        innerDiv.style.left = "0px"
    };
    var posX = (parseInt(innerDiv.style.left, 10) + 20) + "px";
    innerDiv.style.left = posX;
    console.log(posX);
/*
    innerDiv.style.left = innerDiv.style.left  + "px";
    innerDiv.style.top =  sprite.y + "px";
*/

});
/*
function   setPosition(sprite){
          var e =  getElementById(sprite.element);
        }

setPosition(target);*/
