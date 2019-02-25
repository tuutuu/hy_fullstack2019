import React, { useState } from 'react'
import blogService from '../services/blogs'
import PropTypes from 'prop-types'

const BlogForm = ({
    blogs,
    setBlogs,
    setNotification
  }) => {
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

    setNotification(
      `New blog ${title} by ${author} added`
    )
      setTimeout(() => {
        setNotification(null)
      }, 5000)

    blogService
      .create(blogObject).then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
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

BlogForm.propTypes = {
  blogs: PropTypes.array.isRequired,
  setBlogs: PropTypes.func.isRequired,
  setNotification: PropTypes.func
}

export default BlogForm