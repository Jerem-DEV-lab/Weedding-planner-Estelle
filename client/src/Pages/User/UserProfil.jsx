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
  const userContext = useContext(UserContext)
  return <>
    <HeaderPage nameImg="home.jpg"/>
    <HeaderProfil userAvatar={userContext.userAvatar} userId={userContext._id}/>
    <RouterProfil />
  </>
}

export default UserProfil

function HeaderProfil ({ userAvatar, userId }) {
  const { t } = useTranslation()
  return <>
    <div className="container-profil container-margin color-female">
      <div className="profil-info">
        <div className="profil-avatar">
          <img src={userAvatar} alt=""/>
        </div>
        <div className="profil-name text-strong">Sandrine Dupont</div>
        <div className="profil-address">18 route du mariage</div>
        <div className="profil-postalCode">82 150 Bordeaux</div>
        <div className="profil-phone">N ° : 06.00.00.00.00</div>
        <Button isButton={false} label="Modifier vos informations" color='profil'/>
      </div>
      <div className="profil-notif">
        <h2 className="text-strong welcome-profil">{t('welcome_message')} Sandrine</h2>
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
      <MenuProfil userId={userId}/>
    </div>
  </>
}
