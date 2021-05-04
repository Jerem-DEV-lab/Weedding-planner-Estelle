import React                from 'react'
import { makeStyles }       from '@material-ui/core/styles'
import Tabs                 from '@material-ui/core/Tabs'
import Tab                  from '@material-ui/core/Tab'
import Typography           from '@material-ui/core/Typography'
import Box                  from '@material-ui/core/Box'
import { Container, Paper } from '@material-ui/core'
import Divider              from '@material-ui/core/Divider'
import { useTranslation }   from 'react-i18next'
import GeneralProfil        from '../../Components/UserProfil/GeneralProfil'
import NotificationsProfile from '../../Components/UserProfil/NotificationsProfile'
import SettingsAccount      from '../../Components/UserProfil/SettingsAccount/SettingsAccount'
import Footer               from '../../Components/Footer/Footer'
import Nav                  from '../../Components/NavBar/Nav'

function TabPanel (props) {
  const { children, value, index, ...other } = props
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps (index) {
  return {
    id             : `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '0',
    flexGrow : 1,
  },
}))

export default function UserProfil () {
  const classes           = useStyles()
  const [value, setValue] = React.useState(0)
  const { t }             = useTranslation()
  const handleChange      = (event, newValue) => {
    setValue(newValue)
  }
  
  return (
    <>
      <Nav bgColor="#FFF" typoColor="#000"/>
      <Divider/>
      <Container maxWidth="xl">
        <div className={classes.root}>
          <Paper square={true} style={{ background: 'transparent' }} elevation={0}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
                  variant="scrollable"
                  scrollButtons="auto">
              <Tab label={t('general_profil_label')} {...a11yProps(0)} />
              <Tab label={t('notification_profil_label')}  {...a11yProps(1)} />
              <Tab label={t('settings_profil_label')} {...a11yProps(2)} />
            </Tabs>
          </Paper>
          <TabPanel value={value} index={0}>
            <GeneralProfil/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <NotificationsProfile/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <SettingsAccount/>
          </TabPanel>
        </div>
      </Container>
      <Footer/>
    </>
  )
}
