import styled from "styled-components";
import colors from '../../utils/style/color'

export const CardContainer = styled.article`
  background-color: ${colors.primary};
  display: grid;
  grid-template-rows: 3fr 1fr;
  border-radius: 20px;
  height: 340px;
  transform: scale(1);
  transition: transform 500ms ease-in-out;
  width: 100%;
  flex: 1 1;
  &:hover {
    transform: scale(1.04);
    transition: transform 500ms ease-in-out;
  }
 
  @media (max-width: 1200px) {
    height: 315px;
  } 
  
  @media (max-width: 768px) {
    height: 255px;
  }
`

export const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  margin: 10px 10px 0 10px;
  & img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300%;
  }
`

export const TextContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  & h2 {
    color: ${colors.white};
    font-size: 1rem;
    text-align: center;
  }
`