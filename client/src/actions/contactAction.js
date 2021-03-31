import axios from 'axios'

export const CONTACT_LOADING = 'CONTACT_LOADING'
export const CONTACT_ERROR   = 'CONTACT_ERROR'
export const CONTACT_SUCCESS = 'CONTACT_SUCCESS'

export const contactLoading = () => {
  return {
    type: CONTACT_LOADING
  }
}

export const contactError   = (error) => {
  return {
    type   : CONTACT_ERROR,
    payload: error
  }
}
export const contactSuccess = (message) => {
  return {
    type   : CONTACT_SUCCESS,
    payload: message
  }
}

export const requestApiContact = (data) => {
  return dispatch => {
    dispatch(contactLoading())
    axios.post('/contact', data)
         .then(res => {
           dispatch(contactSuccess(res.data.message))
         })
         .catch(err => {
           dispatch(contactError(err.response))
         })
  }
}
