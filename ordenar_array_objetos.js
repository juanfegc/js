var array = [
  {
    title: 'React vs Vue',
    author: 'carla',
    url: 'reactvsvue.io',
    likes: 0,
  },
  {
    title: 'React is easy',
    author: 'juanfer',
    url: 'reactjs.com',
    likes: 2,
  },
  {
    title: 'HTML and CSS',
    author: 'juanfer',
    url: 'html.com',
    likes: 1,
  },
  {
    title: 'styled components',
    author: 'juanfer',
    url: 'styledcomponents.com',
    likes: 4,
  },
  {
    title: 'ecommerce medusa-gastby',
    author: 'juanfer',
    url: 'medusa.com',
    likes: 3,
  },
]

console.log('DESORDENADO:')
console.log(array)

array.sort(function (a, b) {
  if (a.likes > b.likes) {
    return -1
  }
  if (a.likes < b.likes) {
    return 1
  }
  // a must be equal to b
  return 0
})

console.log('ORDENADO de Mayor a menor:')
console.log(array)

//---------------------------------------------------
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
]
console.log('DESORDENADO:')
console.log(items)
items.sort(function (a, b) {
  if (a.value > b.value) {
    return 1
  }
  if (a.value < b.value) {
    return -1
  }
  // a must be equal to b
  return 0
})
console.log('ORDENADO de menor a mayor:')
console.log(items)
