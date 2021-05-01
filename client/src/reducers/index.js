import { combineReducers } from 'redux'
import userReducers        from './userReducer'
import contactReducers     from './contactReducers'
import adminReducers       from './adminReducers'
import ratingReducers     from './ratingsReducers'

export default combineReducers(
  {
    userReducers,
    contactReducers,
    adminReducers,
    ratingReducers
  })
