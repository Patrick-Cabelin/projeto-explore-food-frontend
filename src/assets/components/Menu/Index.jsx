import { Container, Header, Navigate } from './style'

import { Icons } from '../../image/Icons'
import { Input } from '../../components/Input'

function Menu(){
    const { Close, Search } = Icons()
    return(
        <Container>
            <Header>
                <div>
                    <Close/>
                    <span>Menu</span>
                </div>
            </Header>

            <Navigate>
                <Input icon={Search} placeholder='Busque por pratos ou ingredientes'/>
                <span>Sair</span>
            </Navigate>
        </Container>
    )
}


export {Menu}