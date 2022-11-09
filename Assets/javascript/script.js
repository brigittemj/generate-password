// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  password = prompt("Input a password of greater than 8 characters and less than 128 characters")

  if (password.length <= 8) {
    alert("password must be greater than 8 characters")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
