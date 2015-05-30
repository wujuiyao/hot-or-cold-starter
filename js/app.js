
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
       //get a number from the array - start with first
       var number = guessN[0];
       console.log(number);

       var guessButton = document.getElementById('guessButton');
       guessButton.addEventListener('click', function (){
          var userGuess = document.getElementById('userGuess').value;
      /*make sure the input are numeric*/
           if(userGuess > 100 || userGuess < 0){
     					alert('Number between 0 and 100');
     			}else if(isNaN(userGuess)){
     					alert('Numeric Number Please');
     			}
      /*Check all the clicks made*/
          var defaultVal = document.getElementById('count').innerHTML;
          defaultVal ++;
          document.getElementById('count').innerHTML = defaultVal;
          console.log(defaultVal);



       }, false);

     }

    //      //what does this code do?
    //      //var value = parseInt(document.getElementById('number').value, 10);
    //      // value = isNaN(value) ? 0 : value;
    //      // value++;
    //      // document.getElementById('number').value = value;



		/*user guess and determines which feedback to provide*/
		/*Feedback about the guess should appear in div#feedback*/

	/*record all the guesses + all the numbers they have guessed*/
	/*how to start writing functions*/
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
