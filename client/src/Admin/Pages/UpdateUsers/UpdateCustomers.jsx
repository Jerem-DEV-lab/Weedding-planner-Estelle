import React, { useEffect, useState }                    from 'react'
import { useParams }                                     from 'react-router-dom'
import { useSelector }                                   from 'react-redux'
import { CardHeader, Grid, Card, Typography, TableCell } from '@material-ui/core'
import { makeStyles, useTheme }                          from '@material-ui/core/styles'
import Divider                                           from '@material-ui/core/Divider'
import TableContainer                                    from '@material-ui/core/TableContainer'
import TableBody                                         from '@material-ui/core/TableBody'
import TableRow                                          from '@material-ui/core/TableRow'
import IconButton                                        from '@material-ui/core/IconButton'
import CreateIcon                                        from '@material-ui/icons/Create'

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
  useEffect(() => {
    setUserTarget(filterUser[0])
    // eslint-disable-next-line
  }, [])
  console.log(userTarget)
  return (
    <>
      {userTarget && <>
        <Grid container={true}>
          <Grid item={true} xs={6}>
            <Card variant="outlined">
              <CardHeader className={classes.root} title={
                <Typography variant="h6" component="span">Détails du client</Typography>
              } action={
                <IconButton aria-label="edit" color="primary">
                  <CreateIcon/>
                </IconButton>
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
                      <Typography component="h6" variant="subtitle2" className={classes.typoTable}>
                        {userTarget.userIsBan ? 'Oui' : 'Non'}
                      </Typography>
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
