import * as React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, Store} from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducer'

import App from './App'

const store:  Store<any> = createStore(reducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)