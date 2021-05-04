import React, { useState }         from 'react'
import { useTranslation }          from 'react-i18next'
import { Link, NavLink }           from 'react-router-dom'
import { FaBars, FaTimes, FaUser } from 'react-icons/fa'
import { useSelector }             from 'react-redux'

const Nav = () => {
  const [clicked, setClicked] = useState(false)
  const { t }                 = useTranslation()
  const userContext           = useSelector(state => state.userReducers)
  const roleUser              = userContext.userInfo.roles
  const navItems              = [
    {
      label: t('home'),
      url  : '/accueil',
      cName: 'nav-link'
    },
    {
      label: t('organization'),
      cName: 'nav-link',
      child: [
        {
          label: 'Mariage',
          url  : '/organisation/mariage',
          cName: 'dropdown-link'
        },
        {
          label: 'Conception floral',
          url  : '/organisation/ceremonie-laique',
          cName: 'dropdown-link'
        },
        {
          label: 'EVJG / EVJF',
          url  : '/organisation/evj',
          cName: 'dropdown-link'
        },
        {
          label: 'Baby shower',
          url  : '/baby-shower',
          cName: 'dropdown-link'
        },
      ]
    },
    {
      label: t('secularCeremony'),
      url  : '/organisation',
      cName: 'nav-link'
    },
    {
      label: t('workshop'),
      url  : '/organisation',
      cName: 'nav-link'
    },
    {
      label: t('gallery'),
      url  : '/galerie',
      cName: 'nav-link'
    },
    {
      label: t('about'),
      url  : '/a-propos',
      cName: 'nav-link'
    },
    {
      label: t('contact'),
      url  : '/contact',
      cName: 'nav-link'
    },
    {
      label: t('opinion'),
      url  : '/avis',
      cName: 'nav-link'
    }
  ]
  return (
    <nav className="navbar">
      <div className="menu-mobile" onClick={() => setClicked(!clicked)}>
        {!clicked ? <FaBars/> : <FaTimes/>}
      </div>
      <div className={clicked ? 'nav-container active' : 'nav-container'}>
        <div className="nav-mobile-logo">
          <img src="/assets/logo.png" alt="logo de Côté Campagne"/>
        </div>
        <ul className="nav-list">
          {navItems.map((link, index) => (<>
              {!link.child ?
               <li key={index} className="nav-item">
                 <Link to={link.url} className="nav-link" onClick={() => setClicked(!clicked)}>{link.label}</Link>
               </li> :
               <li key={index} className="nav-item">
                 <Link to={link.url} className={link.cName} onClick={() => setClicked(!clicked)}>{link.label}</Link>
                 <div className="dropdown">
                   <ul className="dropdown-list">
                     {link.child.map(child => (
                       <li key={index} className="dropdown-item">
                         <Link to={child.url} className="dropdown-link"
                               onClick={() => setClicked(!clicked)}>{child.label}</Link>
                       </li>
                     ))}
                   </ul>
                 </div>
               </li>}
            </>
          ))}
          {roleUser && roleUser.includes('ROLE_ADMIN') &&
           <li className="nav-item">
             <NavLink to={'/admin/users'} className="nav-links">Administration</NavLink>
           </li>
          }
        </ul>
      </div>
      <div className={clicked ? 'overlay-nav active' : 'overlay-nav'} onClick={() => setClicked(!clicked)}/>
      <div className="nav-user">
        {!userContext.isLogged ?
         <Link to="/connexion"> Connexion <span><FaUser/></span></Link>
                               : <>
           <div>
         <span> <Link
           to={`/profil/${userContext.userInfo._id}`}>{userContext.userInfo.firstName} {userContext.userInfo.lastName}
           <span><FaUser/></span></Link>
            </span>
           </div>
         </>
        }
      </div>
    </nav>
  )
}

export default Nav
