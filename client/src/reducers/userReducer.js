import {
  LANG_USER_PREF,
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS
} from '../actions/authenticatorAction'

const initialState = {
  isLoading          : false,
  userIsLogged       : false,
  userInfo           : {},
  loginError         : '',
  loginSuccess       : '',
  registrationFail   : '',
  registrationSuccess: '',
  langPref           : 'FR_fr'
}

export default function userReducers (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_LOADING: {
      return { ...state, isLoading: true }
    }
    case LOGIN_USER_SUCCESS: {
      return {
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
    case LANG_USER_PREF:
      return {
        ...state,
        langPref: action.payload
      }
    default:
      return state
  }
}
