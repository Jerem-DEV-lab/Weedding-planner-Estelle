import React                                  from 'react'
import { Grid, InputLabel, MenuItem, Select } from '@material-ui/core'
import Typography                             from '@material-ui/core/Typography'
import Box                                    from '@material-ui/core/Box'
import PersonIcon                             from '@material-ui/icons/Person'
import Divider                                from '@material-ui/core/Divider'
import { ContentProfil }                      from '../GeneralProfil'
import { makeStyles, useTheme }               from '@material-ui/core/styles'
import FormChangePassword                     from './FormChangePassword'
import Button                                 from '@material-ui/core/Button'
import { FaPlus }                             from 'react-icons/fa'
import { useTranslation }                     from 'react-i18next'
import GTranslateIcon                         from '@material-ui/icons/GTranslate'
import FormControl                            from '@material-ui/core/FormControl'
import i18next                                from 'i18next'

const SettingsAccount = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  return (
    <>
      <Grid container={true} spacing={5}>
        <Grid item={true} xs={12} md={9}>
          <ContentProfil>
            <Box component="span" display="flex" alignItems="center">
              <PersonIcon style={{ marginRight: '10px' }}/>
              <Typography variant="h6" component="span" color="textPrimary">
                {t('general_account_settings')}
              </Typography>
            </Box>
            <Divider/>
            <Box component="div" marginY={theme.spacing(0.2)}>
              <Typography component="h6" variant="subtitle2" style={{ marginBottom: theme.spacing(2) }}>
                {t('security_label')}
              </Typography>
              <FormChangePassword/>
            </Box>
          </ContentProfil>
        </Grid>
        
        <Grid item={true} xs={12} md={3}>
          <ContentProfil>
            <Box component="div" display="flex" alignItems="center" marginBottom=".35rem">
              <GTranslateIcon style={{ marginRight: '10px' }}/>
              <Typography variant="subtitle2" component="h2" color="textPrimary">
                {t('pref_language')}
              </Typography>
            </Box>
            <Divider/>
            <Box component="div" marginY={theme.spacing(0.2)}>
              <Typography component="h6" variant="subtitle2" style={{ marginBottom: theme.spacing(2) }}>
                {t('translation_website')}
              </Typography>
              <SelectLanguagePref/>
            </Box>
          </ContentProfil>
        </Grid>
        <Grid item={true} xs={12} md={9}>
          <ContentProfil>
            <Box component="span" display="flex" alignItems="center">
              <PersonIcon style={{ marginRight: '10px' }}/>
              <Typography variant="h6" component="span" color="textPrimary">
                {t('your_events')}
              </Typography>
            </Box>
            <Divider/>
            <Box component="div" marginY={theme.spacing(0.2)}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '.75rem' }}>
                <Button variant="contained" disableElevation={true} size="small" color="secondary"
                        startIcon={<FaPlus/>}>
                  {t('add_event')}
                </Button>
              </div>
            </Box>
          </ContentProfil>
        </Grid>
      </Grid>
    </>
  )
}

export default SettingsAccount

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin  : theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

function SelectLanguagePref () {
  const classes   = useStyles()
  const languages = [
    {
      code        : 'fr',
      name        : 'Français',
      country_code: 'fr',
    },
    {
      code        : 'en',
      name        : 'English',
      country_code: 'gb'
    }
  ]
  return (
    <>
      <FormControl variant="outlined" size="medium" fullWidth={true} className={classes.formControl}>
        <InputLabel>Langues</InputLabel>
        <Select onChange={(e) => i18next.changeLanguage(`${e.target.value}`)} label="Langues" autoWidth={true}
                defaultValue={'Français'}>
          {languages.map(l => (<MenuItem value={l.code}>{l.name}</MenuItem>))}
        </Select>
      </FormControl>
    </>
  )
}
