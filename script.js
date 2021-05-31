
var generateBtn = document.querySelector("#generate");
var charPrompt = 8;

//Window prompts for password generator 
var charPrompt = prompt("Would you like to generate a 8 character or 16 character passoword?");
if (charPrompt == 8) {
  generateBtn.addEventListener("click", writePassword8); 
}
if (charPrompt == 16) {
  generateBtn.addEventListener("click", writePassword16); 

}


//var alphaPrompt = confirm("Would you like to include letters?");
//var numbersPrompt = confirm("Would you like to include numbers?");
//var specialCharPrompt = confirm("Would you like to include special characters?");



var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var nums = "1234567890"
var specialChar = "!@#$%^&*()+{}[]"
var allChars16 = (alpha += nums += specialChar); 
var noAlpha = (nums += specialChar);



// Function that generates 8 random characters
function writePassword8() {
    var password = generatePassword8();
    var passwordText = document.querySelector("#password");
  
    
      function generatePassword8() {
          var length = 8;
              value = ""
          for (var i = 0, n = allChars16.length; i < length; ++i) {
              value += allChars16.charAt(Math.floor(Math.random() * n));
          }
          return value;
            }   
    passwordText.value = password;
   
  }

// Function that generates 16 random characters
function writePassword16() {
    var password = generatePassword16();
    var passwordText = document.querySelector("#password");
  
    
      function generatePassword16() {
          var length = 16;
              value = ""
          for (var i = 0, n = allChars16.length; i < length; ++i) {
              value += allChars16.charAt(Math.floor(Math.random() * n));
          }
          return value;
            }   
    passwordText.value = password;
   
  }
  



