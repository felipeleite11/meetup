import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import './config/reactotronConfig'

import Routes from './routes'

import GlobalStyle from './styles/global'

import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </BrowserRouter>
      </Provider>
    )
  }
}
