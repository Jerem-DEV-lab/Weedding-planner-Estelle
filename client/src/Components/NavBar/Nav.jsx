import React, { useContext, useState } from 'react'
import { Link, NavLink }               from 'react-router-dom'
import { FaBars, FaCaretDown, FaUser } from 'react-icons/fa'
import Dropdown                        from '../Dropdown/Dropdown'
import { UserContext }                 from '../../Context/UserContext'
import { useTranslation }              from 'react-i18next'
import i18next                         from 'i18next'

const Nav = () => {
  const languages = [
    {
      code        : 'fr',
      name        : 'Français',
      country_code: 'fr',
    },
    {
      code        : 'en',
      name        : 'English',
      country_code: 'gb'
    }
  ]
  const { t }                   = useTranslation()
  const [click, setClick]       = useState(false)
  const [openDrop, setOpenDrop] = useState(false)
  const userContext             = useContext(UserContext)
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
  return <>
    <nav className="navbar">
      <div className={`overlay-nav ${click ? 'active' : ''}`} onClick={handleClick}/>
      <Link to="/" className="navbar-logo">
        <img src="/assets/logo.png" alt="Logo de côté campagne" height={50} width={50}/>
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <FaBars size={25}/>
      </div>
      {languages.map((l, index) => (
        <button className="nav-lang" key={index} onClick={() => i18next.changeLanguage(l.code)}>{l.code}</button>))}
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
        <li
          className={`nav-item dropdown ${openDrop ? 'active' : ''} `}
          onClick={testDrop}
        >
          <div
            className={`nav-links `}
          >
            {t('floralScenography')} <FaCaretDown/>
          </div>
          {<Dropdown items={sublink}/>}
        </li>
        <li
          className={`nav-item dropdown ${openDrop ? 'active' : ''} `}
          onClick={testDrop}
        >
          <div
            className={`nav-links `}
          >
            {t('workshop')} <FaCaretDown/>
          </div>
          {<Dropdown items={sublink}/>}
        </li>
        <li
          className="nav-item"
          onClick={testDrop}
        >
          <NavLink to={'/gallery'} className="nav-links">{t('gallery')}</NavLink>
        </li>
        <li
          className="nav-item"
          onClick={testDrop}
        >
          <NavLink to={'/a-propos'} className="nav-links">{t('about')}</NavLink>
        </li>
        <li
          className="nav-item"
          onClick={testDrop}
        >
          <NavLink to={'/contact'} className="nav-links">{t('contact')}</NavLink>
        </li>
      </ul>
      {!userContext.isLogged ?
       <div className="navbar-account">
         <FaUser/>
         <span>
           <Link to={'/inscription'}>{t('login')} / {t('register')}</Link>
         </span>
       </div> : <div className="navbar-account connected">
         <div className="navbar-avatar">
           <Link to={`/profil/${userContext._id}`}>
             <img src={`${userContext.userAvatar}`} alt=""/>
           </Link>
         </div>
         <span> <Link to={`/profil/${userContext._id}`}>{userContext.firstName} {userContext.lastName}</Link></span>
       </div>}
    </nav>
  </>
}

export default Nav
