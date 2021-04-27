import React                                             from 'react'
import { Checkbox, FormControlLabel, Paper, RadioGroup } from '@material-ui/core'
import Typography                                        from '@material-ui/core/Typography'
import Box                                               from '@material-ui/core/Box'
import { useTranslation }                                from 'react-i18next'
import { makeStyles, useTheme }                          from '@material-ui/core/styles'
import { useForm }                                       from '../../Hooks/useForm'

const useStyles            = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))
const initialFValues       = {
  newsLetter  : false,
  privateNotif: false
}
const NotificationsProfile = () => {
  const { t }                 = useTranslation()
  const classes               = useStyles()
  const theme                 = useTheme()
  const { values, setValues } = useForm(initialFValues)
  
  return (
    <>
      <div style={{ minHeight: 'calc(100vh - 360px)' }}>
        <Paper className={classes.root} variant="outlined">
          <Typography variant="body1" style={{ fontWeight: '500', marginBottom: theme.spacing(2) }} component="h2">
            {t('notification_profil_label')}
          </Typography>
          <Box component="div" display="flex" flexDirection="column">
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.newsLetter}
                  name="newsLetter"
                  color="primary"
                onChange={(e) => setValues({ ...values, newsLetter: e.target.checked })}
              />
            }
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
