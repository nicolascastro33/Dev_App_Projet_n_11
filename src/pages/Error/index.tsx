import styled from 'styled-components'
import colors from '../../utils/style/color'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const ErrorWrapper = styled.main`
color: ${colors.primary};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background-color: ${colors.white};
`

const TitleError = styled.h1`
font-size: 15rem;
margin: 0;
margin-bottom: 2rem;
`

const MessageError = styled.h2`
font-weight: normal;
font-size: 3rem;
margin:0;
margin-bottom: 4rem;
`

const LinkError = styled(Link)`
color: ${colors.black};
text-decoration: underline;
margin-bottom: 4rem;
&:hover{
    font-weight: bold;
}

`

function Error() {
    useEffect(() =>{
        document.title = 'Kasa - Erreur'
    })
    return(
        <ErrorWrapper>
            <TitleError>404</TitleError>
            <MessageError>Oups! La page que vous demandez n'existe pas.</MessageError>
            <LinkError to="/">Retourner sur la page d’accueil</LinkError>
        </ErrorWrapper>
    )
}

export default Error