import {Container, Content, Menu} from './style'

import { useState, useEffect } from 'react'
import {  useNavigate,  } from 'react-router-dom'

import { Header } from '../../components/Header'
import { DishCard } from '../../components/DishCard'
import { DishCarousel } from '../../components/DishCarousel'
import { Footer } from '../../components/Footer'

import sugar from '/sugar.svg'
import { api } from '../../../services/api'

function Home(){
    const [dishData, setDishData] = useState([])
    const [search, setSearch] = useState('')
    const [ingredients, setIngredients] = useState([])

    const navigate = useNavigate()

    async function navigatePreviewDish(id){
        navigate(`/preview/${id}`)
    }

    async function searchDish(){
        const response = await api.get(`/dishes/showdishes/`, {
            params: {
              name: search,
              ingredients
            },
          })
        setDishData(response.data)

        return response
    }
    
    async function fecthDish(){
        const response = await api.get(`/dishes/showdishes`)
        setDishData(response.data)
        
        return response
    }
    
    useEffect(()=>{
        try{
            fecthDish()
        }catch(error){
            if(error.response){
                alert(error.response.data.error)
            }else{
                alert("Não foi possível carregar as informações do prato. Por favor, Recarregue a página")
            }
        }
    },[])

    useEffect(()=>{
        searchDish()
    },[search])
    return(
        <Container>
            <Header onChange={(event)=>{setSearch(event.target.value)}}/>

            <Content>
                <div>
                    <img src={sugar} alt={`imagem de doces caindo e colorido, amarelo, larajan, e verde, com framboesa, mirtilo`} />
                    <div>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </div>
                
                <Menu>
                    <h2>Pratos principais</h2>

                    <DishCarousel>
                        {
                            Array.isArray(dishData) && dishData.length > 0 && dishData.map((dish, index )=>{
                                console.log(dish)
                                return (
                                    <DishCard
                                    key={String(index)}
                                    name={dish.name}
                                    description={dish.description}
                                    price={dish.price}
                                    image= {dish.image_of_dish}
                                    onClick={()=>{navigatePreviewDish(dish.id)}}
                                    />
                                    )
                            })
                        }
                    </DishCarousel>
                    
                </Menu>

                <Menu>
                    <h2>Sobremesas</h2>

                    
                    <DishCarousel>
                        {
                            Array.isArray(dishData) && dishData.length > 0 && dishData.map((dish, index )=>{
                                return (
                                    <DishCard
                                    key={String(index)}
                                    name={dish.name}
                                    description={dish.description}
                                    price={dish.price}
                                    />
                                    )
                            })
                        }
                    </DishCarousel>
                </Menu>

                <Menu>
                    <h2>Bebidas</h2>

                    
                    <DishCarousel>
                        {
                            Array.isArray(dishData) && dishData.length > 0 && dishData.map((dish, index )=>{
                                return (
                                    <DishCard
                                    key={String(index)}
                                    name={dish.name}
                                    description={dish.description}
                                    price={dish.price}
                                    />
                                    )
                            })
                        }
                    </DishCarousel>
                </Menu>
            </Content>
            <Footer/>
        </Container>
    )
}


export {Home}