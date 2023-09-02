import {Container,Content, DishInfo} from './style'
import { Icons } from '../../image/Icons'

import { useState } from 'react'


import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { DishIngredients } from '../../components/DishIngredients'
import { TextArea } from '../../components/TextArea'
import { Footer } from '../../components/Footer'

function NewDish(){
        const {Upload, CareLeft} = Icons()
        const [listIngredients, setListIngredients] = useState([1,2,3,4,5,6,7,8])

    return(
        <Container>
            <Header/>

            <Content>
                <ButtonText title={'Voltar'} icon={CareLeft}/>
                <h1>Novo prato</h1>
                <DishInfo>
                    <div>
                        <label htmlFor='IdishImage'>Imagem do prato
                            <div>
                                <Upload/>
                                Selecionar Imagem
                                <Input type='file' id='IdishImage'/>
                            </div>
                        </label>

                        <label htmlFor='Iname'>Nome</label>
                        <Input type='text' id='Iname' placeholder={'Ex.: Salada Ceasar'} />


                        <label htmlFor='Icategory'>Categoria</label>
                        <select id='Icategory'>
                            <option value='opcao1'>Opção 1</option>
                            <option value='opcao2'>Opção 2</option>
                            <option value='opcao3'>Opção 3</option>
                        </select>
                    </div>

                    <div>
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

                        <label htmlFor='Iprice'>Preço</label>
                        <Input type='number' placeholder={'R$ 99,99'} />

                    </div>

                    <div>
                        <label htmlFor='Idescription'>Descrição</label>
                        <TextArea id='Idescription' placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'/>
                    </div>

                    <Button title={'Adicionar'} />
                </DishInfo>
            </Content>
        <Footer/>
        </Container>
    )
}


export {NewDish}