import { Container } from './style';

import { Input } from '../Input'
import { Button } from '../Button'

import {Icons} from '../../image/Icons'

function Header(){
    const user={
        admin: false
    }
    const {Menu, Receipt, SignOut, Logo, Search} = Icons()
    return(
        <Container>
            <Menu onClick={()=>{console.log('voltou')}}/>

            <div>
                <Logo/>
                <h1>Food Explore {user.admin?<span>admin</span>:<span></span>}</h1>
            </div>

            <Input type="text" placeholder={'Busque por pratos ou ingredientes'} icon={Search}/>

            <div>
                <Button orderNumber={23} icon={Receipt} className='portrait'/>
                <Button title={`Pedidos`} orderNumber={23} icon={Receipt} className='landscape'/>
            </div>
            <SignOut/>
        </Container>
    )
}

export{ Header }