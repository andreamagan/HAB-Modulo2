/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");


//Ejercicio 3 - Filter range "in place"
// Escriba una función filterRangeInPlace(arr, a, b) que obtiene un array arr y elimina de el todos los valores excepto aquellos que están entre a y b. La prueba es: a ≤ arr[i] ≤ b.
// La función solo debe modificar el array. No debe devolver nada.
/*
function filterRangeInPlace(arr, a, b){
    return arr.filter(function(item,index,){
        if (item >= a   &&  item<= b){
            return true;
        }else { 
            return false;
        }
        
    })
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]
*/

//Ejercicio 5
// Tenemos un array de strings arr. Nos gustaría tener una copia ordenada del mismo, pero no modifiquemos arr.
// Cree una función copySorted(arr) que devuelva dicha copia.


/*
function copySorted(arr){
    let cloneArr = arr.slice(0);
    return cloneArr.sort();

}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)

*/

/*
//Ejercicio 6 - Map to names
//Tenemos un array de objetos user,cada uno tiene user.name. Escribe el código que lo convierte en una matriz de nombres.


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names = users.map(item =>item.name);
alert( names ); // John, Pete, Mary
*/
/*
//Ejercicio 6 - Create an extendable calculator
//Cree una función constructora Calculator que crea objetos de calculadora" extendable ".
//La tarea consta de dos partes.

//Primero, implemente el método calculate(str) que toma una cadena como " 1 + 2 " en el formato "NÚMBER operator NUMBER" (delimitado por espacios) y devuelve el resultado. Debe entenderse más + y menos -.

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

//2.Luego agregue el método addMethod(name, func) que enseña a la calculadora una nueva operación. Toma el operador name y la función de dos argumentosfunc(a, b)que lo implementa.
//Por ejemplo, agreguemos la multiplicación *, la división / y la potencia **:


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

*/
/*
//Ejercicio 7 - Map to objects
//Tienes un conjunto de objetos user, cada uno tiene name, surname y id.
//Escriba el código para crear otra matriz a partir de él, de objetos con id y fullName, donde fullName se genera a partir de name y surname.

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];


let usersMapped = users.map(user => ({
    fullName: user.name + " "+ user.surname,
    id: user.id
}));

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
*/
/*
//Ejercicio 8 - Sort objects
//Escriba la función sortByName(users) que obtiene una matriz de objetos con la propiedad name y la ordena.

function sortByName(arr) {
    let userWithName= arr.filter(item => item.name !=null);
    console.log(userWithName);//jonh, pete, mary. Rubén no está porque no tiene name.

    userWithName.sort((a, b) => b.name > a.name ? 1 : -1) ;
    console.log(userWithName);//Comprobar si el array está ordenado
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let ruben = { age: 28 };

let users = [ john, pete, mary ];

sortByName(users);
 console.log(users); // now: Debería ser [john, mary, pete] pero no lo es :(

alert(users[1].name); // Mary
*/

/*
//Ejercicio 9 - Shuffle an array
//Escribe la función shuffle(array) que baraja (reordena aleatoriamente) los elementos del array.
//Las ejecuciones múltiples de shuffle pueden llevar a diferentes órdenes de elementos.
//Todas las órdenes de elementos deben tener una probabilidad igual. Por ejemplo, [1,2,3] se puede reordenar como [1,2,3] o [1,3,2] o [3,1,2] etc., con la misma probabilidad de cada caso.

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...

*/

/*
//Ejercicio 10 - Get average age
//Escriba la función getAverageAge(users) que obtiene una matriz de objetos con propiedad age y obtiene el promedio.
//La fórmula para el promedio es (age1 + age2 + ... + ageN) / N.

function getAverageAge(arr){
    let sumAges = arr.reduce((sum, current) => sum + current.age, 0);
    console.log(sumAges);
    let average = (sumAges/arr.length);
    return average;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/


//Ejercicio 11 - Filter unique array members
//Dejemos que 'arr` sea una matriz.
//Cree una función unique(arr) que debería devolver una matriz con elementos únicos de arr.

function unique(arr) {
    let results = [];
    for(let str of arr){
        if (!results.includes(str)){
        results.push(str);
    }
    }
    console.log(results);
    return results;        
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O