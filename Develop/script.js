// Assignment code here

// Array character type variables

  var lwr    = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppr   = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var spec   = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","'","{","[","}","]","|",";",":",",","<",">",".","/","?"];
  var num    = ["1","2","3","4","5","6","7","8","9","0"];
  var lenght = "";
  var cond;


// Array to confirm charachter type

  var passcond;                             // for password conditions
  var confirmlenght;                        // to confirm password lenght
  var confirmlwr;                           // to confirm lower case
  var confirmuppr;                          // to confirm upper case
  var confirmnum;                           // to confirm numbers
  var confirmspec;                          // to confirm special characters


// Function to generate password

function generatePassword(){

  // Ask the user about the lenght
    var lenght = prompt ( " how long do you need your password to be? Choose between 8 and 128 characters. " );

      // Loop if the answer isn't between 8 and 128
      while (lenght < 8 && lenght > 128){
        alert( " Your password should contain no more than 128 and no less than 8 characters");
        var lenght = (prompt( " How long do you need your password to be? Choose between 8 and 128 charcters. " ) );
      }
      // Tell the user how many characters he chose
      alert( " Would you like your password to have: " + lenght + " characters? " );


  //Confirm the conditions of the password with the user
    var confirmlwr  = confirm ( " Do you want to include Lower Case Letters? " );
    var confirmuppr = confirm ( " Do you want to include Upper Case Letters? " );
    var confirmnum  = confirm ( " Do you want to include Numbers?  " );
    var confirmspec = confirm ( " Do you want to include special Characters? " );

      // Loop if all conditions were not found
      while ( confirmlwr === false && confirmuppr === false && confirmnum === false && confirmspec === false ){
        alert ( " At lease one character type should be selected " );
          var confirmlwr  = confirm ( " Do you want to include Lower Case Letters? " );
          var confirmuppr = confirm ( " Do you want to include Upper Case Letters? " );
          var confirmnum  = confirm ( " Do you want to include Numbers?  " );
          var confirmspec = confirm ( " Do you want to include special Characters? " );

      }

      //conditions for the password
      var passcond = []

      if (confirmuppr){
        passcond = passcond.concat(uppr)
      }
      if (confirmwlr){
        passcond = passcond.concat(lwr)
      }
      if (confirmnum){
        passcond = passcond.concat(num)
      }
      if (confirmspec){
        passcond = passcond.concat(spec)
      }

      console.log (passcond)

  // if its empty

  var random = ""

      for ( var i=0 ; i<lenght ; i++){
        random = random + passcond [ Math.floor(Math.random() + passcond.lenght ) ];
        console.log ( random )
      }
      return random;


}

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
