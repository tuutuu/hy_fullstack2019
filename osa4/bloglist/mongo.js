const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://tuure:${password}@bloglist-sfr1f.mongodb.net/blogs?retryWrites=true`

/*
const url = 
  `mongodb+srv://tuure:${password}@bloglist-sfr1f.mongodb.net/test?retryWrites=true`
*/

console.log(url)

mongoose.connect(url, { useNewUrlParser: true })

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

if (process.argv.length < 7) {
  console.log('Give arguments: title, author, url, likes')
} else {
  const title = process.argv[3]
  const author = process.argv[4]
  const blogUrl = process.argv[5]
  const likes = process.argv[6]
  const blog = new Blog({ title, author, blogUrl, likes })
  blog.save().then(response => {
    console.log(`lisätään blogi ${title} ${author} ${blogUrl} ${likes}`)
    mongoose.connection.close()
  })
}
