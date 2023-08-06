import { Container } from './style';

import { Input } from '../Input'
import { Button } from '../Button'

import {Icons} from '../../image/Icons'
 
export{ Header } 
function Header(){
    const {Menu, Receipt, SignOut, Logo, Search} = Icons()
    return(
        <Container>
            <Menu onClick={()=>{console.log('voltou')}}/>

            <div>
                <Logo/>
                <h1>Food Explore <span>admin</span></h1>
            </div>

            <Input type="text" placeholder={'Busque por pratos ou ingredientes'} icon={Search}/>

            <div>
                <Button title={`Pedidos`} orderNumber={`${23}`} icon={Receipt} />
            </div>
            <SignOut/>
        </Container>
    )
}