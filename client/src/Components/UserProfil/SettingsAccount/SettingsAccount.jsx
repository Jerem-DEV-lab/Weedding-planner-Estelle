import React, { useState }                                   from 'react'
import { Button, Grid, InputLabel, MenuItem, Paper, Select } from '@material-ui/core'
import Typography                                            from '@material-ui/core/Typography'
import Box                                                   from '@material-ui/core/Box'
import Divider                                               from '@material-ui/core/Divider'
import { ContentProfil }                                     from '../GeneralProfil'
import { makeStyles, useTheme }                              from '@material-ui/core/styles'
import FormChangePassword                                    from './FormChangePassword'
import { useTranslation }                                    from 'react-i18next'
import GTranslateIcon                                        from '@material-ui/icons/GTranslate'
import FormControl                                           from '@material-ui/core/FormControl'
import i18next                                               from 'i18next'
import { useSelector }                                       from 'react-redux'
import SettingsIcon                                          from '@material-ui/icons/Settings'
import SpaIcon                                               from '@material-ui/icons/Spa'
import { dateParser }                                        from '../../../tools/helperDate'
import DeleteForeverIcon                                     from '@material-ui/icons/DeleteForever'
import HeaderSectionProfil                                   from './HeaderSectionProfil'
import ContentSectionProfil                                  from './ContentSectionProfil'
import ModalConfirmDeleteAccount                             from './ModalConfirmDeleteAccount'

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
  const { t }                     = useTranslation()
  const theme                     = useTheme()
  const classes                   = useStyles2()
  const { workshopInfos }         = useSelector(state => state.userReducers).userInfo
  const [modalOpen, setModalOpen] = useState(false)
  
  return (
    <>
      <div style={{ minHeight: 'calc(100vh - 351px)' }}>
        {modalOpen && <ModalConfirmDeleteAccount open={modalOpen} closeModal={() => setModalOpen(false)}/>}
        <Grid container={true} spacing={5}>
          <Grid item={true} xs={12} md={9}>
            <ContentProfil>
              <HeaderSectionProfil
                Icon={<SettingsIcon style={{ marginRight: '10px' }}/>}
                labelTitle={t('general_account_settings')}
              />
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
            <HeaderSectionProfil
              Icon={<GTranslateIcon style={{ marginRight: '10px' }}/>}
              labelTitle={t('pref_language')}
            />
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
              {workshopInfos && workshopInfos.length > 0 ? workshopInfos.map(w => (
                <Paper className={classes.rootPaper} elevation={0}>
                  <Typography variant="body1" style={{ fontWeight: 500 }}>
                    {t('next_workShop')} :
                  </Typography>
                  <Typography>
                    {t('workShopDate')} : <span style={{ fontWeight: 500 }}>{dateParser(w.start_at)}</span>
                  </Typography>
                  <Typography>
                    {t('workshopName')} : <span style={{ fontWeight: 500 }}>{w.nameWorkshop}</span>
                  </Typography>
                  <Typography>
                    {t('workshopType')} : <span style={{ fontWeight: 500 }}>{w.typeWorkshop}</span>
                  </Typography>
                </Paper>
              )) : <Typography>
                 {t('workShopNotExist')} :
               </Typography>}
            </Box>
          </ContentProfil>
        </Grid>
          <Grid item={true} xs={12} md={3}>
            <ContentProfil>
              <HeaderSectionProfil
                Icon={<DeleteForeverIcon style={{ marginRight: '10px' }} fontSize="medium" color="textPrimary"/>}
                labelTitle={t('delete_account')}
                color="secondary"
              />
              <ContentSectionProfil>
                <Typography variant="subtitle2" component="p" gutterBottom>{t('delete_account_content1')}</Typography>
                <Typography variant="subtitle2" component="p">{t('delete_account_content2')}</Typography>
                <Box display="flex" justifyContent="flex-end" width="100%">
                  <Button
                    variant="contained"
                    disableElevation
                    color="secondary"
                    size="small"
                    onClick={() => setModalOpen(true)}
                    className="mt1">Supprimer mon compte
                  </Button>
                </Box>
              </ContentSectionProfil>
            </ContentProfil>
          </Grid>
        </Grid>
      </div>
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
