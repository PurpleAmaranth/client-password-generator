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

//Original dictionary lists and functions, deprecated to charCode methods below.
// var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
// var numbers = ["1","2","3","4","5","6","7","8","9"];
// var special = ["!","@","#","$","%","^","&","*","?"];
// var punctuation = ["(",")","<",">",":",";",",","{","}","[","]","=","-",".","~",",","/","\\","|"];
// // var length = "" //8-128char
// // var types = ["lowercase"= true, "uppercase" = true, "numeric" = true, "special" = true]

// // window.display ("Choose the following parameters for the password generator:")

// function getCriteria(name) {
//   const checkboxes = document.querySelectorAll('input[name="${name}"]:checked');
//   let values = [];
//   checkboxes.forEach((checkbox) => {
//     values.concat(checkbox.value);
//   });
//   return values;
// }

// function getPassword(values) {
//   Math.random(values)
// }

function generatePassword() {
  var fullPassword = false

  function getRandomLowercase() {
    //97 is lowercase 'a'. Generate from character 97 to 122, 'a' to 'z'.
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
  }
  
  function getRandomUppercase() {
    //65 is uppercase 'A'. Generate from character 65 to 90, 'A' to 'Z'.
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
  }
  
  function getRandomNumber() {
    //48 is '0'. Generate from character 48 to 57, '0' to '9'.
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 
  }
  
  function getRandomSymbol() {
    //Declare character symbols and return a random symbol for password generator.
    const symbols = "!@#$%^&*()-_=+[{]}\|;:<,>.?/~`"
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  while (!fullPassword) {
    var passwordArray = [];
    var password = "";
    var valLength = false;

    while(!valLength) {
      let length = prompt("1How many characters in length? (Choose between 8 and 128 characters.)");
      alert(length);
      console.log(length);
      
      if (length == "" || length < 8 || length > 128 || (/^\d+$/.test(length) != true)) {
        alert("2Please type a numeric length between 8 and 128 characters.");
      } else {
        valLength = true;
      }
    };

    let lowercase = confirm("Do you want it to contain lowercase letters?")
    alert(lowercase);
    let uppercase = confirm("Do you want it to contain uppercase letters?")
    alert(uppercase);
    let number = confirm("Do you want it to contain numbers")
    alert(number);
    let symbol = confirm("Do you want it to contain symbols?")
    alert(symbol);

    if (lowercase == true) {
      passwordArray.push(getRandomLowercase);
    };
    if (uppercase == true) {
      passwordArray.push(getRandomUppercase);
    };
    if (number == true) {
      passwordArray.push(getRandomNumber);
    };
    if (symbol == true) {
      passwordArray.push(getRandomSymbol);
    };

    console.log(passwordArray);
    // if (passwordArray.length == 0) {
    //   alert("Please pick at least one character type.")
    // };
      
    for (var i=0; i<length; i++) {
      var char = passwordArray[(Math.floor(Math.random() * passwordArray.length))]();
      password += char;
      console.log(char);
      console.log(password);
      console.log("Here!");
    };

    fullPassword = true;
  };
  
  return password
}










// //DOM elements:
// const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const upperCaseEl = document.getElementById('upperCase');
// const lowerCaseEl = document.getElementById('lowerCase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
// const clipBoardEl = document.getElementById('clipBoard');

// //Creates defined objects for each password parameter:
// const randomFunction = {
//   lowerCase: getRandomLowercase,
//   upperCase: getRandomUppercase,
//   number: getRandomNumber,
//   symbol: getRandomSymbol
// };

// //Event Listeners for buttons and checkboxes:
// generateEl.addEventListener('click', () => {
//   const length = +lengthEl.value; //takes in length as an integer
//   const checkUpper = upperCaseEl.checked;
//   const checkLower = lowerCaseEl.checked;
//   const checkNumber = numbersEl.checked;
//   const checkSymbol = symbolsEl.checked;

//   resultEl.innerText = generatePassword(
//     checkUpper, 
//     checkLower, 
//     checkNumber, 
//     checkSymbol, 
//     length
//     );
// });

// //Generate the password:
// function generatePassword(upper, lower, number, symbol, length) {
//   //Password string
//   //Validate
//   //loop over length and call
//   let password = "";

//   const parameterArray = [{upper}, {lower}, {number}, {symbol}]

//   return password;

// }

//Password Feature Generator Functions:




