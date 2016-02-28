import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router5'
import createRouter from './create-router'
import configureStore from './store/configure-store'
import getInitialState from './get-initial-state'
import Main from './components/main'

const router = createRouter()
const initialState = getInitialState()

router.start((err, state) => {
  if (err) return
  initialState.router = { route: state }
  const store = configureStore(router, initialState)

  const root = (
    <Provider store={store} >
      <RouterProvider router={router}>
        <Main />
      </RouterProvider>
    </Provider>
    )
  render(root, document.getElementById('root'))
})
