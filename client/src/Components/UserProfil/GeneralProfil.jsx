import React, { useEffect, useState } from 'react'
import {
  Avatar,
  Button,
  Dialog, DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  TextField
}                                     from '@material-ui/core'
import { makeStyles, withStyles }     from '@material-ui/core/styles'
import Typography                     from '@material-ui/core/Typography'
import { useDispatch, useSelector }   from 'react-redux'
import Divider                        from '@material-ui/core/Divider'
import PersonIcon                     from '@material-ui/icons/Person'
import { useTranslation }             from 'react-i18next'
import Box                            from '@material-ui/core/Box'
import Logout                         from '../Authentification/Logout'
import AddToPhotosIcon                from '@material-ui/icons/AddToPhotos'
import { requestApiChangeAvatar }     from '../../actions/userAction'

const useStyles = makeStyles(theme => (
  {
    dashed      : {
      position    : 'relative',
      padding     : '8px',
      border      : '1px dashed rgba(0,0,0,0.5)',
      borderRadius: '50%'
    },
    root        : {
      padding      : theme.spacing(2),
      display      : 'flex',
      alignItems   : 'center',
      flexDirection: 'column'
    },
    large       : {
      height: '100px',
      width : '100px'
    },
    btnAddAvatar: {
      position       : 'absolute',
      display        : 'flex',
      justifyContent : 'center',
      alignItems     : 'center',
      right          : 0,
      bottom         : '10px',
      height         : '30px',
      width          : '30px',
      backgroundColor: '#303f9f',
      color          : '#FFF',
      borderRadius   : '25px',
      overflow       : 'hidden',
      cursor         : 'pointer'
    },
    avatarList  : {
      display        : 'flex',
      flexWrap       : 'wrap',
      flexShrink     : 2,
      justifyContent : 'space-between',
      '& > *'        : {
        filter    : 'grayscale(80%)',
        margin    : '10px',
        cursor    : 'pointer',
        transition: 'all ease .8s',
      },
      '& > *:hover'  : {
        filter: 'grayscale(0%)',
      },
      '& > .selected': {
        filter: 'grayscale(0%)',
      }
    }
  }
))

export const ContentProfil = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  }
}))(Paper)
const GeneralProfil        = () => {
  const classes                             = useStyles()
  const { userInfo }                        = useSelector(state => state.userReducers)
  const [updateAvatar, setUpdateAvatar]     = useState(false)
  const { t }                               = useTranslation()
  const [selectedAvatar, setSelectedAvatar] = useState('/assets/avatars/avatar-h1.png')
  const updateAvatarModal                   = () => {
    setUpdateAvatar(true)
  }
  useEffect(() => {
    setSelectedAvatar(userInfo.userAvatar)
  }, [userInfo.userAvatar])
  
  function closeModal () {
    setUpdateAvatar(false)
  }
  
  return (
    <>
      {updateAvatar &&
       <ModalChangeAvatar openModal={updateAvatar} closeModal={closeModal} selectedAvatar={selectedAvatar}
                          changeAvatar={setSelectedAvatar}/>}
      <Grid container={true} spacing={4} style={{ minHeight: 'calc(100vh - 329px)' }}>
        <Grid item={true} xs={12} md={3}>
          <Paper className={classes.root}>
            <div className={classes.dashed}>
              <Avatar className={classes.large}>
                <img src={selectedAvatar} alt="avatar de l'utilisateur"/>
              </Avatar>
              <div className={classes.btnAddAvatar}>
                <Button size="small" onClick={updateAvatarModal} style={{ color: 'white' }} disableElevation={true}>
                  <AddToPhotosIcon style={{ fontSize: 20 }}/>
                </Button>
              </div>
            </div>
            <Typography variant="subtitle2" component="h6" className="mt3">
              {userInfo.lastName} {userInfo.firstName}
            </Typography>
            <div className="mt2">
              <Logout/>
            </div>
          </Paper>
        </Grid>
        <Grid item={true} xs={12} md={9}>
          <ContentProfil>
            <Box component="span" display="flex" alignItems="center">
              <PersonIcon style={{ marginRight: '10px' }}/>
              <Typography variant="h6" component="span" color="textPrimary">
                Profil
              </Typography>
            </Box>
            <form style={{ marginBottom: '24px' }}>
              <Divider/>
              <Grid container={true} xs={12} spacing={4}>
                <Grid item={true} xs={12} lg={6}>
                  <TextField variant="outlined" disabled value={userInfo.lastName} size="medium"
                             style={{ width: '100%', marginTop: '26px' }}/>
                </Grid>
                <Grid item={true} xs={12} lg={6}>
                  <TextField variant="outlined" value={userInfo.email} disabled={true} size="medium"
                             style={{ width: '100%', marginTop: '26px' }}/>
                </Grid>
                <Grid item={true} xs={12} lg={6}>
                  <TextField variant="outlined" value={userInfo.phone} disabled={true} size="medium"
                             style={{ width: '100%' }}/>
                </Grid>
                <Grid item={true} xs={12} lg={6}>
                  <TextField variant="outlined" value={userInfo.address} disabled={true} size="medium"
                             style={{ width: '100%' }}/>
                </Grid>
                <Grid item={true} xs={12} lg={6}>
                  <TextField variant="outlined" value={userInfo.postalCode} disabled={true} size="medium"
                             style={{ width: '100%' }}/>
                </Grid>
              </Grid>
            </form>
          </ContentProfil>
        </Grid>
      </Grid>
    </>
  )
}

