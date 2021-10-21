let persons = [
  { 
      id: 1,
      name: "Arto Hellas", 
      number: "040-123456"
      
    },
    { 
      id: 2,
      name: "Ada Lovelace", 
      number: "39-44-5323523"
    },
    { 
      id: 3,
      name: "Dan Abramov", 
      number: "12-43-234345"
      
    },
    { 
      id: 4,
      name: "Mary Poppendieck", 
      number: "39-23-6423122"
      
    }
]

/*
array1  = persons.map(p => p.name )
console.log(array1)

const found = array1.find(element => element === "Dan Abramov")

console.log(found)
console.log(found!=undefined)
*/

//const found1 = persons.find(element => element.name === "Dan Abramov")

const found = persons.find(({name}) => name === "Dan Abramov")
console.log(found)
console.log(found!=undefined)