import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { useLocation } from 'react-router-dom'
import { HeaderWrapper, LogoImg, LinkWrapper, LinkNav } from './style'


function Header() {
  const url = useLocation()
  return (
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
  )
}

export default Header
