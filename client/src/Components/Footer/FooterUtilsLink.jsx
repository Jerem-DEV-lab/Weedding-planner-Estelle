import React              from 'react'
import { makeStyles }     from '@material-ui/core'
import { Link }           from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
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

const FooterUtilsLink = () => {
  const classes = useStyles()
  const { t }   = useTranslation()
  return (
    <>
      <ul style={{ padding: '.75rem' }}>
        <li className={classes.listItem}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={classes.listItem}>
          <Link to="/cgu">{t('cgu')}</Link>
        </li>
      </ul>
    
    </>
  )
}

export default FooterUtilsLink
