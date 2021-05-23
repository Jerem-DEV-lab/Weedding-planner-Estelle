import React, { useEffect, useState } from 'react'
import { Checkbox, FormControlLabel, Paper }      from '@material-ui/core'
import Typography                                 from '@material-ui/core/Typography'
import Box                                        from '@material-ui/core/Box'
import { useTranslation }                         from 'react-i18next'
import { makeStyles, useTheme }                   from '@material-ui/core/styles'
import { useForm }                                from '../../Hooks/useForm'
import axios                                      from 'axios'
import { useSelector }                            from 'react-redux'
import CheckCircleIcon                            from '@material-ui/icons/CheckCircle'
import CancelIcon                                 from '@material-ui/icons/Cancel'

const useStyles            = makeStyles(theme => ({
  root              : {
    padding: theme.spacing(2)
  },
  notificationValide: {
    display        : 'flex',
    alignItems     : 'center',
    position       : 'absolute',
    right          : '20px',
    top            : '10px',
    fontSize       : '12px',
    padding        : theme.spacing(1),
    borderRadius   : '5px',
    backgroundColor: theme.palette.success.light,
    color          : '#FFF'
  },
  bgRed             : {
    backgroundColor: theme.palette.error.main
  }
}))
const initialFValues       = {
  newsLetter  : false,
  privateNotif: false
}
const NotificationsProfile = () => {
  const { t }                        = useTranslation()
  const classes                      = useStyles()
  const theme                        = useTheme()
  const { userInfo: { newsLetter } } = useSelector(state => state.userReducers)
  const { values, setValues }        = useForm(initialFValues)
  const [success, setSuccess]        = useState('')
  
  useEffect(() => {
    setValues({ ...values, newsLetter: newsLetter })
  }, [])
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess('')
      }, 1500)
    }
  }, [success])
  const handleChangePref = (preferenceName, checked) => {
    axios.put('/user/change-preference-new', { preferenceName, preferenceValue: checked })
         .then(() => {
           if (preferenceName === 'newsletter') {
             if (checked) {
               setSuccess('Inscrit à la newsletter')
             } else {
               setSuccess('Vous n\'êtes plus inscrit à la newsletter')
             }
           }
         })
         .catch((err) => {
           setSuccess('')
         })
  }
  return (
    <>
      <div style={{ minHeight: 'calc(100vh - 360px)' }}>
        <Paper className={classes.root} variant="outlined">
          {success && success === 'Inscrit à la newsletter' ?
           <div style={{ position: 'relative' }}>
             <div className={classes.notificationValide}>
               <CheckCircleIcon style={{ marginRight: '.3rem' }}/>{success}
             </div>
           </div> : success && <div style={{ position: 'relative' }}>
            <div className={`${classes.notificationValide} ${classes.bgRed}`}>
              <CancelIcon style={{ marginRight: '.3rem' }}/>{success}
            </div>
          </div>
          }
          <Typography variant="body1" style={{ fontWeight: '500', marginBottom: theme.spacing(2) }} component="h2">
            {t('notification_profil_label')}
          </Typography>
          <Box component="div" display="flex" flexDirection="column" width="max-content">
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.newsLetter}
                  name="newsLetter"
                  color="primary"
                  onClick={(e) => handleChangePref('newsletter', e.target.checked)}
                  onChange={(e) => setValues({ ...values, newsLetter: e.target.checked })}
                />}
            label={t('pref_newsletter')}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={values.privateNotif}
                onChange={(e) => setValues({ ...values, privateNotif: e.target.checked })}
                name="privateNotif"
                color="primary"
              />
            }
            label={t('message_private_label')}
          />
          </Box>
        </Paper>
      </div>
    </>
  )
}

export default NotificationsProfile
