import axios from 'axios'

export const CHANGE_USER_INFO_LOADING = 'CHANGE_USER_INFO_LOADING'
export const CHANGE_USER_INFO_ERROR   = 'CHANGE_USER_INFO_ERROR'
export const CHANGE_USER_INFO_SUCCESS = 'CHANGE_USER_INFO_SUCCESS'
export const CHANGE_PASSWORD_SUCCESS  = 'CHANGE_PASSWORD_SUCCESS'
export const CHANGE_PASSWORD_ERROR    = 'CHANGE_PASSWORD_ERROR'
export const CHANGE_PASSWORD_LOADING  = 'CHANGE_PASSWORD_LOADING'
export const RESET_EVENT_USER         = 'RESET_EVENT_USER'

export const changeInfoUserLoading = () => {
  return {
    type: CHANGE_USER_INFO_LOADING
  }
}

export const changeInfoUserError = (err) => {
  return {
    type   : CHANGE_USER_INFO_ERROR,
    payload: err
  }
}

export const changeInfoUserSuccess = (message) => {
  return {
    type   : CHANGE_USER_INFO_SUCCESS,
    payload: message
  }
}

export const requestApiChangeInfoUser = (data) => {
  return dispatch => {
    dispatch(changeInfoUserLoading())
    axios.post(`/user/changeInfo`, data, {
           withCredentials: true
         })
         .then(res => {
           dispatch(changeInfoUserSuccess(res.data.success))
         })
         .catch(err => {
           dispatch(changeInfoUserError(err.response.data))
         })
  }
}

export const changePasswordLoading = () => {
  return {
    type: 'CHANGE_PASSWORD_LOADING'
  }
}
export const changePasswordSuccess = (success) => {
  return {
    type   : 'CHANGE_PASSWORD_SUCCESS',
    payload: success
  }
}
export const changePasswordError   = (error) => {
  return {
    type   : 'CHANGE_PASSWORD_ERROR',
    payload: error
  }
}

export const requestApiChangePassword = (data) => {
  return dispatch => {
    dispatch(changePasswordLoading())
    axios.post('/user/changePassword', data)
         .then(res => {
           dispatch(changePasswordSuccess(res.data.success))
         })
         .catch(err => {
           dispatch(changePasswordError(err.response.data))
         })
  }
}

export const resetEventUser = () => {
  return {
    type: RESET_EVENT_USER
  }
}
