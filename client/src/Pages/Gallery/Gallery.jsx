import React, { useEffect, useState } from 'react'
import axios                          from 'axios'
import { Card, Container, Grid }      from '@material-ui/core'
import { makeStyles }                 from '@material-ui/core/styles'
import CardMedia                      from '@material-ui/core/CardMedia'
import Footer                         from '../../Components/Footer/Footer'
import Nav                            from '../../Components/NavBar/Nav'

const useStyles = makeStyles(theme => ({
  root     : {
    maxWidth    : 293,
    borderRadius: '0'
  },
  mediaCard: {
    height                        : 293,
    width                         : 293,
    [theme.breakpoints.down('sm')]: {
      height: 105,
      width : 105,
    },
    [theme.breakpoints.down('md')]: {
      height: 282,
      width : 282,
    },
    [theme.breakpoints.down(814)] : {
      height: 240,
      width : 240,
    },
    [theme.breakpoints.down(748)] : {
      height: 217.333,
      width : 217.333,
    },
    [theme.breakpoints.down(662)] : {
      height: 200,
      width : 200,
    },
    [theme.breakpoints.down(538)] : {
      height: 177.333,
      width : 177.333,
    },
    [theme.breakpoints.down(490)] : {
      height: 161.333,
      width : 161.333,
    },
    [theme.breakpoints.down(442)] : {
      height: 145.333,
      width : 145.333,
    },
    [theme.breakpoints.down(426)] : {
      height: 140,
      width : 140,
    },
    [theme.breakpoints.down(400)] : {
      height: 104,
      width : 104,
    }
  }
}))
const Gallery   = () => {
  const [gallery, setGallery] = useState([])
  const classes               = useStyles()
  useEffect(() => {
    axios.get('https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=' + process.env.REACT_APP_INSTA_TOKEN + '&limit=75')
         .then(res => {
           setGallery(res.data.data)
         })
         .catch(() => {
         })
  }, [])
  return (
    <>
      <Nav bgColor="#FFF" typoColor="#000"/>
      <Container maxWidth="md" style={{ marginBottom: '1.75rem', marginTop: '1.75rem' }}>
        <Grid container={true} spacing={1}>
          {gallery.map((pictures, index) => (
            <>
              <Grid item={true} xs={4} sm={4} md={4} lg={4} xl={4}>
                <Card className={classes.root} elevation={0}>
                  {!pictures.media_url.includes('video') ?
                   <CardMedia className={classes.mediaCard}
                              image={pictures.media_url}/> :
                   <video controls
                          width="100%" height="100%">
                     <source src={pictures.media_url}/>
                   </video>}
              
                </Card>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
      <Footer/>
    </>
  )
}

export default Gallery
