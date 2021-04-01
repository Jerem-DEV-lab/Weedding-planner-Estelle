import React             from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const Alert = ({ message, type }) => {
  return <div className={`alert alert-${type}`}>
    <FaCheckCircle/><span> {message}</span>
  </div>
}

export default Alert
