import React                                              from 'react'
import { Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core'

const Popup = (props) => {
  const { title, children, openPopup, onClose } = props
  return <>
    <Dialog open={openPopup} keepMounted onClose={onClose}>
      <DialogTitle>
        <div>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        {children}
      </DialogContent>
    </Dialog>
  </>
}

export default Popup
