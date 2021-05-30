
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Function that generates the random characters
  function generatePassword() {
    var length = 8
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVQXYZ1234567890!@#$%^&*"
    value = ""
    for (var i = 0; i <= chars.length; ++i) {
    value = chars.charAt(Math.floor(Math.random() * chars.length +1));

    return value;
      }   
}
  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);   

