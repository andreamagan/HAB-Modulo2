## Summary 01-Hello World

- Podemos usar una etiqueta `<script>` para añadir código JavaScript a una página.
- Los atributos `type` y `language` no son necesarios.
- Un script en un archivo externo puede ser insertado con `<script src="path/to/script.js"></script>`.

## Summary 02-Structure

En la mayoría de los casos, una nueva línea implica un punto y coma. Pero "en la mayoría de los casos" no significa "siempre"!
Recomendamos poner punto y coma entre las frases, incluso si están separadas por líneas nuevas. Esta regla es ampliamente adoptada por la comunidad. Observemos una vez más -- _es posible_ omitir los puntos y coma la mayor parte del tiempo. Pero es más seguro, especialmente para alguien empezando, usarlos.

Por favor, no dudes en comentar t
//Ejercico 1
function ask (question, yes, no) {
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

u código.

Los comentarios aumentan la huella general del código, pero eso no es un problema en absoluto. Hay muchas herramientas que minimizan el código antes de publicarlo en un servidor de producción. Eliminan los comentarios, por lo que no aparecen en los scripts de trabajo. Por lo tanto, los comentarios no tienen ningún efecto negativo en la producción.

## Summary 03-Use strict

1. La directiva ``"use strict"` cambia el motor al modo "moderno", cambiando el comportamiento de algunas características incorporadas. Veremos los detalles más adelante en el tutorial.
2. El modo estricto se activa colocando `"use strict"` en la parte superior de un script o función. Varias características de lenguaje, como "clases" y "módulos", permiten el modo estricto automáticamente.
3. El modo estricto es soportado por todos los navegadores modernos.
4. Recomendamos siempre iniciar los scripts con `"use strict"`. Todos los ejemplos de este tutorial asumen el modo estricto a menos que (muy raramente) se especifique lo contrario.

## Summary 04-Variables

Podemos declarar variables para almacenar datos usando las palabras clave `var`, `let`, o `const`.

- `let` -- es una declaración variable moderna.
- `var` -- es una declaración variable de la vieja escuela. Normalmente no lo usamos en absoluto, pero cubriremos las diferencias sutiles de `let' en el capítulo <info:var>, por si acaso las necesitas.
- `const` -- es como `let`, pero el valor de la variable no puede ser cambiado.

Las variables deben ser nombradas de una manera que nos permita entender fácilmente lo que hay dentro de ellas.

## Summary 05-Tipos de datos

Hay 7 tipos básicos en JavaScript.

- `number` para números de cualquier tipo: enteros o en coma flotante.
- `string` para cadenas. Una cadena puede tener uno o más caracteres, no hay un tipo de carácter único separado.
- `boolean` para `true`/`false`.
- `null` para valores desconocidos -- un tipo independiente que tiene un solo valor `null`.
- `undefined` para valores no asignados -- un tipo autónomo que tiene un único valor `undefined`.
- `object` para estructuras de datos más complejas.
- `symbol` para identificadores únicos.

El operador `typeof` nos permite ver qué tipo está almacenado en una variable.

- Dos formas: `typeof x` o `typeof(x)`.
- Devuelve una cadena con el nombre del tipo, como `"string"`.
- Para `null` devuelve `"object"` -- esto es un error en el lenguaje, en realidad no es un objeto.

## Summary 06-Tipos de conversiones

Las tres conversiones de tipo más utilizadas son a cadena, a número y a booleano.

**`ToString`** -- Ocurre cuando emitimos algo. Puede realizarse con `String(value)`. La conversión a cadena suele ser obvia para los valores primitivos.

**`ToNumber`** -- Ocurre en operaciones matemáticas. Se puede realizar con `Number(value)`.

La conversión sigue las reglas:

| Value                               | Becomes...                                                                                                                               |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `undefined`                         | `NaN`                                                                                                                                    |
| `null`                              | `0`                                                                                                                                      |
| <code>true&nbsp;/&nbsp;false</code> | `1 / 0`                                                                                                                                  |
| `string`                            | La cadena se lee "tal cual" y se ignoran los espacios en blanco de ambos lados. Una cadena vacía se convierte en "0". Un error da `NaN`. |

**`ToBoolean`** -- Ocurre en operaciones lógicas. Se puede realizar con`Boolean(value)`.

Sigue las reglas:

| Value                                 | Becomes... |
| ------------------------------------- | ---------- |
| `0`, `null`, `undefined`, `NaN`, `""` | `false`    |
| any other value                       | `true`     |

La mayoría de estas reglas son fáciles de entender y memorizar. Las excepciones en las que la gente suele cometer errores son:

- `undefined` es `NaN` como número, no `0`.
- `"0"` y la cadena de "sólo-espacio" como `" "` son true como boolean.

## Summary 07-Operadores

- Un operador es _unario_ si tiene un solo operando. Por ejemplo, la negación unaria - invierte el signo de un número.
- Un operador es _binario_ si tiene dos operandos. El mismo menos existe también en forma binaria y significa resta.
  -El operador más `+` suma números. Pero, si el binario `+` se aplica a cadenas, las fusiona (concatena).Ten en cuenta que si uno de los operandos es una cadena, el otro también se convierte en una cadena.
  -Si el operando no es un número, el unario `+` lo convierte en un número. Hace lo mismo que `Number(...)`, pero es más corto.
  -Si una expresión tiene más de un operador, el orden de ejecución se define por su precedencia, o, en otras palabras, el orden de prioridad implícito de los operadores.
- `=` es el operador de asignación `x=valor`.
- El operador `a%b` da el resto de la división `a/b`.
- El operador exponencial `a**n` multiplica `a` por si mimso `n` veces.
- `++` y `--` incrementan o disminuyen una variable en una unidad.
- `++i` devuelve el valor incrementado mientras que `i++` devuelve el valor inicial y luego lo incrementa.
- Los operadores bitwise son:

  - AND ( `&` )
  - OR ( `|` )
  - XOR ( `^` )
  - NOT ( `~` )
  - LEFT SHIFT ( `<<` ) // Solo para algoritmos
  - RIGHT SHIFT ( `>>` ) // Solo para algoritmos
  - ZERO-FILL RIGHT SHIFT ( `>>>` ) // Solo para algoritmos

- Operadores cortos: `+=` , `*=`, `/=`, `-=`, etc.
- Operador `,` se usa básicamente en bucles `for`

## Summary 08-alert,prompt-confirm

Cubrimos 3 funciones específicas del navegador para interactuar con los visitantes:

`alert`
: muestra un mensaje.

```js
alert("message");
```

`prompt`
: muestra un mensaje pidiendo al usuario que ingrese texto. Devuelve el texto o, si se pulsa CANCEL o `key: Esc`,`null`.

```js no-beautify
result = prompt(title[, default]);
```

`confirm`
: muestra un mensaje y espera a que el usuario presione "OK" o "CANCEL". Devuelve `true` para OK y `false` para CANCEL / `key:Esc`.

```js
result = confirm("question");
```

Todos estos métodos son modales: pausan la ejecución del script y no permiten que el visitante interactúe con el resto de la página hasta que la ventana haya sido cerrada.

## Summary 10-Operadores condicionales: if, '?'

- La instrucción `if` evalúa una condición y, si el resultado de la condición es`true`, ejecuta un bloque de código, y puede contener un bloque else opcional. Se ejecuta cuando la condición es falsa.

```js
if (condicion) {
  value1;
} else {
  value2;
}
```

- `else if` es igual que `if` pero nos permite evaluar varias condiciones.

```js
if (condicion){value1} if else {value2} else {value3}
```

- El operador ternario `?` nos permite hacerlo de una manera más breve y sencilla. Una secuencia de operadores de signo de interrogación `?` Puede devolver un valor que depende de más de una condición.

```js
let result = condition1 ? value1 : condition2 ? value2 : value3;
```

## Summary 12-Loops: while and for

- `while` - La condición se verifica antes de cada iteración.

```js
while (condition) {
    Mientras que la `condition` sea `true`, el `code` del _loop body_ es ejecutado.
}
```

- `do..while` - La condición se verifica después de cada iteración.

```js
do {
  Esta forma de sintaxis solo se debe utilizar cuando desee que el cuerpo del bucle se ejecute **al menos una vez**,
} while (condition);
```

- `for (;;)` - La condición se verifica antes de cada iteración, configuraciones adicionales disponibles.

```js
for (begin; condition; step) {
  body;
}
```

| part      |            |                                                                                                |
| --------- | ---------- | ---------------------------------------------------------------------------------------------- |
| begin     | `i = 0`    | Se ejecuta una vez al entrar en el bucle.                                                      |
| condition | `i < 3`    | Comprobado antes de cada iteración de bucle. Si es falso, el bucle se detiene.                 |
| step      | `i++`      | Se ejecuta después del cuerpo en cada iteración pero antes de la verificación de la condición. |
| body      | `alert(i)` | Corre una y otra vez mientras la condición sea veraz.                                          |

- Si declaramos variables _in line_ solo serán visibles dentro del bucle.
- Si omitimos el inicio, la condición y el paso, creamos un bucle infinito

```
for (;;){body}
```

Para hacer un bucle "infinito", usualmente se usa la construcción `while(true)`.
Dicho bucle, como cualquier otro, puede detenerse con la directiva `break`.
Si no queremos hacer nada en la iteración actual y nos gustaría reenviar a la siguiente, podemos usar la directiva `continue`.

`break / continue` admite etiquetas antes del bucle. Una etiqueta es la única forma en que `break / continue` para escapar de un bucle anidado para ir a uno externo. Una llamada a `break/continue` solo es posible dentro de un bucle y la etiqueta debe estar en algún lugar por encima de la llamada.

```js
labelName: for (...) {
  for(...){
      break labelName;
  }
}
```

## Summary 13-The "switch" statement

Una instrucción `switch` puede reemplazar múltiples cheques `if`.
Hagamos hincapié en que el control de igualdad siempre es estricto. Los valores deben ser del mismo tipo para que coincidan.
Se pueden agrupar varias variantes de `case` que comparten el mismo código.

```js
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
  case 'value3':  // if (x === 'value3')
    ...
    [break]

  default:
    ...
    [break]
}
```

## Summary 14-Funciones básicas

Las funciones son los principales "bloques de construcción" del programa. Permiten que el código se llame muchas veces sin repetición.

Para declarar una función podemos usar _function declaration_

```js
function nombreDeLaFuncion(parámetros,delimitados,por,comas) {
  cuerpo de la función
}
```

Hay otra sintaxis para crear una función que se llama _Expresión de función_.

```js
let nombreFuncion = function() {
  body function;
}
```

Para llamar una función usamos:

```js
nombreDeLaFuncion();
```

Una variable declarada dentro de una función se conoce como variable **local** y solo es visible dentro de esa función. Si la variable es **global**, la función tiene acceso completo y la muede modificar tambien.
La variable externa solo se usa si no hay una local.

Los parametros también conocidos como _function arguments_ pueden tener valores por defecto. Sino su valor se convierte a `undefined`.

- Los valores pasados a una función como parámetros se copian a sus variables locales.

- Cuando queremos devolver un valor utilizamos `return`. Puede estar en cualquier lugar de la función. Cuando la ejecución lo alcanza, la función se detiene y el valor se devuelve al código de llamada (asignado al `result` anterior).
- Es posible utilizar `return` sin un valor. Eso hace que la función salga inmediatamente.
- Una función puede devolver un valor. Si no lo hace, entonces su resultado es `undefined`.

Las funciones son acciones. Así que su nombre suele ser un verbo. Debe ser breve, y debe describir claramente lo que hace la función. Cuando vemos una llamada de función en el código, un buen nombre nos permite comprender al instante qué hace y qué devuelve.

Función que comienza con ...

- `"get…"` -- return a value,
- `"calc…"` -- calculate something,
- `"create…"` -- create something,
- `"check…"` -- check something and return a boolean, etc.
- `"show…"` -- normalemente muestran algo.

Dos acciones independientes por lo general merecen dos funciones, incluso si se las llama juntas (en ese caso, podemos hacer una tercera función que llame a esas dos).
