/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// console.log("Probando, probando, 1, 2, 3!");

// console.log("I'm JavaScript");

alert("Hello! I'm JavaScript!!");

//Esto es un comentario
//[1, 2].forEach(alert); //Otro comentario al final de la linea

/*
Un 
Comentario 
Multilinea
*/

/*
 * Con /** Se completan los asteriscos
 * del inicio de
 * la linea
 */

("use strict"); //Todo lo que viene después lo lee como código moderno??

//Declaramos variables con let

let message;
message = "Hello";

//Podemos hacer lo mismo en una línea

let nombre = "Andrea";
let edad = 25;

alert("Mi nombre es " + nombre + " y tengo " + edad + " años");

console.log("Mi nombre es " + nombre);

console.log(`Mi nombre es ${nombre}`); //Recomendado!!!!!

const cumple = "23.07.1993"; //const es una constante

//cumple = "25.07.1993" <-- Esto es un error porque intentamos cambiar el valor de una constante.

// Ejercicios de variables

// 1
let admin;
let name;

name = "John";
admin = name;

alert(admin);

// 2

let ourPlanetName = "Tierra";
let currentUserName;

// 3

const BIRTHDAY = "18.01.2018";
const AGE = someCode(BIRTHDAY); //No sería correcto porque no es un valor que calculemos nosotros y no es "Hard-coded"
