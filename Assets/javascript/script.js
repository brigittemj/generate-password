// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ['a','b','c','d','e','f','g','h','i','j','k'];
var lowercase = ['A','B','C','D','E','F','G','H','I','J','K'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Input a password of greater than 8 characters and less than 128 characters");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("password must be greater than 8 characters and less than 128 characters");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
