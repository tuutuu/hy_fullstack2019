import React from 'react';
import { voteAnecdote, addAnecdote } from './reducers/anecdoteReducer'

const App = ({ store }) => {
  const anecdotes = store.getState()
  
  const add = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    store.dispatch(addAnecdote(content))
  }

  const vote = (id) => {
    store.dispatch(voteAnecdote(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={add}>
        <input name="content" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App
