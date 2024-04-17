import arrowRight from '../../assets/arrowCarouselRight.png'
import arrowLeft from '../../assets/arrowCarouselLeft.png'
import { useState } from 'react'
import { CarouselWrapper, Picture, ArrowWrapper } from './style'

interface CarouselProps{
  pictures: string[]
}

function Carousel({ pictures }: CarouselProps) {
  const [picture, setPicture] = useState(0)
  const nextPicture = picture === pictures.length - 1 ? 0 : picture + 1
  const previousPicture = picture === 0 ? pictures.length - 1 : picture - 1
  return (
    <CarouselWrapper>
      <Picture src={pictures[picture]} alt="picture of the flat" />
      {pictures.length > 1 && (
        <>
          <ArrowWrapper onClick={() => setPicture(previousPicture)}>
            <img src={arrowLeft} alt="previous picture" />
          </ArrowWrapper>

          <ArrowWrapper onClick={() => setPicture(nextPicture)}>
            <img src={arrowRight} alt="next picture" />
          </ArrowWrapper>
          <p>
            {picture + 1}/{pictures.length}
          </p>
        </>
      )}
    </CarouselWrapper>
  )
}

export default Carousel
