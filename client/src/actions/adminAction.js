import axios from 'axios'

export const RESET_EVENTS_ACTION          = 'RESET_EVENTS_ACTION'
export const GET_USER_LOADING             = 'GET_USER_LOADING'
export const GET_USER_SUCCESS             = 'GET_USER_SUCCESS'
export const GET_USER_ERROR               = 'GET_USER_ERROR'
export const CHANGE_PRICE_FORMULA_LOADING = 'CHANGE_PRICE_FORMULA_LOADING'
export const CHANGE_PRICE_FORMULA_SUCCESS = 'CHANGE_PRICE_FORMULA_SUCCESS'
export const CHANGE_PRICE_FORMULA_ERROR   = 'CHANGE_PRICE_FORMULA_ERROR'
export const DELETE_FORMULA_LOADING       = 'DELETE_FORMULA_LOADING'
export const DELETE_FORMULA_SUCCESS       = 'DELETE_FORMULA_SUCCESS'
export const DELETE_FORMULA_ERROR         = 'DELETE_FORMULA_ERROR'
export const GET_FORMULA_LOADING          = 'GET_FORMULA_LOADING'
export const GET_FORMULA_ERROR            = 'GET_FORMULA_ERROR'
export const GET_FORMULA_SUCCESS          = 'GET_FORMULA_SUCCESS'

export const getUserLoading  = () => {
  return {
    type: GET_USER_LOADING
  }
}
export const getUserSuccess  = (users) => {
  return {
    type   : GET_USER_SUCCESS,
    payload: users
  }
}
export const getUserError    = (err) => {
  return {
    type   : GET_USER_SUCCESS,
    payload: err
  }
}
export const requestApiUsers = () => {
  return dispatch => {
    dispatch(getUserLoading())
    axios.get('/admin/get-users')
         .then(res => {
           dispatch(getUserSuccess(res.data.users))
         })
         .catch(err => {
           dispatch(getUserError(err))
         })
  }
}

export const changePriceLoading           = () => {
  return {
    type: CHANGE_PRICE_FORMULA_LOADING
  }
}
export const changePriceSuccess           = (message) => {
  return {
    type   : CHANGE_PRICE_FORMULA_SUCCESS,
    payload: message
  }
}
export const changePriceError             = (err) => {
  return {
    type   : CHANGE_PRICE_FORMULA_ERROR,
    payload: err
  }
}
export const requestApiChangePriceFormula = (formulaId, newPrice) => {
  return dispatch => {
    dispatch(changePriceLoading())
    axios.patch(`/admin/update/formule-price/${formulaId}`, newPrice)
         .then(res => {
           dispatch(changePriceSuccess(res.data.success))
           setTimeout(() => {
             dispatch(resetEvent())
           }, 2000)
         })
         .catch(err => {
           console.log(err.response.data.errors)
           dispatch(changePriceError(err.response.data.errors))
         })
  }
}

export const deleteFormulaLoading    = () => {
  return {
    type: DELETE_FORMULA_LOADING
  }
}
export const deleteFormulaError      = (err) => {
  return {
    type   : DELETE_FORMULA_ERROR,
    payload: err
  }
}
export const deleteFormulaSuccess    = (success, docsId) => {
  return {
    type   : DELETE_FORMULA_SUCCESS,
    payload: { success, docsId }
  }
}
export const requestApiDeleteFormula = (formulaId) => {
  return dispatch => {
    dispatch(deleteFormulaLoading())
    axios.delete(`/admin/delete/formule/${formulaId}`)
         .then(res => {
           dispatch(deleteFormulaSuccess(res.data.success, formulaId))
/*           setTimeout(() => {
             dispatch(resetEvent())
           }, 2000)*/
         })
         .catch(err => dispatch(deleteFormulaError(err.response.data.errors)))
  }
}

export const getFormulaLoading = () => {
  return {
    type: GET_FORMULA_LOADING
  }
}

export const getFormulaSuccess = (formulas) => {
  return {
    type   : GET_FORMULA_SUCCESS,
    payload: formulas
  }
}

export const getFormulaError   = (error) => {
  return {
    type   : GET_FORMULA_ERROR,
    payload: error
  }
}
export const requestApiFormula = () => {
  return dispatch => {
    dispatch(getFormulaLoading())
    axios.get('/admin/get/formule')
         .then(res => dispatch(getFormulaSuccess(res.data.docs)))
         .catch(err => dispatch(getFormulaError(err.response.data.errors)))
  }
}

export const resetEvent = () => {
  return {
    type: RESET_EVENTS_ACTION
  }
}
