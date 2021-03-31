import { combineReducers } from 'redux'
import userReducers        from './userReducer'
import contactReducers     from './contactReducers'

export default combineReducers(
  {
    userReducers,
    contactReducers,
  })
