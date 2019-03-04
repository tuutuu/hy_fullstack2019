export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: id
  }
}

export const addAnecdote = (data) => {
  return {
    type: 'ADD',
    data
  }
}

export const initAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(a => a.id === id)

      console.log(anecdoteToChange)

      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )
    case 'ADD':
      const anecdoteObject = action.data
      return state.concat(anecdoteObject)
    default: return state
  }
}

export default anecdoteReducer