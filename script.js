// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//various arrays

var number =  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@","#", "%", "&","^", ",", "$", "(", ")", "*", "+", "-", ".", "/","[", "]", "<", ">", "?"];
var alphaLower =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Variable Declaration 
var confirmLength = "";

//function generatePassword()
function generatePassword() {

  // prompt to confirm length of the password
  var confirmLength = (prompt("How many characters would you like in your password ?"));
     
  
 if(!confirmLength){
  window.confirm("Thank you ! Come back later");
   return;
 }

   // loop for the answers outside limits
  if (confirmLength < 8 || confirmLength > 128) {
    alert("password length must be minimum of 8 characters and maximum of 128 charaters");
    var confirmLength = (prompt("How many characters would you like in your password ?"));
  }
  else if (confirmLength >= 8 || confirmLength <= 128) {
    window.alert("Your password will have " + confirmLength + " characters.");
  }
  
  // Determine parameters of password 
  var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
  var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");

  // Loop if answer is outside the parameters 
  while (confirmSpecialCharacter === false && confirmNumericCharacter === false && confirmUpperCase === false && confirmLowerCase === false) {
    alert("You must choose at least one parameter");

    //loop takes back to the confirm buttons again
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  }


  // for loop for password generation using math.random()
  var password = '';
  var passChars = [];

  // building the bank of characters based on user defined
  if(confirmSpecialCharacter){
    passChars = passChars.concat(specialChar);
  }

  if(confirmNumericCharacter){
    passChars = passChars.concat(number);
  }

  if(confirmLowerCase){
    passChars = passChars.concat(alphaLower);
  }

  if(confirmUpperCase){
    passChars = passChars.concat(alphaUpper);
  }
  

 // for loop for generating the password
  for (var i = 0; i < confirmLength; i++) {

    var password = password + passChars[Math.floor(Math.random() * passChars.length)];

  }

  return password;

}

// #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);