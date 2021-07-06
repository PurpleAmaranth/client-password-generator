//Controls the logic of the password generator webpage

// Identify button with id "generate"
var generateBtn = document.querySelector("#generate");

// Write password to the #password input on webpage
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to find random lowercase symbol from CharCode
function getRandomLowercase() {
    //97 is lowercase 'a'. Generate from character 97 to 122, 'a' to 'z'.
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
}

// Function to find random uppercase symbol from CharCode
function getRandomUppercase() {
    //65 is uppercase 'A'. Generate from character 65 to 90, 'A' to 'Z'.
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
}

// Function to find random numeric symbol from CharCode
function getRandomNumber() {
    //48 is '0'. Generate from character 48 to 57, '0' to '9'.
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 
}

// Function to find random symbolic symbol from CharCode
function getRandomSymbol() {
    //Declare character symbols and return a random symbol for password generator.
    const symbols = "!@#$%^&*()-_=+[{]}\|;:<,>.?/~`"
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Function to get password length
function getPasswordLength() {
    //Creates a loop to validate length entry and returns length
    while(true ) {
        let length = parseInt(
            prompt("How many characters in length? (Choose between 8 and 128.)"),
            10
        );
        
        // Validates length is a number between 8 and 128
        if ((Number.isNaN(length)) || (length < 8) || (length > 128)) {
            alert("Length must be a number between 8 and 128. Try again.");
        } else {
            return length;
        }   
    }
}

// Function to get options for password characters
function getPasswordOptions() {
    // Adds password options to an array. Checks over inputs and validates. Returns array.

    // Set up empty array to collect options
    var passwordOptionsArray = [];
    
    // Validates password character options
    while(true) {
           
        // Defines options and creates confirmation boxes
        let lowercase = confirm("Do you want it to contain lowercase letters?")
        alert(lowercase);

        let uppercase = confirm("Do you want it to contain uppercase letters?")
        alert(uppercase);

        let number = confirm("Do you want it to contain numbers")
        alert(number);

        let symbol = confirm("Do you want it to contain symbols?")
        alert(symbol);

        // If option confirmed pushes value to passwordOptionsArray
        if (lowercase == true) {
            passwordOptionsArray.push(getRandomLowercase);
        };
        if (uppercase == true) {
            passwordOptionsArray.push(getRandomUppercase);
        };
        if (number == true) {
            passwordOptionsArray.push(getRandomNumber);
        };
        if (symbol == true) {
            passwordOptionsArray.push(getRandomSymbol);
        };

        // Validates that at least one option is selected
        if (lowercase === false && uppercase === false && number === false && symbol === false) {
            alert("Please confirm at least one character type. Try again.")
        } else {
            return passwordOptionsArray;
        }
    }
}

// Function to generate the password with the selected options
function generatePassword() {
    // Generates password with user defined options using the charCode functions to retrieve random symbols.
    
    // Gets user defined password options
    var length = getPasswordLength();
    var passwordOptionsArray = getPasswordOptions();
    var password = "";

    // Adds at least one random character for each option selected to the password
    for (var i=0; i<passwordOptionsArray.length; i++) {
        var char = passwordOptionsArray[i]();
        password += char;
        console.log(char + " " + i);
        console.log(password);
    };

    // Adds a random character from a random option selected  to the password
    for (var i=0; i<(Math.abs(length - passwordOptionsArray.length)); i++) {
        var char = passwordOptionsArray[(Math.floor(Math.random() * passwordOptionsArray.length))]();
        password += char;
        console.log(char + " " + i);
        console.log(password);
      };

    // // Test: Prints passwordOptionsArray.length and math
    // console.log(passwordOptionsArray.length)
    // console.log(Math.abs(length - passwordOptionsArray.length))

    // // Test: Prints retrieved length and passwordOptionsArray in console
    // console.log(length)
    // console.log(passwordOptionsArray);

    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);