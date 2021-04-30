import React, { useEffect, useState } from 'react'
import axios                          from 'axios'
import Nav                 from '../../Components/NavBar/Nav'
import { Container, Grid } from '@material-ui/core'
import Box                 from '@material-ui/core/Box'

const Gallery = () => {
  const [gallery, setGallery] = useState([])
  useEffect(() => {
    axios.get('https://graph.instagram.com/me/media?fields=id,caption,permalink&access_token=' + process.env.REACT_APP_INSTA_TOKEN)
         .then(res => {
           setGallery(res.data.data)
         })
         .catch(err => {
           console.log(err)
         })
  }, [])
  return (
    <>
      <Nav/>
      <Container maxWidth="xl">
        <Grid container={true}>
          <Grid item={true} xs={12} md={12} lg={4} xl={4}>
            {gallery.map((pictures, index) => (
              <>
              <Box>
              </Box>
              </>
            ))}
            <Box>
            
            </Box>
          
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Gallery
