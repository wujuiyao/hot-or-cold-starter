
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


    function clickGuess(){
      var feedback = document.getElementById('feedback');
      var guessButton = document.getElementById('guessButton');
      var myClicks = document.getElementById('count');

      guessButton.addEventListener('click', function(){
        clickCount++;
        myClicks.innerHTML = clickCount;
        if(finishState === false){
          checkInput();
          addNode();
        } else {
          feedback.innerHTML = "You already won! Start a New Game";
        }
        return false;
      });
    }
    clickGuess();

    function checkInput(){
      userGuess = document.getElementById('userGuess').value;
      distance = Math.abs(secretNumber - userGuess);
      if(userGuess > 100 || userGuess < 0){
         feedback.innerHTML = 'Number between 0 and 100!';
       }else if(isNaN(userGuess)){
         feedback.innerHTML = 'Numeric Number Please!';
       }else if(userGuess === ""){
         feedback.innerHTML = 'Enter a number from 1 - 100';
       }else if (1 < userGuess < 101){
         compareNumber();
      }
    }

    function compareNumber(){
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


    function initFeedback(){
      document.getElementById('feedback').innerHTML = "Make your Guess!";
    }

    /*reset game details*/
    function reset(){
      console.log("Starting a new Game");
      finishState = false;
      secretNumber = randomInt();
      initFeedback();

      clickCount = 0;
      userGuess = 0;
    }

    function addNode(evt){
      var inText = document.getElementById('userGuess').value;
      var newText = document.createTextNode(inText);
      var newLi = document.createElement("li");
      newLi.appendChild(newText);
      var list = document.getElementById('guessList');
      list.appendChild(newLi);
      evt.preventDefault();
    }



});
