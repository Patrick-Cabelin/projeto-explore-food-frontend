import { Container, QuantyController } from './style'

import {Icons} from '../../image/Icons'
import { Button } from '../Button'
import exemplo from '/exemplo.svg'
function DishCard(){
    const {Heart, Pincel, Minus, Plus} = Icons()
    return(
        <Container>
            <Heart/>
            <img src={exemplo} alt="" />
            <h2>Suco de maracujá</h2>
            <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
            <span>R${15.97}</span>
            
            <div>
                <QuantyController>
                    <Minus/>
                    <span>1</span>
                    <Plus/>
                </QuantyController>

                <Button title={'incluir'}/>
            </div>
        
        </Container>
    )
}


export {DishCard}