/**
----------------------
Array.prototype.find()
----------------------
The find() method returns the value of the first element in the provided array 
that satisfies the provided testing function. 
If no values satisfy the testing function, undefined is returned. 
*/
const array2 = [
    { name: 'Arto Hellas' },
    { name: 'Juanfer' },
    { name: 'Carla' },
  ]


//Using arrow function and destructuring
const found = array2.find( ({name}) => name === 'Carla')

console.log(found)
console.log(found!=undefined)