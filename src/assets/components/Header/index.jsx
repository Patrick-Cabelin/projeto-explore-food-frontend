import { Container } from './style';
import { Input } from '../ButtonText copy'

 
export{ Header } 

function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Input type="text" placeholder={'Pesquisar pelo título'}/>
           
        </Container>
    )
}