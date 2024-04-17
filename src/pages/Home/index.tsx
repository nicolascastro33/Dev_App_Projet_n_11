import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeWrapper, ImgWrapper, AllFlatWrapper, NoFlatWrapper } from './style'
import Card from '../../components/Card'
import image from '../../assets/homeIllustration.png'
import { Loader } from '../../utils/style/loader'
import { useFlatStore } from '../../context/context'


function Home() {
  const [isDataLoading, setDataLoading] = useState(true)
  const navigate = useNavigate()
  const { flats, getAllFlats } = useFlatStore((state) => state)
  
  // lancer l'action du store permettant d'avoir les flats
  const fetchData = useCallback(async () => {
    try {
      await getAllFlats()
    } catch (err) {
      navigate('/error')
      document.title = 'Kasa - Error...'
    } finally {
      setDataLoading(false)
    }
  }, [getAllFlats, navigate])

  useEffect(() => {
    document.title = 'Kasa - Bienvenue!'
    fetchData()
  }, [fetchData, flats])

  return (
    <HomeWrapper>
      {isDataLoading ? (
        <Loader />
      ) : (
        <>
          <ImgWrapper>
            <img src={image} alt="photo d'un paysage" />
            <h1>Chez vous, partout et ailleurs</h1>
          </ImgWrapper>
          {flats?.length === 0 ? (
            <NoFlatWrapper>
              <h2>
                Il n'y a aucun appartement de disponible, veuillez réessayer
                plus tard
              </h2>
            </NoFlatWrapper>
          ) : (
            <AllFlatWrapper>
              {flats?.map((flat, index) => (
                <Card
                  key={`flat-${index}-${flat.id}`}
                  title={flat.title}
                  image={flat.cover}
                  id={flat.id}
                />
              ))}
            </AllFlatWrapper>
          )}
        </>
      )}
    </HomeWrapper>
  )
}

export default Home
