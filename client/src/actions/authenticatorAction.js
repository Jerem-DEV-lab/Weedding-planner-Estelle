import axios from 'axios'
export const LOGIN_USER_LOADING = 'LOGIN_USER_LOADING'
export const LOGIN_USER_ERROR   = 'LOGIN_USER_ERROR'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LANG_USER_PREF     = 'LANG_USER_PREF'

export const REGISTER_USER = 'REGISTER_USER'

export const loginUserLoading = () => {
  return {
    type: LOGIN_USER_LOADING
  }
}

export const changeLangPref   = (lang) => {
  return {
    type   : LANG_USER_PREF,
    payload: lang
  }
}
export const loginUserSuccess = (user, message) => {
  return {
    type   : LOGIN_USER_SUCCESS,
    payload: { user, message }
  }
}
export const loginUserError   = (err) => {
  return {
    type   : LOGIN_USER_ERROR,
    payload: err
  }
}

export const requestApiAuth = (data) => {
  return dispatch => {
    dispatch(loginUserLoading())
    axios.post('/login', data)
         .then(res => {
           dispatch(loginUserSuccess(res.data))
         })
         .catch(err => {
           dispatch(loginUserError(err.response.data.error))
         })
  }
}
