import React                    from 'react'
import { useDispatch }          from 'react-redux'
import { requestApiLogoutUser } from '../../actions/authenticatorAction'
import { FaArrowRight }         from 'react-icons/fa'
import { useHistory }           from 'react-router-dom'

const Logout = () => {
  const dispatch   = useDispatch()
  const history    = useHistory()
  const logoutUser = () => {
    dispatch(requestApiLogoutUser())
    history.push('/')
  }
  return <>
    <button type="button" onClick={logoutUser}><FaArrowRight/>Déconnexion</button>
  </>
}

export default Logout
