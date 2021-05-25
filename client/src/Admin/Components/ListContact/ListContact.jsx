import React          from 'react'
import { makeStyles } from '@material-ui/core'
import RowListContact from './RowListContact'

const useStyles   = makeStyles((theme) => ({
  containerContact: {
    backgroundColor: '#FFF',
    boxShadow      : theme.shadows[3],
    borderRadius   : '5px 5px 0 0',
    minWidth       : '220px',
    maxWidth       : '300px',
    position       : 'absolute',
    zIndex         : 999,
    top            : 0,
  },
  headerList      : {
    padding     : `${theme.spacing(1)}px`,
    fontWeight  : '600',
    fontSize    : '15px',
    color: theme.palette.grey[800],
    borderBottom: 'solid 1px #DDDDDD',
    boxShadow   : '0px 0px 2px grey'
  },
  contentContainer: {
    borderBottom: '1px solid #eeeeee',
    maxHeight   : '250px',
    overflowY   : 'auto'
  },
}))
const ListContact = ({ height = '158px', openedContact, handleOpenContact }) => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.containerContact}>
        <div className={classes.headerList}>
          <p>Vos contacts :</p>
        </div>
        <div className={classes.contentContainer} style={{ height: height }}>
          <RowListContact
            contactEmail="johnDoe@gmail.com"
            contactName="John Doe"
            handleOpenContact={handleOpenContact}
            openedContact={openedContact}
          />
        </div>
      </div>
    </>
  )
}

export default ListContact