export default GeneralProfil

function ModalChangeAvatar ({ openModal, closeModal, selectedAvatar, changeAvatar }) {
  const classes            = useStyles()
  const dispatch           = useDispatch()
  const { userInfo }       = useSelector(state => state.userReducers)
  const saveNewAvatar      = () => {
    dispatch(requestApiChangeAvatar(selectedAvatar))
    closeModal()
  }
  const cancelUpdateAvatar = () => {
    changeAvatar(userInfo.userAvatar)
    closeModal()
  }
  const { t }              = useTranslation()
  return <>
    <Dialog
      open={openModal}
      onClose={closeModal}>
      <DialogTitle>Choisir un avatar 😜</DialogTitle>
      <DialogContent>
        <Box component="div" className={classes.avatarList}>
          <DisplayAvatar selectedAvatar={selectedAvatar} changeAvatar={changeAvatar}/>
        </Box>
        <DialogContentText>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={cancelUpdateAvatar} color="secondary" variant="outlined" size="small" disableElevation={true}>
          {t('cancelLabel')}
        </Button>
        <Button onClick={saveNewAvatar} color="primary" variant="contained" size="small" disableElevation={true}>
          {t('saveLabel')}
        </Button>
      </DialogActions>
    </Dialog>
  </>
}

function DisplayAvatar ({ selectedAvatar, changeAvatar }) {
  const arrayAvatars                    = [
    '/assets/avatars/avatar-f1.png',
    '/assets/avatars/avatar-f2.png',
    '/assets/avatars/avatar-f3.png',
    '/assets/avatars/avatar-f4.png',
    '/assets/avatars/avatar-h1.png',
    '/assets/avatars/avatar-h2.png',
    '/assets/avatars/avatar-h3.png',
    '/assets/avatars/avatar-h4.png',
  ]
  const [activeAvatar, setActiveAvatar] = useState('')
  useEffect(() => {
    setActiveAvatar(selectedAvatar)
  }, [selectedAvatar, changeAvatar])
  
  return <>
    {arrayAvatars.map((a, index) => (
      <img height={100} className={activeAvatar === a ? 'selected' : ''} src={a} key={index}
           onClick={() => changeAvatar(a)} alt="avatar personnaliser"/>
    ))}
  </>
}
