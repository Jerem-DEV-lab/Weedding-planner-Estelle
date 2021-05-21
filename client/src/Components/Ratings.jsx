import React, { useContext }                       from 'react'
import Box                                         from '@material-ui/core/Box'
import { makeStyles }                              from '@material-ui/core/styles'
import { dateParser }                              from '../tools/helperDate'
import { FaStar }                                  from 'react-icons/fa'
import Typography                                  from '@material-ui/core/Typography'
import Button                                      from '@material-ui/core/Button'
import { ButtonGroup, CardActions }                from '@material-ui/core'
import { useDispatch }                             from 'react-redux'
import { requestDeleteRating, requestValidRating } from '../actions/adminAction'
import { UserContext }                             from '../Context/UserContext'

const useStyles = makeStyles(theme => (
  {
    root            : {
      display        : 'flex',
      flexDirection  : 'column',
      justifyContent : 'space-between',
      maxWidth       : '500px',
      backgroundColor: '#FFF',
      border         : 'solid 1px #43434343',
      borderRadius   : '5px',
      marginTop      : theme.spacing(4),
      paddingTop     : theme.spacing(2),
      paddingBottom  : theme.spacing(1),
      paddingRight   : theme.spacing(3),
      paddingLeft    : theme.spacing(3),
      minHeight      : '240px'
      
    },
    ratingUser      : {
      display                       : 'flex',
      alignItems                    : 'center',
      [theme.breakpoints.down('md')]: {
        flexWrap: 'wrap'
      },
      '& > * '                      : {
        marginRight: theme.spacing(2)
      }
    },
    headerCardRating: {
      display       : 'flex',
      justifyContent: 'space-between',
      '& img'       : {
        width       : '40px',
        height      : '40px',
        objectFit   : 'cover',
        borderRadius: '50%'
      }
    },
    ratingContent   : {
      marginTop : theme.spacing(2),
      lineHeight: '1.4',
    },
    buttonActions   : {
      display       : 'flex',
      padding       : 0,
      justifyContent: 'flex-end',
      flexDirection : 'row',
      width         : '100%',
      marginTop     : theme.spacing(2)
    }
  }
))

const colors  = {
  orange: '#FFBA5A',
  grey  : '#a9a9a9'
  
}
const Ratings = ({ noticeInfo }) => {
  const classes        = useStyles()
  const stars          = Array(5).fill(0)
  const dispatch       = useDispatch()
  const { userLogged } = useContext(UserContext)
  return (
    <>
      <Box className={classes.root}
           style={userLogged.isLogged && userLogged.userRole.includes('ROLE_ADMIN') ? { justifyContent: 'space-between' } : { justifyContent: 'normal' }}>
        <div className={classes.headerCardRating}>
          <div className={classes.ratingUser}>
            <img src="/assets/about.jpg" alt="aucun"/>
            <div className="d-flex flex-column">
              {noticeInfo.firstName}&nbsp;{noticeInfo.lastName}
              <div className="mt1">
                {stars.map((_, index) => {
                  return (
                    <FaStar
                      key={index}
                      size={16}
                      color={(noticeInfo.rating) > index ? colors.orange : colors.grey}
                      style={{
                        marginRight: 10,
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </div>
          <Typography variant="body2" className="mobile-hidden">
            Le : {dateParser(noticeInfo.createdAt)}
          </Typography>
        </div>
        <div className={classes.ratingContent}>
          {noticeInfo.content}
        </div>
        {userLogged.isLogged && userLogged.userRole.includes('ROLE_ADMIN') &&
         <CardActions>
           <ButtonGroup className={classes.buttonActions}>
             {noticeInfo.isPublished === false &&
              <Button variant="contained" color="primary" disableElevation={true} size={'small'}
                      onClick={() => dispatch(requestValidRating(noticeInfo._id))}>Valider</Button>}
             <Button variant="contained" color="secondary" disableElevation={true} size={'small'}
                     onClick={() => dispatch(requestDeleteRating(noticeInfo._id))}>Supprimer</Button>
           </ButtonGroup>
         </CardActions>
        }
      </Box>
    </>
  )
}

export default Ratings
