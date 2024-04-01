import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import image from '../../assets/homeIllustration.png'
import { HomeWrapper, ImgWrapper, AllFlatWrapper, NoFlatWrapper } from './style'
import { Loader } from '../../utils/style/loader'
import { FlatsProps } from '../../interface'
import { dependencies } from '../../auth/dependencies'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [isDataLoading, setDataLoading] = useState(false)
  const [flatsData, setFlatsData] = useState<FlatsProps[] | []>([])
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Kasa - Bienvenue!'
    async function fetchData() {
      setDataLoading(true)
      try {
        const response = await dependencies.flatsService.data()
        response === undefined ? setFlatsData([]) : setFlatsData(response)
      } catch (err) {
        navigate('/error')
      } finally {
        setDataLoading(false)
      }
    }
    fetchData()
  }, [navigate])

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
          {flatsData.length === 0 ? (
            <NoFlatWrapper>
              <h2>Il n'y a aucun appartement de disponible, veuillez réessayer plus tard</h2>
            </NoFlatWrapper>
            
          ) : (
            <AllFlatWrapper>
              {flatsData.map((flat, index) => (
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
