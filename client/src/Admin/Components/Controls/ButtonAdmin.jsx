import React  from 'react'
import Button from '@material-ui/core/Button'

const ButtonAdmin = ({ label, endIcon }) => {
  
  return <>
    <Button variant="outlined" size="small" color={'primary'} endIcon={endIcon}>
      {label}
    </Button>
  </>
}

export default ButtonAdmin
