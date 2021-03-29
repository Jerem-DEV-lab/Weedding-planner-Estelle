import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from '../actions/authenticatorAction'

const initialState = {
  isLoading          : false,
  userIsLogged       : false,
  userInfo           : {},
  loginError         : '',
  loginSuccess       : '',
  registrationFail   : '',
  registrationSuccess: ''
}

export default function userReducers (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_LOADING: {
      return { ...state, isLoading: true }
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        isLoading          : false,
        userInfo           : action.payload.user,
        userIsLogged       : true,
        loginSuccess       : action.payload.message,
        loginError         : '',
        registrationFail   : '',
        registrationSuccess: ''
      }
    }
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading          : false,
        userInfo           : {},
        userIsLogged       : false,
        loginError         : action.payload,
        loginSuccess       : '',
        registrationFail   : '',
        registrationSuccess: ''
        
      }
    default:
      return state
  }
}
