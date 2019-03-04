import React from 'react';
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = ({ store }) => {

  const add = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    store.dispatch(addAnecdote(content))
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