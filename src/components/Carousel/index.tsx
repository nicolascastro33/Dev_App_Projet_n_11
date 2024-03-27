import styled from 'styled-components'
import arrow from '../../assets/arrowCarousel.png'
import { useState } from 'react'
import colors from '../../utils/style/color'

const CarouselWrapper = styled.article`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  height: 415px;
  & p {
    position: absolute;
    left: 50%;
    bottom: 5%;
    font-weight: bold;
    color: ${colors.white}
  }
`

const Picture = styled.img`
  min-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Arrow = styled.img`
  position: absolute;
  top: 40%;
  cursor: pointer;
  &:nth-child(2n) {
    left: 5%;
    transform: rotate(180deg);
  }
  &:nth-child(1n) {
    right: 5%;
  }
`

function Carousel({ pictures }) {
  const [picture, setPicture] = useState(0)
  const nextPicture = picture === pictures.length - 1 ? 0 : picture + 1
  const previousPicture = picture === 0 ? pictures.length - 1 : picture - 1
  return (
    <CarouselWrapper>
      <Picture src={pictures[picture]} alt="picture of the flat" />
      {pictures.length > 1 && (
        <>
          <Arrow src={arrow} alt="previous picture" onClick={() => setPicture(previousPicture)} />
          <Arrow src={arrow} alt="next picture" onClick={() => setPicture(nextPicture)}/>
          <p>
            {picture + 1}/{pictures.length }
          </p>
        </>
      )}
    </CarouselWrapper>
  )
}

export default Carousel
