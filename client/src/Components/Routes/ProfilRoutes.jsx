import React, { useContext } from 'react'
import { UserContext }       from '../../Context/UserContext'
import { Redirect, Route }   from 'react-router-dom'

const ProfilRoutes = ({ component: Component, ...rest }) => {
  const { isLogged } = useContext(UserContext)
  
  return <>
    {isLogged ? <Route {...rest} render={
      props => <Component {...rest} {...props} />
    }>
    </Route> : <Redirect to="/"/>}
  </>
}

export default ProfilRoutes
