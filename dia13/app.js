/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log(
  "%cEjercicios Map y Set Con Colorines Para Rubén",
  "color: #000f9f; font-weight: bold; font-size: 18px;"
);

/*
//Ejercicio 1 -Filter unique array members
//Dejemos que arr sea un array.
//Cree una función unique(arr) que debería devolver un array con elementos únicos de arr.
//P.P.S. Utilice Set para almacenar valores únicos.

function unique(arr) {
  let set = new Set(arr);
  console.log(set);
  return set;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O"
];

let message = unique(values);
set.forEach(value => {
  alert(value);
});
console.log(message);
alert(unique(message)); // Hare, Krishna, :-O
*/
/*
//Ejercicio 2 - Filter anagrams
//Anagrams son palabras que tienen el mismo número de letras, pero en diferente orden.

// Escriba una función aclean (arr) que devuelva un array limpio de anagramas.

function aclean(arr) {
  let mapResult = new Map();

  for (let str of arr) {
    let word = str.toLowerCase();
    // console.log(word);
    let arrWord = word
      .split("")
      .sort()
      .join("");
    // console.log(`Split: ${arrWord}`);
    // arrWord = arrWord.sort();
    // console.log(`Sort: ${arrWord}`);
    // arrWord = arrWord.join("");
    // console.log(`Join: ${arrWord}`);
    // console.log(`Palabra reordenada: ${arrWord}`);
    mapResult.set(arrWord, str);
  }
  console.log(mapResult);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// aclean(arr);
console.log(aclean(arr));
*/
/*
//Ejercicio 3 - Iterable keys
//Queremos obtener un array de map.keys() y seguir trabajando con ella (aparte del mapa en sí).

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: numbers.push is not a function
keys.push("more");

console.log(keys);
console.log(map);
*/

/*
//Ejercicio 4 - Store "unread" flags 
//Su código puede acceder a él, pero los mensajes son administrados por el código de otra persona. Los nuevos mensajes se agregan, los antiguos se eliminan regularmente con ese código y no se conocen los momentos exactos en que ocurre.

//Ahora, ¿qué estructura de datos podría usar para almacenar información si el mensaje "se ha leído"? La estructura debe ser adecuada para dar la respuesta "¿se leyó?" para el objeto de mensaje dado.

//PD Cuando se elimina un mensaje de messages, también debería desaparecer de su estructura.

//P.P.S. No deberíamos modificar los objetos del mensaje directamente. Si son administrados por el código de otra persona, agregarles propiedades adicionales puede tener malas consecuencias.

let read = "leido";

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let unReadSet = new WeakSet(messages);

function deleteMessage(msg) {
  unReadSet.delete(message);
}

function addMessage(msg) {
  unReadSet.add(msg);
}

deleteMessage({ text: "Hello", from: "John" });

*/

console.log(
  "%cEjercicios Key Value Entries",
  "color: #000f9f; font-weight: bold; font-size: 18px;"
);
/*
//Ejercicio 1

function sumSalaries(salaries) {
  let iterable = Object.values(salaries);
  console.log(iterable);
  let sum = 0;
  for (let value of iterable) {
    sum += value;
    console.log(sum);
  }
  return sum;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

alert(sumSalaries(salaries)); // 650
*/

/*
//Ejercicio 2 -Count properties
//Escribe una función count(obj) que devuelve el número de propiedades en el objeto:

function count(obj) {
  let arr = Object.keys(obj);
  return arr.length;
}

let user = {
  name: "John",
  age: 30
};

console.log(count(user)); // 2
*/

/*
// Ejercicio 1 - Destructuring assignment
// Escribe la tarea de desestructuración que dice:
// propiedad name en la variable name.
// propiedad years en la variable age.
// propiedad isAdmin en la variable isAdmin (falso por defecto)
// Los valores después de la asignación deben ser:

let user = { name: "John", years: 30 };

// your code to the left side:
// ... = user

let { name, years: age, isAdmin = "false" } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false
*/

/*
//Ejercicio 2 - The maximal salary
//Cree la función topSalary(salaries) que devuelve el nombre de la persona mejor pagada.

//Si salaries está vacío, debería devolvernull.
//Si hay varias personas mejor pagadas, devuelva cualquiera de ellas.
//PD Use Object.entries y la desestructuración para iterar sobre pares clave/valor.

function topSalary(salaries) {
  if ((salary = "")) {
    return null;
  } else {
    console.log(Object.entries(salaries));
    let bestSalary = 0;
    let nameBestSalary;
    for (const [name, salary] of Object.entries(salaries)) {
      if (salary > bestSalary) {
        bestSalary = salary;
        nameBestSalary = name;
      }
    }
    console.log(
      `El mejor salario es de ${nameBestSalary} y es: ${bestSalary} `
    );
  }
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

topSalary(salaries);
*/

//Ejercicios Date
/*
//Ejercicio 1 

let date = new Date(2012, 1, 20, 3, 12);
console.log(date);
*/

/*
//Ejercicio 2

function getWeekDate(date) {
  let day = date.getDay();
  return arr[day];
}

let arr = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
let date = new Date(2012, 0, 3);

getWeekDate(date);
console.log(getWeekDate(date));
*/

//Ejercicio 3
//Los países europeos tienen días de la semana que comienzan con el lunes (número 1), luego el martes (número 2) y hasta el domingo (número 7). Escriba una función getLocalDay(date) que devuelva el día de la semana "europeo" para date.

function getLocalDate(date) {
  let localDate = Date.UTC(date);
  console.log(localDate);
}

let date = new Date(2012, 0, 3); // 3 Jan 2012
alert(getLocalDay(date)); // tuesday, should show 2
