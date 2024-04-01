import styled from 'styled-components'
import colors from '../../utils/style/color'

export const HomeWrapper = styled.main`
  position: relative;
  margin: 0px 100px 50px 100px;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  @media (max-width: 768px) {
    margin: 0px 20px 30px 20px;
  }
`

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  height: 223px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    height: 111px;
    margin-bottom: 20px;
  }
  & img {
    min-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: brightness(50%);
    border-radius: 20px;
  }
  & h1 {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${colors.white};
    font-size: 2rem;
    text-align: center;
    @media (max-width: 768px) {
      text-align: start;
      left: 35%;
      width: 60%;
    }
  }
  @media (max-width: 768px) {
    & h1 {
      font-size: 1.5rem;
    }
  }
`

export const AllFlatWrapper = styled.div`
  background-color: ${colors.grey};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px;
  gap: 40px;
  border-radius: 20px;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    background-color: transparent;
    padding: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const NoFlatWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items; center;
`