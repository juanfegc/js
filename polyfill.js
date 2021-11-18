// POLYFILL: añadir una funcionalidad que no este soportada
const array1 = [1, 2, 3, 4]
const array2 = array1.map(n => n * 2)
console.log(array1)
console.log(array2)

//ejemplo de que map no estuviera soportado:
//creamos nuestro Polyfill: customMap
Array.prototype.customMap = function (callback) {
  let result = []
  //this se refiere al objeto que lo invoca
  for (let index = 0; index < this.length; index++) {
    const el = this[index]
    const transformedElement = callback(el, index)
    result.push(transformedElement)
  }
  return result
}
const array3 = [1, 2, 3, 4].customMap(n => n * 2)
console.log(array3)
