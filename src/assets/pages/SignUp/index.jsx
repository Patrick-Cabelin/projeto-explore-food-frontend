import { Container, DataUser } from "./style"

import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Icons } from '../../Icons'
import { api } from '../../../services/api'

function SignUp(){
    const {Logo} = Icons()
    
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const navigate = useNavigate()
    function handleBack(){
        navigate(-1)
    }

    async function register(){
           try {
            alert('Conta Criada com sucesso, Agora Faça o login')
            await api.post('/users', {name, email, password})
            handleBack()
           } catch (error) {
            alert(error.response.data.error)
           }
    }
    return(
        <Container>
            <div>
                <Logo/>
                <h1>Food Explore</h1>
            </div>
            <div>
                    <h2>Crie sua conta</h2>
                <DataUser>
                    <label htmlFor="Iname">Seu nome</label>
                    <Input type='txt' id='Iname' placeholder='Exemplo: Colette Tatou' onChange={(event)=>setName(event.target.value)}/>

                    <label htmlFor="Iemail">Email</label>
                    <Input type='email' id='Iemail' placeholder='Exemplo@exemplo.com' onChange={(event)=>setEmail(event.target.value)}/>

                    <label htmlFor="Ipassword">Senha</label>
                    <Input type='password' id='Ipassword' placeholder='No mínimo 6 caracteres' onChange={(event)=>setPassword(event.target.value)}/>
                </DataUser>
                <Button title={'Criar conta'} onClick={register}/>

                <ButtonText title={'Já tenho uma conta'} onClick={handleBack}/>
            </div>
        </Container>
    )
}

export{ SignUp }