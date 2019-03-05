import React from 'react';
import { connect } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { voteNotification, clearNotification } from '../reducers/notificationReducer';

const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes.sort((a, b) => {
    if(a.content < b.content) { return -1 }
    if(a.content > b.content) { return 1 }
    return 0
  })

  const vote = (id) => {
    const voted = anecdotes.find(a => a.id === id)
    props.voteAnecdote(voted)
    props.voteNotification(voted.content)
    setTimeout(() => {
      props.clearNotification()
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    notification: state.notification,
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  voteNotification,
  clearNotification
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList

