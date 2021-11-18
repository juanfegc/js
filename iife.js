/*
IIFE: Inmediately Invoked Function Expression
  Self Executing Anonymous Funciton
  Self Execution Function
*/

//convertir esta funcion a iife
const sayHi = () => {
  console.log('hello world')
}

sayHi()

//hacer la expresion e invocarla inmeditamente
;(() => {
  console.log('hello iife')
})()

//las iife son utiles para async/await de fetch contra las api json
//(async () => {
//  await fetch('https://web.com/api/')
//})()

//o para crear un scoope con variables que no esten disponibles fuera del scoope {}
