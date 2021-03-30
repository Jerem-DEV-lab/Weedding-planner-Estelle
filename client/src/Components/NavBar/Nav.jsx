import React, { useContext, useState } from 'react'
import { Link, NavLink }               from 'react-router-dom'
import { FaBars, FaCaretDown, FaUser } from 'react-icons/fa'
import useChangeLang                   from '../../Hooks/useChangeLang'
import Dropdown                        from '../Dropdown/Dropdown'
import { UserContext }                 from '../../Context/UserContext'

const Nav = () => {
  const [click, setClick]       = useState(false)
  const [openDrop, setOpenDrop] = useState(false)
  const [lang]                  = useChangeLang()
  const userContext             = useContext(UserContext)
  const handleClick             = () => setClick(!click)
  console.log(userContext)
  const testDrop = () => {
    setOpenDrop(!openDrop)
  }
  const sublink  = [
    {
      label: lang.home,
      url  : '/fr/home',
      cName: 'dropdown-link'
    },
    {
      label: lang.home,
      url  : '/fr/home',
      cName: 'dropdown-link'
    },
    {
      label: lang.home,
      url  : '/fr/home',
      cName: 'dropdown-link'
    },
    {
      label: lang.home,
      url  : '/fr/home',
      cName: 'dropdown-link'
    },
  ]
  return <>
    <nav className="navbar">
      <div className={`overlay-nav ${click ? 'active' : ''}`} onClick={handleClick}/>
      <Link to="/fr/" className='navbar-logo'>
        <img src="/assets/logo.png" alt="Logo de côté campagne" height={50} width={50}/>
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <FaBars size={25}/>
      </div>
      
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-links" to="/fr/">{lang.home}</NavLink>
        </li>
        <li
          className={`nav-item dropdown ${openDrop ? 'active' : ''} `}
          onClick={testDrop}
        >
          <div
            className={`nav-links `}
          >
            {lang.organization} <FaCaretDown/>
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
            {lang.floralScenography} <FaCaretDown/>
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
            {lang.workshop} <FaCaretDown/>
          </div>
          {<Dropdown items={sublink}/>}
        </li>
        <li
          className="nav-item"
          onClick={testDrop}
        >
          <NavLink to={'/fr/gallery'} className="nav-links">{lang.gallery}</NavLink>
        </li>
        <li
          className="nav-item"
          onClick={testDrop}
        >
          <NavLink to={'/fr/a-propos'} className="nav-links">{lang.about}</NavLink>
        </li>
        <li
          className="nav-item"
          onClick={testDrop}
        >
          <NavLink to={'/fr/gallery'} className="nav-links">{lang.gallery}</NavLink>
        </li>
      </ul>
      {!userContext.isLogged ?
       <div className="navbar-account">
         <FaUser/>
         <span>
           <Link to={'/fr/register'}>{lang.login} / {lang.register}</Link>
         </span>
       </div> : <div className="navbar-account connected">
         <div className="navbar-avatar">
           <img src={`${userContext.userAvatar}`} alt="" />
         </div>
         <span> <Link to={`/fr/profil/${userContext._id}`}>{userContext.firstName} {userContext.lastName}eeeeeeee</Link></span>
       </div>}
    </nav>
  </>
}

export default Nav
