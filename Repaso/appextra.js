/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

// Ejercicios strings

//Ejercicio 01 - Escriba una función ucFirst (str) que devuelva la cadena str con el primer carácter en mayúsculas, por ejemplo:

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

let userString = prompt("Escribe un string");
alert( ucFirst(userString) ); //


//Ejercicio 02 Escriba una función checkSpam (str) que devuelva true si str contiene 'viagra' o 'XXX'; de lo contrario, `false.

//La función debe ser insensible a mayúsculas y minúsculas:
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

//Ejercicio 03 
//Cree una función truncate (str, maxlength) que verifique la longitud del str y, si excede de maxlength - reemplaza el final de str con el carácter de puntos suspensivos"...", para hacer su longitud igual a maxlength.

//El resultado de la función debe ser la cadena truncada (si es necesario).

function truncate(str, maxlength) {
    return (str.length > maxlength) ? 
      str.slice(0, maxlength - 1) + '…' : str; //si tiene menos de la longitud máxima, se añaden ...
  }

truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!"

//Ejercicio 04 Tenemos un costo en la forma " $ 120 ". Es decir: el signo de dólar va primero, y luego el número.

//Cree una función extractCurrencyValue (str) que extraiga el valor numérico de dicha cadena y la devuelva.

function extractCurrencyValue(str) {
    return +str.slice(1); // + delante para pasar el string a numero (1) para devolver la cadena desde el segundo caracter
  }

alert( extractCurrencyValue('$120') === 120 ); // 