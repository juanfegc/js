//@ts-check
const products = [
  {
    id: 6,
    id_category_default: '8',
    manufacturer_name: 'Studio Design',
    price: '11.900000',
    name: 'Mug The best is yet to come',
  },
  {
    id: 7,
    id_category_default: '8',
    manufacturer_name: 'Studio Design',
    price: '11.900000',
    name: 'Mug The adventure begins',
  },
  {
    id: 8,
    id_category_default: '8',
    manufacturer_name: 'Studio Design',
    price: '11.900000',
    name: 'Mug Today is a good day',
  },
  {
    id: 9,
    id_category_default: '8',
    manufacturer_name: 'Studio Design',
    price: '18.900000',
    name: 'Mountain fox cushion',
  },
  {
    id: 10,
    id_category_default: '8',
    manufacturer_name: 'Studio Design',
    price: '18.900000',
    name: 'Brown bear cushion',
  },
  {
    id: 11,
    id_category_default: '8',
    manufacturer_name: 'Studio Design',
    price: '18.900000',
    name: 'Hummingbird cushion',
  },
  {
    id: 15,
    id_category_default: '8',
    manufacturer_name: false,
    price: '35.000000',
    name: 'Pack Mug + Framed poster',
  },
  {
    id: 19,
    id_category_default: '8',
    manufacturer_name: 'Studio Design',
    price: '13.900000',
    name: 'Customizable mug',
  },
]

const asociations = [
  {
    id: '19',
  },
  {
    id: '22',
  },
]    

for (const {id: n, name: f} of products) {
  console.log('id: ' + n + ', Nombre: ' + f);
}

console.log('------------- iteracion desestructuración de arreglos y objetos anidados -----------');

const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

console.log({people})
for (const {name: n, family: {father: f}} of people) {
  console.log('Nombre: ' + n + ', Padre: ' + f);
}

// "Nombre: Mike Smith, Padre: Harry Smith"
// "Nombre: Tom Jones, Padre: Richard Jones"
