import axios from 'axios'

export const ADD_RATING_SUCCESS = 'ADD_RATING_SUCCESS'
export const ADD_RATING_ERRORS  = 'ADD_RATING_ERRORS'
export const ADD_RATING_LOADING = 'ADD_RATING_LOADING'

export const addRatingLoading    = () => {
  return {
    type: ADD_RATING_LOADING
  }
}
export const addRatingSuccess    = (success) => {
  return {
    type   : ADD_RATING_SUCCESS,
    payload: success
  }
}
export const addRatingError      = (errors) => {
  return {
    type   : ADD_RATING_ERRORS,
    payload: errors
  }
}
export const requestApiAddRating = (data) => {
  return dispatch => {
    dispatch(addRatingLoading())
    axios.post('/rating', data)
         .then(res => {
           dispatch(addRatingSuccess(res.data.success))
         })
         .catch(err => {
           dispatch(addRatingError(err.response.errors))
         })
  }
}
