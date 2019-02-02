/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

//Ejercicio 10

// getMaxSubSum([-1, *!*2, 3*/!*, -9]) = 5 (the sum of highlighted items)
// getMaxSubSum([*!*2, -1, 2, 3*/!*, -9]) = 6
// getMaxSubSum([-1, 2, 3, -9, *!*11*/!*]) = 11
// getMaxSubSum([-2, -1, *!*1, 2*/!*]) = 3
// getMaxSubSum([*!*100*/!*, -9, 2, -3, 5]) = 100
// getMaxSubSum([*!*1, 2, 3*/!*]) = 6 (take all)
// getMaxSubSum([-1, -2, -3]) = 0

let arr = [-1, 2, 3, -9, 5]; // Provisional para probar
let subArrA = [];
let subArrB = [];
let halfArr = Math.round(arr.length / 2);
console.log(halfArr);

subArrA = arr.splice(0, halfArr);
subArrB = console.log(subArrA);
console.log(subArrB);

subArrA > subArrB;
