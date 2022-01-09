// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//various arrays

var number = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

//function generatePassword()
 function generatePassword() {

  // prompt to confirm length of the password
var confirmLength = (prompt("How many characters would you like in your password ?"));

// loop for the answers outside limits
while (confirmLength <8 || confirmLength >128) {
  alert("password length must be minimum of 8 characters and maximum of 128 charaters");
  var confirmLength = (prompt("How many characters would you like in your password ?"));
} 
alert(`Your password will have ${confirmLength} characters`);

// Determine parameters of password 
var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  
// Loop if answer is outside the parameters 
  while( confirmSpecialCharacter === false && confirmNumericCharacter === false && confirmUpperCase === false && confirmLowerCase === false ) {
    alert("You must choose at least one parameter");
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
} 
    

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);