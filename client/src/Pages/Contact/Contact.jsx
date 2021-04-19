import React                 from 'react'
import { Box, Grid, Hidden } from '@material-ui/core'
import ContactForm           from './ContactForm'
import { withStyles }        from '@material-ui/core/styles'

const OverlayForm = withStyles((theme) => (
  {
    root: {
      display   : 'block',
      height    : '100vh',
      position  : 'absolute',
      background: 'rgba(0,0,0,0.4)',
      top       : '0',
      right     : '0',
      left      : '0',
      bottom    : '0',
    }
  }))(Box)

const Contact = () => {
  return <>
    <Grid container={true} style={{ backgroundColor: '#F6F8FB' }}>
      <Hidden smDown>
        <Grid item={true} xs={12} sm={12} md={7}>
          <Box component="div" style={{
            height          : '100vh',
            backgroundImage : 'url("/assets/contact-form.jpg")',
            backgroundSize  : 'cover',
            backgroundRepeat: 'no-repeat',
            position        : 'relative',
            display         : 'flex',
            alignItems      : 'center',
            justifyContent  : 'center',
            width           : '100%'
          }}>
            <OverlayForm/>
          </Box>
        </Grid>
      </Hidden>
      <Grid item={true} xs={12} sm={12} md={5}>
        <ContactForm/>
      </Grid>
    
    </Grid>
  </>
}

export default Contact
