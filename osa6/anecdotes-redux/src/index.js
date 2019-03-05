import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import App from './App'
import anecdoteReducer, { initAnecdotes } from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import { Provider } from 'react-redux'
import anecdoteService from './services/anecdotes'
import thunk from 'redux-thunk'

anecdoteService.getAll().then(anecdotes =>
  store.dispatch(initAnecdotes(anecdotes))
)

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

const render = () => {
  ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)