const notificationAtStart = ''

export const voteNotification = (anecdote) => {
  return {
    type: 'NOTIFY_VOTE',
    data: {
      anecdote: anecdote
    }
  }
}

export const addNotification = (anecdote) => {
  return {
    type: 'NOTIFY_ADD',
    data: {
      anecdote: anecdote
    }
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR'
  }
}

const initialState = notificationAtStart

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NOTIFY_VOTE':
      return `You voted '${action.data.anecdote}'`
    case 'NOTIFY_ADD':
      return `You added anecdote: '${action.data.anecdote}'`
    case 'CLEAR':
      return ''
    default: return state
  }
}

export default notificationReducer