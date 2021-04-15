import React, { useState }         from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles }              from '@material-ui/core/styles'
import { useSelector }             from 'react-redux'

import PersonRoundedIcon     from '@material-ui/icons/PersonRounded'
import NavigationIcon        from '@material-ui/icons/Navigation'
import Button                from '@material-ui/core/Button'
import ModalCreateNewsletter from '../../Components/ModalCreateNewsletter'

const useStyles = makeStyles((theme) => ({
  root: {
    display           : 'flex',
    alignItems        : 'center',
    flexWrap          : 'wrap',
    width             : '100%',
    '& .MuiPaper-root': {
      padding: theme.spacing(1),
    },
    extendedIcon      : {
      marginRight: theme.spacing(1),
    },
  },
}))

function checkUserWithNewsLetter (user) {
  return user.newsLetter === true
}

const IndexNewsLetter = () => {
  const classes                     = useStyles()
  const [createNews, setCreateNews] = useState(false)
  const adminState                  = useSelector(state => state.adminReducers)
  const orderUserNewsletter         = adminState.listUser.filter(checkUserWithNewsLetter)
  return (
    <>
      <div className="p-relative">
        {createNews && <ModalCreateNewsletter open={() => setCreateNews(!createNews)}/>}
      </div>
      <Typography variant="h6" component="h1" color="textPrimary" gutterBottom>
        Gestion de la newsletter :
      </Typography>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <Paper>
              <div className="d-flex align-bottom">
                <PersonRoundedIcon fontSize="large" color="primary"/>
                <Typography>Utilisateurs inscrit à la newsletter</Typography>
              </div>
              <div className="my2">
                <Typography style={{ fontSize: 'clamp(12px, 14px, 18px)', fontWeight: '500' }} gutterBottom>
                  Newsletter générale: {orderUserNewsletter.length}
                </Typography>
                <Typography style={{ fontSize: 'clamp(12px, 14px, 18px)', fontWeight: '500' }} gutterBottom>Newsletter
                  pour les ateliers : {orderUserNewsletter.length}
                </Typography>
                <Typography style={{ fontSize: 'clamp(12px, 14px, 18px)', fontWeight: '500' }} gutterBottom>Newsletter
                  pour les codes promos : {orderUserNewsletter.length}
                </Typography>
              </div>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => setCreateNews(true)}
                className={classes.button}
                endIcon={<NavigationIcon/>}>
                Envoyer une newsletter
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    
    </>
  )
}

export default IndexNewsLetter
