import { Container, QuantyController } from './style'

import {Icons} from '../../image/Icons'
import { Button } from '../Button'
import exemplo from '/exemplo.svg'
import { useAuth } from '../../../hooks/auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function DishCard({name,description, price,...rest}){
    const { user } = useAuth()
    const navigate = useNavigate()

    const [quanty, setQuanty]= useState(0)

    const { Heart, Pincel, Minus, Plus} = Icons()
    
    function handleClick(event){
        const clickTarget = event.target.parentElement.classList[2]
        
        if(clickTarget == 'config') return navigate(`/editdish/${rest.id}`)

        if(clickTarget == 'rec') return navigate(`/preview/${rest.id}`)

    }
    return(
        <Container
            onClick={(event)=>{handleClick(event)}}
        >
            
            {user.admin? <Pincel/>: <Heart/>}
            <img src={exemplo} alt={`imagem do prato ${name}`} />
            <h2>{name}</h2>
            <div>
                <p>{description}</p>
            </div>
            <span>R${price}</span>
            
            <div>
                <QuantyController>
                    <Minus/>
                    <span>{quanty}</span>
                    <Plus/>
                </QuantyController>

                <Button title={'incluir'}/>
            </div>
        
        </Container>
    )
}


export {DishCard}