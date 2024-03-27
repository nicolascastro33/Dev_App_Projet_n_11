import { useEffect } from 'react'
import Card from '../../components/Card'
import image from '../../assets/homeIllustration.png'
import styled from 'styled-components'
import colors from '../../utils/style/color'
import flats from '../../data/flat.json'

const HomeWrapper = styled.main`
  margin: 0px 100px 50px 100px;
  display: flex;
  flex-direction: column;
  @media(max-width:768px) {
    margin: 0px 20px 50px 20px;
  }
`

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  height: 223px;
  margin-bottom: 50px;
  & img {
    min-width:100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: brightness(50%);
    border-radius: 20px;
  }
  & h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${colors.white};
    font-size: 2rem;
    text-align:center;
  }
  @media (max-width: 768px) {
    & h1 {
      font-size: 1.5rem;
    }
  }
`

const AllFlatWrapper = styled.div`
  background-color: ${colors.grey};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px;
  gap: 40px;
  border-radius: 20px;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

function Home() {
  useEffect(() => {
    document.title = 'Kasa - Bienvenue!'
  })
  return (
    <>
      <HomeWrapper>
        <ImgWrapper>
          <img src={image} alt="photo d'un paysage" />
          <h1>Chez vous, partout et ailleurs</h1>
        </ImgWrapper>
        <AllFlatWrapper>
          {flats.map((flat, index) => (
            <Card
              key={`flat-${index}-${flat.id}`}
              title={flat.title}
              image={flat.cover}
              id={flat.id}
            />
          ))}
        </AllFlatWrapper>
      </HomeWrapper>
    </>
  )
}

export default Home
