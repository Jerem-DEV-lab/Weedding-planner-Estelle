import React                            from 'react'
import ReactDOM                         from 'react-dom'
import App                              from './App'
import './Sass/style.scss'
import { applyMiddleware, createStore } from 'redux'
import rootReducer                      from './reducers'
import thunk                            from 'redux-thunk'
import { Provider }                     from 'react-redux'
import { composeWithDevTools }          from 'redux-devtools-extension'

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'))
