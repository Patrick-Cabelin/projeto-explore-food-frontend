import { Container, QuantyController } from './style'

import {Icons} from '../../image/Icons'
import { Button } from '../Button'
import exemplo from '/exemplo.svg'

function DishCard({title,description, price, ...rest}){
    const {Heart, Pincel, Minus, Plus} = Icons()
    
    return(
        <Container>
            <Heart/>
            <img src={exemplo} alt={`imagem do prato ${title}`} />
            <h2>{title}</h2>
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