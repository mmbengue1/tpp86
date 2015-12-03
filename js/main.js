/**
 * Created by ddubreui on 2015-11-26.
 */

var time = 0;
var sprite = null;

//creation d'un compte a rebours  pour determiner le temps de jeu
function startTimer(duration, affichage) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        affichage.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            alert("you lost" );
        }
    }, 1000);
}
//lance la fonction startimer  au chargement de la page
window.onload = function () {
    var uneMinutes = 60 * 1,// genere le temps de jeu que l'on veut juste en multipliant par 60 s par le chiffre que l'on veut
        display = document.querySelector("#time");
    startTimer(uneMinutes, display);
};

//Incrementation du score chaque fois qu'on aura atteint la cible
document.getElementById('spirite').onclick=function(){
    var score = parseInt(document.getElementById("score").innerHTML);
    score = score + 75;//incrementaion du scrore par 75 a chaque click
    document.getElementById("score").innerHTML = score;
    if (score == 100) {
        alert("fuck u")
    }


}

//Decrementation du scrore quand on rate un click sur la cible
document.getElementById('body_game').onclick=function(){
    var score = parseInt(document.getElementById("score").innerHTML);
    score = score - 25;//decrementaion du scrore par 25 a chaque click
    document.getElementById("score").innerHTML = score;

}

// Son audio tire avec la sourie
$(document).ready(function() {
    var shot = document.createElement("audio");
    shot.src="apparence/SoundEffect/shot_sound.mp3";
    shot.autoPlay=false;
    shot.preLoad=true;

    $("#body_game").click(function() {
      shot.play();
  });

});

// Son audio explosion lorsqua la cible est atteint
$(document).ready(function() {
    sprite = document.getElementById('spirite');
    var explosion = document.createElement("audio");
    explosion.src="apparence/SoundEffect/explosion.mp3";
    explosion.autoPlay=false;
    explosion.preLoad=true;
    explosion.play();
});


//permutation de l'image on click
if(document.images){
    var image1 = new Image(); // charge une image a l'avance
    image1.src = "apparence/images/Star-Wars-Ship3.gif";
    var image2 = new Image(); //charger une deuxieme image a l'avance
    image2.src = "apparence/images/explosion.gif";//l'image explosion
}


//faire disparaitre  et reapparaitre une image au click

$(document).ready(function(){

    $("#spirite").click(function() {

        document.myImage.src=image2.src;
        $("#image2").fadeOut(1000);//Disparrait progressivement par rapport a temps donne
        $("#spirite").fadeIn(1500);//reapparait  progressivement avec un temps
        document.getElementById("spirite").onmouseout=function(){document.myImage.src=image1.src};

    });
//fonction pour animer un objet aleatoire avec un math random
    animateDiv($('#spirite'));//application de la fonction a un objet(on peut l'appliquer a autant d'element  ou d'objet que l'on veut )
});


//fonction generer une image aleatoirement par rapport a la fenetre du window
function makeNewPosition() {


    var h = $(document.body).height() - 100;//parraport a la hauteur
    var w = $(document.body).width() - 100;//parraport a la largeur

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

    var speedModifier = 0.4;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;




}

