// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var numbers = [];
var special = []

var length = "" //8-128char
var types = ["lowercase"= true, "uppercase" = true, "numeric" = true, "special" = true]


window.display ("Choose the following parameters for the password generator:")

;if () {
  var lowercase = false;
}


