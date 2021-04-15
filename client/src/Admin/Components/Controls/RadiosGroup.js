import React from 'react'
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup
}            from '@material-ui/core'

const RadioGroup = (props) => {
  const { name, label, value, onChange, items, errors, helperText } = props
  return <>
    <FormControl error={errors}>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row value={value} name={name} onChange={onChange}>
        {items.map(
          (item, index) => (
            <FormControlLabel key={index} value={item.id} control={<Radio/>} label={item.id}/>
          )
        )}
      </MuiRadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  </>
}
export default RadioGroup
