//usar los elementos de un array como argumentos de una función
function sum(x, y, z) {
  return x + y + z
}

const numbers1 = [1, 2, 3]
console.log(sum(...numbers1)) // expected output: 6

// Copiar arrays
var parts = ['shoulders', 'knees']
var lyrics = ['head', ...parts, 'and', 'toes'] // ["head", "shoulders", "knees", "and", "toes"]

var arr = [1, 2, 3]
var arr2 = [...arr] // like arr.slice()
arr2.push(4) // arr2 becomes [1, 2, 3, 4]

//concatenar arrays
var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]
console.log('[arr1, arr2]=', [arr1, arr2])

arr1 = [...arr1, ...arr2]
console.log('[...arr1, ...arr2]=', arr1)

console.log('[arr1, arr2]:', [arr1, arr2])

//desectructurar un array para tomar elementos
console.log('------ desectructurar array ------')
const numbers = [1, 2, 3, 4, 5, 6]
const [first, second, ...rest] = numbers
console.log(first) // prints 1
console.log(second) // prints 2
console.log(rest) // prints [3, 4, 5, 6]

//Copiar propiedades de un objeto
console.log('------ copiar propiedades de un objeto ------')
var obj1 = { foo: 'bar', x: 42 }
var obj2 = { foo: 'baz', y: 13 }

var clonedObj = { ...obj1 }
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 }
// Object { foo: "baz", x: 42, y: 13 }
console.log({ mergedObj })

//de un objeto copiar las propiedades y modificar las que nos interesen no copiar
const note1 = {
  content: 'state changes are made with actions',
  important: false,
  id: 2,
}
console.log({ note1 })

const note2 = {
  ...note1,
  important: !note1.important,
}
console.log({ note2 })
