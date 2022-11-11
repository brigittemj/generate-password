// Assignment Code
var generateBtn = document.querySelector("#generate");

// Made variables
var uppercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var lowercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')'];

var userChoices = [];
let finalPass = [];

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
  } else {
    // Create prompts for users to decide if they want lowercase, uppercase, numbers, special characters
    var wantLowercase = confirm('Click "okay" for lowercase, or "cancel" for no lowercase.');
    if (wantLowercase) {
      userChoices.push(lowercase);
    }
    var wantUppercase = confirm ('Click "okay" for uppercase, or "cancel for no uppercase.')
    if (wantUppercase) {
      userChoices.push(uppercase);
    }  
    var wantNumbers = confirm ('Click "okay" for Numbers, or "cancel" for no numbers')
    if (wantNumbers) {
      userChoices.push(numbers);
    }
    var wantSpecialCharacters = confirm ('Click "okay" for specialCharcters, or "cancel" for no specialCharacters')
    if (wantSpecialCharacters) {
      userChoices.push(specialCharacters);
    }
    var stringChoices = userChoices.toString();
    var finalChoices = stringChoices.split(',');
    // We now need to figure out how to randomly select characters in our array to get a random password
    for (let i = 0; i < passwordLength; i++) {
      let randomNum = Math.floor(Math.random() * finalChoices.length);
      let randomChoice = finalChoices[randomNum];
      finalPass.push(randomChoice);
      
    }
    stringPass = finalPass.toString();
    return stringPass.replace(/,/g,'');
  }
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
