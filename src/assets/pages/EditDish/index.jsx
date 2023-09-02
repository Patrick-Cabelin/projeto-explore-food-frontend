import {Container,Content, DishInfo} from './style'

import { Icons } from '../../image/Icons'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { DishIngredients } from '../../components/DishIngredients'
import { TextArea } from '../../components/TextArea'
import { Footer } from '../../components/Footer'
import { useState } from 'react'

function EditDish(){
        const {Upload, CareLeft} = Icons()
        const [listIngredients, setListIngredients] = useState(['camarão',2,3,4,5,6,7,8])
    return(
        <Container>
            <Header/>

            <Content>
                <ButtonText title={'Voltar'} icon={CareLeft}/>
                <h1>Editar prato</h1>
                <DishInfo>
                    <div>
                        <label htmlFor='IdishImage'>Imagem do prato
                            <div>
                                <Upload/>
                                Selecionar Imagem 
                                <Input type='file' id='IdishImage'/>
                            </div>
                        </label>
                        
                        <div className='info_box_wrapper'>
                            <label htmlFor='Iname'>Nome</label>
                            <Input type='text' id='Iname' placeholder={'Ex.: Salada Ceasar'} />
                        </div>

                        <div className='info_box_wrapper'>
                            <label htmlFor='Icategory'>Categoria</label>
                            <select id='Icategory'>
                                <option value='opcao1'>Opção 1</option>
                                <option value='opcao2'>Opção 2</option>
                                <option value='opcao3'>Opção 3</option>
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
                                            onClick={()=>{}}
                                        />
                                    ))
                                }
                                <DishIngredients
                                    isNew
                                    placeholder='Novo link'
                                    value={''}
                                    onChange={e => setListIngredients(e.target.value)}
                                    onClick={()=>{}}
                                />
                            </div>
                        </div>

                        <div className='info_box_wrapper'>
                            <label htmlFor='Iprice'>Preço</label>
                            <Input type='number' placeholder={'R$ 99,99'} />
                        </div>

                    </div>

                    <div className='info_box_wrapper'>
                        <label htmlFor='Idescription'>Descrição</label>
                        <TextArea id='Idescription' placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'/>
                    </div>

                    <div>
                        <Button title={'Excluir Prato'} />
                        <Button title={'Adicionar'} />
                    </div>

                </DishInfo>
            </Content>
        <Footer/>
        </Container>
    )
}


export {EditDish}