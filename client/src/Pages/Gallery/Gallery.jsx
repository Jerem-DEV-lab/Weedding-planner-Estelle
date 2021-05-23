import React, { useEffect, useState } from 'react'
import axios                          from 'axios'
import Footer                         from '../../Components/Footer/Footer'
import Nav                            from '../../Components/NavBar/Nav'
import ImgsGallery                    from './Components/ImgsGallery'
import LoaderGallery                  from './Components/LoaderGallery'
import ErrorLoadGallery               from './Components/ErrorsLoadGallery'

const Gallery = () => {
  const [gallery, setGallery] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors]   = useState({ err: false, reason: '' })
  useEffect(() => {
    axios.get('https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=' + process.env.REACT_APP_INSTA_TOKEN + '&limit=75')
         .then(res => {
           setLoading(false)
           setErrors({ err: false, reason: '' })
           setGallery(res.data.data)
         })
         .catch(() => {
           setErrors({ err: true, reason: 'Impossible de charger la galerie photo' })
           setLoading(false)
         })
  }, [])
  return (
    <>
      <Nav bgColor="#FFF" typoColor="#000"/>
      {loading ? <>
        <LoaderGallery/>
      </> : errors.err ? <ErrorLoadGallery errors={errors.reason}/> : <ImgsGallery gallery={gallery}/>
      }
      <Footer/>
    </>
  )
}

export default Gallery
