
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

    randomInt();
    startGame();
    newGame();

    //generates a random number
    function randomInt() {
        secretNumber = Math.floor(Math.random()*100) + 1;
        console.log("Secret Number is" + secretNumber);
    }
     //new game button
     function newGame(){
       var guessN = randomNumberArray();
       var answer = guessN[0];
       return answer;
     /*if the user clicks new game add number from the array and return the answer*/
     }

     function startGame(){

      answer = newGame();
      console.log(answer);
       var feedback = document.getElementById('feedback');
       var guessButton = document.getElementById('guessButton');
       /*Number guessed by User*/
       var userGuess;
       var newGuess;

       guessButton.addEventListener('click', function (){
          userGuess = document.getElementById('userGuess').value;

       /*make sure the input are numeric*/
           if(userGuess > 100 || userGuess < 0){
     					feedback.innerHTML = 'Number between 0 and 100!!';
     			}else if(isNaN(userGuess)){
             feedback.innerHTML = 'Numeric Number Please!!';
     			}else if (1 < userGuess < 101){
             if(userGuess == answer){
                feedback.innerHTML = "Great, " + userGuess + " is the correct number !";
              }/*Guesses are bigger than answer*/
              else if((userGuess - answer) > 60){
                feedback.innerHTML = "You are freezing";
              }else if((userGuess - answer) > 50){
                feedback.innerHTML = "Bit better, but still freezing";
              }else if((userGuess - answer) > 40){
                feedback.innerHTML = "You are very very cold";
              }else if((userGuess - answer) > 30){
                feedback.innerHTML = "You are cold";
              }else if((userGuess - answer) > 20){
                feedback.innerHTML = "Its getting Warm";
              }else if((userGuess - answer) > 15){
                feedback.innerHTML = "Its getting very warm";
              }else if((userGuess - answer) > 10){
                feedback.innerHTML = "Its getting very very warm";
              }else if((userGuess - answer) > 7.5){
                feedback.innerHTML = "Its hot!";
              }else if((userGuess - answer) > 5.5){
                feedback.innerHTML = "Its hotter!";
              }else if((userGuess - answer) > 3.5){
                feedback.innerHTML = "Its very very hot!";
              }else if((userGuess - answer) > 1.5){
                feedback.innerHTML = "Its super hot";
              }else if((userGuess - answer) > 0.5){
                feedback.innerHTML = "Its burning";
              } /*Guess are smaller than answer*/
              else if((answer - userGuess) > 60){
                feedback.innerHTML = "You are freezing";
              }else if((answer - userGuess) > 50){
                feedback.innerHTML = "Better, but still freezing";
              }else if((answer - userGuess) > 40){
                feedback.innerHTML = "You are very very cold";
              }else if((answer - userGuess) > 30){
                feedback.innerHTML = "You are cold";
              }else if((answer - userGuess) > 20){
                feedback.innerHTML = "Its getting Warm";
              }else if((answer - userGuess) > 15){
                feedback.innerHTML = "Its getting very warm";
              }else if((answer - userGuess) > 10){
                feedback.innerHTML = "Its getting very very warm";
              }else if((answer - userGuess) > 7.5){
                feedback.innerHTML = "Its hot!";
              }else if((answer - userGuess) > 5.5){
                feedback.innerHTML = "Its hotter!";
              }else if((userGuess - answer) > 3.5){
                feedback.innerHTML = "Its very very hot!";
              }else if((answer - userGuess) > 1.5){
                feedback.innerHTML = "Its super hot";
              }else if((answer - userGuess) > 0.5){
                feedback.innerHTML = "Its burning";
              }else{}
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
});
