import FullStar from '../../assets/fullStar.png'
import EmptyStar from '../../assets/emptyStar.png'
import { Stars } from './style'

interface StarProps {
  rate:string
}

function Star({rate}: StarProps) {
  const rating = []
  for (let i = 0; i < 5; i++) {
    rating.push(rating.length < Number(rate) ? FullStar : EmptyStar)
  }
  return (
    <Stars>
      {rating?.map((star, index) => (
        <img src={star} key={`étoile-${index}`} alt="star" />
      ))}
    </Stars>
  )
}

export default Star
