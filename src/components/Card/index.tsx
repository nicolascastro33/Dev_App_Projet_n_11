import styled from 'styled-components'
import Proptypes from 'prop-types'
import Image from '../../assets/homeIllustration.png'
import colors from '../../utils/style/color'
import { Link } from 'react-router-dom'

const CardContainer = styled.article`
  background-color: ${colors.primary};
  display: grid;
  grid-template-rows: 3fr 1fr;
  border-radius: 20px;
  height: 340px;
  transform: scale(1);
  transition: transform 500ms ease-in-out;
  width: 100%;
  flex: 1 1;
  &:hover {
    transform: scale(1.04);
    transition: transform 500ms ease-in-out;
  }
 
  @media (max-width: 1200px) {
    height: 315px;
  } 
  
  @media (max-width: 768px) {
    height: 255px;
  }
`

const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  margin: 10px 10px 0 10px;
  & img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300%;
  }
`

const TextContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  & h2 {
    color: ${colors.white};
    font-size: 1rem;
    text-align: center;
  }
`

interface CardProps{
  title:string;
  image:string;
  id:string
}


function Card({ title, image, id }:CardProps) {
  return (
    <>
      <Link to={`/flat/${id}`}>
        <CardContainer>
          <ImgWrapper>
            <img src={image} alt={`photo-appartement-${title}`} />
          </ImgWrapper>
          <TextContentWrapper>
            <h2>{title}</h2>
          </TextContentWrapper>
        </CardContainer>
      </Link>
    </>
  )
}

Card.prototypes = {
  title: Proptypes.string.isRequired,
  image: Proptypes.string,
  id: Proptypes.string,
}

Card.defaultProps = {
  title: 'Mon appartement',
  image: Image,
  id: '',
}

export default Card
