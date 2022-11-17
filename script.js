let replace = document.querySelector('.replace');

let darthImage = `<img src="https://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Darth-Vader.png">`;
let yodaImage = `<img src="https://i.pinimg.com/originals/00/5d/82/005d82a61b8bf5a25e426ab71e8bd360.jpg">`;

// task 1: declare a variable to save the darth send button
let darthSend = document.querySelector('.darth-send-button');
// task 2: declare a variable to save the yoda send button
let yodaSend = document.querySelector('.yoda-send-button');
// task 3: declare a variable to save the darth input
let darthInput = document.querySelector('.darth-input');
// task 4: declare a variable to save the yoda input
let yodaInput = document.querySelector('.yoda-input');
// task 5: declare a variable to save the chat window
let chatWindow = document.querySelector('.chat-window')



// task 6: create an onclick event for the darth button
darthSend.onclick = function() {

  // task 7: declare a variable for darth's message that saves the value of the darth input
let darthMessage = darthInput.value
  // task 8: declare a variable that saves the message you want to append. Using string interpolation, make sure the darth message and darthImage variable are inside a div with the class name "darth-container".
let appendDarthMessage = `<div class="darth-container">
${darthImage}<p>${darthMessage}</p></div>`
console.log(appendDarthMessage)
  // task 9: add(append) the message to the chat window. Use the position beforeend. Don't forget to close off your click event!
chatWindow.insertAdjacentHTML("beforeend", appendDarthMessage)
}
// task 10: create an onclick event for the yoda button
yodaSend.onclick = function () {

  // task 11: declare a variable for yoda's message that saves the value of the yoda input.
let yodaMessage = yodaInput.value
  console.log(yodaMessage)
  // task 12: declare a variable that saves the message you want to append. Using string interpolation, make sure the yoda message and yodaImage variable are inside a div with the class name "yoda-container".
let appendYodaMessage = `<div class="yoda-container">
${yodaImage}<p>${yodaMessage}</p></div>`;
  console.log(yodaMessage)
  // task 13: add(append) the message to the chat window. Use the position beforeend. Don't forget to close off your click event!
chatWindow.insertAdjacentHTML("beforeend",appendYodaMessage)
console.log(appendYodaMessage)
}