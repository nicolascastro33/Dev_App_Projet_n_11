import Logo from '../../assets/logoWhite.png'
import styled from 'styled-components'
import colors from '../../utils/style/color'

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.black};
  min-height: 160px;
  padding-top: 50px
`

const LogoImg = styled.img`
  width: 122px;
  margin-bottom: 20px;
`

const TextWrapper = styled.h2`
  color: ${colors.white};
  font-size: 1.2rem;
  font-weight: 500;
`

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
