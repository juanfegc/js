//ejemplo de promesa que cumple una y diera un error al recuperar algun dato con fetch en otra
//continua para que puedas controlarla no como el Promise.all que petaria con un rejected
Promise.allSettled([
  Promise.resolve(22),
  Promise.reject(new Error('esto es un error')),
  new Promise(resolve => setTimeout(() => resolve(33), 100)),
]).then(values => {
  console.log(values)

  //extraer valores
  const [
    { value: firsPromiseValue },
    { value: secondPromiseValue },
    { value: thirdPromiseValue },
  ] = values

  console.log('desectructuracion para extraer valores -> ', {
    firsPromiseValue,
    secondPromiseValue,
    thirdPromiseValue,
  })
})
