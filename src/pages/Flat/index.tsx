import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import flats from '../../data/flat.json'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import EmptyStar from '../../assets/emptyStar.png'
import Star from '../../assets/fullStar.png'
import colors from '../../utils/style/color'

const FlatWrapper = styled.main`
  margin: 0 100px 50px 100px;
`

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 50px 0;
`

const FlatInfo = styled.div`
  display: flex;
  flex-direction: column;
  & h1 {
    color: ${colors.primary};
    margin: 0;
  }
`

const AllTags = styled.div`
  display: flex;
  gap: 20px;
`

const Tag = styled.div`
  background-color: ${colors.primary};
  border-radius: 40px;
  width: 115px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  & h3 {
    color: ${colors.white};
    font-size: 0.7rem;
    text-align: center;
  }
`

const OwnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Owner = styled.div`
  display: flex;
  & h2 {
    font-weight: normal;
    color: ${colors.primary};
  }

  & div {
    position: relative;
    border-radius: 100%;
    width: 64px;
    height: 64px;
    overflow: hidden;
    & img {
      width: 110%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`

const Stars = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CollapseWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

function Flat() {
  const id = useLocation().pathname.slice(6)
  const flat = flats.find((element) => element.id === id)
  const rating = []
  for(let i = 0; i < 5 ; i++){
    rating.push(rating.length < Number(flat?.rating) ? Star : EmptyStar)
  }

  return (
    <FlatWrapper>
      <Carousel pictures={flat?.pictures} />
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
         <Collapse title="Description" body={flat.description}/>
      )}
      {flat?.equipments && (
         <Collapse title="Équipements" body={flat.equipments}/>
      )}
      </CollapseWrapper>
    </FlatWrapper>
  )
}

export default Flat
