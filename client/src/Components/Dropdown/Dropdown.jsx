import React, { useState } from 'react'
import { Link }            from 'react-router-dom'

const Dropdown = ({ items = [] }) => {
  const [click, setClick] = useState(true)
  const handleClick       = () => {
    setClick(true)
  }
  
  return <>
    <ul
      onClick={handleClick}
      className="dropdown-content">
      {items && items.map((item, key) => <li key={key}>
        <Link className={item.cName} to={item.url}>{item.label}</Link>
      </li>)}
    
    </ul>
  </>
}

export default Dropdown
