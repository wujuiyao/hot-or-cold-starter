
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  /*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	/******New Game Button Function******/
	function newGame(){}
	/*Game starts with random number*/
	function randomNumber(){}
	/*make sure the input are numeric*/
	function userNumber(){
		var guessButton = document.getElementById('guessButton');
		guessButton.addEventListener('click', function(){
			var userGuess = document.getElementById('userGuess').value;
			if(userGuess > 100 || userGuess < 0){
					alert("Number between 0 and 100");
			}else if(isNaN(userGuess)){
					alert("Numeric Number Please");
			}
		}, false);

	}

	/*user guess and determines which feedback to provide*/
	/*Feedback about the guess should appear in div#feedback*/
	/*record all the guesses + all the numbers they have guessed*/

	/*how to start writing functions*/

	var uN = new userNumber();

});
