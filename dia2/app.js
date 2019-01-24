/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

/*


console.log("Probando, probando, 1, 2, 3!");

let name = "Jonh";
console.log(`Helo, ${name}`);

console.log("Helo, ${name}");

// number - no hay tipo int float o double como en Java
// string "" `` o ''  y no existe char para definir una letra

let isGrater = 4 > 1;

console.log(isGrater);

// cuando no sabemos el valor de la variable podemos inicializarla a null

let age = null;
console.log(age);

//cuando no damos un valor a una variable su valor es undefined
// puedes asignarlo de forma manual pero no tiene sentido. si no conocemos el valor usamos null

let x;
console.log(x);

//los objetos se utilizan para almacenar colecciones de datos o entidades complejas
//symbol se utiliza para crear ids únicos para los objetos

//typeof x o typeof (x) dan el mismo resultado. Y sirve para devolver un strig con el nombre del tipo de la variable

*/

/**  7 tipos 
        number
        string
        boolean
        null
        undefined
        object
        symbol
*/

/*
// Ejercicio 1

let name = "Ilya";

console.log(`hello ${1}`); // hello 1
console.log(`hello ${"name"}`); // hello name
console.log(`hello ${name}`); // hello Ilya

// toString convierte en string otros valores
// toNumber convierte un string en un numero - esto sirve para pasar los campos de formulario a numero (lo que tecleamos es un string)

let value = true;
console.log(typeof value);

value = String(2);
console.log(typeof value);

console.log(Number(true)); //Da 1
console.log(Number(true)); //Da 0

// Adition + concantena strings. Si sumamos strings + números el resultado será un string

//toBoolean los valores vacíos o NaN se convierten a false, los otros a true
console.log(Boolean(-1)); //los negativos también son true
console.log(Boolean(" ")); // los espacios se interpretan como true
console.log(Boolean("")); // un string vacío es false

*/

/*
//Ejercicio 2

"" + 1 + 0; // "10"
"" - 1 + 0; // -1
true + false; // 1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // "9px"
"$" + 4 + 5; // "$45"
"4" - 2; // 2
"4px" - 2; // NaN
7 / 0; //Infinity
"  -9  " + 5; // ("  -9  5");
"  -9  " - 5; // -14
null + 1; // 1
undefined + 1; //NaN

*/

//Incremento y decremento ++ o --
// Si lo aplicamos antes de la variable ++var se incrementa antes de las posibles operaciones o asignaciones

/*
//Ejercicio 3

let a = 1;
let b = 1;

let c = ++a; // 2
let d = b++; // 1
*/

/*
//Ejecicio 4

let a = 2;
let x = 1 +( a *=2); 

// a = 4
// x = 5 
*/

// Operadores de comparación == <= >= !=....

console.log("Z" > "A"); // True

/*
// Ejercicio 5

5 > 4; //true
"apple" > "pineapple"; //false
"2" > "12"; //true
undefined == null; //true
undefined === null; // false
null == "\n0\n"; //false
null === +"\n0\n"; //false
10 == "10"; //true
10 === "10"; //false
*/

/*
//Ejercicio 6

let name;
name = prompt("¿Cómo te llamas?", "Bosser");
alert(`Hola,${name}`);

*/

//Ejercicio 7

//Si  porque es un string cierto

//Ejercicio 8

let result = prompt("¿Cuál es el nombre oficial de JS");

if (result == "ECMAScript") {
  alert("Rigth");
} else {
  alert("Wrong");
}


//Ejercicio9

let num = prompt ("Elige un numero")

if num > 0 {
    alert(1;)
}
else if  (num <0){
    alert ()
}
else {
    alert()
}

//Ejercicio 10


result = (a+b <4 ) ? "Below" : "Over";


//Ejercicio 11

let message = (login == "EMployee") ?
    message = "Hello" : (login == "Director") ? "Greetings" : 
    (login == "") ? "No login":
    "";