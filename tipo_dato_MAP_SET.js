// MAP
let map = new Map()

map.set('1', 'str1') // un string como clave
map.set(1, 'num1') // un número como clave
map.set(true, 'bool1') // un booleano como clave

// ¿recuerda el objeto regular? convertiría las claves a string.
// Map mantiene el tipo de dato en las claves, por lo que estas dos son diferentes:
console.log(map.get(1)) // 'num1'
console.log(map.get('1')) // 'str1'

console.log(map.size) // 3

/* Iteracion sobre un MAP
map.keys() -- devuelve un iterable para las claves.
map.values() -- devuelve un iterable para los valores.
map.entries() -- devuelve un iterable para las entradas [clave, valor]
*/
let recipeMap = new Map([
  ['pepino', 500],
  ['tomates', 350],
  ['cebollas',    50]
]);

// iterando sobre las claves (verduras)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // pepino, tomates, cebollas
}

// iterando sobre los valores (precios)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterando sobre las entradas [clave, valor]
for (let entry of recipeMap) { // lo mismo que recipeMap.entries()
  console.log(entry); // pepino,500 (etc)
}

// SET
let set1 = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visitas, algunos usuarios lo hacen varias veces
set1.add(john);
set1.add(pete);
set1.add(mary);
set1.add(john);
set1.add(mary);

// set solo guarda valores únicos
console.log( set1.size ); // 3

for (let user of set1) {
  console.log(user.name); // John (luego Pete y Mary)
}


/* Iteracion sobre un SET
set.keys() -- devuelve un iterable para las claves
set.values() -- lo mismo que set.keys(), por su compatibilidad con Map
set.entries() -- devuelve un iterable para las entradas [clave, valor]
*/
let set2 = new Set(["oranges", "apples", "bananas"]);

for (let value of set2) console.log(value);

// lo mismo que forEach:
set2.forEach((value, valueAgain, set) => {
  console.log(value);
});