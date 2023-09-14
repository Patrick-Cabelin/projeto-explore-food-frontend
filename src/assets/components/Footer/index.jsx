import { Container } from './style'

import { Icons } from '../../Icons'

function Footer(){
    const { Logo } = Icons()
    return(
        <Container>
                <p><Logo/> food explorer</p>
                <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}

export { Footer }