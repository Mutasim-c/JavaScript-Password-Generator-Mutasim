// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberList = ["1","2","3","4","5","6","7","8","9","0"]

var specialCharacters = [" ","!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
// " ' \
function generatePassword() {
  var lengthPassword = prompt("How long do you want your password to be (8-128 characters)?" , "length");
  var lowerCase = confirm("Do you want lower case characters in you password?");
  var upperCase = confirm("Do you want upper case characters in you password?");
  var numeric = confirm("Do you want your password to contain numbers?");
  var specialChar = confirm("Do you want you password to contain special characters?");
  console.log(lowerCase);
  console.log(upperCase);
  lowerCase = confirm("Do you want lower case characters in you password?");
  console.log(lowerCase);
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
