import axios from 'axios'

export const GET_USER_LOADING = 'GET_USER_LOADING'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_ERROR   = 'GET_USER_ERROR'

export function setLoadingFetch (type) {
  return {
    type: type,
  }
}

export function setSuccessFetch (type, data) {
  return {
    type   : type,
    payload: data
  }
}

export function setErrorFetch (type, payload) {
  return {
    type   : type,
    payload: payload
  }
}

export const requestApiUsers = () => {
  return dispatch => {
    dispatch(setLoadingFetch(GET_USER_LOADING))
    axios.get('/admin/get-users')
         .then(res => {
           dispatch(setSuccessFetch(GET_USER_SUCCESS, res.data))
         })
         .catch(err => {
           dispatch(setErrorFetch(GET_USER_ERROR, err))
         })
  }
}
