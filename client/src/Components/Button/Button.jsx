import React    from 'react'
import { Link } from 'react-router-dom'

const Button = ({
                  isButton = true,
                  size = '',
                  label,
                  color,
                  onClick,
                  className = '',
                  type = 'submit',
                  link = '',
                  isAnchor = false
                }) => {
  return <>
    {isButton && <>
      <button className={`btn btn-${color} ${className}`} type={type} onClick={onClick}>{label}</button>
    </>}
    {isAnchor &&
     <a className={`btn btn-${color} ${size ? `btn-${size}` : ''} ${className}`} href={link}>
       {label}
     </a>}
    {!isButton && !isAnchor &&
     <Link className={`btn btn-${color} ${size ? `btn-${size}` : ''} ${className}`} to={link}>{label}</Link>}
  
  </>
}

export default Button
