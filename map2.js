const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

const content = parts.map(obj => obj.exercises)
console.log(content)
let num = content.reduce((previousValue, currentValue) => previousValue + currentValue)
console.log(num)

console.log((parts.map(obj => obj.exercises)).reduce((previousValue, currentValue) => previousValue + currentValue))