import { useEffect } from 'react'
import Card from '../../components/Card'
import image from '../../assets/homeIllustration.png'
import flats from '../../data/flat.json'
import { HomeWrapper, ImgWrapper, AllFlatWrapper } from './style'


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
