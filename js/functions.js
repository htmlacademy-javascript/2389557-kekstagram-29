
let StringLength = (string, maxLength) => string.length <= maxLength;

console.log(StringLength('Пример строки Пример строки', 50));



let validateStringLength = (string, maxLength) => string.length <= maxLength;

let inputString = "Пример строки";
let maxAllowedLength = 10;

let isValid = validateStringLength(inputString, maxAllowedLength);

console.log(isValid);
