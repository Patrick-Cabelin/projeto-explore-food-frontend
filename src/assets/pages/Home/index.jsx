import {Container, Content, Menu} from './style'

import { Header } from '../../components/Header'
import { DishCard } from '../../components/DishCard'
import { Footer } from '../../components/Footer'

import sugar from '/sugar.svg'

function Home(){
    return(
        <Container>
            <Header/>

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

                    <div>
                        <DishCard title={'1'} description={'aiai'} price={35.99}/>
                        <DishCard title={'2'} description={'aiai'} price={35.99}/>
                        <DishCard title={'3'} description={'aiai'} price={35.99}/>
                        <DishCard title={'4'} description={'aiai'} price={35.99}/>
                        <DishCard title={'5'} description={'aiai'} price={35.99}/>
                        <DishCard title={'6'} description={'aiai'} price={35.99}/>
                        <DishCard title={'7'} description={'aiai'} price={35.99}/>
                    </div>
                    
                </Menu>

                <Menu>
                    <h2>Sobremesas</h2>

                    <div>
                        <DishCard title={'salada'} description={'aiai'} price={35.99}/>
                        <DishCard title={'salada'} description={'aiai'} price={35.99}/>
                        <DishCard title={'salada'} description={'aiai'} price={35.99}/>
                        <DishCard title={'salada'} description={'aiai'} price={35.99}/>
                        <DishCard title={'salada'} description={'aiai'} price={35.99}/>
                        <DishCard title={'salada'} description={'aiai'} price={35.99}/>
                        <DishCard title={'salada'} description={'aiai'} price={35.99}/>
                    </div>
                </Menu>

                <Menu>
                    <h2>Bebidas</h2>

                    <div>
                        <DishCard title={'salada'} description={'aiai'} price={35.99}/>
                        <DishCard title={'salada'} description={'aiai'} price={35.99}/>
                        <DishCard title={'salada'} description={'aiai'} price={35.99}/>
                        <DishCard title={'salada'} description={'aiai'} price={35.99}/>
                        <DishCard title={'salada'} description={'aiai'} price={35.99}/>
                        <DishCard title={'salada'} description={'aiai'} price={35.99}/>
                        <DishCard title={'salada'} description={'aiai'} price={35.99}/>
                    </div>
                </Menu>
            </Content>
            <Footer/>
        </Container>
    )
}


export {Home}