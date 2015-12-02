/**
 * Created by ddubreui on 2015-11-26.
 */
var chargement;
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

/*
timerText = new createjs.Text("Time: " + gameTime.toString(), "36px Arial", "#FFF");
timerText.x = 800;
timerText.y = 10;
stage.addChild(timerText);
*/

//permutation de l'image on click
if(document.images){
    var image1 = new Image(); // charge une image a l'avance
    image1.src = "apparence/images/Isi2.jpg";
    var image2 = new Image(); //charger une deuxieme image a l'avance
    image2.src = "apparence/images/Star-Wars-Ship-Posters-2.gif";
}

//fonction pour animer une image aleatoire avec un math random
$(document).ready(function(){
    animateSpirit();

});
//Generer une position aleatoire parraport a la fenetre du navigateur
function randomPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width()  - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}
//animation de l'image en passant par l'id qui lui est attribue
function animateSpirit(){
    var newq = randomPosition();
    $('#spirite').animate({ top: newq[0], left: newq[1] }, function(){
        animateSpirit();
    });

};

