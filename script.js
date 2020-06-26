// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var specChar "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var lcLetters "abcdefghijklmnopqrstuvwxyz".split("");
var ucLetters "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers "0123456789".split("");



var passLength = prompt("Enter a character length between 8 and 128 for the password.");
var passLower = confirm("Should the password have lower case letters?");
var passUpper = confirm("Should the password have upper case letters?");
var passNum = confirm("Should the password contain numbers?");
var passSpecChar = confirm("Should the password contain special characters?");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
