function isPalindrome(cadena){//función para verificar si es palindromo.
    cadenaMod=cadena.toLowerCase().replace(/\s/g,"");//convertimos cadena a minusculas y quitamos espacios en blanco.
    flippedString=cadenaMod.split("").reverse().toString();//Invertimos la cadena .
      for (var i = 0; i < ((flippedString.length)-1); i++) {
        flippedString=flippedString.replace(",","");//Borramos las "," generadas por el metodo reverse. 
      };
      if(cadenaMod==flippedString){
        result="Si";
      }
      else{
        result="No";
      }
      return result;
}

function numberWords(cadena){
    cont = 0;
    for (var i = 0; i < cadena.length; i++) {
        if(cadena[i] == " "){
            cont++;
        }
    };
    return cont+1;
}

function numberLetters(cadena){
    cadenaMod=cadena.toLowerCase().replace(/\s/g,"");
    return cadenaMod.length;
}

function numberVowels(cadena){
    cont = 0;
    cadenaMod=cadena.toLowerCase();
    for (var i = 0; i < cadenaMod.length; i++) {
        if(cadenaMod[i] == "a" || cadenaMod[i] == "e" || cadenaMod[i] == "i" || cadenaMod[i] == "o" || cadenaMod[i] == "u"){
            cont++;
        }
    };
    return cont;
}

function numberConsonants(cadena){
    cantidad = numberLetters(cadena)-numberVowels(cadena);
    return cantidad;
}

module.exports.isP = isPalindrome;
module.exports.numW = numberWords;
module.exports.numL = numberLetters;
module.exports.numV = numberVowels;
module.exports.numC = numberConsonants;




