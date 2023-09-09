import { Container } from './style';

import { Input } from '../Input'
import { Button } from '../Button'

import {Icons} from '../../image/Icons'
import { useAuth } from '../../../hooks/auth'
import { useNavigate } from 'react-router-dom';

function Header({...rest}){

    const {Menu, Receipt, SignOut, Logo, Search} = Icons()
    const {signOut,user} = useAuth()
    const navigate= useNavigate()

    function navigateNewDish(){
        navigate('/newdish')
    }
    function logout(){
        signOut()
    }
    return(
        <Container>
            <Menu onClick={()=>{console.log('ok')}}/>

            <div>
                <Logo/>
                <h1>Food Explore {user.admin?<span>admin</span>:<span></span>}</h1>
            </div>

            <Input type="text" placeholder={'Busque por pratos ou ingredientes'} icon={Search} onChange={rest.onChange}/>

            <div>
                <Button orderNumber={23} icon={Receipt} className='version_mobile'/>
                {user.admin?<Button title={`Novo prato`} icon={Receipt} onClick={navigateNewDish} className='version_desktop'/>:<Button title={`Pedidos`} orderNumber={23} icon={Receipt} className='version_desktop'/>}
            </div>
            <SignOut onClick={logout}/>
        </Container>
    )
}

export{ Header }