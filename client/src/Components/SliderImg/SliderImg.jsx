import React        from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const optionsSlider = {
  autoFocus                               : false,
  autoPlay                                : true,
  interval                                : 4000,
  showArrows                              : false,
  showIndicators                          : false,
  showStatus                              : false,
  swipeable                               : false,
  useKeyboardArrows                       : false,
  infiniteLoop                            : true,
  emulateTouch                            : false,
  showThumbs                              : false,
  centerMode                              : false,
  preventMovementUntilSwipeScrollTolerance: 'false',
  renderThumbs                            : function () {}
}
const SliderImg     = ({ imgToShow = [{}], styleImg, options = { ...optionsSlider } }) => {
  return (
    <Carousel interval={4000} autoFocus={false}
              showIndicators={false} swipeable={false}
              useKeyboardArrows={false} showStatus={false}
              showThumbs={false}
              emulateTouch={false}
              stopOnHover={false}
              autoPlay={true}
              preventMovementUntilSwipeScrollTolerance={true}
              thumbWidth={'100%'}
              showArrows={false} infiniteLoop={true}>
      {imgToShow.map((img, index) => (
        <img key={index} src={img.imgSrc} alt={img.altAttr} style={styleImg}/>
      ))}
    </Carousel>
  )
}

export default SliderImg
