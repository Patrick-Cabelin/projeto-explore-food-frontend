import { Container, DataUser } from './style'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import {Button} from '../../components/Button'
import {ButtonText} from '../../components/ButtonText'
import {Input} from '../../components/Input'
import {Icons} from '../../image/Icons'
import { useAuth } from '../../../hooks/auth'


function SignIn(){
    const {Logo} = Icons()
    const {signIn} = useAuth()

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const navigate = useNavigate()

    function login(){
        signIn({email,password})
    }

    return(
        <Container>
            <div>
                <Logo/>
                <h1>Food Explore</h1>
            </div>
            <div>
                    <h2>Faça login</h2>
                <DataUser>
                    <label htmlFor='Iemail'>Email</label>
                    <Input type='email' id='Iemail' placeholder='Exemplo@exemplo.com' onChange={(event)=>setEmail(event.target.value)}/>
                    <label htmlFor='Ipassword'>Senha</label>
                    <Input type= 'password' id='Ipassword' placeholder='No mínimo 6 caracteres' onChange={(event)=>setPassword(event.target.value)}/>
                </DataUser>
                <Button title={'Entrar'} orderNumber={false} onClick={login}/>

                <ButtonText title={'Criar uma conta'} onClick={()=> navigate('/signup')}/>
            </div>
        </Container>
    )
}

export{ SignIn }