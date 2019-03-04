import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { addNotification, clearNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {

  const add = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    const newAnecdote = await anecdoteService.createNew(content)
    props.addAnecdote(newAnecdote)
    props.addNotification(content)
    setTimeout(() => {
      props.clearNotification()
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    notification: state.notification,
  }
}

const mapDispatchToProps = {
  addAnecdote,
  addNotification,
  clearNotification
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm