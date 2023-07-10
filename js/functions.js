
function StringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}
console.log(StringLength('Пример строки Пример строки', 50));



function validateStringLength (string, maxLength) {
  return string.length <= maxLength;
}

let inputString = "Пример строки";
let maxAllowedLength = 10;

let isValid = validateStringLength(inputString, maxAllowedLength);

console.log(isValid);
