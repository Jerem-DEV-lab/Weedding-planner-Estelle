import React              from 'react'
import { Grid }           from '@material-ui/core'
import Typography         from '@material-ui/core/Typography'
import Box                from '@material-ui/core/Box'
import PersonIcon         from '@material-ui/icons/Person'
import Divider            from '@material-ui/core/Divider'
import { ContentProfil }  from '../GeneralProfil'
import { useTheme }       from '@material-ui/core/styles'
import FormChangePassword from './FormChangePassword'

const SettingsAccount = () => {
  const theme = useTheme()
  return (
    <>
      <Grid container={true}>
        <Grid item={true} xs={12} md={9}>
          <ContentProfil>
            <Box component="span" display="flex" alignItems="center">
              <PersonIcon style={{ marginRight: '10px' }}/>
              <Typography variant="h6" component="span" color="textPrimary">
                Paramètres générale du compte
              </Typography>
            </Box>
            <Divider/>
            <Box component="div" marginY={theme.spacing(0.2)}>
              <Typography component="h6" variant="subtitle2" style={{ marginBottom: theme.spacing(2) }}>
                Sécurité
              </Typography>
              <FormChangePassword/>
            </Box>
          </ContentProfil>
        </Grid>
      </Grid>
    </>
  )
}

export default SettingsAccount
