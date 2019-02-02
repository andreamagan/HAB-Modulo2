/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */
/*
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


//Ejercicios Arrays
//Ejercicio 1

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // 4

//Ejercicio 2
Probemos 5 operaciones de arrays.

Crea un array styles con ítems "Jazz"y "Blues".
Agregue "Rock-n-Roll" al final.
Reemplace el valor en el medio por "Classics". Su código para encontrar el valor medio debería funcionar para cualquier array con una longitud impar.
Elimine el primer valor del array y muéstrelo.
Prependa Rap y Reggae al array.
EL array en el proceso:

Jazz, Blues
Jazz, Bues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll

let styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);
let middle = styles.length / 2;
middle = Math.trunc(middle);
styles[middle] = "Classic";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles);


let arr = ["a", "b"];

arr.push(function() {
  alert(this);
});

arr[2](); // a,b,function(){alert(this);}
*/

// Escribe la función sumInput() que:

// Pregunta al usuario por los valores usando prompt y almacena los valores en el array.
// Termina de preguntar cuando el usuario ingresa un valor no numérico, un string vacío o presiona "Cancel".
// Calcula y devuelve la suma de elementos de array.
// PD Un cero 0 es un número válido, por favor no detenga la entrada en cero. [demo]

// let message;
// let arr = [];
// do {
//   message = +prompt("Escribe un número");
//   console.log(message);
//   // arr.push(message);
// } while (message !== NaN);

// // alert(arr);
// //bucle infinito

// let message;
// let arr =[];
