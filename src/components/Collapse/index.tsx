import styled from 'styled-components'
import Arrow from '../../assets/arrow.png'
import colors from '../../utils/style/color'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const CollapseWrapper = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 2rem;
`

const TitleWrapper = styled.div`
  border-radius: 10px;
  background-color: ${colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  align-items: center;
  height: 52px;
  z-index: 2;
`

const TextTitle = styled.h2`
  color: ${colors.white};
  font-size: 20px;
`

const ImgTitle = styled.img<{ $isOpen?: boolean }>`
  transform: rotate(180deg);
  transition: transform 500ms ease-in-out;
  width: 24px;
  cursor: pointer;
  ${(props) =>
    props.$isOpen &&
    `
        transform: rotate(0);
        transition: transform 500ms ease-in-out;
        `}
`


const TextContentWrapper = styled.div<StyledProps>`
  z-index: 1;
  border: 1px solid ${colors.primary};
  border-top: none;
  border-radius: 0 0 10px 10px;
  position: relative;
  bottom: 10px;
  padding: 0 10px 0 10px;
  transform: translateY(-300px);
  max-height: 0px;
  transition: all 500ms ease-in-out;
  opacity: 0;
  ${(props) =>
    props.$isOpen &&
    `
        transform: translateY(0);
        transition: all 500ms ease-in-out;
        opacity: 1;
        max-height: 600px;
        `}
  ${(props) =>
    props.$isflatPage &&
    `
        min-height: 400px;
    `}
`
interface CollapseProps{
  title:string;
  text: string[] | string;
}
interface StyledProps {
  readonly  $isOpen?: boolean;
  readonly $isflatPage?:boolean;
}

function Collapse({ title, text }:CollapseProps) {
  const url = useLocation()
  const flatPage: boolean = url.pathname.includes('flat')
  const [collapse, setCollapse] = useState(false)
  const isArray: boolean = Array.isArray(text)

  return (
    <>
      <CollapseWrapper>
        <TitleWrapper>
          <TextTitle>{title}</TextTitle>
          <ImgTitle
            src={Arrow}
            $isOpen={collapse}
            onClick={() => setCollapse(!collapse)}
          />
        </TitleWrapper>

        <TextContentWrapper  $isflatPage={flatPage} $isOpen={collapse}>
          {isArray ? (
            text?.map((des: string, index: string) => (
              <p key={index}>{des}</p>
            ))
          ) : (
            <p>{text}</p>
          )}
        </TextContentWrapper>
      </CollapseWrapper>
    </>
  )
}

export default Collapse
