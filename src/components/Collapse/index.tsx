import Arrow from '../../assets/arrow.png'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CollapseWrapper, TitleWrapper, Title, Icon, Body } from './style'

interface CollapseProps {
  title: string
  body: string[] | string
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
