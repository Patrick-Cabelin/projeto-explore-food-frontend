import { Container, DataUser } from "./style"

import { useNavigate } from "react-router-dom"

import {Button} from '../../components/Button'
import {ButtonText} from '../../components/ButtonText'
import {Input} from '../../components/Input'
import {Icons} from '../../image/Icons'

function SignUp(){
    const {Logo} = Icons()


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
                    <Input type='email' id='Iname' placeholder='Exemplo: Colette Tatou'/>
                    <label htmlFor="Iemail">Email</label>
                    <Input type='email' id='Iemail' placeholder='Exemplo@exemplo.com'/>
                    <label htmlFor="Ipassword">Senha</label>
                    <Input type='password' id='Ipassword' placeholder='No mínimo 6 caracteres'/>
                </DataUser>
                <Button title={'Criar conta'} orderNumber={false}/>

                <ButtonText title={'Já tenho uma conta'} onClick={(i)=> {console.log(i)}}/>
            </div>
        </Container>
    )
}

export{ SignUp }