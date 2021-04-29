import React, { useContext, useState } from 'react'
import { Link, NavLink }               from 'react-router-dom'
import { FaBars, FaCaretDown, FaUser } from 'react-icons/fa'
import Dropdown                        from '../Dropdown/Dropdown'
import { useTranslation }              from 'react-i18next'
import { ModalAuthContext }            from '../../Context/ModalAuth'
import { useSelector }                 from 'react-redux'

const Nav = () => {
  const modalContext = useContext(ModalAuthContext)
  const userContext  = useSelector(state => state.userReducers)
  const { t }                   = useTranslation()
  const [click, setClick]       = useState(false)
  const [openDrop, setOpenDrop] = useState(false)
  const handleClick             = () => setClick(!click)
  const testDrop                = () => {
    setOpenDrop(!openDrop)
  }
  const sublink                 = [
    {
      label: t('Weeding'),
      url  : '/organisation/mariage',
      cName: 'dropdown-link'
    },
    {
      label: t('secularCeremony'),
      url  : '/organisation/ceremonie-laique',
      cName: 'dropdown-link'
    },
    {
      label: t('evjg'),
      url  : '/organisation/evj',
      cName: 'dropdown-link'
    },
    {
      label: t('babyShower'),
      url  : '/baby-shower',
      cName: 'dropdown-link'
    },
  ]
  const roleUser                = userContext.userInfo.roles
  return <>
    <nav className="navbar">
      <div className={`overlay-nav ${click ? 'active' : ''}`} onClick={handleClick}/>
      <Link to="/" className="navbar-logo">
        <img src="/assets/logo.png" alt="Logo de côté campagne" height={50} width={50}/>
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <FaBars size={25}/>
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-links" to="/">{t('home')}</NavLink>
        </li>
        <li
          className={`nav-item dropdown ${openDrop ? 'active' : ''} `}
          onClick={testDrop}
        >
          <div
            className={`nav-links `}
          >
            {t('organization')} <FaCaretDown/>
          </div>
          {<Dropdown items={sublink}/>}
        </li>
        <li className={`nav-item dropdown ${openDrop ? 'active' : ''} `}
            onClick={testDrop}
        >
          <div className={`nav-links `}>
            {t('secularCeremony')} <FaCaretDown/>
          </div>
          {<Dropdown items={sublink}/>}
        </li>
        <li
          className={`nav-item dropdown ${openDrop ? 'active' : ''} `}
          onClick={testDrop}>
          <div
            className={`nav-links `}>
            {t('workshop')} <FaCaretDown/>
          </div>
          {<Dropdown items={sublink}/>}
        </li>
        <li
          className="nav-item"
        >
          <NavLink to={'/gallery'} className="nav-links">{t('gallery')}</NavLink>
        </li>
        <li
          className="nav-item"
        >
          <NavLink to={'/a-propos'} className="nav-links">{t('about')}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/contact'} className="nav-links">{t('contact')}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/avis'} className="nav-links">{t('opinion')}</NavLink>
        </li>
        {roleUser && roleUser.includes('ROLE_ADMIN') &&
         <li className="nav-item">
           <NavLink to={'/admin/users'} className="nav-links">Administration</NavLink>
         </li>
        }
      </ul>
      {!userContext.isLogged ?
       <div className="navbar-account">
         <FaUser onClick={modalContext.changeContextModal}/>
         <span>
           <Link to="/connexion">{t('login')} / {t('register')}</Link>
         </span>
       </div> : <div className="navbar-account connected">
         <div className="navbar-avatar">
           <Link to={`/profil/${userContext.userInfo._id}`}>
             <img src={`${userContext.userInfo.userAvatar}`} alt=""/>
           </Link>
         </div>
         <span> <Link
           to={`/profil/${userContext.userInfo._id}`}>{userContext.userInfo.firstName} {userContext.userInfo.lastName}</Link>
         </span>
       </div>}
    </nav>
  </>
}

export default Nav
