import React               from 'react'
import { Container, Grid } from '@material-ui/core'
import Typography          from '@material-ui/core/Typography'
import { makeStyles }      from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  footer  : {
    backgroundColor: '#B7884C',
    color          : '#FFF',
    padding        : '.75rem'
  },
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
const Footer    = () => {
  const classes = useStyles()
  return <>
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container={true}>
          <Grid item={true} xs={12} md={4}>
            <Typography variant="subtitle2">
              Retrouvez moi sur les Réseaux
            </Typography>
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
          </Grid>
        </Grid>
      </Container>
      <div style={{ textAlign: 'center', fontSize: '14px' }}>
        © Copyright - Tous droits réserver 2021 - Estelle Rouille - Développeur Guillemet Jeremy
      </div>
    </footer>
  </>
}

export default Footer

const SVGIcons = ({ svg, alt }) => {
  return <>
    <img src={svg} alt={alt}/>
  </>
}
