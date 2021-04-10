import React                    from 'react'
import { useDispatch }          from 'react-redux'
import { requestApiLogoutUser } from '../../actions/authenticatorAction'
import { FaArrowRight }         from 'react-icons/fa'

const Logout = () => {
  const dispatch = useDispatch()
  
  return <>
    <button type="button" onClick={() => dispatch(requestApiLogoutUser())} ><FaArrowRight/>Déconnexion</button>
  </>
}

export default Logout
