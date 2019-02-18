const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const mongoose = require('mongoose')
const helper = require('./test_helper')



beforeEach(async () => {
  await Blog.deleteMany({})

  let blogObject = {}

  for (let i = 0; i < helper.initialBlogs.length; i++) {
    blogObject = new Blog(helper.initialBlogs[i])
    await blogObject.save()
  }
})

test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body.length).toBe(helper.initialBlogs.length)
})

test('a blog can be added', async () => {
  const newBlog = {
    title: "Dijkstra's New Blog about Dogs",
    author: "Edsger W. Dijkstra",
    url: "www.dog.com/dijkstra",
    likes: 300
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd.length).toBe(helper.initialBlogs.length + 1)
})

afterAll(() => {
  mongoose.connection.close()
})