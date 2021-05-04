import React, { useState }                                  from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Maintenance                                          from '../../Pages/Maintenance'
import Home                                                 from '../../Pages/Home/Home'
import Wedding                                              from '../../Pages/Organization/Wedding'
import SecularCeremony                                      from '../../Pages/Organization/SecularCeremony'
import Evj                                                  from '../../Pages/Organization/Evj'
import UserProfil                                           from '../../Pages/User/UserProfil'
import About                from '../../Pages/About/About'
import BabyShower           from '../../Pages/Organization/BabyShower'
import { ModalAuthContext } from '../../Context/ModalAuth'
import IndexDashboardAdmin                                  from '../../Admin/Pages/IndexDashboardAdmin'
import PrivateRoutes                                        from './PrivateRoutes'
import Contact                                              from '../../Pages/Contact/Contact'
import Rating                                               from '../../Pages/Rating/Rating'
import Gallery                                              from '../../Pages/Gallery/Gallery'
import Login                                                from '../../Pages/Authentification/Login'
import Register                                             from '../../Pages/Authentification/Register'

const Routes = () => {
  const maintenance     = false
  const [show, setShow] = useState(false)
  return <ModalAuthContext.Provider value={{ contextModal: show, changeContextModal: () => setShow(!show) }}>
    <Router>
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
         <Route
           path={['/profil/:userId', '/profil/:userId/', '/profil/:userId/messages', '/profil/:userId/gestion-compte']}
           exact component={UserProfil}/>
         <Route path={'/galerie'} exact component={Gallery}/>
         <Route path={'/avis'} exact component={Rating}/>
         <Route path={'/a-propos'} exact component={About}/>
         <Route path={'/baby-shower'} exact component={BabyShower}/>
         <Route path={'/connexion'} exact component={Login}/>
         <Route path={'/inscription'} exact component={Register}/>
         <PrivateRoutes path={'/admin*'} role="ROLE_ADMIN" exact component={IndexDashboardAdmin}/>
         <Route path="/contact" exact component={Contact}/>
         <Redirect to={'/'}/>
       </Switch>}
    </Router>
  </ModalAuthContext.Provider>
}

export default Routes
