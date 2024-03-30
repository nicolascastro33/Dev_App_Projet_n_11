import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import flats from '../../data/flat.json'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import EmptyStar from '../../assets/emptyStar.png'
import Star from '../../assets/fullStar.png'
import {
  FlatWrapper,
  TextWrapper,
  FlatInfo,
  AllTags,
  Tag,
  OwnerInfo,
  Owner,
  Stars,
  CollapseWrapper,
} from './style'

function Flat() {
  const id = useLocation().pathname.slice(6)
  const flat = flats.find((element) => element.id === id)  
  const navigate = useNavigate()
  useEffect(() =>{
    if (!flat) navigate("/error")
    document.title = `Kasa - Appartement de ${flat?.host.name}`
})


  const rating = []
  for (let i = 0; i < 5; i++) {
    rating.push(rating.length < Number(flat?.rating) ? Star : EmptyStar)
  }

  return (
    <FlatWrapper>
      {flat && <Carousel pictures={flat.pictures} />}
      <TextWrapper>
        <FlatInfo>
          <h1>{flat?.title}</h1>
          <h2>{flat?.location}</h2>
          <AllTags>
            {flat?.tags.map((tag, index) => (
              <Tag key={`${tag}-${index}`}>
                <h3>{tag}</h3>
              </Tag>
            ))}
          </AllTags>
        </FlatInfo>
        <OwnerInfo>
          <Owner>
            <h2>{flat?.host.name}</h2>
            <div>
              <img
                src={flat?.host.picture}
                alt={`Picture of ${flat?.host.name}`}
              />
            </div>
          </Owner>
          <Stars>
            {rating.map((star, index) => (
              <img src={star} key={`étoile-${index}`} alt="star" />
            ))}
          </Stars>
        </OwnerInfo>
      </TextWrapper>
      <CollapseWrapper>
        {flat?.description && (
          <Collapse title="Description" body={flat.description} />
        )}
        {flat?.equipments && (
          <Collapse title="Équipements" body={flat.equipments} />
        )}
      </CollapseWrapper>
    </FlatWrapper>
  )
}

export default Flat
