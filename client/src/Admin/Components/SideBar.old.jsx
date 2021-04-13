import React                                              from 'react'
import { Link, NavLink }                                  from 'react-router-dom'
import { FaBars, FaBell, FaPaperPlane, FaSearch, FaUser } from 'react-icons/fa'

const SideBarOld = () => {
  return <>
    <div className="sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-logo">
          <img src="/assets/logo.png" alt="logo de côté campgagne"/>
        </div>
        <ul className="sidebar-menu scrollableY p-relative">
          <li className="sidebar-item mt3">
            <NavLink to="/admin" activeClassName="active-link"><span className="icons-sidebar color-icons-red"><FaUser/></span>Dashboard</NavLink>
          </li>
          <li className="sidebar-item mt3">
            <NavLink to="/admin" activeClassName="active-link"><span className="icons-sidebar color-icons-primary"><FaUser/></span>Utilisateurs</NavLink>
          </li>
          <li className="sidebar-item mt3">
            <NavLink to="/admin" activeClassName="active-link"><span className="icons-sidebar color-icons-green"><FaUser/></span>Paramètres</NavLink>
          </li>
          <li className="sidebar-item mt3">
            <NavLink to="/admin" activeClassName="active-link"><span className="icons-sidebar color-icons-orange"><FaUser/></span>Agenda</NavLink>
          </li>
          <li className="sidebar-item mt3">
            <NavLink to="/admin" activeClassName="active-link"><span className="icons-sidebar color-icons-secondary"><FaUser/></span>Mails</NavLink>
          </li>
        </ul>
      </div>
    </div>
    <div className="dashboard-container">
      <div className="header-dashboard navbar-header-dashboard">
        <div className="header-container">
          <ul className="nav-left">
            <li>
              <Link to="/admin/" className="sidebar-toggle"><FaBars/></Link>
            </li>
            <li>
              <Link to="/admin/" className="search-box"><FaSearch/></Link>
            </li>
          </ul>
          <ul className="nav-right">
            <li className="notifications dropdown">
              <span className="counter bgc-red">3</span>
              <Link to="/admin/" className="dropdown-toggle no-after"><FaBell/></Link>
            </li>
            <a href="" className="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-toggle="dropdown"
               aria-expanded="false">
              <div className="peer mR-10">
                <img className="w-2r bdrs-50p"
                     src="https://randomuser.me/api/portraits/men/10.jpg" alt=""/>
              </div>
              <div className="peer"><span className="fsz-sm c-grey-900">John Doe</span></div>
            </a>
            <ul className="dropdown-menu fsz-sm">
              <li>
                <Link to="/admin" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700"><FaPaperPlane/>
                  <span>Setting</span>
                </Link>
              </li>
              <li>
                <Link to="/admin" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700"><FaPaperPlane/>
                  <span>Profile</span>
                </Link>
              </li>
              <li><Link to="/admin" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700"><FaPaperPlane/>
                <span>Messages</span></Link></li>
              <li role="separator" className="divider"/>
              <li><Link to="/admin" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700"><FaPaperPlane/>
                <span>Logout</span></Link></li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  </>
}

export default SideBarOld
