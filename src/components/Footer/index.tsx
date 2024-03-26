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
  padding: 30px 0 20px 0;
`

const LogoImg = styled.img`
  width: 122px;
  margin-bottom: 20px;
`

const TextWrapper = styled.h2`
  color: ${colors.white};
  text-align:center;
  font-size: 1.2rem;
  font-weight: 500;
  @media(max-width:768px) {
    font-size: 0.8rem;
    width:35%;
  }
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
