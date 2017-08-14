import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './semantic/dist/semantic.min.css'
import './index.css'

import App from './App'
import store from './store'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContextProvider } from 'react-dnd'

ReactDOM.render(
  <DragDropContextProvider backend={HTML5Backend}>
    <Provider store={store}>
      <App />
    </Provider>
  </DragDropContextProvider>,
  document.getElementById('root')
)
