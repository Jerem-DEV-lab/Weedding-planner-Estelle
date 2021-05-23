import React                   from 'react'
import { makeStyles, SvgIcon } from '@material-ui/core'
import ErrorOutlineIcon        from '@material-ui/icons/ErrorOutline'

const useStyles        = makeStyles((theme) => ({
  errorContainer: {
    display       : 'flex',
    justifyContent: 'center',
    alignItems    : 'center',
    height        : 'calc(100vh - 273px)',
    fontSize      : '55px'
  },
  errorMsg      : {
    marginTop : '',
    marginLeft: theme.spacing(2),
    fontSize  : '45px'
  }
}))
const ErrorLoadGallery = ({ errors }) => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.errorContainer}>
        <SvgIcon component={ErrorOutlineIcon} fontSize="inherit" color="secondary"/>
        <span className={classes.errorMsg}>{errors}</span>
      </div>
    </>
  )
}

export default ErrorLoadGallery
