import reducers from 'reducers'
import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default () => createStore(
  combineReducers(
    Object.assign({}, reducers, {
      routing: routerReducer
    })
  )
)