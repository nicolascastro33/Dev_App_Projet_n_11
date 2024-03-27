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
  cursor: pointer;
`

const Title = styled.h2`
  color: ${colors.white};
  font-size: 20px;
`

const Icon = styled.img<{ $isOpen?: boolean }>`
  transform: rotate(180deg);
  transition: transform 500ms ease-in-out;
  width: 24px;
  ${(props) =>
    props.$isOpen &&
    `
        transform: rotate(0);
        transition: transform 500ms ease-in-out;
        `}
`

const Body = styled.div<StyledProps>`
  z-index: 1;
  border: 1px solid ${colors.primary};
  border-top: none;
  border-radius: 0 0 10px 10px;
  position: relative;
  bottom: 10px;
  padding: 0 10px 0 10px;
  transform: translateY(-300px);
  max-height: 0px;
  transition: transform 500ms ease-in-out, max-height 500ms ease-in-out,
    opacity 500ms ease-in-out;

  opacity: 0;
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
    `}
`
interface CollapseProps {
  title: string
  body: string[] | string
}
interface StyledProps {
  readonly $isOpen?: boolean
  readonly $isflatPage?: boolean
}

function Collapse({ title, body }: CollapseProps) {
  const url = useLocation()
  const flatPage: boolean = url.pathname.includes('flat')
  const [collapse, setCollapse] = useState(false)
  body = Array.isArray(body) ? body : [body]

  return (
    <CollapseWrapper>
      <TitleWrapper onClick={() => setCollapse(!collapse)}>
        <Title>{title}</Title>
        <Icon src={Arrow} $isOpen={collapse} />
      </TitleWrapper>

      <Body $isflatPage={flatPage} $isOpen={collapse}>
        {body.map((text: string, index: number) => (
          <p key={index}>{text}</p>
        ))}
      </Body>
    </CollapseWrapper>
  )
}

export default Collapse
