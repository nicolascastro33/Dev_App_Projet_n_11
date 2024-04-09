import styled from 'styled-components'
import colors from '../../utils/style/color'
import { Link } from 'react-router-dom'

interface StyledProps {
    readonly $isFullLink?: boolean
  }

export const HeaderWrapper = styled.header`
  display: flex;
  flex: 3 1;
  justify-content: space-between;
  align-items: center;
  margin: 50px 100px 50px 100px;
  min-height: 68px;
  @media(max-width:768px) {
    margin: 20px;
  }
`

export const LogoImg = styled.img`
  width: 210px;
  @media(max-width:768px) {
    width: 145px;
  }
`

export const LinkWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  @media(max-width:1200px) {
    gap: 30px;
  }
  @media(max-width:768px) {
    gap: 20px;
  }
`

export const LinkNav = styled(Link)<StyledProps>`
  font-size: 1.2rem;
  color: ${colors.black};
  font-weight: 500;
  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
  ${(props) => props.$isFullLink && `text-decoration: underline;`}
  @media(max-width:768px) {
    text-transform: uppercase;
    font-size: 0.8rem;
  }
`