import {Container,Content, DishInfo} from './style'

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { DishIngredients } from '../../components/DishIngredients'
import { TextArea } from '../../components/TextArea'
import { Footer } from '../../components/Footer'

import { Icons } from '../../image/Icons'
import { api } from '../../../services/api'
import { useAuth } from '../../../hooks/auth'

function EditDish(){
    const {Upload, CareLeft} = Icons()

    const {UpdateDish, dishes} = useAuth()

    const navigate = useNavigate()
    const params = useParams()
    
    const [listIngredients, setListIngredients] = useState([])
    const [newIngredients, setNewIngredients] = useState('')
    
    const [imageOfDish, setImageOfDish] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [disabled,setDisabled]= useState(true)
    
    function handleBack(){
        navigate(-1)
    }

    async function handleImageOfDish(event){
        const file = event.target.files[0]
        setImageOfDish(file)
    }
    
    function handleAddIngredient(){
        setListIngredients(prevState=> [...prevState , newIngredients])
        setNewIngredients('')
    }
        
    function handleRemoveIngredient(deleted){
        setListIngredients(prevState=> prevState.filter(ingredient => ingredient !== deleted))
    }
    
    async function updateDish(){
        try{
            const dishUpdated = {
                name,
                price,
                category,
                description
            }
            const dishOld = dishes.filter(dish => dish.id == params.id)
            const newDish = Object.assign(dishOld[0], dishUpdated)
            console.log(12)
            alert('Prato editado com sucesso')
            handleBack()
            await UpdateDish({dish: newDish, dishFile: imageOfDish})

        }catch(error) {
            alert('algo deu errado, Desculpe, recarrege a página e tente de novo')
        }
    }

    async function deleteDish(){
        const confirmDelete= confirm('Quer mesmo deleter esse prato?')
        
        if(confirmDelete){
            alert('Prato lavado com sucesso!')
            handleBack()
            await api.delete(`/dishes/dish/${params.id}`)
            fecthDish()
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
        setCategory(response.data.category)
        setDescription(response.data.description)
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
    
    return(
        <Container>
            <Header/>

            <Content>
                <ButtonText title={'Voltar'} icon={CareLeft} onClick={handleBack}/>
                <h1>Editar prato</h1>
                <DishInfo>
                    <div>
                        <label htmlFor='IdishImage'>Imagem do prato
                            <div>
                                <Upload/>
                                Selecionar Imagem
                                <Input type='file' id='IdishImage'onChange={handleImageOfDish}/>
                            </div>
                        </label>
                        
                        <div className='info_box_wrapper'>
                            <label htmlFor='Iname'>Nome</label>
                            <Input type='text' id='Iname' placeholder={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>

                        <div className='info_box_wrapper'>
                            <label htmlFor='Icategory'>Categoria</label>
                            <select id='Icategory' onChange={e =>setCategory(e.target.value)}>
                                <option value='main_course' >Prato principal</option>
                                <option value='desserts'>Sobremesa</option>
                                <option value='drinks'>Bebidas</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div className='info_box_wrapper'>
                            <label htmlFor='Iingredients'>Ingredientes</label>
                            <div id='Iingredients'>
                                {
                                    Array.isArray(listIngredients) && listIngredients.length > 0 && listIngredients.map((ingredient, index) =>(
                                        <DishIngredients
                                            key={String(index)}
                                            value={ingredient}
                                            onClick={() => handleRemoveIngredient(ingredient)}
                                        />
                                    ))
                                }
                            <DishIngredients
                                    isNew
                                    placeholder='Novo Ingrediente'
                                    value={newIngredients}
                                    onChange={e => setNewIngredients(e.target.value)}
                                    onClick={handleAddIngredient}
                                />
                            </div>
                        </div>

                        <div className='info_box_wrapper'>
                            <label htmlFor='Iprice'>Preço</label>
                            <Input type='number' placeholder={price} step="0.01" onChange={(e)=>setPrice(e.target.value)}/>
                        </div>

                    </div>

                    <div className='info_box_wrapper'>
                        <label htmlFor='Idescription'>Descrição</label>
                        <TextArea id='Idescription' placeholder={description} onChange={(e)=>setDescription(e.target.value)}/>
                    </div>


                    <div>
                        <Button title={'Excluir Prato'} onClick={deleteDish}/>
                        <Button title={'Adicionar'} disabled={disabled} onClick={updateDish}/>
                    </div>

                </DishInfo>
            </Content>
        <Footer/>
        </Container>
    )
}


export {EditDish}