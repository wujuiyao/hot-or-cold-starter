
$(document).ready(function(){
  /*State of the App*/
  var secretNumber = '';
  var userGuess = '';
  var clickCount = 0;
  var finishState = false;
  var feedback = document.getElementById('feedback');
  var guessButton = document.getElementById('guessButton');
  var myClicks = document.getElementById('count');

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
      feedback.innerHTML = "You already won! Start a New Game";
    }
  });
  /*Processes click on new button*/
  document.getElementById('new').addEventListener('click');

  /* Utility Functions */

    function randomInt() {
        var randomNumber = Math.floor(Math.random()*100) + 1;
        return randomNumber;
    }
    secretNumber = randomInt();
    console.log("Secret Number is " + secretNumber);

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
         switch(true){
           case userGuess / secretNumber == 1:
             feedback.innerHTML = "Great, " + userGuess + " is the correct number !";
             finishState = true;break;
           case distance > 60:
             feedback.innerHTML = "Its extreme freezing"; break;
           case distance > 50:
             feedback.innerHTML = "You are freezing"; break;
           case distance > 40:
             feedback.innerHTML = "Its very cold"; break;
           case distance > 30:
             feedback.innerHTML = "Its cold"; break;
           case distance > 20:
             feedback.innerHTML = "It's getting warm"; break;
           case distance > 10:
             feedback.innerHTML = "It's getting very warm"; break;
           case distance > 5:
             feedback.innerHTML = "It's hot"; break;
           case distance > 3.5:
             feedback.innerHTML = "It's very hot"; break;
           case distance > 1.5:
             feedback.innerHTML = "It's super hot"; break;
           case distance > 0.5:
             feedback.innerHTML = "It's burning!"; break;
           default: break;
         }
      }
    }

    function reset(){
      console.log("Start a new Game");
      finishState = false;
      userGuess.innerHTML = '';
      clickCount = '';
      randomInt();
      document.getElementById('feedback').innerHTML = "Make your Guess!";
      document.getElementById('guessList').innerHTML = '';
    }

    function addNumber(){
      var inText = document.getElementById('userGuess').value;
      var newText = document.createTextNode(inText);
      var newLi = document.createElement("li");
      newLi.appendChild(newText);

      var list = document.getElementById('guessList');
      list.appendChild(newLi);
    }


    function removeNumber(){
      var lists = document.getElementsByTagName("li");
      var list = document.getElementById('guessList');
      list.removeChild(lists);
    }

});
