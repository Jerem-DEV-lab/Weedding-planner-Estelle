import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Maintenance                                          from '../../Pages/Maintenance'
import LoginPage                                            from '../../Pages/Authentification/LoginPage'
import Home                                                 from '../../Pages/Home/Home'
import Contact                                              from '../../Pages/Contact/Contact'
import Wedding                                              from '../../Pages/Organization/Wedding'
import SecularCeremony                                      from '../../Pages/Organization/SecularCeremony'
import Evj                                                  from '../../Pages/Organization/Evj'

const Routes = () => {
  const maintenance = false
  return <Router>
    {maintenance ?
     <>
       <Route path="/" exact component={Maintenance}/>
       <Redirect to="/"/>
     </> :
     <Switch>
       <Route path={`/`} exact component={Home}/>
       <Route path={`/organisation/mariage`} exact component={Wedding}/>
       <Route path={`/organisation/evj`} exact component={Evj}/>
       <Route path={`/organisation/ceremonie-laique`} exact component={SecularCeremony}/>
       <Route path="/inscription" exact component={LoginPage}/>
       <Route path="/connexion" exact component={LoginPage}/>
       <Route path="/contact" exact component={Contact}/>
     </Switch>}
  </Router>
}

export default Routes
