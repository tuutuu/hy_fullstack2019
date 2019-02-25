import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import  { useField } from './hooks'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [notification, setNotification] = useState(null)
  const [user, setUser] = useState(null)

  const username = useField('text')
  const password = useField('password')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value
      })

      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)
      username.reset()
      password.reset()
    } catch (exception) {
      setNotification('käyttäjätunnus tai salasana virheellinen')
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        käyttäjätunnus
        <input
          type={username.type}
          value={username.value}
          name="Username"
          onChange={username.onChange}
        />
      </div>
      <div>
        salasana
        <input
          type={password.type}
          value={password.value}
          name="Password"
          onChange={password.onChange}
        />
      </div>
      <button type="submit">kirjaudu</button>
    </form>
  )

  const listBlogs = () => (
    <div>
      <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )

  const blogFormRef = React.createRef()

  return (
    <div>
      <Notification message={notification} />

      <div>
        {user === null
          ? loginForm()
          : <div>
            <p>{user.name} logged in</p>
            <button onClick={() => window.localStorage.clear()}>
                logout
            </button>
            {listBlogs()}
            <Togglable buttonLabel='new blog' ref={blogFormRef}>
              <BlogForm blogs={blogs} setBlogs={setBlogs} setNotification={setNotification}/>
            </Togglable>
          </div>
        }
      </div>
    </div>
  )
}

export default App