var cad = require("./cadena")

var cadena = "Anita lava la tina";

var palindrome = cad.isP(cadena);
var numberW = cad.numW(cadena);
var numberL = cad.numL(cadena);
var numberV = cad.numV(cadena);
var numberC = cad.numC(cadena);

console.log("¿Es palíndromo?: "+palindrome);
console.log("Número de palabras: "+numberW);
console.log("Número de letras: "+numberL);
console.log("Número de vocales: "+numberV);
console.log("Número de consonantes: "+numberC);