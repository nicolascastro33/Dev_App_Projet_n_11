import styled from 'styled-components'
import colors from '../../utils/style/color'
import { Link } from 'react-router-dom'

export const ErrorWrapper = styled.main`
color: ${colors.primary};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background-color: ${colors.white};
min-height: 55vh;
`

export const TitleError = styled.h1`
font-size: 15rem;
margin: 0;
margin-bottom: 2rem;
@media(max-width:768px) {
    font-size: 6rem;
  }
`

export const MessageError = styled.h2`
font-weight: normal;
font-size: 3rem;
margin:0;
margin-bottom: 4rem;
@media(max-width:768px) {
    width: 60%;
    font-size: 1.2rem;
  }
`

export const LinkError = styled(Link)`
color: ${colors.black};
text-decoration: underline;
margin-bottom: 4rem;
&:hover{
    font-weight: bold;
}
@media(max-width:768px) {
    font-size: 0.8rem;
  }
`