import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import Star from '../../components/Star'
import {
  FlatWrapper,
  TextWrapper,
  FlatInfo,
  AllTags,
  Tag,
  OwnerInfo,
  Owner,
  CollapseWrapper,
} from './style'
import { Loader } from '../../utils/style/loader'
import { useFlatStore } from '../../context'

function Flat() {
  const [isDataLoading, setDataLoading] = useState(false)
  const { flats, getFlatById, searchFlatById } = useFlatStore((state) => state)
  const id = useLocation().pathname.slice(6)
  const navigate = useNavigate()

  // Si pas de data déjà présent, lancer l'action du store permettant de charger un flat
  useEffect(() => {
    async function fetchData() {
      setDataLoading(true)
      // Check le bug sur le changement d'id sur l'url
      try {
        if (flats.length > 1) {
          await getFlatById(id)
          return
        }
        if (flats.length === 1 && flats[0].id !== id) {
          await searchFlatById(id)
          return
        }
        if (flats.length === 0) {
          await searchFlatById(id)
          if (flats.length === 0) {
            navigate('/error')
            document.title = `Kasa - Erreur`
          }
          return
        }
      } catch (err) {
        navigate('/error')
        document.title = `Kasa - Erreur`
      } finally {
        setDataLoading(false)
      }
    }
    fetchData()
    document.title = `Kasa - Appartement de ${flats[0]?.host.name}`
  }, [flats, getFlatById, id, navigate, searchFlatById])

  console.log(flats[0])
  return (
    <FlatWrapper>
      {isDataLoading ? (
        <Loader />
      ) : (
        <>
          {flats && <Carousel pictures={flats[0].pictures} />}
          <TextWrapper>
            <FlatInfo>
              <h1>{flats[0]?.title}</h1>
              <h2>{flats[0]?.location}</h2>
              <AllTags>
                {flats[0]?.tags.map((tag, index) => (
                  <Tag key={`${tag}-${index}`}>
                    <h3>{tag}</h3>
                  </Tag>
                ))}
              </AllTags>
            </FlatInfo>
            <OwnerInfo>
              <Owner>
                <h2>{flats[0]?.host.name}</h2>
                <div>
                  <img
                    src={flats[0]?.host.picture}
                    alt={`Picture of ${flats[0]?.host.name}`}
                  />
                </div>
              </Owner>
              <Star rate={flats[0]?.rating} />
            </OwnerInfo>
          </TextWrapper>
          <CollapseWrapper>
            {flats[0]?.description && (
              <Collapse title="Description" body={flats[0].description} />
            )}
            {flats[0]?.equipments && (
              <Collapse title="Équipements" body={flats[0].equipments} />
            )}
          </CollapseWrapper>
        </>
      )}
    </FlatWrapper>
  )
}

export default Flat
