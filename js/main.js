/**
 * Created by ddubreui on 2015-11-26.
 */


var speedModifier = 0.1;


// Synchronisation du Dom avec notre fichier JavaScript.
document.addEventListener('DOMContentLoaded', function() {

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
                window.location.href = "/game_over.html";

            }
        }, 1000);
    }
//lance la fonction startimer  au chargement de la page
    window.onload = function () {
// Genere le temps de jeu que l'on veut juste en multipliant par 60 s par le chiffre que l'on veut
        var deuxMinutes = 60 * 2;
        display = document.querySelector("#time");
        startTimer(deuxMinutes, display);
    };

//Incrementation du score chaque fois qu'on aura atteint la cible
    document.getElementById('spirite').onclick=function() {
        var score = parseInt(document.getElementById("score").innerHTML);
        //incrementaion du scrore par 75 a chaque click
        score = score + 75;
        document.getElementById("score").innerHTML = score;


        if (score >= 200) {
          ;//va  chercher la div mise en display none
            // juste un autre essaie,on esseyera d'appliquer au augmentation e vitesse a cette fonctiom
            //setTimeout(fade_out, 5000);//la div disparrait apres 5 s


            speedModifier = 0.9;
            console.log('ici');

        }


    };

//Decrementation du scrore quand on rate un click sur la cible
    document.getElementById('body_game').onclick=function(){
        var score = parseInt(document.getElementById("score").innerHTML);
        score = score - 25;//decrementaion du scrore par 25 a chaque click
        document.getElementById("score").innerHTML = score;
        if(score <= -200){                                   /*quand le joueur est assez null
         pour avoir un score de - 200 ,le jeu va s'arreter*/
            window.location.href = "/game_over.html";
        }

    };

// Son audio d'un tire avec le click de la sourie
    $(document).ready(function() {
        var shot = document.createElement("audio");
        shot.src="apparence/SoundEffect/shot_sound.mp3";
        shot.autoPlay=false;
        shot.preLoad=true;

        $("#body_game").click(function() {
            shot.play();
        });

    });

// Son audio d'une explosion avec le click de la sourie sur la cible.
    $(document).ready(function() {
        var explosion = document.createElement("audio");
        explosion.src="apparence/SoundEffect/explosion.mp3";
        explosion.autoPlay=false;
        explosion.preLoad=true;
        $("#spirite").click(function() {
            explosion.play();
        });


    });


//Permutation de l'image on click
    if(document.images){
        var image1 = new Image(); // charge une image a l'avance
        image1.src = "apparence/images/Star-Wars-Ship3.gif";
        var image2 = new Image(); //charger une deuxieme image a l'avance
        image2.src = "apparence/images/Star-Wars-Ship3-explosion.gif";//l'image explosion
        var image3 = new Image(); // charge une image a l'avance
        image3.src = "apparence/images/Star-Wars-Ship4.gif";
        var image4 = new Image(); //charger une deuxieme image a l'avance
        image4.src = "apparence/images/Star-Wars-Ship4-explosion.gif";//l'image explosion
    }


//Faire disparaitre  et reapparaitre une image au click

    $(document).ready(function(){

        $("#spirite").click(function() {

            document.myImage.src=image2.src;
            //Dispariton et reapparition  progressive avec un temps donné.
            $("#spirite").fadeOut(1000).fadeIn(1500);
            document.getElementById("spirite").onmouseout=function(){document.myImage.src=image1.src};

        });

        $("#spirite2").click(function() {

            document.myImage2.src=image4.src;//faudra ue tu fasse l explosion de l image #spirite2 aussi
            $("#spirite2").fadeOut(1000);//Disparrait progressivement par rapport a temps donne
            $("#spirite2").fadeIn(1500);//reapparait  progressivement avec un temps
            document.getElementById("spirite2").onmouseout=function(){document.myImage2.src=image3.src};

        });

//fonction pour animer un objet aleatoire avec un math random ???? ou est cette fonction ?????

// Lien vers la page game.html (Pourquoi cette fonction ????)
        $("#start_over").click(function() {
            window.location ="game_.html";

        });

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

        }

//application de la fonction a un objet(on peut l'appliquer a autant d'element  ou d'objet que l'on veut )
        $(document).ready(function() {
            animateDiv($('#spirite'));
            animateDiv($('#spirite2'));

        });
//fonction generer une image aleatoirement par rapport a la fenetre du window
        function makeNewPosition() {


            var h = $(document.body).height() - 150;//parraport a la hauteur
            var w = $(document.body).width() - 200;//parraport a la largeur

            var nh = Math.floor(Math.random() * h);
            var nw = Math.floor(Math.random() * w);

            return [nh, nw];

        }

        //function pour regler la vitesse que l'on veut appliqquer
        function calcSpeed(prev, next) {

            var x = Math.abs(prev[1] - next[1]);
            var y = Math.abs(prev[0] - next[0]);

            var greatest = x > y ? x : y;


            var speed = Math.ceil(greatest / speedModifier); //Deux Variable se nomme Speed ?? Verifier avec l'equipe.
            console.log(speedModifier);
            return speed;
        }


    });// fin de la synchro du Dom avec jquery

});// fin de la synchro du Dom avec JavaScript
