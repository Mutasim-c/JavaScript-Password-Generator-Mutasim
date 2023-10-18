// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lengthPassword = prompt("How long do you want your password to be (8-128 characters)" , "length");
  return lengthPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
