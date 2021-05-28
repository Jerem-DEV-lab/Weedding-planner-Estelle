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
}
const SliderImg     = ({ imgToShow = [{}], styleImg, options = { ...optionsSlider } }) => {
  return (
    <Carousel autoPlay infiniteLoop centerMode={false} showStatus={false} showIndicators={false}
              showArrows={false} showThumbs={false} width="650px">
      {imgToShow.map((img, index) => (
        <div style={{ overflow: 'hidden' }}>
          <img key={index} src={img.imgSrc} alt={img.altAttr} style={styleImg}/>
        </div>
      ))}
    </Carousel>
  )
}

export default SliderImg
