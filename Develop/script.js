// Assignment code here

// Array character type variables

  var lwr  = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var spec = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","'","{","[","}","]","|",";",":",",","<",">",".","/","?"];
  var num  = ["1","2","3","4","5","6","7","8","9","0"];

// Array to confirm charachter type

var passcond;                             // for password conditions
var confirmlenght;                        // to confirm password lenght
var confirmlwr;                           // to confirm lower case
var confirmuppr;                          // to confirm upper case
var confirmnum;                           // to confirm numbers
var confirmspec;                          // to confirm special characters

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
