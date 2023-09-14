import {Container, Content, Menu} from './style'

import { useState, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { DishCard } from '../../components/DishCard'
import { DishCarousel } from '../../components/DishCarousel'
import { Footer } from '../../components/Footer'

import sugar from '/sugar.svg'
import { api } from '../../../services/api'

import { MenuModal } from '../../components/MenuModal'

function Home(){
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [dishData, setDishData] = useState([])
    const [search, setSearch] = useState('')

    const[mainDish,setMainDish]=useState([])
    const[desserts,setDesserts]=useState([])
    const[drinks,setDrinks]=useState([])

    function navigatePreviewDish(id){
        navigate(`/preview/${id}`)
    }

    async function searchDish(){
        const response = await api.get(`/dishes/showdishes/`, {
            params: {
              name: search,
            },
        })
        setDishData(response.data)
        return
    }
    
    async function fecthDish(){
        const response = await api.get(`/dishes/showdishes`)
        setDishData(response.data)
        return 
    }
    
    function SetMenu(){
        setMainDish(dishData.filter(dish => dish.category == 'main_dishes'))
        setDesserts(dishData.filter(dish => dish.category == 'desserts'))
        setDrinks(dishData.filter(dish => dish.category == 'drinks'))
    }

    function OpenAndCloseModalMenu(){
        if(isModalOpen) return setIsModalOpen(false)
        setIsModalOpen(true)
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

    useEffect(() => {
        SetMenu()
    }, [dishData])

    useEffect(()=>{
        searchDish()
    },[search])

    return(
        <Container>
            <Header onClick={OpenAndCloseModalMenu} onChange={(event)=>{setSearch(event.target.value)}}/>
            {isModalOpen && <MenuModal onClick={OpenAndCloseModalMenu} isModalOpen={isModalOpen}/>}
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
                            Array.isArray(mainDish) && mainDish.length > 0 && mainDish.map((dish, index )=>{
                                                        
                                return (
                                    <DishCard
                                    key={String(index)}
                                    id={dish.id}
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
                            Array.isArray(desserts) && desserts.length > 0 && desserts.map((dish, index )=>{
                                
                                return (
                                    <DishCard
                                    key={String(index)}
                                    id={dish.id}
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
                    <h2>Bebidas</h2>
                    
                    <DishCarousel>
                        {
                            Array.isArray(drinks) && drinks.length > 0 && drinks.map((dish, index )=>{
                                return (
                                    <DishCard
                                    key={String(index)}
                                    id={dish.id}
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
            </Content>
            <Footer/>
        </Container>
    )
}


export {Home}