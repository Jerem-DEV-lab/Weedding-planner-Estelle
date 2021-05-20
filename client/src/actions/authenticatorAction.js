import axios from 'axios'

export const LOGIN_USER_LOADING    = 'LOGIN_USER_LOADING'
export const LOGIN_USER_ERROR      = 'LOGIN_USER_ERROR'
export const LOGIN_USER_SUCCESS    = 'LOGIN_USER_SUCCESS'
export const REGISTER_USER_LOADING = 'REGISTER_USER_LOADING'
export const REGISTER_USER_ERROR   = 'REGISTER_USER_ERROR'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const LANG_USER_PREF        = 'LANG_USER_PREF'
export const LOGOUT_USER           = 'LOGOUT_USER'

export const loginUserLoading = () => {
  return {
    type: LOGIN_USER_LOADING
  }
}

export const changeLangPref       = (lang) => {
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

export const logoutUserSuccess    = () => {
  return {
    type: LOGOUT_USER
  }
}
export const requestApiLogoutUser = () => {
  return dispatch => {
    axios.get('/logoutUser')
         .then(() => {
           dispatch(logoutUserSuccess())
         })
         .catch(err => console.log(err))
  }
}

export const requestApiAuth = (data) => {
  return dispatch => {
    dispatch(loginUserLoading())
    axios.post('/login', data)
         .then(res => {
           dispatch(loginUserSuccess(res.data, res.data.message))
         })
         .catch(err => {
           dispatch(loginUserError(err.response.data.error))
         })
  }
}

export const registerLoading = () => {
  return {
    type: REGISTER_USER_LOADING
  }
}

export const registerSuccess    = (success) => {
  return {
    type   : REGISTER_USER_SUCCESS,
    payload: success
  }
}
export const registerErrors     = (errors) => {
  return {
    type   : REGISTER_USER_ERROR,
    payload: errors
  }
}
export const requestApiRegister = (data) => {
  return dispatch => {
    dispatch(registerLoading())
    axios.post('/register', data)
         .then(res => {
           dispatch(registerSuccess(res.data.message))
         })
         .catch(err => {
           dispatch(registerErrors(err.response.data))
         })
  }
}
