import { Container, QuantyController } from './style'

import {Icons} from '../../Icons'
import { Button } from '../Button'

import { useAuth } from '../../../hooks/auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../../services/api'

function DishCard({name,description, price, image,...rest}){
    const { user } = useAuth()
    const navigate = useNavigate()

    const [quanty, setQuanty]= useState(0)
    const [favorited, setFavorited]= useState('')

    const { Heart, Pincel, Minus, Plus} = Icons()

    function handleClick(event){
        const clickTarget = event.target.parentElement.classList[1] || event.target.parentElement.classList[2]
        
        switch (clickTarget) {
            
            case 'config':
                navigate(`/editdish/${rest.id}`)
                break
                
                case '__active':
                console.log("ativ")
                navigate(`/preview/${rest.id}`)
                break

            case 'minus':
                if (quanty > 0) {
                    setQuanty(quanty - 1)
                }
                break

            case 'plus':
                setQuanty(quanty + 1)
                break

            case 'favorite' || 'favorited':
                setFavorited('favorited')                
                break

            default:
                console.log(event.target.parentElement.classList, 'defaulgt')
                if(event.target.parentElement.parentElement.classList[3] === 'favorited'){
                    setFavorited('')
                }
                break
        }
    }
    
    return(
        <Container
            onClick={(event)=>{handleClick(event)}}
        >
            
            {user.admin? <Pincel/>: <Heart className={favorited}/>}
            <img src={`${api.defaults.baseURL}/files/${image}`} alt={`imagem do prato ${name}`} />
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