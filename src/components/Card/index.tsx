import Proptypes from 'prop-types'
import Image from '../../assets/homeIllustration.png'
import { Link } from 'react-router-dom'
import {CardContainer, ImgWrapper, TextContentWrapper} from "./style"

interface CardProps{
  title:string;
  image:string;
  id:string
}

function Card({ title, image, id }:CardProps) {
  return (
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
