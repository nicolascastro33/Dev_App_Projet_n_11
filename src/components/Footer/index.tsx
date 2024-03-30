import Logo from '../../assets/logoWhite.png'
import { FooterWrapper, LogoImg, TextWrapper } from './style'

function Footer() {
  return (
    <>
      <FooterWrapper>
        <LogoImg src={Logo} />
        <TextWrapper>© 2020 Kasa. All rights reserved</TextWrapper>
      </FooterWrapper>
    </>
  )
}

export default Footer
