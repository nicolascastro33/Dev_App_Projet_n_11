import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import styled from 'styled-components'
import colors from '../../utils/style/color'
import { useLocation } from 'react-router-dom'

const HeaderWrapper = styled.header`
  display: flex;
  flex: 3 1;
  justify-content: space-between;
  align-items: center;
  margin: 50px 100px 50px 100px;
  min-height: 68px;
  @media(max-width:768px) {
    margin: 50px 20px 50px 20px;
  }
`

const LogoImg = styled.img`
  width: 210px;
  @media(max-width:768px) {
    width: 145px;
  }
`

const LinkWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25%;
  @media(max-width:1200px) {
    width: 30%;
  }
  @media(max-width:768px) {
    width: 45%;
  }
`

const LinkNav = styled(Link)<StyledProps>`
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

interface StyledProps {
  readonly $isFullLink?: boolean
}

function Header() {
  const url = useLocation()
  return (
    <>
      <HeaderWrapper>
        <Link to="/">
          <LogoImg src={Logo} alt="logo Kasa" />
        </Link>

        <LinkWrapper>
          <LinkNav to="/" $isFullLink={url.pathname === '/'}>
            Accueil
          </LinkNav>

          <LinkNav
            to="/about"
            $isFullLink={url.pathname === '/about'}
          >
            À propos
          </LinkNav>
        </LinkWrapper>
      </HeaderWrapper>
    </>
  )
}

export default Header
