import colors from '../../utils/style/color'
import styled from 'styled-components'

export const FlatWrapper = styled.main`
  margin: 0 100px 50px 100px;
  min-height: 60vh;
  @media (max-width: 768px) {
    margin: 0 20px 50px 20px;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 30px 0;
  @media (max-width: 1200px) {
    flex-direction: column;
    margin: 20px 0 8px 0;
  }
`

export const FlatInfo = styled.div`
  display: flex;
  flex-direction: column;
  & h1 {
    color: ${colors.primary};
    margin: 0;
    font-size: 1.8rem;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  & h2 {
    margin: 10px 0 20px 0;
    font-weight: 600;
    font-size: 1rem;
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`

export const AllTags = styled.div`
  display: flex;
  gap: 10px;
`

export const Tag = styled.div`
  background-color: ${colors.primary};
  border-radius: 5px;
  width: 115px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 84px;
    height: 18px;
  }
  & h3 {
    @media (max-width: 768px) {
      font-size: 0.5rem;
    }
    color: ${colors.white};
    font-size: 0.7rem;
    text-align: center;
  }
`

export const OwnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1200px) {
    margin-top: 15px;
    flex-direction: row-reverse;
  }
`

export const Owner = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 10px;
  }
  & h2 {
    font-weight: normal;
    color: ${colors.primary};
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  & div {
    position: relative;
    border-radius: 100%;
    width: 64px;
    height: 64px;
    overflow: hidden;
    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
    }
    & img {
      width: 110%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`

export const CollapseWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`