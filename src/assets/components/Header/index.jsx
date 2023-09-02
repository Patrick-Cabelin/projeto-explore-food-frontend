import { Container } from './style';

import { Input } from '../Input'
import { Button } from '../Button'

import {Icons} from '../../image/Icons'

function Header(){
    const user={
        admin: true
    }

    const {Menu, Receipt, SignOut, Logo, Search} = Icons()
    return(
        <Container>
            <Menu onClick={()=>{}}/>

            <div>
                <Logo/>
                <h1>Food Explore {user.admin?<span>admin</span>:<span></span>}</h1>
            </div>

            <Input type="text" placeholder={'Busque por pratos ou ingredientes'} icon={Search}/>

            <div>
                <Button orderNumber={23} icon={Receipt} className='version_mobile'/>
                <Button title={`Pedidos`} orderNumber={23} icon={Receipt} className='version_desktop'/>
            </div>
            <SignOut/>
        </Container>
    )
}

export{ Header }