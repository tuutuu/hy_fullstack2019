import React from 'react';
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { voteNotification, clearNotification } from '../reducers/notificationReducer';

const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState().anecdotes.sort((a, b) => {
    if(a.content < b.content) { return -1 }
    if(a.content > b.content) { return 1 }
    return 0
  })

  const vote = (anecdote) => {
    store.dispatch(voteAnecdote(anecdote.id))
    store.dispatch(voteNotification(anecdote.content))
    setTimeout(() => {
      store.dispatch(clearNotification())
    }, 5000)
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
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList