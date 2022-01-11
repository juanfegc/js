//TRANSFORMAR
console.log('Transformar cada elemento de un array por el doble de su valor')
const array1 = [1, 2, 3]
console.log(array1)
array2 = array1.map(n => n * 2)
console.log(array2)

//FILTRAR
const comida = ['🥝', '🥦', '🥩', '🍌']
console.log(comida)
console.log('Filtrar comida vegetariana')
const comida_vegetariana = comida.filter(n => n !== '🥩')
console.log(comida_vegetariana)
console.log('num alimentos vegetarianos:',comida.filter(n => n !== '🥩').length)

//ENCONTRAR Y DEVOLVER
const animales = ['🐻', '🐔', '🦜', '🦁', '🐺']
console.log(animales)
console.log('Encontrar y devolver el leon')
const leon = animales.find(n => n === '🦁')
console.log(leon)

//DECIR INDICE DE UN OBJETO
console.log('decir donde esta la gallina')
const indice_gallina = animales.findIndex(n => n === '🐔')
console.log('pos', indice_gallina)

//RELLENAR ARRAY VACIO
const monedero = ['', '', '']
console.log('rellenar array vacio')
console.log(monedero)
monedero.fill('💸')
console.log(monedero)

// ¿todo OK?
const array3 = ['✅', '❌', '✅', '✅']
console.log(array3)
console.log('¿todo Ok?')
const ok = array3.every(n => n === '✅')
console.log(ok)
// ¿algun error?
console.log('¿Hay algun ❌?')
const error = array3.some(n => n === '❌')
console.log(error)
