import React, { useState }                                  from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Maintenance                                          from '../../Pages/Maintenance'
import Home                 from '../../Pages/Home/Home'
import Wedding              from '../../Pages/Organization/Wedding'
import SecularCeremony      from '../../Pages/Organization/SecularCeremony'
import Evj                  from '../../Pages/Organization/Evj'
import UserProfil           from '../../Pages/User/UserProfil'
import About                from '../../Pages/About/About'
import BabyShower           from '../../Pages/BabyShower/BabyShower'
import ModalAuth            from '../ModalAuth'
import { ModalAuthContext } from '../../Context/ModalAuth'
import IndexDashboardAdmin  from '../../Admin/Pages/IndexDashboardAdmin'
import PrivateRoutes        from './PrivateRoutes'
import Contact              from '../../Pages/Contact/Contact'

const Routes = () => {
  const maintenance     = false
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  return <ModalAuthContext.Provider value={{ contextModal: show, changeContextModal: () => setShow(!show) }}>
    <Router>
      {show && <>
        <div className={`overlay-modal ${show ? 'overlay-modal-visible' : ''}`} onClick={handleClose}/>
        <ModalAuth openModal={show} closeModal={handleClose}/>
      </>}
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
         <Route path={'/a-propos'} exact component={About}/>
         <Route path={'/baby-shower'} exact component={BabyShower}/>
         <PrivateRoutes path={'/admin*'} role="ROLE_ADMIN" exact component={IndexDashboardAdmin}/>
         <Route path="/contact" exact component={Contact}/>
         <Redirect to={'/'}/>
       </Switch>}
    </Router>
  </ModalAuthContext.Provider>
}

export default Routes
