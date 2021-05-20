import React                    from 'react'
import { useDispatch }          from 'react-redux'
import { requestApiLogoutUser } from '../../actions/authenticatorAction'
import { FaArrowRight }         from 'react-icons/fa'
import { useHistory }           from 'react-router-dom'
import { Button }               from '@material-ui/core'
import { useTranslation }       from 'react-i18next'

const Logout = () => {
  const dispatch   = useDispatch()
  const history    = useHistory()
  const logoutUser = () => {
    dispatch(requestApiLogoutUser())
    history.push('/')
  }
  const { t }      = useTranslation()
  return <>
    <Button onClick={logoutUser} startIcon={<FaArrowRight/>} variant="contained" color={'secondary'}
            disableElevation={true} size="small">
      {t('logout')}
    </Button>
  </>
}

export default Logout
