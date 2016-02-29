import { createStore, applyMiddleware, compose } from 'redux'
import { router5Middleware } from 'redux-router5'
import rootReducer from '../reducers'

export default function configureStore (router, initialState = {}) {
  const finalCreateStore = compose(
    applyMiddleware(router5Middleware(router)),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f)
  const store = createStore(rootReducer, initialState, finalCreateStore)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }
  window.store = store
  return store
}
