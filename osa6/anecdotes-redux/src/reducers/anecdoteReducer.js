import anecdoteService from '../services/anecdotes'

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const voted = { ...anecdote, votes: anecdote.votes + 1 }
    const data = await anecdoteService.update(voted)
    dispatch({
      type: 'VOTE',
      data
    })
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
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      return state
        .map(a => a.id !== action.data.id ? a : action.data)
    case 'ADD':
      return state.concat(action.data)
    default: return state
  }
}

export default anecdoteReducer