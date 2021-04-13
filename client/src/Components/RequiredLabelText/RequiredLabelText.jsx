import React from 'react'

const RequiredLabelText = ({ size = '16px' }) => {
  return (
    <span
      style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: `${size ? `${size}px` : '16px'}` }}>*</span>
  )
}

export default RequiredLabelText
