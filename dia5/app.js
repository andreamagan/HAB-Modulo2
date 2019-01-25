/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!";

//Ejercico 1
function ask (question, yes, no)  {
    if (confirm (question)) {yes()}
    else {no();}
}

ask{
    "Do yo agree?",
    () => alert ("You agreed."),
    () => alert ("You canceled the execution.")
};


//Ejercicio 2
let user = {};
user.name = "Jonh";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//Ejercicio 3

function isEmpty(obj){
    for (let key in obj){ // recorre las probpiedades del objeto
        return false;
    }
    return true;
}

//Ejercicio 4 
const user = {
    name: "John"
  };
  // does it work?
  user.name = "Pete";// Si porque no cambiar el user, lo que cambias es la propiedad

  //Ejercicio 5

  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

let sum = 0;

for (let key in salaries) {
    sum += salaries.[key];
}

alert(sum);




