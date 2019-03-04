import React from 'react';
import { addAnecdote } from '../reducers/anecdoteReducer'
import { addNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({ store }) => {

  const add = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    store.dispatch(addAnecdote(content))
    store.dispatch(addNotification(content))
    setTimeout(() => {
      store.dispatch(clearNotification())
    }, 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={add}>
        <input name="content" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm