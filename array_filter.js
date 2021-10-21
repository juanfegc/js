/**
------------------------
Array.prototype.filter()
------------------------
The filter() method creates a new array with all elements that pass the test implemented by the provided function. 
*/
const array = [
    { name: 'Arto Hellas' },
    { name: 'Juanfer' },
    { name: 'Carla' },
  ]

console.log(array)
console.log('buscar ', 'ar')

const result  = array.filter(element => element.name.toLowerCase().includes('ar') ? true : false)

console.log(result)