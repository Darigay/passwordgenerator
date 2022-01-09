// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//function generatePassword()

function generatePassword(){

 window.prompt("How many characters would you like in your password ?");
  
// 1.various prompts to the user
window.alert("click ok to confirm including special characters.");
window.alert("click ok to confirm including numbers.");
window.alert("click ok to confirm including lowercase charaters.");
window.alert("click ok to confirm including uppercase characters.");
      

// 1.A Password length


// 1.B lowercase upercase special caharacters


//2. validate the password input



//3. generate password




//4. Display the password
  return "password";

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);