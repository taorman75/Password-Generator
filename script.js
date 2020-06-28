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


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var specChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var lcLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var ucLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");

var possible = [];

function writePassword() {
  var passLength = prompt("Enter the number of characters for the password (8-128).");

  if (passLength >= 8 && passLength <= 128) {



    var passLower = confirm("Should the password have lower case letters?");
    var passUpper = confirm("Should the password have upper case letters?");
    var passNum = confirm("Should the password contain numbers?");
    var passSpecChar = confirm("Should the password contain special characters?");

    if (passLower === true) {
      possible = possible.concat(lcLetters);
    }

    if (passUpper === true) {
      possible = possible.concat(ucLetters);
    }

    if (passNum === true) {
      possible = possible.concat(numbers);
    }

    if (passSpecChar === true) {
      possible = possible.concat(specChar);
    }

    if (passLower === false && passUpper === false && passNum === false && passSpecChar === false) {
      alert("Your password cannot have no characters! You must confirm at least one type.");
      return;
    }

    console.log(possible);
    var password = "";
    for (i = 0; i < passLength; i++) {
      var passChar = possible[Math.floor(Math.random() * possible.length)];
      console.log(passChar);
      password = password.concat(passChar);

    }
    console.log("password: ",password);
  }

  else if (passLength < 8) {
    alert("I cannot generate a password with that few characters.")
  }

  else {
    alert("I cannot generate a password with that many characters.")
  }
}



