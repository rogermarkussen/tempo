import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router5'
import createRouter from './create-router'
import configureStore from './store/configure-store'
import getInitialState from './get-initial-state'
import Layout from './components/layout'

const router = createRouter()
getInitialState((is) => {
  const initialState = is

  router.start((err, state) => {
    if (err) return
    initialState.router = { route: state }
    const store = configureStore(router, initialState)

    const root = (
      <Provider store={store} >
        <RouterProvider router={router}>
          <Layout />
        </RouterProvider>
      </Provider>
      )
    render(root, document.getElementById('root'))
  })
})
