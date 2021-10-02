const sum = (p1, p2) => { 
  console.log (p1) 
  console.log (p2) 
  return p1 + p2 
} 

const result = sum(1, 5)
console.log (result)

const square = p => {
  console.log(p)
  return p * p
}

const resultado = square(5)
console.log (resultado)

const square2 = p => p * p
const resultado2 = square2(5)
console.log (resultado2)

const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
// tSquared es ahora [1, 4, 9]
console.log (t)
console.log (tSquared)
