/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

/**
 * Crea una funcion que checkee un string
 * y devuelva true/false dependiendo de si es palindromo o no
 *
 */

function checkString(str) {
  let lowerstr = str.toLowerCase();
  console.log();
  let longitud = str.length;

  let pos = 0;

  for (i = 0; i <= longitud; i++) {
    lowerstr[pos] == lowerstr[-pos];
    pos = pos++;
  }
}

let str = "Abcba";
alert(checkString());

//0-pasar el string a lowercase para que no de error si hay mayúsculas
//1-dividir el string por la Mitad
//2-comparar el primer char y el ultimo, y así uno a uno hasta la mitad

/*
function checkString(str) {
  let lowerstr = str.toLowerCase();
  console.log();
  let longitud = str.length;

  let pos = 0;
  let i;
  do {
    lowerstr[pos] == lowerstr[-pos];
    i++;
  } while (i < (longitud/2);
}

let str = "Abcba";
alert(checkString(str));

//0-pasar el string a lowercase para que no de error si hay mayúsculas
//1-dividir el string por la Mitad
//2-comparar el primer char y el ultimo, y así uno a uno hasta la mitad
*/
