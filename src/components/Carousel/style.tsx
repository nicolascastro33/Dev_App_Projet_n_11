import styled from 'styled-components'
import colors from '../../utils/style/color'

export const CarouselWrapper = styled.article`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  height: 415px;
  @media (max-width: 768px) {
    height: 255px;
  }
  & p {
    position: absolute;
    left: 50%;
    bottom: 5%;
    font-weight: bold;
    color: ${colors.white};
    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  }
`

export const Picture = styled.img`
  min-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ArrowWrapper = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  background-color: transparent;
  transition: background-color 500ms ease-in-out, opacity 500ms ease-in-out;
  &:hover {
    background-color: ${colors.black};
    opacity: 0.5;
  }
  &:nth-child(2n) {
    left: 0;
  }
  &:nth-child(1n) {
    right: 0;
  }
  & img {
    @media (max-width: 768px) {
      width: 12px;
    }
  }
`