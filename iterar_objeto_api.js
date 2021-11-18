const response = {
  products: [
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
  ],
  profiles: {
    user: [],
  },
  images: [],
}

//opcion 1: obtener la key y ya acceder como queramos
console.log('#################### Object.keys() ####################')
Object.keys(response).map(key => {
  const value = response[key]
  console.log(key, '->', value)
})

//opcion 2: obtener un array con los valores
console.log('#################### Object.values() ####################')
const values = Object.values(response)
console.log(values)

//opcion 3: obtener un array con la clave en la primera posicion y el valor en la segunda
console.log('#################### Object.entries() ####################')
console.log(Object.entries(response))
console.log('-----------------------------')
const entries = Object.entries(response).map(entrie => {
  const [key, value] = entrie
  console.log({ key, value })
})
