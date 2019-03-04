const notificationAtStart = 'Nothing is wrong'

export const example = () => {
  return {
  
  }
}

const initialState = notificationAtStart

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {}
    default: return state
  }
}

export default notificationReducer