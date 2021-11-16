async function showAvatar() {

  // leer nuestro JSON
  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  let user = await response.json();

  console.log({user})

  return user.name;
}

showAvatar();

  
  