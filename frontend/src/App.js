import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from './routes'

import GlobalStyle from './styles/global'

import './config/reactotronConfig'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  )
}

export default App
