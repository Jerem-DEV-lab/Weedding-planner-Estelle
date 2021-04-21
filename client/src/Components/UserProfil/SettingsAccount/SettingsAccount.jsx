import React                                         from 'react'
import { Grid, InputLabel, MenuItem, Paper, Select } from '@material-ui/core'
import Typography                                    from '@material-ui/core/Typography'
import Box                                           from '@material-ui/core/Box'
import Divider                                       from '@material-ui/core/Divider'
import { ContentProfil }                             from '../GeneralProfil'
import { makeStyles, useTheme }                      from '@material-ui/core/styles'
import FormChangePassword                            from './FormChangePassword'
import { useTranslation }                            from 'react-i18next'
import GTranslateIcon                                from '@material-ui/icons/GTranslate'
import FormControl                                   from '@material-ui/core/FormControl'
import i18next                                       from 'i18next'
import { useSelector }                               from 'react-redux'
import SettingsIcon                                  from '@material-ui/icons/Settings'
import SpaIcon                                       from '@material-ui/icons/Spa'
import { dateParser }                                from '../../../tools/helperDate'

const useStyles2      = makeStyles((theme) => (
  {
    rootPaper: {
      padding: theme.spacing(2),
      '& > *': {
        marginBottom: theme.spacing(2)
      }
    }
  }
))
const SettingsAccount = () => {
  const { t }             = useTranslation()
  const theme             = useTheme()
  const classes           = useStyles2()
  const { workshopInfos } = useSelector(state => state.userReducers).userInfo
  return (
    <>
      <Grid container={true} spacing={5}>
        <Grid item={true} xs={12} md={9}>
          <ContentProfil>
            <Box component="span" display="flex" alignItems="center">
              <SettingsIcon style={{ marginRight: '10px' }}/>
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
              <div style={{ display: 'flex', flexGrow: 1, marginRight: '.75rem' }}>
                <SpaIcon style={{ marginRight: '10px' }}/>
                <Typography variant="h6" component="span" color="textPrimary">
                  {t('workshop')}
                </Typography>
              </div>
            </Box>
            <Divider/>
            <Box component="div" marginY={theme.spacing(0.2)}>
              {workshopInfos && workshopInfos.map(w => (
                <Paper className={classes.rootPaper} elevation={0}>
                  <Typography variant="body1" style={{ fontWeight: 500 }}>
                    Votre prochaine événement :
                  </Typography>
                  <Divider/>
                  <Typography>
                    L'atelier aura lieu le : <span style={{ fontWeight: 500 }}>{dateParser(w.start_at)}</span>
                  </Typography>
                  <Typography>
                    Nom de l'atelier : <span style={{ fontWeight: 500 }}>{w.nameWorkshop}</span>
                  </Typography>
                  <Typography>
                    Type d'atelier: <span style={{ fontWeight: 500 }}>{w.typeWorkshop}</span>
                  </Typography>
                </Paper>
              ))}
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
