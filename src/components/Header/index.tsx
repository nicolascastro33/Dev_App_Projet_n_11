import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import styled from 'styled-components'
import colors from '../../utils/style/color'
import { useLocation } from 'react-router-dom'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 100px 50px 100px;
  min-height: 68px;
`

const LogoImg = styled.img`
  width: 210px;
`

const LinkWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25%;
`

const LinkNav = styled(Link)`
  font-size: 1.2rem;;
  color: ${colors.black};
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
  ${(props) => props.$isFullLink && `text-decoration: underline;`}
  @media(max-width:768px){
    text-transform:uppercase;
  }
`

function Header() {
  const url = useLocation()
  console.log(url.pathname)
  return (
    <>
      <HeaderWrapper>
        <Link to="/">
          <LogoImg src={Logo} alt="logo Kasa" />
        </Link>

        <LinkWrapper>
          {url.pathname === '/' ? (
            <LinkNav to="/" $isFullLink>
              Accueil
            </LinkNav>
          ) : (
            <LinkNav to="/">Accueil</LinkNav>
          )}

          {url.pathname === '/about' ? (
            <LinkNav to="/about" $isFullLink>
              À propos
            </LinkNav>
          ) : (
            <LinkNav to="/about">À propos</LinkNav>
          )}
        </LinkWrapper>
      </HeaderWrapper>
    </>
  )
}

export default Header
