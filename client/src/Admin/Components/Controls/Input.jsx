import {
  TextField
}            from '@material-ui/core'
import React from 'react'

const Input = (props) => {
  const { name, label, value, onChange, variant, ...rest } = props
  return <>
    <TextField
      {...rest}
      variant={variant}
      value={value}
      name={name}
      onChange={onChange}
      label={label}
    />
  </>
}
export default Input
