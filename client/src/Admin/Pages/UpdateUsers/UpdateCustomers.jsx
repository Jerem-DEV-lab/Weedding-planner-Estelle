import React, { useEffect, useState }                                            from 'react'
import { useHistory, useParams }                                                 from 'react-router-dom'
import { useDispatch, useSelector }                                              from 'react-redux'
import { CardHeader, Grid, Card, Typography, TableCell, Switch, Button, Avatar } from '@material-ui/core'
import { makeStyles, useTheme }                                                  from '@material-ui/core/styles'
import Divider                                                                   from '@material-ui/core/Divider'
import TableContainer
                                                                                 from '@material-ui/core/TableContainer'
import TableBody                                                                 from '@material-ui/core/TableBody'
import TableRow                                                                  from '@material-ui/core/TableRow'
import CreateIcon                                                                from '@material-ui/icons/Create'
import { isEmpty }                                                               from '../../../tools'
import {
  requestApiBanUser,
  requestApiUsers,
  resetEvent
}                                                                                from '../../../actions/adminAction'
import Toastify                                                                  from '../../../Components/Toastify'
import IconButton                                                                from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
  root           : {
    padding: theme.spacing(2)
  },
  typoTable      : {
    fontWeight: '400',
  },
  accountVerified: {
    display       : 'inline-flex',
    padding       : '4px 8px',
    fontSize      : '0.6875rem',
    borderRadius  : '5px',
    whiteSpace    : 'nowrap',
    justifyContent: 'center',
    color         : '#FFF',
    marginTop     : '.25rem'
  }
}))

const UpdateCustomer = () => {
  const classes                     = useStyles()
  const { customerId }              = useParams()
  const adminState                  = useSelector(state => state.adminReducers)
  const filterUser                  = adminState.listUser.filter(user => user._id === customerId)
  const [userTarget, setUserTarget] = useState({})
  const theme                       = useTheme()
  const [userBan, setUserBan]       = useState(false)
  const [updateUser, setUpdateUser] = useState(false)
  const dispatch                    = useDispatch()
  const history                     = useHistory()
  
  useEffect(() => {
    setUserTarget(filterUser[0])
    setUserBan(filterUser[0].userIsBan)
  }, [])
  useEffect(() => {
    if (adminState.successBan) {
      setTimeout(() => {
        dispatch(resetEvent())
        dispatch(requestApiUsers())
        history.push('/admin/users')
      }, 1500)
    }
  }, [adminState.successBan])
  
  function checkIfChanged () {
    if (!isEmpty(userTarget)) {
      return userBan !== userTarget.userIsBan
    }
  }
  
  const changeInputState = () => {
    setUpdateUser(true)
  }
  
  const handleChange = (e) => {
    setUserBan(e.target.checked)
    checkIfChanged()
  }
  
  function banOrUnbanUser (userId) {
    dispatch(resetEvent())
    dispatch(requestApiBanUser(userId, userBan))
  }
  
  const ActionsCard = ({ userId }) => {
    return (<>
        {checkIfChanged() && updateUser &&
         <Button variant="contained" size="small" color="primary"
                 className="mr2"
                 onClick={() => banOrUnbanUser(userId)}
                 disableElevation={true}>{!userBan ? 'Débannir' : 'Bannir'}</Button>
        }
        {updateUser ? <Button disableElevation={true} color="secondary" onClick={() => setUpdateUser(false)}
                              size="small">Annuler</Button> :
         <IconButton aria-label="edit" color="primary" size="small" onClick={changeInputState}>
           <CreateIcon/>
         </IconButton>}
      </>
    )
  }
  return (
    <>
      {adminState.successBan && <Toastify message={adminState.successBan}/>}
      {userTarget && <>
        <Grid container={true}>
          <Grid item={true} xs={6}>
            <Card variant="outlined">
              <CardHeader className={classes.root} title={
                <Typography variant="h6" component="span">Détails du client</Typography>
              } avatar={<Avatar alt={userTarget.firstName} src={userTarget.userAvatar}/>} action={
                <ActionsCard userId={userTarget._id}/>
              }/>
              <Divider/>
              <TableContainer component={'table'}>
                <TableBody>
                  <TableRow>
                    <TableCell align="left" size="small">
                      <Typography component="h6" variant="subtitle2" className={classes.typoTable}>Email</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography component="p" variant="subtitle2"
                                  className={classes.typoTable}>{userTarget.email}
                      </Typography>
                      {userTarget.accountVerified ?
                       <span className={classes.accountVerified}
                             style={{ backgroundColor: theme.palette.success.main, textTransform: 'uppercase' }}>Compte vérifié</span> :
                       <span className={classes.accountVerified}
                             style={{ backgroundColor: theme.palette.secondary.main, textTransform: 'uppercase' }}> Compte non vérifié</span>}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <Typography component="h6" variant="subtitle2" className={classes.typoTable}>
                        Téléphone
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography component="h6" variant="subtitle2" className={classes.typoTable}
                                  style={{ letterSpacing: '.08rem' }}>
                        {userTarget.phone}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <Typography component="h6" variant="subtitle2" className={classes.typoTable}>
                        Adresse
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography component="h6" variant="subtitle2" className={classes.typoTable}>
                        {userTarget.address}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <Typography component="h6" variant="subtitle2" className={classes.typoTable}>
                        Code postal
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography component="h6" variant="subtitle2" className={classes.typoTable}>
                        {userTarget.postalCode}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <Typography component="h6" variant="subtitle2" className={classes.typoTable}>
                        Inscrit aux ateliers
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography component="h6" variant="subtitle2" className={classes.typoTable}>
                        {userTarget.workshopRegistered ? 'Oui' : 'Non'}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <Typography component="h6" variant="subtitle2" className={classes.typoTable}>
                        Utilisateur banni
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      {updateUser ? <>
                        <Switch
                          checked={userBan}
                          onChange={handleChange}
                          inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                      </> : <Typography component="h6" variant="subtitle2" className={classes.typoTable}>
                         {userTarget.userIsBan ? 'Oui' : 'Non'}
                       </Typography>}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </TableContainer>
            </Card>
          </Grid>
        </Grid>
      </>}
    </>
  )
}

export default UpdateCustomer
