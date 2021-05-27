import React          from 'react'
import { makeStyles } from '@material-ui/core'

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

const FooterSocialLinks = () => {
  const classes = useStyles()
  return (
    <>
      <ul style={{ padding: '.75rem' }}>
        <li className={classes.listItem}>
          <SVGIcons svg="/assets/svg/facebook.svg"/>
          <a href="https://www.facebook.com/cotecampagneeb" rel="nofollow nooppener noreferrer"
             target="_blank">Facebook</a>
        </li>
        <li className={classes.listItem}>
          <SVGIcons svg="/assets/svg/instagram.svg"/>
          <a href="https://www.instagram.com/estelle_rouille/" rel="nofollow nooppener noreferrer"
             target="_blank">Instagram</a>
        </li>
        <li className={classes.listItem}>
          <SVGIcons svg="/assets/svg/youtube.svg"/>
          <a href="https://www.youtube.com/channel/UCQxOWo1jzXy9hKWSRa0QLlg" rel="nofollow nooppener noreferrer"
             target="_blank">Youtube</a>
        </li>
      </ul>
    </>
  )
}

export default FooterSocialLinks

const SVGIcons = ({ svg, alt }) => {
  return <>
    <img src={svg} alt={alt}/>
  </>
}
