import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
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
import { useFlatStore } from '../../context/context'


function Flat() {
  const id = useLocation().pathname.slice(6)
  const navigate = useNavigate()
  const [isDataLoading, setDataLoading] = useState(true)
  const [error, setError] = useState(false)
  const { flat, flats, getAllFlats, getFlatInStateById } = useFlatStore(
    (state) => state
  )

  const fetchData = useCallback(async () => {
    try {
      if (!flats) await getAllFlats()
      if (!flat || flat.id !== id) await getFlatInStateById(id)
      if (flats && !flats.find((flat) => flat.id === id)) setError(true)
    } catch (err) {
      setError(true)
    } finally {
      if (error) navigate('/error')
      if (flat?.id === id) setDataLoading(false)
    }
  }, [error, flat, flats, getAllFlats, getFlatInStateById, id, navigate])

  useEffect(() => {
    fetchData()
    document.title = `Kasa - Appartement de ${flat?.host.name}`
  }, [fetchData, flat?.host.name])

  return (
    <FlatWrapper>
      {isDataLoading ? (
        <Loader />
      ) : (
        <>
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
              <Star rate={flat?.rating} />
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
        </>
      )}
    </FlatWrapper>
  )
}

export default Flat
