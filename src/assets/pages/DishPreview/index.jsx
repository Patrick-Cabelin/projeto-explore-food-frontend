import {Container,Content, IngredientsDish, QuantyController} from './style'

import { Icons } from '../../image/Icons'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { useEffect, useState } from 'react'
import { api } from '../../../services/api'

import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../../hooks/auth'

function DishPreview(){
    const {CareLeft, Minus, Plus, Receipt} = Icons()
    
    const navigate = useNavigate()
    const params = useParams()
    const {user} = useAuth()
    
    const [listIngredients, setListIngredients] = useState([])
    const [imageOfDish, setImageOfDish] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [quanty, setQuanty] = useState(0)

    function handleBack(){
        navigate(-1)
    }
    
    function navigateEditDish(id){
        navigate(`/editdish/${id}`)
    }

    function handleQuanty(event){

        const clickTarget = event.target.parentElement.classList[2]
        console.log(clickTarget)
        switch (clickTarget) {
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
    
    async function fecthDish(){
        const response = await api.get(`/dishes/dish/${params.id}`)
        const ListIngredients = await api.get(`/dishes/ingredients/${params.id}`)
        
        if (Array.isArray(ListIngredients.data)) {
            const listIngredientsName = ListIngredients.data.map(ingredient => ingredient.name)
            
            setListIngredients(listIngredientsName)
        }

        setName(response.data.name)
        setPrice(response.data.price)
        setDescription(response.data.description)
        setImageOfDish(response.data.image_of_dish)
    }

    useEffect(()=>{
        try{
            fecthDish()
        }catch(error){
            if(error.response)return alert(error.response.data.error)

            return alert("Não foi possível carregar as informações do prato. Por favor, Recarregue a página")
        }
    },[])

    return(
        <Container>
            <Header/>

            <Content>
                <ButtonText title={'Voltar'} icon={CareLeft} onClick={handleBack}/>
                
                <div>
                    <img src={`/files/${imageOfDish}`} alt={`imagem do prato ${name}`} />

                    <div>
                        <h1>{name}</h1>
                        <p>{description}</p>

                        <div>
                            {
                                Array.isArray(listIngredients) && listIngredients.length > 0 && listIngredients.map((ingredient, index) =>(
                                    <IngredientsDish
                                        key={String(index)}
                                    >{ingredient}</IngredientsDish>
                                ))
                            }
                        </div>
                    
                        {
                            user.admin
                            ?
                            <div>
                                <Button title={`editar prato`} onClick={()=>{navigateEditDish(params.id)}}/>
                            </div>
                            :
                            <div onClick={(event)=> {handleQuanty(event)}}>
                            <QuantyController>
                                <Minus/>
                                <span>{quanty}</span>
                                <Plus/>
                            </QuantyController>

                            <Button icon={ Receipt } title={`pedir ∙ R$ ${price}`}/>
                        </div>
                        }
                    </div>

                </div>
            </Content>
            
            <Footer/>
        </Container>
    )
}


export {DishPreview}