import axios from 'axios'

export const CHANGE_USER_INFO_LOADING = 'CHANGE_USER_INFO_LOADING'
export const CHANGE_USER_INFO_ERROR   = 'CHANGE_USER_INFO_ERROR'
export const CHANGE_USER_INFO_SUCCESS = 'CHANGE_USER_INFO_SUCCESS'

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

export const requestApiChangeInfoUser = (userId, data) => {
  return dispatch => {
    dispatch(changeInfoUserLoading())
    axios.post(`/user/update-info/${userId}`, data, {
           withCredentials: true,
           userId         : userId
         })
         .then(res => {
           dispatch(changeInfoUserSuccess(res.data))
         })
         .catch(err => {
           dispatch(changeInfoUserError(err.response.data))
         })
  }
}
