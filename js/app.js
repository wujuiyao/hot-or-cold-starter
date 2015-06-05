
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});
  /*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /**************************************************/
    var secretNumber = 0;
    var userGuess = 0;
    var clickCount = 0;
    var distance;
    var finishState = false;
    /*Generate a Secret Number*/
    function randomInt() {
        secretNumber = Math.floor(Math.random()*100) + 1;
        console.log("Secret Number is " + secretNumber);
    }
    randomInt();
    /*Evaluates the Input*/
    function checkInput(){
      var feedback = document.getElementById('feedback');
      if(finishState === false){
        if(userGuess > 100 || userGuess < 0){
           feedback.innerHTML = 'Number between 0 and 100!';
         }else if(isNaN(userGuess)){
           feedback.innerHTML = 'Numeric Number Please!';
         }else if(userGuess === ""){
           feedback.innerHTML = 'Enter a Numeric Number!';
         }else if (1 < userGuess < 101){
           if(userGuess / secretNumber == 1){
              feedback.innerHTML = "Great, " + userGuess + " is the correct number !";
              finishState = true;
            }else if(distance > 60 || distance < -60){
              feedback.innerHTML = "You are really freezing";
            }else if(distance > 50 || distance < -50){
              feedback.innerHTML = "Still freezing";
            }else if(distance > 40 || distance < -40){
              feedback.innerHTML = 'You are very cold';
            }else if(distance > 30 || distance < -30){
              feedback.innerHTML = "You are cold";
            }else if(distance > 20 || distance < -20){
              feedback.innterHTML = "It's getting warm";
            }else if(distance > 10 || distance < -10){
              feedback.innerHTML = "It's getting very warm";
            }else if(distance > 5 || distance < -5){
              feedback.innerHTML = "It's hot";
            }else if(distance > 3.5 || distance < -3.5){
              feedback.innerHTML = "It's very hot";
            }else if(distance > 1.5 || distance < -1.5){
              feedback.innerHTML = "It's super hot";
            }else if(distance > 0.5 || distance < -0.5){
              feedback.innerHTML = "It's Burning!!!";
            }else{}
        }
      }else{/*if the finishState is set to true*/
        feedback.innerHTML = "You already won! Start a New Game";
      }

    }

    function clicksMade(){
      clickCount = document.getElementById('count').innerHTML;
      clickCount++;
      document.getElementById('count').innerHTML = clickCount;
    }


    function startGame(){

       finishState = false;
       clickCount = 0;


       var guessButton = document.getElementById('guessButton');
       guessButton.addEventListener('click', function (){

         clicksMade();
         userGuess = document.getElementById('userGuess').value;
         distance = secretNumber - userGuess;
         console.log("Distance between Secret N. and Guessed Number is " + distance);


       checkInput();

       });
     }

     var newGame = document.getElementById('new');
     newGame.addEventListener('click', function (){
       startGame();
     });

});
