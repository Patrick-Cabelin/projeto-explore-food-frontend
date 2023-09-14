import { Container, Header, Navigate } from './style'

import { Icons } from '../../Icons'
import { Input } from '../Input'
import { ButtonText } from '../ButtonText'

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/auth'

function MenuModal({...rest}){
    const { Close, Search } = Icons()
    
    const navigate= useNavigate()
    const { signOut } = useAuth()
    
    function NavigateNewDish(){
        navigate('/newdish')
    }

    function logOut(){
        signOut()
    }
    return(
        <Container className={` ${rest.isModalOpen ? 'modal-open' : 'modal-close'}`}>
            <Header>
                <div onClick={rest.onClick}>
                    <Close />
                    <span>Menu</span>
                </div>
            </Header>

            <Navigate>
                <Input icon={Search} placeholder='Busque por pratos ou ingredientes'/>
                <ButtonText title={'Novo prato'} onClick={NavigateNewDish}/>
                <ButtonText title={'Sair'} onClick={logOut}/>
            </Navigate>
        </Container>
    )
}


export {MenuModal}