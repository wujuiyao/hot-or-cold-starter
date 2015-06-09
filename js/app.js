
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
      userGuess = document.getElementById('userGuess').value;
      distance = Math.abs(secretNumber - userGuess);
      var test = Math.abs((secretNumber - userGuess) % 10);
      console.log("Distance between Secret N. and Guessed Number is " + distance);
      if(finishState === false){
        if(userGuess > 100 || userGuess < 0){
           feedback.innerHTML = 'Number between 0 and 100!';
         }else if(isNaN(userGuess)){
           feedback.innerHTML = 'Numeric Number Please!';
         }else if(userGuess === ""){
           feedback.innerHTML = 'Enter a Numeric Number!';
           clickCount = 0-1;
         }else if (1 < userGuess < 101){
           if(userGuess / secretNumber == 1){
              feedback.innerHTML = "Great, " + userGuess + " is the correct number !";
              finishState = true;
            }else if(distance > 60){
              feedback.innerHTML = "You are really freezing";
            }else if(distance > 50){
              feedback.innerHTML = "Still freezing";
            }else if(distance > 40){
              feedback.innerHTML = 'Its very cold';
            }else if(distance > 30){
              feedback.innerHTML = "Its cold";
            }else if(distance > 20){
              feedback.innterHTML = "It's getting warm";
            }else if(distance > 10){
              feedback.innerHTML = "It's getting very warm";
            }else if(distance > 5){
              feedback.innerHTML = "It's hot";
            }else if(distance > 3.5){
              feedback.innerHTML = "It's very hot";
            }else if(distance > 1.5){
              feedback.innerHTML = "It's super hot";
            }else if(distance > 0.5 ){
              feedback.innerHTML = "It's Burning!!!";
            }else{}
        }
      }else{
        feedback.innerHTML = "You already won! Start a New Game";
      }
    }
    checkInput();


    function clicksMade(){
      clickCount++;
      document.getElementById('count').innerHTML = clickCount;
    }

    var guessButton = document.getElementById('guessButton');
    guessButton.addEventListener('click', function(){
             checkInput();
             clicksMade();
    });


    function startGame(){

     }
       startGame();


         /*reset game details*/
         function reset(){
           console.log("Starting a new Game");
           secretNumber = 0;
           userGuess = "";
           clickCount = 0;
           distance= 0;
           finishState = false;
         }
});


/*--- Function that resets game --*/
/*--- Function that counts attempts of user --*/
/*---- To start a new game ----*/
/*-- Checks the user's input--*/
/*--- To get user's input --*/
/*all the functions should stay*/
/*create a new game function that set to basic*/
