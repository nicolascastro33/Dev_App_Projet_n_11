import { useEffect } from 'react'
import { ErrorWrapper, TitleError, MessageError, LinkError } from './style'

function Error() {
    useEffect(() =>{
        document.title = 'Kasa - Erreur'
    }, [])
    return(
        <ErrorWrapper>
            <TitleError>404</TitleError>
            <MessageError>Oups! La page que vous demandez n'existe pas.</MessageError>
            <LinkError to="/">Retourner sur la page d’accueil</LinkError>
        </ErrorWrapper>
    )
}

export default Error