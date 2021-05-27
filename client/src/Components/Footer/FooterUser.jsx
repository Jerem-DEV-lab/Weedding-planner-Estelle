import React              from 'react'
import { makeStyles }     from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Link }           from 'react-router-dom'

const useStyles  = makeStyles((theme) => ({
  listItem: {
    display         : 'flex',
    flexDirection   : 'row',
    alignItems      : 'center',
    fontSize        : '14px',
    marginBottom    : theme.spacing(2),
    '& :first-child': {
      marginRight: '.75rem'
    }
  }
}))
const FooterUser = ({ userInfo }) => {
  const classes = useStyles()
  const {t} = useTranslation()
  return (
    <>
      <ul style={{ padding: '.75rem' }}>
        <li className={classes.listItem}>
          <Link to={`/profil/${userInfo._id}`}>
            {t('unsubscribeAccount')}</Link>
        </li>
      </ul>
    </>
  )
}

export default FooterUser
