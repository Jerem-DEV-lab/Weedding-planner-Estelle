import {
  TextField
}            from '@material-ui/core'
import React from 'react'

const Input = (props) => {
  const { name, label, value, onChange, ...rest } = props
  return <>
    <TextField
      {...rest}
      variant="outlined"
      value={value}
      name={name}
      onChange={onChange}
      label={label}
    />
  </>
}
export default Input
