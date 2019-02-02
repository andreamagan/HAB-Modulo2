/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

//Ejercicio 1
//Escriba la función camelize(str) que cambia las palabras separadas por guiones como "my-short-string" en "myShortString".
/*
let arr = [];
let str = "background-color";
let solucion;

function camelize(str) {
  arr = str.split("-");
  console.log(arr);

  //   arr.forEach(element, i => {
  //     if (i > 0) {
  //       let asd = element.charAt[0].toUpperCase();
  //       console.log(asd);
  //     }
  //   //   });
  //   arr.forEach(element => {
  //     let i;
  //     if (i > 0) {
  //       let asd = element.charAt[0].toUpperCase();
  //       console.log(asd);
  //     }
  //   });
  //

  for (let i = 1; i < arr.length; i++) {
    let a = arr[i].slice(0, 1);
    let b = a.toUpperCase() + arr[i].slice(1, arr[i].length);
    arr[i] = b;
  }
  arr = arr.join("");
  return arr;
}

console.log(camelize(str));

*/

//Ejercicio 2
//Escribe la función filterRange(arr, a, b) que obtiene un array arr,busca elementos entre a y b y en y lo devuelve en un array de ellos..
/*
function filterRange(arr, a, b) {
  return arr.filter(function(item, index) {
      if(item > a && item < b){
        return true
      }else {
        return false
      }
  });
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert(filtered); // 3,1 (matching values)
alert(arr); // 5,3,8,1 (not modified)
*/

//Ejercicio 3
//Escriba una función filterRangeInPlace(arr, a, b) que obtiene un array arr y elimina de el todos los valores excepto aquellos que están entre a y b. La prueba es: a ≤ arr[i] ≤ b
//La función solo debe modificar el array. No debe devolver nada

function filterRangeInPlace(arr, a, b) {
  return arr.filter(function(item, index)){
  if (a <= arr[i] <= b){

  }
}
}

/*
//Ejercicio 4

let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);

alert(arr); // 8, 5, 2, 1, -10
*/
