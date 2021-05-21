import React             from 'react'
import { Dialog, Slide } from '@material-ui/core'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Modal = ({ open, setOpen, children }) => {
  return <>
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={() => setOpen(false)}
    >
      {children}
    </Dialog>
  </>
}

export default Modal
