import React, { useEffect, useState }                 from 'react'
import { useHistory, useParams }                      from 'react-router-dom'
import axios                                          from 'axios'
import { CircularProgress, makeStyles }               from '@material-ui/core'
import { useDispatch }                                from 'react-redux'
import { confirmAccountError, confirmAccountSuccess } from '../../actions/authenticatorAction'

const useStyles = makeStyles((theme) => (
  {
    containerLoader: {
      minHeight     : '100vh',
      display       : 'flex',
      flexDirection : 'column',
      alignItems    : 'center',
      justifyContent: 'center'
    },
    textLoader     : {
      fontSize  : '28px',
      fontWeight: 500,
      margin    : `${theme.spacing(3)}px 0`
    }
  }
))

const AccountConfirm = () => {
  const { tokenActive }       = useParams()
  const [loading, setLoading] = useState(true)
  const history               = useHistory()
  const classes               = useStyles()
  const dispatch              = useDispatch()
  useEffect(() => {
    axios.put(`/confirmAccount/${tokenActive}`)
         .then(res => {
           if (res.data.statusCode === 200) {
             setLoading(false)
             dispatch(confirmAccountSuccess('Vous pouvez désormais vous connectez avec votre compte'))
             history.push('/connexion')
           }
         })
         .catch(err => {
           setLoading(false)
           dispatch(confirmAccountError(err.response.data.reason))
           history.push('/connexion')
         })
  }, [tokenActive])
  
  return (
    <div className={classes.containerLoader}>
      {loading && <>
        <CircularProgress size={90}/>
        <p className={classes.textLoader}>En attente de confirmation de votre compte...</p>
      </>}
    </div>
  )
}

export default AccountConfirm
