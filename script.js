// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getRandomNumberInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



var specChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var lcLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var ucLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");

var possible = [];

var passLength = prompt("Enter the number of characters for the password (8-128).");
var passLower = confirm("Should the password have lower case letters?");
var passUpper = confirm("Should the password have upper case letters?");
var passNum = confirm("Should the password contain numbers?");
var passSpecChar = confirm("Should the password contain special characters?");

if (passLower === true) {
  possible = possible.concat(lcLetters);
}

if (passUpper === true) {
  possible =  possible.concat(ucLetters);
}

if (passNum === true) {
  possible = possible.concat(numbers);
}

if (passSpecChar === true) {
  possible = possible.concat(specChar);
}

console.log(possible);

for (i = 0; i < passLength; i++){
  // var min = 0;
  // var max = passLength;
  // getRandomNumberInclusive(min, max);
  // console.log(getRandomNumberInclusive(min, max)); //currently generating random numbers to console log
  var passChar = [Math.floor(Math.random() * possible.length)];
  console.log(passChar);
  // var pwTest = '';
  // pwTest 
  // console.log(pwtest);
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
