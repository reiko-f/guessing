let targetNumber = document.getElementById('target-number');
let guessedNumber = document.getElementById('guessed-number');

function setNumber() {
  targetNumber.style.display = 'none';
  document.getElementById('target').innerHTML = 'Number Sealed'
}

let message = document.createElement('p');
document.getElementById('display-message').appendChild(message);

function checkNumber() {
  if (guessedNumber.value > targetNumber.value+2) {
    message.innerHTML = 'Too big.';
  } else if (guessedNumber.value < targetNumber.value-2) {
    message.innerHTML = 'Too small.';
  } else if (guessedNumber.value == targetNumber.value+1 || guessedNumber.value == targetNumber.value-1) {
    message.innerHTML = 'Close!';
  } else if (guessedNumber.value == targetNumber.value) {
    message.innerHTML = `You made it!  The number is ${targetNumber.value}!`;
  }
}  