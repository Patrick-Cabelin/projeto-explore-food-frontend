import { Container } from './style';

import { Input } from '../Input'
import { Button } from '../Button'

import {Icons} from '../../image/Icons'
import { useAuth } from '../../../hooks/auth'

function Header(){

    const {Menu, Receipt, SignOut, Logo, Search} = Icons()
    const {signOut,user} = useAuth()

    function logout(){
        signOut()
    }
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
            <SignOut onClick={logout}/>
        </Container>
    )
}

export{ Header }