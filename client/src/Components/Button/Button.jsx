import React    from 'react'
import { Link } from 'react-router-dom'

const Button = ({ isButton = true, size = '', label, color, onClick, className, type = 'submit' }) => {
  return <>
    {isButton ? <>
      <button className={`btn btn-${color} ${className}`} type={type} onClick={onClick}>{label}</button>
    </> : <Link className={`btn btn-${color} ${size ? `btn-${size}` : ''} ${className}`}>
       {label}
     </Link>}
  </>
}

export default Button
