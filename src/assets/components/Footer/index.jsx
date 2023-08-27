import { Container } from './style'

import { Icons } from '../../image/Icons'
function Footer(){
    const { Logo } = Icons()
    return(
        <Container>
            {/* <div> */}
                <p><Logo/> food explorer</p>
                <p>© 2023 - Todos os direitos reservados.</p>
            {/* </div> */}
        </Container>
    )
}

export { Footer }