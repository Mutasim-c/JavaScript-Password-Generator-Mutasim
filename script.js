// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberList = ["1","2","3","4","5","6","7","8","9","0"]

var specialCharacters = ["'","\\","\""," ","!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
// " ' \

function generatePassword() {
  var lengthPassword = prompt("How long do you want your password to be (8-128 characters)?" , "length");
  if(isNaN(lengthPassword)|| lengthPassword>128||lengthPassword<8){
    alert("please enter a valid number");
    return null;
  };
  var elegibleChar = []
  var lowerCase = confirm("Do you want lower case characters in you password?");
  if(lowerCase){
    elegibleChar = elegibleChar.concat(lowerCaseCharacters);
    console.log(elegibleChar);
  };
  var upperCase = confirm("Do you want upper case characters in you password?");
  if(upperCase){
    elegibleChar = elegibleChar.concat(upperCaseCharacters);
    console.log(elegibleChar);
  };
  var numeric = confirm("Do you want your password to contain numbers?");
  if(numeric){
    elegibleChar = elegibleChar.concat(numberList);
    console.log(elegibleChar);
  };
  var specialChar = confirm("Do you want you password to contain special characters?");
  if(specialChar){
    elegibleChar = elegibleChar.concat(specialCharacters);
    console.log(elegibleChar);
  };

  if(!lowerCase && !upperCase && !numeric && !specialChar){
    alert("You have chosen no character types");
    return null;
  }

  return specialCharacters.slice(0,5);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
