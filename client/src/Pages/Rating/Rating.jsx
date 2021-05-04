import React, { useEffect, useState } from 'react'
import NavOld                         from '../../Components/NavBar/Nav.old'
import {
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle, Grid,
  TextField
}                                     from '@material-ui/core'
import Typography                   from '@material-ui/core/Typography'
import Box                          from '@material-ui/core/Box'
import { useTranslation }           from 'react-i18next'
import Button                       from '@material-ui/core/Button'
import { Edit }                     from '@material-ui/icons'
import { withStyles }               from '@material-ui/core/styles'
import { FaStar }                   from 'react-icons/fa'
import { useForm }                  from '../../Hooks/useForm'
import axios                        from 'axios'
import Ratings                      from '../../Components/Ratings'
import { useDispatch, useSelector } from 'react-redux'
import { requestApiAddRating }      from '../../actions/ratingAction'
import Toastify                     from '../../Components/Toastify'

const styles        = {
  title: {
    fontWeight: '500'
  },
  stars: {
    display      : 'flex',
    flexDirection: 'row',
  },
}
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
      <NavOld/>
      <DialogFormReview open={createReview} close={() => setCreateReview(!createReview)}/>
      <Container maxWidth="lg">
        <Box marginTop={6} display="flex" justifyContent="space-between">
          <Typography variant="h4" component="h1" style={styles.title}>{t('ratingTitle')}</Typography>
          <SendRatingBtn endIcon={<Edit/>} onClick={() => setCreateReview(true)}>{t('buttonRating')}</SendRatingBtn>
        </Box>
        <Grid container={true} spacing={2}>
          {ratings && ratings.map((r, index) => (
            <Grid item={true} xs={12} md={6} lg={4} xl={4}>
              <Ratings noticeInfo={r}/>
            </Grid>))}
    
        </Grid>
      </Container>
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
