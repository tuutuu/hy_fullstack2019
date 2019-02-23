import React, { useState } from 'react'
import blogService from '../services/blogs'

const BlogForm = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: title,
      author: author,
      url: url
    }

    blogService
      .create(blogObject).then(returnedBlog => {
        props.setBlogs(props.blogs.concat(returnedBlog))
        setTitle('')
        setAuthor('')
        setUrl('')
      })
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addBlog}>
        <p>title:</p>
        <input
          value={title}
          onChange={handleTitleChange}
        />
        <p>author:</p>
        <input
          value={author}
          onChange={handleAuthorChange}
        />
        <p>url:</p>
        <input
          value={url}
          onChange={handleUrlChange}
        />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default BlogForm