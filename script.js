// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var rand = Math.random();
  return Math.floor(min * (1 - rand) + rand * max);
}

function getRandomItem(list) {
  return list[randomInt(list.length)];
}

function generatePassword() {
  var userInput = window.prompt(
    "How many characters do you want your password to be?"
  );

  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert(
      "That is not a number! Please enter a character that is a number."
    );
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters");
    return;
  }

  var userNumbers = window.confirm(
    "Would you like numbers in your password?"
  );


  var userSpecialCharacters = window.confirm(
    "Would you like special characters in your password?"
  );


  var userLowercase = window.confirm(
    "Would you like lowercase letters in your password?"
  );


  var userUppercase = window.confirm(
    "Would you like to include uppercase letters in your password?"
  );

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  var specialcharacterList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  
  var uppercaselist = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
  var optionsList = [];

  if (userNumbers === true) {
    optionsList.push(numberList);
  }

  if (userSpecialCharacters === true) {
    optionsList.push(specialcharacterList);
  }

  if (userLowercase === true) {
    optionsList.push(lowercaseList);
  }

  if (userUppercase === true) {
    optionsList.push(uppercaselist);
  }

  if (optionsList.length === 0) {
    optionsList.push(lowercaseList);
  }

  var generatedPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsList);
    var randomChar = getRandomItem(randomList);
    generatedPassword += randomChar;
  }

  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
