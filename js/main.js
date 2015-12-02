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

//creation du score
document.getElementById('spirite').onclick=function(){
    var score = parseInt(document.getElementById("score").innerHTML);
    score = score + 50;//incrementaion du scrore par 50 a chaque click
    document.getElementById("score").innerHTML = score;

}
//faire disparaitre  et reapparaitre une image au click

$(document).ready(function(){
    $("#spirite").click(function() {
        $("#spirite").fadeOut(1000);
    });

    $("#spirite").click(function() {
        $("#spirite").fadeIn(1500);
    });
});
//permutation de l'image on click
if(document.images){
    var image1 = new Image(); // charge une image a l'avance
    image1.src = "apparence/images/Star-Wars-Ship-1.gif";
    var image2 = new Image(); //charger une deuxieme image a l'avance
    image2.src = "apparence/images/Star-Wars-Ship-Posters-2.gif";//l'image
}

//fonction pour animer un objet aleatoire avec un math random
$(document).ready(function() {
    animateDiv($('#spirite'));//application de la fonction a un objet(on l'appliquer a autant d'element  ou d'objet que l'on veut )


});
//fonction generer une image aleatoirement parraport a la fenetre du window
function makeNewPosition() {


    var h = $(window).height() - 100;//parraport a la hauteur
    var w = $(window).width() - 100;//parraport a la largeur

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}
//Parametre de l'animation de l'objet
function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);
    });

};
//function pour regler la vitesse que l'on veut appliqquer
function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}
var timer;
var output;
var game;

function init(){
    game = new Scene();
    output = document.getElementById("output");
    timer = new Timer();
    timer.reset();
    game.start();
} // end init

function update(){
    game.hide();
    currentTime = timer.getElapsedTime();
    output.innerHTML = currentTime;
} // end update

function reset(){
    timer.reset();
} // end reset
