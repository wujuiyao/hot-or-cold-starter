
$(document).ready(function(){
  /*State of the App*/
  var secretNumber;
  var userGuess;
  var clickCount = 0;
  var finishState = false;
  var feedback = document.getElementById('feedback');
  var guessButton = document.getElementById('guessButton');
  var myClicks = document.getElementById('count');

  /*Random Number*/
  secretNumber = Math.floor(Math.random()*100) + 1;
  console.log("Secret Number is " + secretNumber);

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  /*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  /*Processes click on guess button */
  guessButton.addEventListener('click', function(){
    clickCount++;
    myClicks.innerHTML = clickCount;
    if(finishState === false){
      checkInput();
      addNumber();
    } else {
      feedback.innerHTML = "You already won! Start New Game";
      clickCount = clickCount - 1;
      myClicks.innerHTML = clickCount;
    }
  });

  /*Processes click on new button*/
  document.getElementById('new').addEventListener('click', reset);

  /*Utility Functions*/

    function checkInput(){
      userGuess = document.getElementById('userGuess').value;
      if(userGuess > 100 || userGuess < 0){
        feedback.innerHTML = 'Number between 0 and 100!';
       }else if(isNaN(userGuess)){
         feedback.innerHTML = 'Numeric Number Please!';
       }else if(userGuess === ""){
         feedback.innerHTML = 'Enter a number from 1 - 100';
       }else if (1 < userGuess < 101){
         var distance = Math.abs(secretNumber - userGuess);
         if(userGuess / secretNumber == 1){
           feedback.innerHTML = "Great, " + userGuess + " is the correct number !";
           finishState = true;
         }else if(distance > 60){
           feedback.innerHTML = "Its Extreme Freezing";
         }else if(distance > 50){
           feedback.innerHTML = "Its Freezing";
         }else if(distance > 40){
           feedback.innerHTML = "Its very cold";
         }else if(distance > 30){
           feedback.innerHTML = "Its cold";
         }else if(distance > 20){
           feedback.innerHTML = "Its getting Warm";
         }else if(distance > 10){
           feedback.innerHTML = "Its getting very warm";
         }else if(distance > 5.5){
           feedback.innerHTML = "Its hot!";
         }else if(distance > 3.5){
           feedback.innerHTML = "Its very hot!";
         }else if(distance > 1.5){
           feedback.innerHTML = "Its super hot";
         }else if(distance > 0.5){
           feedback.innerHTML = "Its burning";
         }else{}
      }
    }

    function addNumber(){
      var inText = document.getElementById('userGuess').value;
      var newText = document.createTextNode(inText);
      var newLi = document.createElement("li");
      newLi.appendChild(newText);
      var list = document.getElementById('guessList');
      list.appendChild(newLi);
    }

    function reset(){
      console.log("Starting a new Game");
      finishState = false;
      userGuess = document.getElementById('userGuess');
      userGuess.value = '';
      clickCount = 0;
      myClicks.innerHTML = clickCount;
      document.getElementById('feedback').innerHTML = "Make your Guess!";
      document.getElementById('guessList').innerHTML = '';
      secretNumber =  Math.floor(Math.random()*100) + 1;
      console.log('New Secret Number is ' + secretNumber);
    }

});
