import {Container,Content, IngredientsDish} from './style'

import { Icons } from '../../image/Icons'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import exemplo from '/exemplo.svg'
function DishPreview(){
    const {CareLeft} = Icons()
    return(
        <Container>
            <Header/>
            <Content>
                <ButtonText title={'voltar'} icon={CareLeft}/>
                <img src={exemplo} alt={`imagem do prato ${'salada'}`} />

                <div>
                    <h1>Salada</h1>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

                    <div>
                        <IngredientsDish>Alface</IngredientsDish>
                        <IngredientsDish>Cebola</IngredientsDish>
                        <IngredientsDish>Pão</IngredientsDish>
                        <IngredientsDish>Pepino</IngredientsDish>
                        <IngredientsDish>Rabanete</IngredientsDish>
                        <IngredientsDish>Tomate</IngredientsDish>
                    </div>
                </div>

                <div>
                    <QuantyController>
                        <Minus/>
                        <span>1</span>
                        <Plus/>
                    </QuantyController>

                    <Button title={`pedir ∙ R$ ${25.00}`}/>
                </div>
            </Content>
            <Footer/>
        </Container>
    )
}


export {DishPreview}