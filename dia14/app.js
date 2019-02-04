/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */
/*
console.log("Probando, probando, 1, 2, 3!");

//Ejercicio 1  - Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
};

let json = JSON.stringify(user);

let usernow = JSON.parse(json);

console.log(usernow);
*/

/*
//Ejercicio 2 - Exclude backreferences
//In simple cases of circular references, we can exclude an offending property from serialization by its name.
//But sometimes there are many backreferences. And names may be used both in circular references and normal properties.
//Write replacer function to stringify everything, but remove properties that reference meetup:

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return (key == "occupiedBy" && value == meetup) || key == "self"
      ? undefined
      : value;
  })
);

/* result should be:
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */
/*
console.log(
  "%cAsincronía",
  "color: #000f9f; font-weight: bold; font-size: 18px;"
);

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.0/lodash.js",
  script => {
    console.log(`Cool, the ${script.src} is loaded`);
    console.log(_); // function declared in the loaded script
    console.log(_.difference([2, 1], [2, 3]));

    let array = [1];
    let other = _.concat(array, 2, [3], [[4]]);
    console.log(other);
  }
);
*/

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("Script load error: " + src));

    document.head.append(script);
  });
}

let promise = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.jsasdfa/3.2.0/lodash.js"
);

promise.then(
  script => console.log(`${script.src} is loaded!`)
  //   error => console.log(`Error: ${error.message}`)
);

promise.catch(error => console.log(`Error: ${error.message}`));

// promise.then(script => console.log("One more handler to do something else!"));
