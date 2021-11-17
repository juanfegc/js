
const response = {"":[{"id":"19"},{"id":"22"}],"errors":[{"code":61,"message":"This image does not exist on disk"}]}  
console.log(response);


console.log('------------- Desestructurar JSON error 500 -----------');

let {"":[{id: id_producto},
    {id: id_imagen}],
  } = response

console.log(id_producto);
console.log(id_imagen);
