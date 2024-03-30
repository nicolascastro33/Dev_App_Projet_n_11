import styled from "styled-components";
import colors from "../../utils/style/color";

interface StyledProps {
    readonly $isOpen?: boolean
    readonly $isflatPage?: boolean
  }

export const CollapseWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  overflow: hidden;
`

export const TitleWrapper = styled.div`
  border-radius: 5px;
  background-color: ${colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  align-items: center;
  height: 52px;
  z-index: 2;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 30px;
  }
`

export const Title = styled.h2`
  color: ${colors.white};
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export const Icon = styled.img<{ $isOpen?: boolean }>`
  transform: rotate(180deg);
  transition: transform 500ms ease-in-out;
  width: 24px;
  @media (max-width: 768px) {
    width: 16px;
  }
  ${(props) =>
    props.$isOpen &&
    `
        transform: rotate(0);
        transition: transform 500ms ease-in-out;
        `}
`

export const Body = styled.div<StyledProps>`
  z-index: 1;
  border: 1px solid ${colors.primary};
  border-top: none;
  border-radius: 0 0 10px 10px;
  position: relative;
  bottom: 30px;
  padding: 0 10px 0 10px;
  transform: translateY(-300px);
  max-height: 0px;
  transition: transform 500ms ease-in-out, max-height 500ms ease-in-out,
    opacity 500ms ease-in-out;
  opacity: 0;
  & p {
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  ${(props) =>
    props.$isOpen &&
    `
        transform: translateY(0);
        transition: 
        transform 500ms ease-in-out,
        max-height 500ms ease-in-out,
        opacity 500ms ease-in-out;
        opacity: 1;
        max-height: 600px;
        `}
  ${(props) =>
    props.$isflatPage &&
    props.$isOpen &&
    `
        min-height: 200px;
        transition: 
        min-height 500ms ease-in-out,
        transform 500ms ease-in-out,
        max-height 500ms ease-in-out,
        opacity 500ms ease-in-out;
        @media (max-width: 768px) {
          min-height: 0;
        }
    `}
`