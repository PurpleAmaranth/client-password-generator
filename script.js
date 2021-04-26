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
var numbers = ["1","2","3","4","5","6","7","8","9"];
var special = ["!","@","#","$","%","^","&","*","?"];
var punctuation = ["(",")","<",">",":",";",",","{","}","[","]","=","-",".","~",",","/","\\","|"];

// var length = "" //8-128char
// var types = ["lowercase"= true, "uppercase" = true, "numeric" = true, "special" = true]


// window.display ("Choose the following parameters for the password generator:")

function getCriteria(name) {
  const checkboxes = document.querySelectorAll('input[name="${name}"]:checked');
  let values = [];
  checkboxes.forEach((checkbox) => {
    values.concat(checkbox.value);
  });
  return values;
}

function getPassword() {
  RandomSource.numbers(values)
}



