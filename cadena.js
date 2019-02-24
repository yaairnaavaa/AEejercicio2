function deleteDiacritics(cadena){//Función para quitar signos diacríticos.
    return cadena.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}

function isPalindrome(cadena){//Función para verificar si una cadena es palíndromo.
    cadenaMod = deleteDiacritics(cadena);//Quitamos signos diacríticos.
    cadenaMod=cadenaMod.toLowerCase().replace(/\s|,/g,"");//Convertimos la cadena a minúsculas y quitamos espacios en blanco y comas.
    flippedString=cadenaMod.split("").reverse();//Separamos la cadena letra por letra e invertimos la matriz generada.
    flippedString = flippedString.join("");//Usamos método join("") para unir todos los elementos de la matriz en una cadena.

    if(cadenaMod==flippedString){//Comparamos las cadenas para verificar si son iguales.
        result="Si";
    }
    else{
        result="No";
    }
    return result;
}

function numberWords(cadena){//Función para contar el número de palabras.
    var cantidad = cadena.match(/\s/g).length;//Expresión regular para obtener cantidad de espacios en blanco.
    return cantidad+1;
}

function numberLetters(cadena){//Funcion para contar el número de letras.
    cadenaMod=cadena.replace(/\s|,/g,"");////Expresión regular para eliminar espacios en blanco.
    return cadenaMod.length;
}

function numberVowels(cadena){//Función para contar el número de vocales.
    cadenaMod = deleteDiacritics(cadena);//Quitamos signos diacríticos.
    var cantidad = cadenaMod.match(/[aeiou]/gi).length;//Expresión regular para obtener cantidad de vocales.
    return cantidad;
}

function numberConsonants(cadena){//Función para contar el número de consonantes.
    cantidad = numberLetters(cadena)-numberVowels(cadena);//Restamos número de vocales a número de letras.
    return cantidad;
}

module.exports.isP = isPalindrome;
module.exports.numW = numberWords;
module.exports.numL = numberLetters;
module.exports.numV = numberVowels;
module.exports.numC = numberConsonants;