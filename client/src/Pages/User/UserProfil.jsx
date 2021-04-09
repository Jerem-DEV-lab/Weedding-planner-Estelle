import React, { useContext }  from 'react'
import HeaderPage             from '../../Components/HeaderPage/HeaderPage'
import { UserContext }        from '../../Context/UserContext'
import { FaBell, FaEnvelope } from 'react-icons/fa'
import Button                 from '../../Components/Button/Button'
import { useTranslation }     from 'react-i18next'
import {
  Switch,
  Route,
  NavLink,
}                             from 'react-router-dom'
import ResumeProfil           from '../../Components/UserProfil/ResumeProfil'
import MessageProfil          from '../../Components/UserProfil/MessageProfil'
import ParamsAccount          from '../../Components/UserProfil/ParamsAccount'
import { useSelector }        from 'react-redux'

function RouterProfil () {
  return <>
    <Switch>
      <Route exact path="/profil/:userId">
        <ResumeProfil/>
      </Route>
      <Route exact path="/profil/:userId/messages">
        <MessageProfil/>
      </Route>
      <Route exact path="/profil/:userId/gestion-compte">
        <ParamsAccount/>
      </Route>
    </Switch>
  </>
}

function MenuProfil ({ userId = '' }) {
  const { t } = useTranslation()
  return <>
    <div className="menu-profil">
      <ul className="menu-profil-items">
        <li className="menu-profil-item">
          <NavLink to={`/profil/${userId}`} activeClassName='active' className="menu-profil-link">
            {t('resume_profil')}
          </NavLink>
        </li>
        <li className="menu-profil-item">
          <NavLink to={`/profil/${userId}/messages`} activeClassName='active' className="menu-profil-link">
            Messages
          </NavLink>
        </li>
        <li className="menu-profil-item">
          <NavLink to={`/profil/${userId}/gestion-compte`} activeClassName='active' className="menu-profil-link">
            {t('manage_account')}
          </NavLink>
        </li>
      </ul>
    </div>
  </>
}

const UserProfil = () => {
  const {userInfo} = useSelector(state => state.userReducers)
  return <>
    <HeaderPage nameImg="home.jpg"/>
    <HeaderProfil userInfo={userInfo}/>
    <RouterProfil/>
  </>
}

export default UserProfil

function HeaderProfil ({ userInfo = '' }) {
  const { t }       = useTranslation()
  const userContext = useContext(UserContext)
  return <>
    <div className="container-profil container-margin color-female">
      <div className="profil-info">
        <div className="profil-avatar">
          <img src={userInfo.userAvatar} alt=""/>
        </div>
        <div className="profil-name text-strong">{userInfo.lastName} {userInfo.firstName}</div>
        <div className="profil-address">{userInfo.address}</div>
        <div className="profil-postalCode">{userInfo.postalCode}</div>
        <div className="profil-phone">N ° : {userInfo.phone}</div>
        <Button isButton={false} label="Modifier vos informations" color="profil"
                link={`/profil/${userContext._id}/gestion-compte`}/>
      </div>
      <div className="profil-notif">
        <h2 className="text-strong welcome-profil">{t('welcome_message')} {userInfo.firstName}</h2>
        <div className="notif">
          <div className="icon">
            <FaBell/>
            <span className="number-notif"/>
          </div>
          <span>{t('new_promo_message')}</span>
        </div>
        <div className="notif">
          <div className="icon">
            <FaEnvelope/>
            <span className="number-notif"/>
          </div>
          
          <span>{t('new_promo_message')}</span>
        </div>
      </div>
    </div>
    <div className="container-margin">
      <MenuProfil userId={userInfo._id}/>
    </div>
  </>
}
