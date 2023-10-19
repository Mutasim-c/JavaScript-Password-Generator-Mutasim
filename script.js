// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberList = ["1","2","3","4","5","6","7","8","9","0"]
var specialCharacters = ["'","\\","\""," ","!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
//lists of all the character types
function generatePassword() {
  var lengthPassword = prompt("How long do you want your password to be (8-128 characters)?" , "length");
  if(isNaN(lengthPassword)|| lengthPassword>128||lengthPassword<8){
    alert("please enter a valid number");
    return null;
  };//asks user what length they want there password to be then checks if it between 8-128 or if they didnt input a number , if they didnt then the an alert message is sent and the password will return nothing

  var elegibleChar = [];//creates empty list to later store all the character types the user wants into a single array so the program can use it to generate the password

  var lowerCase = confirm("Do you want lower case characters in you password?");
  if(lowerCase){
    elegibleChar = elegibleChar.concat(lowerCaseCharacters);
  };

  var upperCase = confirm("Do you want upper case characters in you password?");
  if(upperCase){
    elegibleChar = elegibleChar.concat(upperCaseCharacters);
  };

  var numeric = confirm("Do you want your password to contain numbers?");
  if(numeric){
    elegibleChar = elegibleChar.concat(numberList);
  };

  var specialChar = confirm("Do you want you password to contain special characters?");
  if(specialChar){
    elegibleChar = elegibleChar.concat(specialCharacters);
  };//aks the user what character types the user want and if they did it adds it to the empty array eligibleChar so we can use these characters later

  if(!lowerCase && !upperCase && !numeric && !specialChar){
    alert("You have chosen no character types");
    return null;
  };//checks if the user selected atleast one character type and if not sends alert message and return null so nothing is generated

  var myPassword = ""//create empty password to add characters to when the password is genereated
  for(var i = 0; i < lengthPassword; i++){
    myPassword = myPassword + elegibleChar[Math.floor(Math.random() * elegibleChar.length)];
  };//the password is genreated by looping the amount of times the length is and randomly choosing a character of the types the user chose and adding it to the myPassword variable
  

  return myPassword;//returns the password which is displayed later in the write pasword function
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
