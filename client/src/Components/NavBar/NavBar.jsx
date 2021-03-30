import React, { useContext, useState } from 'react'
import { Link, NavLink }               from 'react-router-dom'
import { FaBars, FaTimes, FaUser }     from 'react-icons/fa'
import useChangeLang                   from '../../Hooks/useChangeLang'
import { UserContext }                 from '../../Context/UserContext'
import Dropdown                        from '../Dropdown/Dropdown'

const NavBar = () => {
  const [navOpen, setNavOpen]   = useState(false)
  const [lang]                  = useChangeLang()
  const [dropdown, setDropdown] = useState(false)
  const onMouseEnter            = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }
  
  const onMouseLeave      = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }
  const MenuDropdownItems = [
    {
      organization: [
        {
          label: 'Mariage',
          url  : '/fr/mariage',
          cName: 'dropdown-link'
        },
        {
          label: 'Cérémonie laïque',
          url  : '/fr/ceremonie-laique',
          cName: 'dropdown-link'
        },
        {
          label: 'EVJF / EVJG',
          url  : '/fr/enterrement-vie-jeune',
          cName: 'dropdown-link'
        },
        {
          label: 'Baby Shower',
          url  : '/fr/baby-shower',
          cName: 'dropdown-link'
        }, {
          label: 'Autre évènements privés',
          url  : '/fr/events-private',
          cName: 'dropdown-link'
        }
      ]
    },
    {
      scenographe: [
        {
          label: 'Mariage',
          url  : '/fr/mariage',
          cName: 'dropdown-link'
        },
        {
          label: 'Cérémonie laïque',
          url  : '/fr/ceremonie-laique',
          cName: 'dropdown-link'
        },
        {
          label: 'EVJF / EVJG',
          url  : '/fr/enterrement-vie-jeune',
          cName: 'dropdown-link'
        },
        {
          label: 'Baby Shower',
          url  : '/fr/baby-shower',
          cName: 'dropdown-link'
        }, {
          label: 'Autre évènements privés',
          url  : '/fr/events-private',
          cName: 'dropdown-link'
        }
      ]
    }
  ]
  const userContext       = useContext(UserContext)
  const openNavBar        = () => {
    setNavOpen(!navOpen)
  }
  return <>
    <div className={`overlay-nav ${navOpen ? 'modal-open' : ''}`} onClick={openNavBar}/>
    <nav className="main-nav">
      <div className="nav-brand">
        <button className="nav-humburger" onClick={openNavBar}>
          <FaBars size={25}/>
        </button>
      </div>
      <div className="nav-logo">
        <img src="/assets/logo.png" alt="Logo de côté campagne"/>
      </div>
      <div className={`nav-content ${navOpen ? 'modal-open' : ''}`}>
        <div className="small-screen">
          <div className="nav-close">
            <button className="nav-btn-close" onClick={openNavBar}>
              <FaTimes/>
            </button>
          </div>
          <div className="nav-logo">
            <img src="/assets/logo.png" alt="Logo de côté campagne"/>
          </div>
          <div className="nav-title">
            <h3>Côté Campagne vous souhaite bienvenue !</h3>
          </div>
        </div>
        <div className="nav-items">
          <ul>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/fr/">{lang.home}</NavLink>
            </li>
            <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="nav-item">
              <Link
                to='/fr/organisation'
                className='nav-links'>
                {lang.organization}
              </Link>
              {dropdown && <Dropdown items={MenuDropdownItems[0].organization}/>}
            </li>
            <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="nav-item">
              <Link
                to='/fr/organisation'
                className='nav-links'>
                {lang.organization}
              </Link>
              {dropdown && <Dropdown items={MenuDropdownItems[1].scenographe}/>}
            </li>
  
          </ul>
        </div>
        <div className="small-screen">
          <div className="nav-social-link">
            Mes réseaux
          </div>
        </div>
      </div>
      <div className="nav-item account-user">
        {userContext.isLogged ? <NavLink to="/fr/login">
                                <span className="userAvatar">
                                  <img src={userContext.userAvatar} alt="Avatar utilisateur" height={30} width={30}/>
                                </span> {userContext.firstName} {userContext.lastName}
                              </NavLink> :
         <NavLink to="/fr/login">
           <span><FaUser/></span>{lang.login} / {lang.register}
         </NavLink>}
      </div>
    </nav>
  </>
}

export default NavBar
