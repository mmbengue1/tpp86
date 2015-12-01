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
/*
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
*/


var imgObj = null;
var animate ;

function init(){
    imgObj = document.getElementById('spirite');
    imgObj.style.position= 'relative';
    imgObj.style.left = '0px';
}

function moveRight(){
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    animate = setTimeout(moveRight,20); // call moveRight in 20msec
}

function moveTop(){
    imgObj.style.bottom = parseInt(imgObj.style.bottom) + 10 + 'px';
    animate = setTimeout(moveTop,20); // call moveRight in 20msec
}

function stop(){
    clearTimeout(animate);
    imgObj.style.left = '0px';
}

window.onload =init;

//Animation de l'image on click
if(document.images){
    var image1 = new Image(); // Preload an image
    image1.src = "apparence/images/Isi2.jpg";
    var image2 = new Image(); // Preload second image
    image2.src = "apparence/images/Star-Wars-Ship-Posters-2.gif";
}
