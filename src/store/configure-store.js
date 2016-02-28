import { createStore, applyMiddleware } from 'redux'
import { router5Middleware } from 'redux-router5'
import rootReducer from '../reducers'

export default function configureStore (router, initialState = {}) {
  const finalCreateStore = applyMiddleware(router5Middleware(router))(createStore)
  const finalStore = finalCreateStore(rootReducer, initialState)
  window.store = finalStore
  return finalStore
}
