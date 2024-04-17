import Logo from '../../assets/logoWhite.png'
import { FooterWrapper, LogoImg, TextWrapper } from './style'

function Footer() {
  return (
    <FooterWrapper>
      <LogoImg src={Logo}  alt="logo Kasa" />
      <TextWrapper>© 2020 Kasa. All rights reserved</TextWrapper>
    </FooterWrapper>
  )
}

export default Footer
