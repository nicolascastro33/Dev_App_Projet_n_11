import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FlatsProps } from '../../interface'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import EmptyStar from '../../assets/emptyStar.png'
import { dependencies } from '../../auth/dependencies'
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
import { Loader } from '../../utils/style/loader'

function Flat() {
  const [isDataLoading, setDataLoading] = useState(false)
  const [flatData, setFlatData] = useState<FlatsProps | undefined>()
  const id = useLocation().pathname.slice(6)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      setDataLoading(true)
      try {
        const response = await dependencies.flatsService.data()
        const flat = response?.find((element) => element.id === id)
        await setFlatData(flat)
        document.title = `Kasa - Appartement de ${flatData?.host.name}`
        if (!flat) {
          navigate('/error')
          document.title = `Kasa - Erreur`
        }
      } catch (err) {
        navigate('/error')
        document.title = `Kasa - Erreur`
      } finally {
        setDataLoading(false)
      }
    }
    fetchData()
  }, [flatData, id, navigate])
  const rating = []
  for (let i = 0; i < 5; i++) {
    rating.push(rating.length < Number(flatData?.rating) ? Star : EmptyStar)
  }

  return (
    <FlatWrapper>
      {isDataLoading ? (
        <Loader />
      ) : (
        <>
          {flatData && <Carousel pictures={flatData.pictures} />}
          <TextWrapper>
            <FlatInfo>
              <h1>{flatData?.title}</h1>
              <h2>{flatData?.location}</h2>
              <AllTags>
                {flatData?.tags.map((tag, index) => (
                  <Tag key={`${tag}-${index}`}>
                    <h3>{tag}</h3>
                  </Tag>
                ))}
              </AllTags>
            </FlatInfo>
            <OwnerInfo>
              <Owner>
                <h2>{flatData?.host.name}</h2>
                <div>
                  <img
                    src={flatData?.host.picture}
                    alt={`Picture of ${flatData?.host.name}`}
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
            {flatData?.description && (
              <Collapse title="Description" body={flatData.description} />
            )}
            {flatData?.equipments && (
              <Collapse title="Équipements" body={flatData.equipments} />
            )}
          </CollapseWrapper>
        </>
      )}
    </FlatWrapper>
  )
}

export default Flat
