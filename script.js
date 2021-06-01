
var generateBtn = document.querySelector("#generate");
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var nums = "1234567890"
var specialChar = "!@#$%^&*()+{}[]"
const allChars = (alpha += nums += specialChar); 
const noAlpha = "1234567890!@#$%^&*()+{}[]"
const noNums = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()+{}[]";
const noSpecialChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890" 

var charPrompt = prompt('Would you like a 8 or 16 letter password?')
var alphaPrompt = prompt('Would you like alphabetical characters in your password? Please type y or n.');
var numbersPrompt = confirm('Would you like numbers in your password?');
var specialCharPrompt = confirm('Would you like to include special characters in your password?');
    
   if (charPrompt === '8' && alphaPrompt === 'y' && numbersPrompt === true && specialCharPrompt === true) {
        generateBtn.addEventListener("click", writePassword8); 
    }
    else if (charPrompt === '8' && alphaPrompt === 'n' && numbersPrompt === true && specialCharPrompt === true){
        generateBtn.addEventListener("click", noAlphabet8); 
    }
    else if (charPrompt === '8' && alphaPrompt === 'y' && numbersPrompt === false && specialCharPrompt === true) {
        generateBtn.addEventListener("click", noNumbers8);
    }
    else if (charPrompt === '8' && alphaPrompt === 'y' && numbersPrompt === true && specialCharPrompt === false) {
        generateBtn.addEventListener("click", noSpecialChars8);
    }
    else if (charPrompt === '16' && alphaPrompt === 'y' && numbersPrompt === true && specialCharPrompt === true) {
        generateBtn.addEventListener("click", writePassword16);
    }
    else if (charPrompt === '16' && alphaPrompt === 'n' && numbersPrompt === true && specialCharPrompt === true){
            generateBtn.addEventListener("click", noAlphabet16); 
    }
    else if (charPrompt === '16' && alphaPrompt === 'y' && numbersPrompt === false && specialCharPrompt === true) {
        generateBtn.addEventListener("click", noNumbers16);
    }
    else if (charPrompt === '16' && alphaPrompt === 'y' && numbersPrompt === true  && specialCharPrompt === false) {
            generateBtn.addEventListener("click", noSpecialChars16); 
    }
    else {
        alert('Please make sure you choose 8 or 16 characters AND 2 of the 3 character options!'); location.reload();
    }



// NO ALPHABET for 8 character generator
function noAlphabet8() {
    var password = generatePassword8();
    var passwordText = document.querySelector("#password");
  
      function generatePassword8() {
          var length = "8";
              value = ""
          for (var i = 0, n = noAlpha.length; i < length; ++i) {
              value += noAlpha.charAt(Math.floor(Math.random() * n));
          }
          return value;
            }   
        passwordText.value = password;
   
    }
// NO NUMBERS for 8 character generator
function noNumbers8() {
    var password = generatePassword8();
    var passwordText = document.querySelector("#password");
  
      function generatePassword8() {
          var length = "8";
              value = ""
          for (var i = 0, n = noNums.length; i < length; ++i) {
              value += noNums.charAt(Math.floor(Math.random() * n));
          }
          return value;
            }   
        passwordText.value = password;
    }
// NO SPECIAL CHARACTERS for 8 character generator
    function noSpecialChars8() {
        var password = generatePassword8();
        var passwordText = document.querySelector("#password");
      
        
        function generatePassword8() {
            var length = "8";
                value = ""
            for (var i = 0, n = noSpecialChars.length; i < length; ++i) {
                  value += noSpecialChars.charAt(Math.floor(Math.random() * n));
              }
            return value;
                }   
            passwordText.value = password;    
        }
// NO ALPHABET for 16 character generator
    function noAlphabet16() {
        var password = generatePassword16();
        var passwordText = document.querySelector("#password");
  
        function generatePassword16() {
          var length = "16";
              value = ""
            for (var i = 0, n = noAlpha.length; i < length; ++i) {
              value += noAlpha.charAt(Math.floor(Math.random() * n));
          }
            return value;
            }   
        passwordText.value = password;
    }
// NO NUMBERS for 16 character generator
    function noNumbers16() {
        var password = generatePassword16();
        var passwordText = document.querySelector("#password");
      
        function generatePassword16() {
              var length = "16";
                  value = ""
                for (var i = 0, n = noNums.length; i < length; ++i) {
                  value += noNums.charAt(Math.floor(Math.random() * n));
              }
                return value;
                }   
        passwordText.value = password;    
    }
// NO SPECIAL CHARACTERS for 16 character generator
    function noSpecialChars16() {
        var password = generatePassword16();
        var passwordText = document.querySelector("#password");
      
        function generatePassword16() {
            var length = "16";
                value = ""
            for (var i = 0, n = noSpecialChars.length; i < length; ++i) {
                value += noSpecialChars.charAt(Math.floor(Math.random() * n));
            }
            return value;
                }   
        passwordText.value = password;
    }
// Function that generates 8 random characters
    function writePassword8() {
        var password = generatePassword8();
        var passwordText = document.querySelector("#password");
  
        function generatePassword8() {
          var length = 8;
              value = ""
          for (var i = 0, n = allChars.length; i < length; ++i) {
              value += allChars.charAt(Math.floor(Math.random() * n));
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
          for (var i = 0, n = allChars.length; i < length; ++i) {
              value += allChars.charAt(Math.floor(Math.random() * n));
          }
          return value;
            }   
        passwordText.value = password;
   
  }
  

