document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.
  let coverPhoto = document.querySelector(".coverPhoto");
  let mustBeThree = document.querySelector(".hastobethree")
  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");
  let q4 = document.querySelector(".q4");
  let q1question = document.querySelector(".favnumberq1");
  
  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
  let imgSrc;
  let character;
  let q1Score;
  let q2Score;
  let q3Score;
  let q4Score;


  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.

let firstFavoriteNumber = Number(q1.value);
let secondFavoriteNumber = Number(q2.value);
let thirdFavoriteNumber = Number(q3.value);
let sumFavoriteNumber = q4;

let yes = document.querySelector("input[name='yes']:checked");
    yes.value
    // task 7: create a conditional statement for the responses to Question 1 based on the user input.

if (firstFavoriteNumber !== 3) {
mustBeThree.innerHTML = "disappointing."
mustBeThree.style = "color: FF3131";
} else {
  mustBeThree.innerHTML = "correct!"
  mustBeThree.style = "color: #32CD32";
  coverPhoto.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcMynvvO_skZX5v5LwlTUD0DFV9bA3HLYhoPUMYqjBNWUaTsqGq9LuJfOJOfkLGsXs-c&usqp=CAU"
}


    // task 8: create a conditional statement for the responses to Question 2 based on the user input.




    // task 9: create a conditional statement for the responses to Question 4 based on the user input.

    
    let score = q1 + q2 + q3
    
if (sumFavoriteNumber === 1) {
  html.insertAdjacentHTML('beforeend',"Your favorite number is" + "score");
} else {
  html.insertAdjacentHTML('beforeend',"Okay.")
}
    

    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.



    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.



  };
}