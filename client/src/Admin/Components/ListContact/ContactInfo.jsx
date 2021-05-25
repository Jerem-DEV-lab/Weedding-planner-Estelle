import React               from 'react'
import { makeStyles }      from '@material-ui/core'
import { useGeneralStyle } from '../../../Pages/Styles/generalStyle'

const useStyles = makeStyles((theme) => ({
  contactInfo  : {
    display       : 'flex',
    flexDirection : 'column',
    width         : '80%',
    minHeight     : '50px',
    justifyContent: 'center',
    overflow      : 'hidden',
    transition    : 'all .6s ease-in-out',
    padding       : theme.spacing(1)
  },
  contactAvatar: {
    margin: 'auto auto .75rem ',
  }
}))

const ContactInfo = ({ contactName, contactEmail, contactAvatar, openedContact, handleOpenContact }) => {
  const classes  = useStyles()
  const classes2 = useGeneralStyle()
  
  return <>
    <div className={classes.contactInfo} onClick={handleOpenContact}>
      {openedContact && <div className={classes.contactAvatar}>
        {contactAvatar}
      </div>}
      <p className={`${classes2.textBold} ${openedContact && classes2.marginBottom2} ${classes2.textUppercase}`}>
        {contactName}
      </p>
      {openedContact && <p className={`${classes2.emailColor}`} style={{ fontSize: '12px' }}>{contactEmail}</p>}
    </div>
  </>
}

export default ContactInfo
