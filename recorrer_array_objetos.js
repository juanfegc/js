const products = [
    {
      "id": 6,
      "id_category_default": "8",
      "manufacturer_name": "Studio Design",
      "price": "11.900000",
      "name": "Mug The best is yet to come"
    },
    {
      "id": 7,
      "id_category_default": "8",
      "manufacturer_name": "Studio Design",
      "price": "11.900000",
      "name": "Mug The adventure begins"
    },
    {
      "id": 8,
      "id_category_default": "8",
      "manufacturer_name": "Studio Design",
      "price": "11.900000",
      "name": "Mug Today is a good day"
    },
    {
      "id": 9,
      "id_category_default": "8",
      "manufacturer_name": "Studio Design",
      "price": "18.900000",
      "name": "Mountain fox cushion"
    },
    {
      "id": 10,
      "id_category_default": "8",
      "manufacturer_name": "Studio Design",
      "price": "18.900000",
      "name": "Brown bear cushion"
    },
    {
      "id": 11,
      "id_category_default": "8",
      "manufacturer_name": "Studio Design",
      "price": "18.900000",
      "name": "Hummingbird cushion"
    },
    {
      "id": 15,
      "id_category_default": "8",
      "manufacturer_name": false,
      "price": "35.000000",
      "name": "Pack Mug + Framed poster"
    },
    {
      "id": 19,
      "id_category_default": "8",
      "manufacturer_name": "Studio Design",
      "price": "13.900000",
      "name": "Customizable mug"
    }
  ]

 
/*
console.log(products)
let array = products.map(product => {
    console.log(Number(product.price), typeof product.price )
    return product.price
})
 
console.log(array)
*/

console.log("---------- ARRAY IDs ----------")
let arrayid = products.map(product => {
    return Number(product.id)
})
console.log(arrayid)


console.log("---------- ASOCIATIONS IDs IMAGE ----------")
const asociations =[
  {
    "id": "19"
  },
  {
    "id": "22"
  }
]

const [id_producto, id_imagen] = asociations

console.log(id_producto, id_imagen)          // [3, 4 ,5] es impreso


console.log("---------- ARRAY PRODUCTOS ----------")

products.forEach((producto) => {
  producto.id_image = 0
})
/*
products.map((producto) => {
  producto.id_image = 0
})
*/
console.log(products[7])
console.log('id',products[7].id)
products[7].id_image = 22;
console.log('id_image',products[7].id_image)
  
console.log(products[7])