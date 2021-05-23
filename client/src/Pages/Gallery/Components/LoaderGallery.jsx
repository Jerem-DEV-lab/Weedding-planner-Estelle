import React                from 'react'
import { CircularProgress } from '@material-ui/core'
import { makeStyles }       from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  loaderContainer: {
    display       : 'flex',
    flexDirection : 'column',
    justifyContent: 'center',
    alignItems    : 'center',
    height        : 'calc(100vh - 273px)'
  },
  labelLoading   : {
    display  : 'block',
    marginTop: theme.spacing(4)
  }
}))
const LoaderGallery = () => {
  const classes               = useStyles()
  return (
    <>
      <div className={classes.loaderContainer}>
        <CircularProgress color="secondary" size={90}/>
        <span className={classes.labelLoading}>Chargement de la galerie...</span>
      </div>
    </>
  )
}

export default LoaderGallery
