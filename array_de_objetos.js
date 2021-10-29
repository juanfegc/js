const blogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0,
    },
    {
      _id: '5a422a342b54a676234d17f8',
      title: 'React is easy',
      author: 'jaunfer',
      url: 'http://www.bioprox.es',
      likes: 3,
      __v: 0,
    },
]

console.log(blogs)
 

let array = blogs.map(blog => {
    console.log(Number(blog.likes), typeof blog.likes )
    return blog.likes
})
 
console.log(array)


const resultado = array.reduce((sum, current) => sum + current, 0)
console.log(resultado)


  
  