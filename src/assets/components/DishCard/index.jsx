import { Container, QuantyController } from './style'

import {Icons} from '../../image/Icons'
import { Button } from '../Button'
import exemplo from '/exemplo.svg'
import { useAuth } from '../../../hooks/auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function DishCard({name,description, price, image,...rest}){
    const { user } = useAuth()
    const navigate = useNavigate()
    const [quanty, setQuanty]= useState(0)

    const { Heart, Pincel, Minus, Plus} = Icons()
    
    function handleClick(event){
        const clickTarget = event.target.parentElement.classList[2]
        switch (clickTarget) {
            case 'config':
                navigate(`/editdish/${rest.id}`)
                break
            case 'rec':
                rest.onClick()
                break
            case 'minus':
                if (quanty > 0) {
                    setQuanty(quanty - 1)
                }
                break
            case 'plus':
                setQuanty(quanty + 1)
                break
            default:
                break
        }
    }

    return(
        <Container
            onClick={(event)=>{handleClick(event)}}
        >
            
            {user.admin? <Pincel/>: <Heart/>}
            <img src={image} alt={`imagem do prato ${name}`} />
            <h2>{name}</h2>
            <div>
                <p>{description}</p>
            </div>
            <span>R${price}</span>
            
           {user.admin? '':
                <div>
                    <QuantyController>
                        <Minus/>
                        <span>{quanty}</span>
                        <Plus/>
                    </QuantyController>

                    <Button title={'incluir'} className={'include'}/>
                </div>
            }
        
        </Container>
    )
}


export {DishCard}