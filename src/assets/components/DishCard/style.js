import { styled }  from 'styled-components'

const Container = styled.div`
    width: 21rem;
    height: 29.2rem;
    padding: 2.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    cursor: pointer;

    svg{
        cursor: pointer;
    }

    h2{
        font: ${({theme})=> theme.FONTS.POPPINS_100_MEDIUM};
        color: ${({theme})=> theme.COLORS.LIGHT_300};
    }
    
    > span{
        font: ${({theme})=> theme.FONTS.ROBOTO_SMALL_REGULAR};
        color: ${({theme})=> theme.COLORS.CAKE_200};
    }
    
    button{
        color: ${({theme})=> theme.COLORS.LIGHT_100};
    }
    
    img{
        width: 8.8rem;
        height: 8.8rem;
    }

    p{
        display: none;
    }

    .favorite, .config{
        position: relative;
        top: 0rem;
        left: 7rem;
        z-index: 1;
        
        svg:active{
            animation: animateDishIcons 0.3s ease-in-out forwards;
        }
    }
    .favorited{
        svg{
            fill: ${({theme}) => theme.COLORS.LIGHT_100 };
        }
    }
    
    div:last-child{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.6rem;
    }

    @media (min-width: 769px) {
        width: 31rem;
        height: 55rem;
        padding: 2.4rem;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        
        h2{
            font: ${({theme})=> theme.FONTS.POPPINS_300_BOLD};
            height: 5rem;
            text-align: center;
        }
        >div:nth-child(4){
           overflow: auto;
            p{
                display: block;
                text-align: center;
                font: ${({theme})=> theme.FONTS.ROBOTO_SMALLER_REGULAR};
                color: ${({theme})=> theme.COLORS.LIGHT_400};
            }
            &::-webkit-scrollbar{
                background: none;
                width: .5rem;
            }

            &::-webkit-scrollbar-thumb{
                background: ${({theme})=> theme.COLORS.CAKE_200};
                border-radius: 1rem;
            }
        }
                
        >span{
            font: ${({theme})=> theme.FONTS.ROBOTO_BIGGEST_REGULAR};
        }

        img{
            width: 17.6rem;
            height: 17.6rem;
        }

        div:last-child{
            flex-direction: row;
        }

        .favorite, .config{
            top: 1rem;
            left: 11rem;
            z-index: 1;
        }
    }
`

const QuantyController= styled.div`
    width: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;

    > span{
        font: ${({theme})=> theme.FONTS.ROBOTO_SMALL_REGULAR};
        color: ${({theme})=> theme.COLORS.LIGHT_300};
    }

    @media (min-width: 769px){}
`

export {Container, QuantyController}