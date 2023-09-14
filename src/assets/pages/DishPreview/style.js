import { styled }  from 'styled-components'


const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas:
    'header'
    'content'
    'footer'
    ;
    
    img{
        width: 26rem;
        height: 26rem;
        margin: auto;
    }
    
    @media (min-width: 769px){
        img{
            width: 39rem;
            height: 39rem;
            margin: 0 0 15.5rem 0;
        }
        main{
            width: 112rem;
            align-items: flex-start;

            > button{
                margin-top: 2.4rem;
            }

            > div{
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 4.8rem;
                height: 100%;

                > div{
                    align-items: flex-start;
                }

                div:nth-child(4){
                    > div:last-child button{
                        height: 4.8rem;
                    }
                }
            }
        }

    }
`
const Content= styled.main`
    grid-area:content;
    margin: 1.6rem auto;
    width: 32rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    
    > div{
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        
        > button{
            font-weight: 500;
            svg{
                width: 2.2rem;
                height: 2.2rem;
            }
        }

        > div{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.4rem;
            color: ${({theme})=> theme.COLORS.LIGHT_300};

            h1{
                font: ${({theme})=> theme.FONTS.POPPINS_500_MEDIUM};
            }
                
            p{
                font: ${({theme})=> theme.FONTS.POPPINS_300_REGULAR};
                text-align: start;
            }

            > div{
                display: flex;
                gap: 2.4rem;
                justify-content: center;
                flex-wrap: wrap;
            }

            div:last-child{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1.6rem;
                margin: 4.8rem 0 5.5rem;

                button{
                    height: 3.8rem;

                    span{
                        line-height: 100%;
                        font-size: 1.3rem;
                    }
                    svg{
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                }
            }
        }

    }
`

const IngredientsDish= styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    
    font: ${({theme})=> theme.FONTS.POPPINS_100_MEDIUM};
    color: ${({theme})=> theme.COLORS.LIGHT_100};
    background: ${({theme})=> theme.COLORS.DARK_1000};
    
    padding: 0.25rem 0.5rem;
    width: fit-content;
    height: 3.2rem;
    border-radius: .5rem;
`

const QuantyController= styled.div`
    width: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;

    > span{
        font: ${({theme})=> theme.FONTS.ROBOTO_BIGGER_BOLD};
        color: ${({theme})=> theme.COLORS.LIGHT_300};
    }

`

export {Container, Content, IngredientsDish, QuantyController}