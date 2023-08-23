import { Container, Header, Navigate } from './style'

import { Icons } from '../../image/Icons'
import { Input } from '../Input'
import { ButtonText } from '../ButtonText'

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
                <ButtonText title={'Novo prato'}/>
                <ButtonText title={'Sair'}/>
            </Navigate>
        </Container>
    )
}


export {Menu}