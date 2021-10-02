const t = [1, -1, 3]

t.push(5)

console.log(t.length) // Se imprime 4 
console.log(t [1]) // -1 es impreso

t.forEach( value => {
  console.log (value) // se imprimen los números 1, -1, 3, 5, cada uno en la línea propia
})