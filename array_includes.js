/**
--------------------------
Array.prototype.includes()
--------------------------
The includes() method determines whether an array includes a certain value among its entries, 
returning true or false as appropriate. 
*/
const array1 = [1, 2, 3];

console.log(array1)

console.log('2:',array1.includes(2));
// expected output: true


const pets = ['cat', 'dog', 'bat'];

console.log(pets)

console.log('cat',pets.includes('cat'));
// expected output: true

console.log('at',pets.includes('at'));
// expected output: false


const array2 = [
    { name: 'Arto Hellas' },
    { name: 'Juanfer' },
    { name: 'Carla' },
  ]

console.log(array2)
console.log('Carla',array2.includes('Carla'));