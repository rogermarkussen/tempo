import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router5'
import Layout from './components/layout'

class App extends Component {
  render () {
    return (
      <Provider store={this.props.store} >
        <RouterProvider router={this.props.router}>
          <Layout />
        </RouterProvider>
      </Provider>
    )
  }
}
export default App
