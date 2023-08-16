import { Container, DataUser } from "./style"

import {Button} from '../../components/Button'
import {ButtonText} from '../../components/ButtonText'
import {Input} from '../../components/Input'
import {Icons} from '../../image/Icons'

function SignIn(){
    const {Logo} = Icons()
    return(
        <Container>
            <div>
                <Logo/>
                <h1>Food Explore</h1>
            </div>
            <div>
                    <h2>Faça login</h2>
                <DataUser>
                    <label htmlFor="Iemail">Email</label>
                    <Input type='email' id='Iemail' placeholder='Exemplo@exemplo.com'/>
                    <label htmlFor="Ipassword">Senha</label>
                    <Input type='password' id='Ipassword' placeholder='No mínimo 6 caracteres'/>
                </DataUser>
                <Button title={'Entrar'} orderNumber={false}/>

                <ButtonText title={'Criar uma conta'}/>
            </div>
        </Container>
    )
}

export{ SignIn }