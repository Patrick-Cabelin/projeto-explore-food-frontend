import {Container,Content, IngredientsDish, QuantyController} from './style'

import { Icons } from '../../image/Icons'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { useEffect, useState } from 'react'
import { api } from '../../../services/api'

import { useNavigate, useParams } from 'react-router-dom'
function DishPreview(){
    const {CareLeft, Minus, Plus, Receipt} = Icons()
    
    const navigate = useNavigate()
    const params = useParams()

    const [listIngredients, setListIngredients] = useState([])
 
    const [imageOfDish, setImageOfDish] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    function handleBack(){
        navigate(-1)
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
                    <img src={imageOfDish} alt={`imagem do prato ${name}`} />

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
                    
                        <div>
                            <QuantyController>
                                <Minus/>
                                <span>{10}</span>
                                <Plus/>
                            </QuantyController>

                            <Button icon={ Receipt } title={`pedir ∙ R$ ${price}`}/>
                        </div>
                    </div>

                </div>
            </Content>
            
            <Footer/>
        </Container>
    )
}


export {DishPreview}