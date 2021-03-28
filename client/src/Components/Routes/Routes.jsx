import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Maintenance                                          from '../../Pages/Maintenance'
import LoginPage                                            from '../../Pages/Authentification/LoginPage'

const Routes = () => {
  const maintenance = false
  return <Router>
    {maintenance ?
     <>
       <Route path="/" exact component={Maintenance}/>
       <Redirect to="/"/>
     </> :
     <Switch>
       <Route path="/register" exact component={LoginPage}/>
       <Route path="/login" exact component={LoginPage}/>
       <Redirect to="/register"/>
     </Switch>}
  </Router>
}

export default Routes
