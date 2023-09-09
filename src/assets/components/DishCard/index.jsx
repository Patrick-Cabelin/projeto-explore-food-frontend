import { Container, QuantyController } from './style'

import {Icons} from '../../image/Icons'
import { Button } from '../Button'
import exemplo from '/exemplo.svg'
import { useAuth } from '../../../hooks/auth'

function DishCard({name,description, price,...rest}){
    const { user } = useAuth()
    const { Heart, Pincel, Minus, Plus} = Icons()
    // console.log(rest.image)
    function handleClick(event){
        if (event.target === event.currentTarget) {
   
            if (rest.onClick) {
              rest.onClick();
            }
          }
        }
    
    return(
        <Container
            onClick={(event)=>{handleClick(event)}}
        >
            
            {user.admin?<Pincel onClick={()=>{console.log('ok')}}/>: <Heart onClick={()=>{console.log('ok')}}/>}
            <img src={exemplo} alt={`imagem do prato ${name}`} />
            <h2>{name}</h2>
            <p>{description}</p>
            <span>R${price}</span>
            
            <div>
                <QuantyController>
                    <Minus/>
                    <span>{1}</span>
                    <Plus/>
                </QuantyController>

                <Button title={'incluir'}/>
            </div>
        
        </Container>
    )
}


export {DishCard}