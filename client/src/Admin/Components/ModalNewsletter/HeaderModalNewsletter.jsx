import React                                 from 'react'
import { AppBar, Dialog, Slide, Typography } from '@material-ui/core'
import Toolbar                               from '@material-ui/core/Toolbar'
import IconButton                            from '@material-ui/core/IconButton'
import CloseIcon                             from '@material-ui/icons/Close'
import Button                                from '@material-ui/core/Button'
import SendRoundedIcon                       from '@material-ui/icons/SendRounded'
import { makeStyles }                        from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root  : {
    padding: theme.spacing(4),
    width  : '100%',
  },
  appBar: {
    position: 'relative',
  },
  title : {
    marginLeft: theme.spacing(2),
    flex      : 1,
  }
}))

const Transition            = React.forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const HeaderModalNewsletter = ({ open, children, onClickBtn }) => {
  const classes = useStyles()
  return <>
    <Dialog fullScreen open={open} onClose={open} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={open} aria-label="close">
            <CloseIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           Préparation de la newsletter
          </Typography>
          <Button autoFocus color="inherit" endIcon={<SendRoundedIcon/>} onClick={onClickBtn}>
            Sauvegarder
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </Dialog>
  </>
}

export default HeaderModalNewsletter
