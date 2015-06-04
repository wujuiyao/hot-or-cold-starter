
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

    function randomInt() {
        secretNumber = Math.floor(Math.random()*100) + 1;
        console.log("Secret Number is " + secretNumber);
    }
    randomInt();


    function startGame(){

       var feedback = document.getElementById('feedback');
       var guessButton = document.getElementById('guessButton');

       guessButton.addEventListener('click', function (){

          userGuess = document.getElementById('userGuess').value;
          distance = secretNumber - userGuess;
          console.log("Distance between Secret N. and Guessed Number is " + distance);

          if(userGuess > 100 || userGuess < 0){
     					feedback.innerHTML = 'Number between 0 and 100!';
     			}else if(isNaN(userGuess)){
             feedback.innerHTML = 'Numeric Number Please!';
     			}else if(userGuess === ""){
             feedback.innerHTML = 'Enter a Numeric Number!';
          }else if (1 < userGuess < 101){
             if(userGuess == secretNumber){
                feedback.innerHTML = "Great, " + userGuess + " is the correct number !";
                finishState = true;
              }else if(distance > 60 || distance < -60){
                alert("You are freezing");
              }
              /*Guesses are bigger than answer*/

            /*keep the guesses in the list, and clear the input field*/
          }
      /*Check all the Guesses made*/
      guesses = document.getElementById('count').innerHTML;
      guesses ++;
      document.getElementById('count').innerHTML = guesses;
      console.log(guesses);
      //
       }, false);
     }

     startGame();

});


// else if((userGuess - secretNumber) > 60){
//   feedback.innerHTML = "You are freezing";
// }else if((userGuess - secretNumber) > 50){
//   feedback.innerHTML = "Bit better, but still freezing";
// }else if((userGuess - secretNumber) > 40){
//   feedback.innerHTML = "You are very very cold";
// }else if((userGuess - secretNumber) > 30){
//   feedback.innerHTML = "You are cold";
// }else if((userGuess - secretNumber) > 20){
//   feedback.innerHTML = "Its getting Warm";
// }else if((userGuess - secretNumber) > 15){
//   feedback.innerHTML = "Its getting very warm";
// }else if((userGuess - secretNumber) > 10){
//   feedback.innerHTML = "Its getting very very warm";
// }else if((userGuess - secretNumber) > 7.5){
//   feedback.innerHTML = "Its hot!";
// }else if((userGuess - secretNumber) > 5.5){
//   feedback.innerHTML = "Its hotter!";
// }else if((userGuess - secretNumber) > 3.5){
//   feedback.innerHTML = "Its very very hot!";
// }else if((userGuess - secretNumber) > 1.5){
//   feedback.innerHTML = "Its super hot";
// }else if((userGuess - secretNumber) > 0.5){
//   feedback.innerHTML = "Its burning";
// } /*Guess are smaller than answer*/
// else if((secretNumber - userGuess) > 60){
//   feedback.innerHTML = "You are freezing";
// }else if((secretNumber - userGuess) > 50){
//   feedback.innerHTML = "Better, but still freezing";
// }else if((secretNumber - userGuess) > 40){
//   feedback.innerHTML = "You are very very cold";
// }else if((secretNumber - userGuess) > 30){
//   feedback.innerHTML = "You are cold";
// }else if((secretNumber - userGuess) > 20){
//   feedback.innerHTML = "Its getting Warm";
// }else if((secretNumber - userGuess) > 15){
//   feedback.innerHTML = "Its getting very warm";
// }else if((secretNumber - userGuess) > 10){
//   feedback.innerHTML = "Its getting very very warm";
// }else if((secretNumber - userGuess) > 7.5){
//   feedback.innerHTML = "Its hot!";
// }else if((secretNumber - userGuess) > 5.5){
//   feedback.innerHTML = "Its hotter!";
// }else if((userGuess - secretNumber) > 3.5){
//   feedback.innerHTML = "Its very very hot!";
// }else if((secretNumber - userGuess) > 1.5){
//   feedback.innerHTML = "Its super hot";
// }else if((secretNumber - userGuess) > 0.5){
//   feedback.innerHTML = "Its burning";
// }else{}
