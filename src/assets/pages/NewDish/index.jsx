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
    const {UploadImage} = useAuth()
    const navigate = useNavigate()
    
    const [listIngredients, setListIngredients] = useState([])
    const [newIngredients, setNewIngredients] = useState('')

    const [imageOfDish, setImageOfDish] = useState('')
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
    
    async function handleImageOfDish(event){
        const file = event.target.files[0]
        setImageOfDish(file)
    }

    async function newDish(e) {
        e.preventDefault()
        const infoDishRequired = imageOfDish && name && category && price && description
        
        if(!infoDishRequired){
            switch (infoDishRequired) {

                case imageOfDish:
                    alert('Por favor, preecher o campo de imagem do prato!!')
                    break
                    
                case name:
                    alert('Por favor, preecher o campo de nome do prato!!')
                    break
                
                case category:
                    alert('Por favor, preecher o campo a categoria do prato!!')
                    break
                        
                case price:
                    alert('Por favor, preecher o campo o preço do prato!!')
                    break
                
                case description:
                    alert('Por favor, preecher o campo a descrição do prato!!')
                    break

                default:
                    alert('Error desconhecido, por favor reniciar a página')
                    break
            }

        }
        
        if(listIngredients.length === 0){
            alert('Por favor, preencha o campo de ingredientes do prato!!')
        }
      
        try {
            await api.post('/dishes', {
                ingredients: listIngredients,
                name,
                price,
                category,
                description
            })
            UploadImage({imageOfDish,name})
            
            handleBack()
            alert('Prato adicionado no cardápio com sucesso!!')
        } catch (error){
            if(error.response){
                alert(error.response.data.error)
            }else{
                alert('Não foi possivel se conectar')
          }    
    }
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
                            <select id='Icategory' onChange={e =>setCategory(e.target.value)} >
                                <option value='main_dishes' >Prato principal</option>
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

                    <Button title={'Adicionar'} onClick={(e)=> {newDish(e)}}/>
                </DishInfo>
            </Content>
        <Footer/>
        </Container>
    )
}


export {NewDish}