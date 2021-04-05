import React                            from 'react'
import ReactDOM                         from 'react-dom'
import App                              from './App'
import './Sass/style.scss'
import { applyMiddleware, createStore } from 'redux'
import rootReducer                      from './reducers'
import thunk                            from 'redux-thunk'
import { Provider }                     from 'react-redux'
import { composeWithDevTools }          from 'redux-devtools-extension'
import i18n                             from 'i18next'
import { initReactI18next }             from 'react-i18next'
import LanguageDetector                 from 'i18next-browser-languagedetector'
import HttpApi                          from 'i18next-http-backend'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
          supportedLngs: ['en', 'fr'],
          fallbackLng  : 'fr',
          detection    : {
            order : ['cookie', 'localStorage', 'sessionStorage', 'htmlTag'],
            caches: ['cookie']
          },
          backend      : {
            loadPath: '/locales/{{lng}}/translation.json'
          },
          react        : { useSuspense: false }
        })
const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'))
