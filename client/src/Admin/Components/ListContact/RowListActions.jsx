import React          from 'react'
import { makeStyles } from '@material-ui/core'
import SendIcon       from '@material-ui/icons/Send'
import IconButton     from '@material-ui/core/IconButton'

const useStyles      = makeStyles((theme) => ({
  rowActions: {
    display       : 'flex',
    justifyContent: 'flex-end',
    marginRight   : '15px',
    alignItems    : 'center',
  }
}))
const RowListActions = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.rowActions}>
        <IconButton size="small">
          <SendIcon fontSize="12px" color="primary"/>
        </IconButton>
      </div>
    </>
  )
}

export default RowListActions
