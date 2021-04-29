import React, { useEffect }         from 'react'
import { Grid, Paper }              from '@material-ui/core'
import Typography                   from '@material-ui/core/Typography'
import { MdRateReview }             from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { requestApiRating }         from '../../actions/adminAction'
import Box                          from '@material-ui/core/Box'
import Button                       from '@material-ui/core/Button'
import Ratings                      from '../../Components/Ratings'

const ResumeAdminDashboard = () => {
  const dispatch       = useDispatch()
  const ratingReducers = useSelector(state => state.adminReducers).ratings
  useEffect(() => {
    dispatch(requestApiRating())
  }, [dispatch])
  
  return (
    <>
      <Grid container={true}>
        <Grid item={true} xs={12} md={4}>
          <Paper style={{ padding: '.75rem' }}>
            <Typography variant="h6" component="h2" style={{ display: 'flex', alignItems: 'center' }}
                        gutterBottom={true}>
              <MdRateReview size={25} style={{ marginRight: '16px', color: '#303F9F' }}/> Avis en attente de
              confirmation
            </Typography>
            Vous avez {ratingReducers && ratingReducers.length} avis en attente de validation
            <Box display="flex" justifyContent="flex-end">
              <Button color="primary" variant="outlined" size="small">Voir les avis</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid container={true} spacing={2}>
        
        {ratingReducers && ratingReducers.map((r, index) => (
          <Grid item={true} key={index}  md={12} lg={6} xl={4}>
            <Ratings noticeInfo={r}/>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default ResumeAdminDashboard
