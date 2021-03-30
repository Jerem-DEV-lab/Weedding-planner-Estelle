import React, { useContext, useState } from 'react'
import { NavLink }                     from 'react-router-dom'
import { FaBars, FaTimes, FaUser }     from 'react-icons/fa'
import useChangeLang                   from '../../Hooks/useChangeLang'
import { UserContext }                 from '../../Context/UserContext'

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [lang, changeLang]    = useChangeLang()
  
  const NavItems    = [
    {
      label: lang.home,
      url  : '/fr/'
    },
    {
      label  : lang.organization,
      url    : '/fr/organisation',
      subLink: [
        {
          label: 'Mariage',
          url  : '/fr/mariage',
        },
        {
          label: 'Cérémonie laïque',
          url  : '/fr/ceremonie-laique',
        },
        {
          label: 'EVJF / EVJG',
          url  : '/fr/enterrement-vie-jeune',
        },
        {
          label: 'Baby Shower',
          url  : '/fr/baby-shower',
        }, {
          label: 'Autre évènements privés',
          url  : '/fr/events-private',
        },]
    },
    {
      label  : lang.workshop,
      url    : '/ateliers',
      subLink: [
        {
          label: 'Mariage',
          url  : '/mariage',
        },
        {
          label: 'Cérémonie laïque',
          url  : '/ceremonie-laique',
        },
        {
          label: 'EVJF / EVJG',
          url  : '/enterrement-vie-jeune',
        },
        {
          label: 'Baby Shower',
          url  : '/baby-shower',
        }, {
          label: 'Autre évènements privés',
          url  : '/events-private',
        }]
    },
    {
      label: lang.gallery,
      url  : '/galerie',
    },
    {
      label: lang.about,
      url  : '/a-propos',
    },
    {
      label: lang.contact,
      url  : '/contact',
    }
  ]
  const userContext = useContext(UserContext)
  console.log(userContext)
  const openNavBar = () => {
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
            {NavItems.map(item => <>
              <li>
                <NavLink activeClassName="active" className="nav-link" to={item.url}>{item.label}</NavLink>
              </li>
            </>)}
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
