import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Maintenance                                          from '../../Pages/Maintenance'
import LoginPage                                            from '../../Pages/Authentification/LoginPage'
import Home                                                 from '../../Pages/Home/Home'
import { useSelector }                                      from 'react-redux'
import Contact                                              from '../../Pages/Contact/Contact'

const Routes = () => {
  const { langPref } = useSelector(state => state.userReducers)
  const paramLang = window.location.href
  const langEN    = paramLang.split('http://localhost:3000')[1].includes('/en/')
  const maintenance = false
  return <Router>
    {maintenance ?
     <>
       <Route path="/" exact component={Maintenance}/>
       <Redirect to="/"/>
     </> :
     langPref && langPref === 'EN_en' || langEN ?
     <Switch>
       <Route path={`/en/`} exact component={Home}/>
       <Route path="/en/register" exact component={LoginPage}/>
       <Route path="/en/login" exact component={LoginPage}/>
       <Route path="/en/contact" exact component={Contact}/>
       {<Redirect to={`/en/`}/>}
     </Switch> :
     <Switch>
       <Route path={`/fr/`} exact component={Home}/>
       <Route path="/fr/register" exact component={LoginPage}/>
       <Route path="/fr/login" exact component={LoginPage}/>
       <Route path="/fr/contact" exact component={Contact}/>
       {<Redirect to={`/fr/`}/>}
     </Switch>}
  </Router>
}

export default Routes
