/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");
/*
// Ejercicio 1
let user = {
  name: "John",
  go: function() {
    alert(this.name);
  }
}; //Faltaba un punto y coma
user.go();

//Ejercicio 2
let obj, method;

obj = {
  go: function() {
    alert(this);
  }
};

obj.go(); // (1) [object Object]

//(obj.go)();  // (2) [object Object] // Igual que la anterior

(method = obj.go)(); // (3) undefined //Perdemos el this al igualar el método a una variable.

(obj.go || obj.stop)(); // (4) undefined

//Ejercicio 3

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert(user.ref.name); // What's the result? // Ref se convierte en la función makeUser por lo que no tendría acceso a name, por lo que sería undefine

//Lo correcto:

function makeUser() {
    return {
      name: "John",
      ref() { //Transformamos ref a una función
        return this;
      }
    };
  };
  
  let user = makeUser();
  
  alert( user.ref().name ); // Llamamos a Ref de la forma correcta (con los parentesis porque es una función. El resultado será John por que ahora this si puede acceder a la propiedad name del objeto.



//Ejercicio 4

let calculator = {
  //También podríamos definir num1: "" y num2:"" aquí, y luego sobreescribirlas desde read.

  read() {
    (this.num1 = +prompt("Introduce un número")),
      (this.num2 = +prompt("Introduce otro número"));
  },

  sum() {
    return this.num1 + this.num2;
  },

  mul() {
    return this.num1 * this.num2;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


//Ejercicio 5
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    // shows the current step
    alert(this.step);
  }
};

ladder
  .up()
  .up()
  .up()
  .up()
  .down()
  .showStep(); // 1
*/

//Para poder encadenar varias llamadas de función, tenemos que devolver un objeto. Al poner return this devolvemos el objeto ladder y por eso podemos volver a llamar al metodo up o duwn

/*
//Ejercicio extra
// Crear un objeto con dos parámetros una funcion de saludar y un parámetro con el nombre de a quién queires saludar (+pro: para poder saludar el nombre tiene que tener una A)

//Funciona pero no le estamos pasando la función al obj. Es trampita pero funciona :P
function SaludarA(name) {
  this.name = name;
  if (name.includes("a" || "A")) {
    this.sayHi = console.log("Hi! " + name);
  } else {
    return console.log("Bye");
  }
}

let saludo1 = new SaludarA("Andrea");
let saludo2 = new SaludarA("Rubén");
let saludo1 = new SaludarA("Maria");


// Lo correcto sería:
function SaludarA(name, funcion) {
  this.name = name;
  this.funcion = function() {
    if (this.name.includes("a" || "A")) {
      return funcion(this.name);
    } else {
      return "Bye";
    }
  };
}


// let saludo1 = new SaludarA("Andrea", name => "Hi! " + name);
// let saludo2 = new SaludarA("Rubén", name => "Hi! " + name);
// let saludo3 = new SaludarA("Maria", name => "Buenas! " + name);

// console.log(saludo1.funcion());
// console.log(saludo2.funcion());
// console.log(saludo3.funcion());

// Y para que el usuario pueda insertar su nombre...
let saludo = new SaludarA(prompt("Como te llamas?"), name => "Hi! " + name);

console.log(saludo.funcion());

*/

/*
//Ejercicio 6

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt("How much to add?", 0);
  };
}

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
alert(accumulator.value); // shows the sum of these values
*/

//Ejercicio 7
// class Clock {
//   constructor(template) {
//     this._template = template;
//   }
//   _render() {
//     let date = new Date();
//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;
//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;
//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;
//     let output = this._template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);
//     console.log(output);
//   }
//   stop() {
//     clearInterval(this._timer);
//   }
//   start() {
//     this._render();
//     this._timer = setInterval(() => this._render(), 1000);
//   }
// }

/*
//Ejercicio 8 

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super.name = name;
    this.created = Date.now();
  }
}
let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
alert(rabbit.name);

*/

//Ejercicio 9

class Clock {
  constructor({ template }) {
    console.log(template);
    this._template = template;
  }

  _render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this._template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this._timer);
  }

  start() {
    this._render();
    this._timer = setInterval(() => this._render(), 1000);
  }
}

class PowerClock extends Clock {
  constructor(obj) {
    console.log(obj);
    super(obj);
    this.precision = obj.precision;
  }

  start() {
    this._render();
    this._timer = setInterval(() => this.precision);
  }
}

let lowResolutionClock = new PowerClock({
  template: "h:m:s",
  precision: 10000
});
lowResolutionClock.start();

/* Your class should work like this: */
/* */
