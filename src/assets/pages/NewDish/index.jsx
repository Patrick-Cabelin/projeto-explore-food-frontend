import {Container,Content, DishInfo} from './style'
import { useState } from 'react'

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
import { useNavigate } from 'react-router-dom'

function NewDish(){
    const {Upload, CareLeft} = Icons()
    const {UpdateDish} = useAuth()
    const navigate = useNavigate()
    
    const [listIngredients, setListIngredients] = useState([])
    const [newIngredients, setNewIngredients] = useState('')

    const [imageOfDish, setImageOfDish] = useState(null)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    function handleBack(){
        navigate(-1)
    }


    function handleAddIngredient(){
        setListIngredients(prevState=> [...prevState , newIngredients])
        setNewIngredients('')
    }


    function handleRemoveIngredient(deleted){
        setListIngredients(prevState=> prevState.filter(ingredient => ingredient !== deleted))
    }

    function handleImageOfDish(event){
        const file = event.target.files[0]
        setImageOfDish(file)
    }
    async function newDish(){
        console.log(imageOfDish)
        await api.post('/dishes',{
            ingredients: listIngredients,
            name,
            imageOfDish,
            price,
            category,
            description}
        )

        alert('Prato adicionado no cardapio com sucesso!!')
    }
    return(
        <Container>
            <Header/>

            <Content>
                <ButtonText title={'Voltar'} icon={CareLeft} onClick={handleBack}/>
                <h1>Novo prato</h1>
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
                            <Input type='text' id='Iname' placeholder={'Ex.: Salada Ceasar'} onChange={(e)=>setName(e.target.value)}/>
                        </div>

                        <div className='info_box_wrapper'>
                            <label htmlFor='Icategory'>Categoria</label>
                            <select id='Icategory' onChange={e =>setCategory(e.target.value)}>
                                <option value='main_course'>Prato principal</option>
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
                                    listIngredients && listIngredients.map((ingredient, index) =>(
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
                            <Input type='number' placeholder={'R$ 99,99'} step="0.01" onChange={(e)=>setPrice(e.target.value)}/>
                        </div>

                    </div>

                    <div className='info_box_wrapper'>
                        <label htmlFor='Idescription'>Descrição</label>
                        <TextArea id='Idescription' placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'onChange={(e)=>setDescription(e.target.value)}/>
                    </div>

                    <Button title={'Adicionar'} onClick={newDish}/>
                </DishInfo>
            </Content>
        <Footer/>
        </Container>
    )
}


export {NewDish}