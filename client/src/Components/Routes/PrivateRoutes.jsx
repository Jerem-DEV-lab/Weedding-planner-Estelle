import React, { useContext } from 'react'
import { Redirect, Route }   from 'react-router-dom'
import { UserContext }       from '../../Context/UserContext'

const PrivateRoutes = ({ component: Component, role, ...rest }) => {
  const { isLogged, roles } = useContext(UserContext)
  return <>
    {!isLogged || roles.includes(role) ? <Route {...rest} render={
      props => <Component {...rest} {...props} />
    }>
    </Route> : <Redirect to="/"/>}
  </>
}

export default PrivateRoutes
