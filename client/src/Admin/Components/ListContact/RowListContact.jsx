import React                  from 'react'
import { Avatar, makeStyles } from '@material-ui/core'
import ContactInfo            from './ContactInfo'
import RowListActions         from './RowListActions'

const useStyles = makeStyles((theme) => ({
  rowContact : {
    position      : 'relative',
    display       : 'flex',
    overflow      : 'hidden',
    alignItems    : 'space-between',
    justifyContent: 'space-between',
    borderBottom  : 'solid 1px ' + theme.palette.grey[100],
    '&:hover'     : {
      cursor         : 'pointer',
      backgroundColor: theme.palette.grey[100]
    }
  },
  contactInfo: {
    maxWidth : '80%',
    overflow : 'hidden',
    wordBreak: 'break-word'
  }
}))

const RowListContact = ({ contactEmail, contactName, openedContact, handleOpenContact }) => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.rowContact}>
        <ContactInfo contactEmail={contactEmail} contactName={contactName}
                     contactAvatar={<Avatar alt="Remy Sharp" src="/assets/avatars/avatar-f1.png"/>}
                     openedContact={openedContact}
                     handleOpenContact={handleOpenContact}
        
        />
        <RowListActions/>
      </div>
    
    </>
  )
}

export default RowListContact
