import React, { useEffect, useState } from 'react'
import axios                          from 'axios'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
}                                     from '@material-ui/core'
import ControlSelect                  from '../Workshop/ControlSelect'
import { useForm }                    from '../../../Hooks/useForm'
import { useDispatch, useSelector }   from 'react-redux'
import { resetEvent }                 from '../../../actions/adminAction'
import useHandleRequest               from '../../../Hooks/useHandleRequest'
import { Alert }                      from '@material-ui/lab'

const initialValues       = {
  users: []
}
const ModalSendNewsletter = ({ open, close, newsInfo }) => {
  const dispatch                                   = useDispatch()
  const { values, handleChangeInput }              = useForm(initialValues)
  const { listUser }                               = useSelector(state => state.adminReducers)
  const [filteredUser, setFilteredUser]            = useState([])
  const { errors, setErrors, success, setSuccess } = useHandleRequest()
  useEffect(() => {
    dispatch(resetEvent())
    if (listUser) {
      setFilteredUser(listUser.filter(u => u.workshopRegistered !== false))
    }
    //eslint-disable-next-line
  }, [listUser])
  const sendNews = (e) => {
    e.preventDefault()
    setErrors('')
    setSuccess('')
    axios.post('/admin/send/news', {
           users      : values.users,
           titleNews  : newsInfo.titleNews,
           contentNews: newsInfo.contentNews
         })
         .then(res => setSuccess(res.data.success))
         .catch(err => setErrors(err.response.data.errors))
  }
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess('')
        setErrors('')
        close()
      }, 2000)
    }
  }, [success])
  
  return (
    <>
      <Dialog open={open} onClose={close} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Envoyer la newsletter</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {errors && <Alert severity="error">{errors}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}
          
          </DialogContentText>
          <DialogContentText>
            Vous devez sélectionner les utilisateurs à qui vous voulez envoyer la newsletter. <br/>
          </DialogContentText>
          <ControlSelect filteredUser={filteredUser} name="users" selected={values.users}
                         handleInputChange={handleChangeInput}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">
            Cancel
          </Button>
          <Button onClick={sendNews} color="primary">
            Envoyer la news
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ModalSendNewsletter
