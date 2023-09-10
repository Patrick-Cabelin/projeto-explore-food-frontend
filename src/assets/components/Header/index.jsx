import { Container } from './style'

import { Input } from '../Input'
import { Button } from '../Button'

import {Icons} from '../../image/Icons'
import { useAuth } from '../../../hooks/auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Header({...rest}){
    const {MenuButton, Receipt, SignOut, Logo, Search} = Icons()
    const {signOut,user} = useAuth()
    const navigate= useNavigate()
    const [quanty, setQuanty]= useState(0)

    function navigateNewDish(){
        navigate('/newdish')
    }

    function logout(){
        signOut()
    }

    return(
        <Container>
            <MenuButton onClick={()=> console.log(rest.onClick())}/>
            <div>
                <Logo/>
                <h1>Food Explore {user.admin?<span>admin</span>:<span></span>}</h1>
            </div>

            <Input type="text" placeholder={'Busque por pratos ou ingredientes'} icon={Search} onChange={rest.onChange}/>

            <div>
                <Button orderNumber={quanty} icon={Receipt} className='version_mobile'/>

                {
                    user.admin?
                    <Button title={`Novo prato`} icon={Receipt} onClick={navigateNewDish} className='version_desktop'/>
                    : 
                    <Button title={`Pedidos`} orderNumber={quanty} icon={Receipt} className='version_desktop'/>
                }
                
            </div>
            <SignOut onClick={logout}/>
        </Container>
    )
}

export{ Header }