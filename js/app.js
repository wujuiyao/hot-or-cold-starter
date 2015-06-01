
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});
  /*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    randomNumberArray();
    startGame();

    //generates a random number
    function randomInt() {
        return Math.floor(Math.random()*100) + 1;
    }
    //keeps the random number and adds to an array
    function randomNumberArray(){
         nums = [];
         for (var i = 0; i < 30; i = i + 1) {
             nums.push(randomInt());}
         return nums;
     }

     function startGame(){
       var guessN = randomNumberArray();
       /*The answer number*/
       var answer = guessN[0];
       console.log(answer);
       var feedback = document.getElementById('feedback');
       var guessButton = document.getElementById('guessButton');
       /*Number guessed by User*/
       var userGuess;
       /*Distance between Answer and Number Guessed*/
       var distance = null;
       /*Distance between (number - previous guessed number) - Latest Guess)*/
       var previousDistance = null;


       guessButton.addEventListener('click', function (){
          userGuess = document.getElementById('userGuess').value;
          distance = Math.abs(answer - userGuess);
          previousDistance = Math.abs(answer - userGuess[userGuess.length - 2]);

       /*make sure the input are numeric*/
           if(userGuess > 100 || userGuess < 0){
     					alert('Number between 0 and 100');
     			}else if(isNaN(userGuess)){
     					alert('Numeric Number Please');
     			}else if (1 < userGuess < 101){
             if(userGuess == answer){
                feedback.innerHTML = "Great, " + userGuess + " is the correct !";
              }else{
                console.log(previousDistance);
                if(userGuess > answer){
                }
              }
          }
      /*Check all the clicks made*/
          guesses = document.getElementById('count').innerHTML;
          guesses ++;
          document.getElementById('count').innerHTML = guesses;
          console.log(guesses);
       }, false);
     }
		/*user guess and determines which feedback to provide*/
		/*Feedback about the guess should appear in div#feedback*/
});



// function findSolution(target) {
//   function find(start, history) {
//     if (start == target)
//       return history;
//     else if (start > target)
//       return null;
//     else
//       return find(start + 5, "(" + history + " + 5)") ||
//              find(start * 3, "(" + history + " * 3)");
//   }
//   return find(1, "1");
// }
//
// console.log(findSolution(24));
// // → (((1 * 3) + 5) * 3)

// function zeroPad(number, width) {
//   var string = String(number);
//   while (string.length < width)
//     string = "0" + string;
//   return string;
// }
//
// function printFarmInventory(cows, chickens, pigs) {
//   console.log(zeroPad(cows, 3) + " Cows");
//   console.log(zeroPad(chickens, 3) + " Chickens");
//   console.log(zeroPad(pigs, 3) + " Pigs");
// }
//
// printFarmInventory(7, 16, 3);


// array of the random numbers, and use for loop inside the array
