import React, { useEffect, useState }                             from 'react'
import { ButtonGroup, CircularProgress, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles }                                             from '@material-ui/core/styles'
import { useDispatch, useSelector }                               from 'react-redux'
import PersonRoundedIcon                                          from '@material-ui/icons/PersonRounded'
import AddCircleIcon                                              from '@material-ui/icons/AddCircle'
import Button                                                     from '@material-ui/core/Button'
import ModalCreateNewsletter
                      from '../../Components/ModalNewsletter/ModalCreateNewsletter'
import CardNews       from '../../Components/Card/CardNews'
import Popup          from '../../Components/Popup/Popup'
import NewsletterForm from '../../Components/ModalNewsletter/NewsletterForm'
import { useForm }    from '../../../Hooks/useForm'
import {
  requestApiDeleteNewsletter,
  requestApiGetNewsletter,
  requestApiUpdateNewsletter, resetEvent
} from '../../../actions/adminAction'
import { Alert }      from '@material-ui/lab'
import ModalSendNewsletter
                      from '../../Components/ModalNewsletter/ModalSendNewsletter'

const useStyles       = makeStyles((theme) => ({
  root        : {
    display           : 'flex',
    alignItems        : 'center',
    flexWrap          : 'wrap',
    width             : '100%',
    '& .MuiPaper-root': {
      padding: theme.spacing(3),
    },
    extendedIcon      : {
      marginRight: theme.spacing(1),
    },
  },
  titleSection: {
    marginTop   : theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}))

function checkUserWithNewsLetter (user) {
  return user.newsLetter === true
}

let initialTarget     = {
  titleNews   : '',
  contentNews : '',
  dynamicData : [],
  template_id : '',
  subjectEmail: ''
}
const IndexNewsLetter = () => {
  const dispatch                                 = useDispatch()
  const classes                                  = useStyles()
  const [createNews, setCreateNews]              = useState(false)
  const adminState                               = useSelector(state => state.adminReducers)
  const orderUserNewsletter                      = adminState.listUser.filter(checkUserWithNewsLetter)
  const [openPopup, setOpenPopup]                = useState(false)
  const { values, setValues, handleChangeInput } = useForm(initialTarget)
  const [openModalSendNew, setOpenModalSendNew]  = useState(false)
  
  const handleClick        = (targetContext) => {
    setOpenPopup(true)
    setValues({ ...values, ...targetContext })
  }
  const openModalSendNews  = (targetContext) => {
    setOpenModalSendNew(true)
    setValues({ ...values, ...targetContext })
  }
  const deleteNews         = (newsId) => {
    dispatch(requestApiDeleteNewsletter(newsId))
  }
  const closePopup         = () => {
    setOpenPopup(false)
    setValues(initialTarget)
    dispatch(resetEvent())
  }
  const closeModalSendNews = () => {
    setOpenModalSendNew(false)
  }
  const updateNews         = (newsId) => {
    dispatch(requestApiUpdateNewsletter(values, newsId))
  }
  const newsData           = useSelector(state => state.adminReducers)
  useEffect(() => {
    dispatch(requestApiGetNewsletter())
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <ModalSendNewsletter open={openModalSendNew} close={closeModalSendNews} newsInfo={values}/>
      <Popup openPopup={openPopup} title="Modifier la news" onClose={closePopup}>
        {adminState.updateSuccessNews &&
         <div className="mb2">
           <Alert severity="success">{adminState.updateSuccessNews}</Alert>
         </div>
        }
        <NewsletterForm values={values} open={closePopup} onChange={handleChangeInput}/>
        <div className="btn-center-x">
          <ButtonGroup disableElevation>
            <Button variant="contained" color="primary" onClick={() => updateNews(values._id)}>Modifier</Button>
            <Button variant="outlined" color="secondary" onClick={closePopup}>Annuler</Button>
          </ButtonGroup>
        </div>
      </Popup>
      {createNews && <ModalCreateNewsletter open={() => setCreateNews(!createNews)}/>}
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
                endIcon={<AddCircleIcon/>}>
                Créer une newsletter
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <Typography variant="h6" component="h1" color="textPrimary" gutterBottom className={classes.titleSection}>
        Listes des newsletters publier :
      </Typography>
      <Grid container spacing={4}>
        {newsData.isLoading ? <CircularProgress/> :
         newsData.newsLetters &&
         newsData.newsLetters.map(
           news =>
             (<Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
               <CardNews
                 titleImage="Un test"
                 titleCard={news.titleNews}
                 contentCard={news.contentNews}
                 onClick1={() => handleClick(news)}
                 onClick2={() => deleteNews(news._id)}
                 onClick3={() => openModalSendNews(news)}
                 labelBtn1="Éditer"
                 labelBtn2="Supprimer"
                 labelBtn3="Envoyer"
               />
             </Grid>))}
      </Grid>
    
    </>
  )
}

export default IndexNewsLetter
