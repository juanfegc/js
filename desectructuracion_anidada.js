const asociations = [
  {
    id: '19',
  },
  {
    id: '22',
  },
]

const [ , id_image, ...rest] = asociations

console.log(id_image)   
console.log(id_image.id) 

let [,{id: id_image2}] = asociations

console.log(id_image2);       


console.log('------------- Desestructuración de arreglos y objetos anidados -----------');

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
    id: 19,
    id_category_default: '8',
    manufacturer_name: 'Studio Design',
    price: '13.900000',
    name: 'Customizable mug',
  },
]

let [{
    id: id_producto,
    price: price_product,
  }] = products

console.log(id_producto);
console.log(price_product);