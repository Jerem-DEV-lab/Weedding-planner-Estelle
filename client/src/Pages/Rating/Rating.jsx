import React, { useEffect, useState } from 'react'
import {
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle, Grid, makeStyles,
  TextField
}                                     from '@material-ui/core'
import Typography                     from '@material-ui/core/Typography'
import { useTranslation }             from 'react-i18next'
import Button                         from '@material-ui/core/Button'
import { Edit }                       from '@material-ui/icons'
import { withStyles }                 from '@material-ui/core/styles'
import { FaStar }                     from 'react-icons/fa'
import { useForm }                    from '../../Hooks/useForm'
import axios                          from 'axios'
import Ratings                        from '../../Components/Ratings'
import { useDispatch, useSelector }   from 'react-redux'
import { requestApiAddRating }        from '../../actions/ratingAction'
import Toastify                       from '../../Components/Toastify'
import Nav                            from '../../Components/NavBar/Nav'
import Footer                         from '../../Components/Footer/Footer'

const styles        = {
  stars: {
    display      : 'flex',
    flexDirection: 'row',
  }
}
const useStyles     = makeStyles((theme) => (
  {
    titleHeader  : {
      fontWeight                   : '500',
      [theme.breakpoints.down(461)]: {
        fontSize: '25px'
      }
    },
    labelCenter  : {
      display: 'flex',
      height : '100%'
    },
    labelNoRating: {
      fontSize                     : '25px',
      lineHeight                   : '55px',
      margin                       : `${theme.spacing(20)}px 0`,
      [theme.breakpoints.down(453)]: {
        fontSize: '18px',
        margin  : `${theme.spacing(10)}px 0`,
      }
    },
    fullH        : {
      minHeight                    : 'calc(100vh - 305px)',
      [theme.breakpoints.down(453)]: {
        minHeight: 'calc(100vh - 320px)',
      }
    },
    headerRatings: {
      display                      : 'flex',
      justifyContent               : 'space-between',
      marginTop                    : theme.spacing(4),
      [theme.breakpoints.down(682)]: {
        display          : 'block',
        '& :nth-child(2)': {
          marginTop: theme.spacing(2)
        }
      },
    }
  }
))
const SendRatingBtn = withStyles(theme => (
  {
    root: {
      backgroundColor: '#ECD5B8',
      color          : '#000',
      fontWeight     : '500'
    }
  }
))(Button)
const Rating        = () => {
  const { t }                           = useTranslation()
  const classes                         = useStyles()
  const [ratings, setRatings]           = useState([])
  const [createReview, setCreateReview] = useState(false)
  const ratingReducer                   = useSelector(state => state.ratingReducers)
  
  useEffect(() => {
    axios.get('/rating')
         .then(res => {
           setRatings(res.data)
         })
  }, [])
  return (
    <>
      {ratingReducer.successSubmit && <Toastify message={ratingReducer.successSubmit}/>}
      <Nav bgColor="#FFF" typoColor="#000"/>
      <DialogFormReview open={createReview} close={() => setCreateReview(!createReview)}/>
      <Container maxWidth="lg" className={classes.fullH}>
        <div className={classes.headerRatings}>
          <Typography variant="h4" component="h1" className={classes.titleHeader}>{t('ratingTitle')}</Typography>
          <SendRatingBtn endIcon={<Edit/>} onClick={() => setCreateReview(true)}>{t('buttonRating')}</SendRatingBtn>
        </div>
        {ratings && ratings.length > 0 ? ratings.map((r, index) => (
          <Grid container={true} spacing={2}>
            <Grid item={true} xs={12} md={6} lg={4} xl={4} key={index}>
              <Ratings noticeInfo={r}/>
            </Grid>
          </Grid>)) : <div className={classes.labelCenter}>
           <p className={classes.labelNoRating}>{t('noRatingContent')}</p>
         </div>}
    
      </Container>
      <Footer/>
    </>
  )
}

export default Rating

const DialogFormReview = ({ open, close }) => {
  const initialValues                            = {
    rating   : 0,
    content  : '',
    firstName: '',
    lastName : ''
  }
  const { values, setValues, handleChangeInput } = useForm(initialValues)
  const dispatch                                 = useDispatch()
  
  const submitReview = (e) => {
    e.preventDefault()
    close()
    dispatch(requestApiAddRating(values))
  }
  
  const { t } = useTranslation()
  return <>
    <Dialog
      open={open}
      onClose={close}>
      <DialogTitle id="alert-dialog-title">{t('titleFormReview')} ?</DialogTitle>
      <DialogContent>
        <FormRating values={values} setValues={setValues} handleChangeInput={handleChangeInput}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={submitReview} color="primary" variant="contained" disableElevation={true} size="small">
          Laissez votre avis
        </Button>
      </DialogActions>
    </Dialog>
  </>
}

const colors     = {
  orange: '#FFBA5A',
  grey  : '#a9a9a9'
  
}
const FormRating = ({ values, setValues, handleChangeInput }) => {
  const [hoverValue, setHoverValue] = useState(undefined)
  const stars                       = Array(5).fill(0)
  
  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  }
  
  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
  return <>
    
    <form>
      <Grid container={true} spacing={1}>
        <Grid item={true} xs={6}>
          <TextField value={values.lastName} label="Nom" variant="outlined" fullWidth={true} name="lastName"
                     onChange={handleChangeInput}/>
        </Grid>
        <Grid item={true} xs={6} style={{ marginBottom: '.75rem' }}>
          <TextField value={values.firstName} label="Prénom" variant="outlined" fullWidth={true} name="firstName"
                     onChange={handleChangeInput}/>
        </Grid>
        <Grid item={true} xs={12}>
          <TextField multiline value={values.content} label="Message" variant="outlined" fullWidth={true} rows={4}
                     name="content" onChange={handleChangeInput}/>
        </Grid>
        <Grid item={true} xs={12}>
          Note sur 5 <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => setValues({ ...values, rating: index + 1 })}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || values.rating) > index ? colors.orange : colors.grey}
                style={{
                  marginRight: 10,
                  cursor     : 'pointer'
                }}
              />
            )
          })}
        </div>
        </Grid>
      </Grid>
    </form>
  </>
}
